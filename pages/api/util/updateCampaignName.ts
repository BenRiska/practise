// This file gets a specific campaign
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { campaign_id, name }: any = req.body;

  const campaign = await prisma.campaign.update({
    where: {
      id: campaign_id
    },
    data: {
      name
    },
    include: {
      _count: {
        select: {
          companyCampaigns: true
        }
      }
    }
  });

  console.log(campaign)

  if (!campaign) return;

  res.json(campaign);
};