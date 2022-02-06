// This file gets every campaign
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";






export default async (req: NextApiRequest, res: NextApiResponse) => {

  let campaigns: any = await prisma.campaign.findMany({
    where: {
      campaignCost: {not: null}
    },
    select: {
      campaignCost: true,
      name: true,
      companyCampaigns: {
        where: {
          company: {
            subscriptionStatus: {not: null}
          }
        }
      }
    }
  })

  campaigns = campaigns.map((campaign: any) => ({...campaign, converted: campaign.companyCampaigns.length}))

  let data: any = campaigns.sort((a: any,b: any) => (a.converted < b.converted) ? 1 : ((b.converted < a.converted) ? -1 : 0)).slice(0,15)

  data = data.map((item: any) => ({country: item.name, value: item.converted}))

 
  res.json(data);
};