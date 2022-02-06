// This file gets every campaign
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";






export default async (req: NextApiRequest, res: NextApiResponse) => {


  let companies: any = await prisma.company.findMany({
    where: {
      subscriptionStatus: {
        not: null
      }
    },
    select: {
      industries: true
    }
  })

  let sicCodes = companies.map(({industries}: any) => industries).flat() 
 
  var occurrences = sicCodes.reduce(function(obj: any, item: any) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
  


  const codeArray = []

  for (const [key, value] of Object.entries(occurrences)){
    codeArray.push({country: key, value: value})
  }

  let data: any = codeArray.sort((a: any,b: any) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0)).slice(0,20)

  console.log(data)

 
  res.json(data);
};