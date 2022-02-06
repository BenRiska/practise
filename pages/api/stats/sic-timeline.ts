// This file gets every campaign
import { compareByDepth } from "framer-motion/types/render/utils/compare-by-depth";
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";


const getMonth = (month: any) => {
  switch (month) {
    case 1:
      return "February"
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
      return "August"
    case 8:
      return "September"
    case 9:
      return "October"
    case 10:
      return "November"
    case 11:
      return "December"
    case 0:
      return "January"
  }
}



export default async (req: NextApiRequest, res: NextApiResponse) => {


  let companies: any = await prisma.company.findMany({
    select: {
      industries: true,
      createdAt: true
    },
    orderBy: {
      createdAt: "asc"
    }
  })

  let parsedCompanies: any = {}

  companies.forEach(({createdAt, industries}: any) => {
    const month = getMonth(moment(createdAt).get("month"))
    const year = moment(createdAt).get("year")
    const str = `${year} ${month}`
    industries.forEach((ind: any) => {
      if(!parsedCompanies[str]){
        parsedCompanies[str] = {}
      }
      if(parsedCompanies[str][ind]){
      parsedCompanies[str][ind] = parsedCompanies[str][ind] + 1
      } else{
        parsedCompanies[str][ind] = 1
      }

    })
  })

  for (const [key, value] of Object.entries(parsedCompanies)){
    let codeArray: any = []
    let newObject: any = {}
    for (const [key1, value1] of Object.entries(value)){
      codeArray.push({country: key1, value: value1})
      codeArray = codeArray.sort((a: any,b: any) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0)).slice(0,10)
    }
    codeArray.forEach((code: any) => {
      newObject[code.country] = code.value 
    })
    parsedCompanies[key] = newObject
  }

  console.log(parsedCompanies)

 
  res.json(parsedCompanies);
};