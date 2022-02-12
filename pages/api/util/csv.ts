// This file takes a list of director id's and returns a csv with their info
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { campaign_id }: any = req.body;

  let companies = await prisma.campaign.findFirst({
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
    const replacer = (key, value) => (value === null ? "" : value);
    const csv = directorList.map(row =>
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