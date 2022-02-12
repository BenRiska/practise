// This file gets every campaign
import { getMonthWeek } from "@amcharts/amcharts5/.internal/core/util/Utils";
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";
import getMonth from "../../../utils/getMonth";


export default async (req: NextApiRequest, res: NextApiResponse) => {

  let month = moment().subtract("1", "year")
  let today = moment()
  const dates = []

  while (moment(month).isBefore(today)) {
    const nextMonth = moment(month).add("1", "month")
    const companiesFormed = await prisma.company.count({
      where: {
        createdAt: {
          gt: month.toISOString(),
          lt: nextMonth.toISOString()
        }
      }
    })
    const dataObject = { year: `${getMonth(moment(month).get("month"))} ${moment(month).get("year")}`, value: companiesFormed }
    dates.push(dataObject)
    month = nextMonth
  }

  res.json(dates);
};