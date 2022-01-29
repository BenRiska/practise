// This file gets every campaign
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../services/prisma";

const getServiceName = (name: any) => {
  switch(name) {
    case "COMPANIES_HOUSE":
      return "Companies House"
    case "LEMLIST": 
      return "Lemlist"
    case "PHANTOMBUSTER":
      return "Phantom Buster"
    case "DUX_SOUP":
      return "Dux Soup"
    case "STANNP":
      return "Stannp"
    default:
      return name
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  

  const services = await prisma.services.findMany({
    include: {
      pings: {
        where: {
          createdAt: { gt: moment().subtract(7, "days").toDate() },
          status: "DOWN"
        }
      }
    }
  });

  let newData: any = [];

  services.forEach(service => {
    service.pings.forEach(ping => {
      let item = {
        category: getServiceName(service.service),
        start: new Date(ping.createdAt).getTime(),
        end:  new Date(moment(ping.createdAt).add("10", "minutes").toISOString()).getTime(),
        task: ping.error || "No Information Available"
      }
      newData.push(item)
    })
  }) 
 
  res.json(newData);
};