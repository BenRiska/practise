// This file gets every campaign
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  let campaigns: any = await prisma.campaign.findMany({
    where: {
      campaignCost: { not: null }
    },
    select: {
      campaignCost: true,
      name: true,
      _count: {
        select: {
          companyCampaigns: true
        }
      }
    }
  })

  campaigns = campaigns.map((campaign: any) => ({ ...campaign, campaignCost: campaign.campaignCost * campaign._count?.companyCampaigns }))

  let data: any = campaigns.sort((a: any, b: any) => (a.campaignCost < b.campaignCost) ? 1 : ((b.campaignCost < a.campaignCost) ? -1 : 0)).slice(0, 20)

  data = data.map((item: any) => ({ country: item.name, value: item.campaignCost }))


  res.json(data);
};