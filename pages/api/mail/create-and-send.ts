// This file gets every campaign
import axios from "axios";
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import throat from "throat";
import prisma from "../../../services/prisma";
import s3 from "../../../services/s3";

const TEST_POSTCODE = 11111;

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { filters, campaign } = req.body

  // get leads list

  const leadsList = await prisma.company.findMany({
    where: {
      ...(filters.required.email ? { directors: { some: { contactEmail: { not: null } } } } : {}),
      ...(filters.required.linkedin ? { directors: { some: { linkedinId: { not: null } } } } : {}),
      ...(filters.required.address ? { isAddressUnique: { equals: true } } : {}),
      ...(filters.classifications.length > 0 ? { industries: { hasSome: filters.classifications } } : {}),
      ...(filters.localities.length > 0 ? { registeredAddress: { locality: { in: filters.localities } } } : {}),
      ...(filters.companyAge.min > 0 && filters.companyAge.max > filters.companyAge.min ? { createdAt: { lt: moment().subtract(filters.companyAge.min, "months").toISOString(), gt: moment().subtract(filters.companyAge.max, "months").toISOString() } } : {}),
      ...(filters.ageRange.min > 16 && filters.ageRange.max > filters.ageRange.min ? { directors: { some: { dateOfBirth: { lt: moment().subtract(filters.ageRange.min, "years").toISOString(), gt: moment().subtract(filters.ageRange.max, "years").toISOString() } } } } : {})
    },
    take: filters.take,
    select: {
      companyName: true,
      createdAt: true,
      registeredAddress: true,
      industries: true,
      directors: {
        select: {
          firstName: true,
          lastName: true,
          dateOfBirth: true
        }
      }
    }
  })

  console.log(leadsList[0])

  // loop over and send mail, then create companyCampaign

  await Promise.all(leadsList.map(throat(10, lead => sendMail(lead, campaign))))

  res.json("done");
};

const sendMail = async (lead: any, campaign: any) => {
  console.log({ lead, campaign })
  const legalName =
    lead.directors[0].firstName +
    " " +
    capitalize(lead.directors[0].lastName);

  await axios.post(`${process.env.PDF_URL}/api/mail`, {
    letter_template: campaign.template,
    company_number: lead.companyNumber,
    firstName: lead.directors[0].firstName,
    legalName,
    companyName: lead.companyName,
    address: [
      lead.registeredAddress.addressLine1 || "",
      lead.registeredAddress.addressLine2 || ""
    ],
    city: lead.registeredAddress.locality,
    postCode:
      process.env.NODE_ENV !== "production"
        ? TEST_POSTCODE
        : lead.registeredAddress.postalCode,
    country: lead.registeredAddress.country
  });

  console.log("hit")

  const url = await s3.getSignedUrl("getObject", {
    Bucket: process.env.SPACES_BUCKET,
    Key: `${lead.companyNumber}.pdf`,
    Expires: 3600
  });

  console.log("hit again", url)

  await axios.post(
    `https://dash.stannp.com/api/v1/letters/create?api_key=${"c737eac834800f1ba034bb35"}`,
    {
      recipient: {
        company: lead.companyName,
        firstname: lead.directors[0].firstName,
        lastname: lead.directors[0].lastName,
        address1: lead.registeredAddress.addressLine1 || "",
        address2: lead.registeredAddress.addressLine2 || "",
        town: lead.registeredAddress.locality,
        postcode: lead.registeredAddress.postalCode,
        country: lead.registeredAddress.country
      },
      file: url,
      tags: campaign.name
    })

  console.log("hit once more")
  await prisma.companyCampaign.create({
    data: {
      status: "SENT",
      companyId: lead.id,
      campaignId: campaign.id
    }
  });

  return
}

function capitalize(str: any) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}


