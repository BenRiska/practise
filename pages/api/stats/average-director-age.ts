// This file gets every campaign
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

const sixteenYearsAgo = moment().subtract("16", "years").toISOString()
const thirtyYearsAgo = moment().subtract("30", "years").toISOString()
const fortyYearsAgo = moment().subtract("40", "years").toISOString()
const fiftyYearsAgo = moment().subtract("50", "years").toISOString()
const sixtyYearsAgo = moment().subtract("60", "years").toISOString()
const oneHundredYearsAgo = moment().subtract("100", "years").toISOString()


const dates = [{ before: sixteenYearsAgo, after: thirtyYearsAgo, key: "16-30" },
{ before: thirtyYearsAgo, after: fortyYearsAgo, key: "30-40" },
{ before: fortyYearsAgo, after: fiftyYearsAgo, key: "40-50" },
{ before: fiftyYearsAgo, after: sixtyYearsAgo, key: "50-60" },
{ before: sixtyYearsAgo, after: oneHundredYearsAgo, key: "60+" },]

export default async (req: NextApiRequest, res: NextApiResponse) => {

  let data: any = {
    "16-30": {
      value: 0,
      subData: [
        { category: "A Grade", value: 0 },
        { category: "B Grade", value: 0 },
        { category: "Non-targetable", value: 0 }
      ]
    }, "30-40": {
      value: 0,
      subData: [
        { category: "A Grade", value: 0 },
        { category: "B Grade", value: 0 },
        { category: "Non-targetable", value: 0 }
      ]
    }, "40-50": {
      value: 0,
      subData: [
        { category: "A Grade", value: 0 },
        { category: "B Grade", value: 0 },
        { category: "Non-targetable", value: 0 }
      ]
    },
    "50-60": {
      value: 0,
      subData: [
        { category: "A Grade", value: 0 },
        { category: "B Grade", value: 0 },
        { category: "Non-targetable", value: 0 }
      ]
    },
    "60+": {
      value: 0,
      subData: [
        { category: "A Grade", value: 0 },
        { category: "B Grade", value: 0 },
        { category: "Non-targetable", value: 0 }
      ]
    }
  }


  for (const date of dates) {
    const aGradeDirectors = await prisma.director.count({
      where: {
        dateOfBirth: {
          gt: date.after,
          lt: date.before
        },
        companies: {
          some: {
            grade: "A"
          }
        }
      }
    })

    const bGradeDirectors = await prisma.director.count({
      where: {
        dateOfBirth: {
          gt: date.after,
          lt: date.before
        },
        companies: {
          some: {
            grade: "B"
          }
        }
      }
    })

    const screenGradeDirectors = await prisma.director.count({
      where: {
        dateOfBirth: {
          gt: date.after,
          lt: date.before
        },
        companies: {
          some: {
            grade: "SCREEN"
          }
        }
      }
    })

    const totalCount = aGradeDirectors + bGradeDirectors + screenGradeDirectors;

    data[date.key].value = totalCount
    data[date.key].subData[0].value = aGradeDirectors;
    data[date.key].subData[1].value = bGradeDirectors;
    data[date.key].subData[2].value = screenGradeDirectors;

  }

  let newData = [
    {
      category: "16-30",
      value: data["16-30"].value,
      subData: data["16-30"].subData
    },
    {
      category: "30-40",
      value: data["30-40"].value,
      subData: data["30-40"].subData
    },
    {
      category: "40-50",
      value: data["40-50"].value,
      subData: data["40-50"].subData
    },
    {
      category: "50-60",
      value: data["50-60"].value,
      subData: data["50-60"].subData
    },
    {
      category: "60+",
      value: data["60+"].value,
      subData: data["60+"].subData
    }
  ]

  res.json(newData);
};