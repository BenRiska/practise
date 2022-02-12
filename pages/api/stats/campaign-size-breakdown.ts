// This file gets every campaign
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  let campaigns = await prisma.campaign.findMany({
    select: {
      name: true,
      _count: {
        select: {
          companyCampaigns: true
        }
      }
    }
  })

  let data: any = campaigns.sort((a: any, b: any) => (a._count.companyCampaigns < b._count.companyCampaigns) ? 1 : ((b._count.companyCampaigns < a._count.companyCampaigns) ? -1 : 0)).slice(0, 20)


  data = data.map((item: any) => ({ country: item.name, value: item._count?.companyCampaigns }))


  res.json(data);
};