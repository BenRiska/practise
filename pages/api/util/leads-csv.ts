// This file takes a list of director id's and returns a csv with their info
import { Address, Campaign, Company, CompanyCampaign, Director } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { leads }: any = req.body;

  console.log({ leads })

  const companies = await prisma.company.findMany({
    where: {
      id: { in: leads }
    }
  })

  if (companies?.length > 0) {
    const fields = Object.keys(companies[0]);
    const replacer = (key: any, value: any) => (value === null ? "" : value);
    const csv = companies.map((row: any) =>
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