// This file gets a specific campaign
import { Campaign } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { campaign_name }: { campaign_name: string; } = req.body;

  const campaign: (Campaign & { _count: { companyCampaigns: number; } | null; }) | null = await prisma.campaign.findFirst({
    where: {
      name: campaign_name
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