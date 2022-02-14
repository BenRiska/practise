// This file takes a list of director id's and returns a csv with their info
import { Address, Campaign, Company, CompanyCampaign, Director } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { campaign_id }: { campaign_id: number } = req.body;

  let companies: (Campaign & { companyCampaigns: (CompanyCampaign & { company: (Company & { registeredAddress: Address | null; directors: Director[]; }) | null; })[]; }) | null = await prisma.campaign.findFirst({
    where: { id: campaign_id },
    include: {
      companyCampaigns: {
        include: {
          company: {
            include: {
              registeredAddress: true,
              directors: true
            }
          }
        }
      }
    }
  })

  let directorList: any = companies?.companyCampaigns?.map(
    ({ company }: any) => ({
      firstName: company?.directors[0]?.firstName,
      lastName: company?.directors[0]?.lastName,
      contactEmail: company?.directors[0]?.contactEmail,
      dateOfBirth: company?.directors[0]?.dateOfBirth,
      linkedinId: company?.directors[0]?.linkedinId,
      createdAt: company?.directors[0]?.createdAt,
      companyName: company?.companyName,
      companyNumber: company?.companyNumber,
      ...(company?.registeredAddress || {})
    })
  );

  if (directorList?.length > 0) {
    const fields = Object.keys(directorList[0]);
    const replacer = (key: any, value: any) => (value === null ? "" : value);
    const csv = directorList.map((row: any) =>
      fields
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(fields.join(","));
    res.setHeader("Content-disposition", "attachment; filename=directors.csv");
    res.setHeader("Content-Type", "text/csv");
    res.status(200).send(csv.join("\r\n"));
  } else {
    res.end();
  }
};