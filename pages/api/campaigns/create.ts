// This file gets every campaign
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { campaignState } = req.body

  const campaign = await prisma.campaign.create({
    data: {
      name: campaignState.name,
      type: campaignState.type,
      template: campaignState.template,
      status: campaignState.type === "MAIL" ? "COMPLETE" : "ONGOING",
      duration: campaignState.type === "MAIL" ? "IMMEDIATE" : "ONGOING",
      campaignCost: null,
      ...(campaignState.type === "LEMLIST" ? {
        lemlistName: campaignState.lemlistName,
        lemlistId: campaignState.lemlistId
      } : {})
    }
  })


  console.log(campaignState)

  res.json("done");
};