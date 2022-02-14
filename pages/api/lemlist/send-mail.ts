// This file takes a list of directors and sends mail to them
import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";
import s3 from "../../../services/s3";
// import setServiceStatus from "../util/setServiceStatus";

const TEST_POSTCODE = 11111;

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, companyName, campaignId } = req.query;

  const company = await prisma.company.findUnique({
    where: { companyName: companyName as unknown as string },
    include: {
      directors: true,
      registeredAddress: true
    }
  });

  const reformattedCampaignId = { campaignId: campaignId as unknown as string };

  const campaign = await prisma.campaign.findUnique({
    where: {
      id: parseInt(reformattedCampaignId.campaignId)
    }
  });

  const director = company.directors.filter(
    director =>
      director.firstName === firstName && director.lastName === lastName
  )[0];

  const legalName = director.firstName + " " + capitalize(director.lastName);

  await Axios.post(`${process.env.PDF_URL}/api/mail`, {
    letter_template: campaign.template,
    company_number: company.companyNumber,
    firstName: director.firstName,
    legalName,
    companyName: company.companyName,
    address: [
      company.registeredAddress.addressLine1 || "",
      company.registeredAddress.addressLine2 || ""
    ],

    city: company.registeredAddress.locality,
    postCode:
      process.env.NODE_ENV !== "production"
        ? TEST_POSTCODE
        : company.registeredAddress.postalCode,

    country: company.registeredAddress.country
  });

  const url = await s3.getSignedUrl("getObject", {
    Bucket: process.env.SPACES_BUCKET,
    Key: `${company.companyNumber}.pdf`,
    Expires: 3600
  });

  try {
    await Axios.post(
      `https://dash.stannp.com/api/v1/letters/create?api_key=${"c737eac834800f1ba034bb35"}`,
      {
        recipient: {
          company: company.companyName,
          firstname: company.directors[0].firstName,
          lastname: company.directors[0].lastName,
          address1: company.registeredAddress.addressLine1 || "",
          address2: company.registeredAddress.addressLine2 || "",
          town: company.registeredAddress.locality,
          postcode: company.registeredAddress.postalCode,
          country: company.registeredAddress.country
        },
        file: url,
        tags: campaign.name
      }
    );
    // setServiceStatus("STANNP", "UP");
  } catch (e) {
    // setServiceStatus("STANNP", "DOWN");
  }

  res.end();
};