// This file gets every campaign
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const campaigns = await prisma.campaign.findMany({include: {companyCampaigns: true}, orderBy: {createdAt: "desc"}})
 
  res.json(campaigns);
};