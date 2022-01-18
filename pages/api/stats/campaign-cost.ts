// This file gets every campaign
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  let campaigns: any = await prisma.campaign.findMany({select: {name: true, type: true, campaignCost: true,_count: {select: {companyCampaigns: true}}}})

  let data = {
    name: "Root",
    children: [
      {
        name: "Mail",
        children: []
      },
      {
        name: "Lemlist",
        children: []
      }
    ]
  };


  campaigns.forEach((campaign: any) => {
    let cost = +(campaign.campaignCost * campaign._count.companyCampaigns).toFixed(2)

    const res = {name: campaign.name, value: cost}

    if(campaign.type === "DIRECT_MAIL"){
      data.children[0].children.push(res)
    } else if (campaign.type === "LEMLIST"){
      data.children[1].children.push(res)
    }
  })
 
  res.json(data);
};