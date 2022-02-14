// This file gets a specific campaign
import { Campaign } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { campaign_id, name }: { campaign_id: number; name: string; } = req.body;

  const campaign: Campaign = await prisma.campaign.update({
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

  if (!campaign) return;

  res.json(campaign);
};