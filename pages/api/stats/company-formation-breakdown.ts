// This file gets every campaign
import { getMonthWeek } from "@amcharts/amcharts5/.internal/core/util/Utils";
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

const getMonth = (month: any) => {
  switch (month) {
    case 1:
      return "Feb"
    case 2:
      return "March"
    case 3:
      return "April"
    case 4:
      return "May"
    case 5:
      return "June"
    case 6:
       return "July"
    case 7:
      return "Aug"
    case 8:
      return "Sep"
    case 9:
      return "Oct"
    case 10:
      return "Nov"
    case 11:
      return "Dec"
    case 0:
      return "Jan"
  }
}


export default async (req: NextApiRequest, res: NextApiResponse) => {

  let month = moment().subtract("1", "year")
  let today = moment()
  const dates = []
  
  while(moment(month).isBefore(today)){
    const nextMonth = moment(month).add("1", "month")
    const companiesFormed = await prisma.company.count({
      where: {
        createdAt: {
          gt: month.toISOString(),
          lt: nextMonth.toISOString()
        }
      }
    })
    const dataObject = {year: `${getMonth(moment(month).get("month"))} ${moment(month).get("year")}`, value: companiesFormed}
    dates.push(dataObject)
    month = nextMonth
  }

  console.log(dates)

  // Data
var data = [{
  year: "2015",
  value: 600000
}, {
  year: "2016",
  value: 900000
}, {
  year: "2017",
  value: 180000
}, {
  year: "2018",
  value: 600000
}, {
  year: "2019",
  value: 350000
}, {
  year: "2020",
  value: 600000
}, {
  year: "2021",
  value: 670000
}];

 
  res.json(dates);
};