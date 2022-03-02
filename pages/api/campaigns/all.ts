// This file gets every campaign
import { Campaign, CompanyCampaign } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { page } = req.body

  const skip: number = parseInt(page) * 30;

  const campaigns: (Campaign & { companyCampaigns: CompanyCampaign[]; })[] = await prisma.campaign.findMany({ include: { companyCampaigns: true }, orderBy: { createdAt: "desc" }, skip, take: 30 })

  res.json(campaigns);
};