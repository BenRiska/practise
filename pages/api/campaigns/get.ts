// This file gets a specific campaign
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { campaign_name }: any = req.body;

  console.log("hit")

  const campaign = await prisma.campaign.findFirst({
    where: {
      name: campaign_name
    },
    include: {
      companyCampaigns: {
        include: {
          company: {
            include: {
              directors: true
            }
          }
        }
      }
    }
  });

  if (!campaign) return;

  res.json(campaign);
};