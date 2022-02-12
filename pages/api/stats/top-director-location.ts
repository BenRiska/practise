// This file gets every campaign
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  let addresses: any = await prisma.address.findMany({
    select: {
      locality: true
    }
  })

  let sicCodes = addresses.map(({ locality }: any) => locality).flat()

  var occurrences = sicCodes.reduce(function (obj: any, item: any) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});

  const codeArray = []

  for (const [key, value] of Object.entries(occurrences)) {
    codeArray.push({ country: key, value: value })
  }

  const data = codeArray.sort((a: any, b: any) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0)).slice(0, 20)

  res.json(data);
};