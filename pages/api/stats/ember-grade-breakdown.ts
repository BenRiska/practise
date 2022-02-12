// This file gets every campaign
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const aGradeCompanies: any = await prisma.company.count({
    where: {
      grade: "A"
    }
  })

  const bGradeCompanies: any = await prisma.company.count({
    where: {
      grade: "B"
    }
  })

  const screenGradeCompanies: any = await prisma.company.count({
    where: {
      grade: "SCREEN"
    }
  })

  let data = [{
    category: "A Grade",
    value: aGradeCompanies
  }, {
    category: "B Grade",
    value: bGradeCompanies
  }, {
    category: "Non-Targetable",
    value: screenGradeCompanies
  }]

  res.json(data);
};