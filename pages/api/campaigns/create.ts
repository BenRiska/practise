// This file gets every campaign
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { campaignState } = req.body


  const { name, type, template, lemlistId, lemlistName } = campaignState

  const { ageRange, localities, companyAge, classifications, required } = campaignState.leadFilters

  const campaign = await prisma.campaign.create({
    data: {
      name: name,
      type,
      template: template?.toString(),
      status: type === "DIRECT_MAIL" ? "COMPLETE" : "ONGOING",
      duration: type === "DIRECT_MAIL" ? "IMMEDIATE" : "ONGOING",
      campaignCost: null,
      ...(type === "LEMLIST" ? {
        lemlistName: lemlistName,
        lemlistId: lemlistId
      } : {})
    },
    select: {
      id: true,
      ...(type === "LEMLIST" ? {
        lemlistName: true,
        lemlistId: true
      } : {}),
      ...(type === "DIRECT_MAIL" ? {
        template: true
      } : {})
    }
  })

  await prisma.campaignFilter.create({
    data: {
      directorAgeMax: ageRange.max ? parseInt(ageRange.max) : null,
      directorAgeMin: ageRange.max ? parseInt(ageRange.min) : null,
      companyIncMax: companyAge.max ? parseInt(companyAge.max) : null,
      companyIncMin: companyAge.min ? parseInt(companyAge.min) : null,
      emailRequired: required.email,
      linkedinRequired: required.linkedin,
      addressRequired: required.address,
      campaignId: campaign.id,
      localities,
      classifications
    }
  })


  if (type === "DIRECT_MAIL") {
    await axios.post(`${process.env.API_URL}/mail/create-and-send`, {
      filters: { ...campaignState.leadFilters, take: 1 },
      campaign,
      template
    });
  }

  res.json("done");
};