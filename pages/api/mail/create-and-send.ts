// This file gets every campaign
import axios from "axios";
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { filters, campaign, template } = req.body

  console.log({ filters, campaign, template })
  console.log(moment().subtract(filters.companyAge.min, "months").toISOString(), moment().subtract(filters.companyAge.max, "months").toISOString())
  console.log(filters.companyAge.min > 0 && filters.companyAge.max > filters.companyAge.min)

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

  res.json("done");
};