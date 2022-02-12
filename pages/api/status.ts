// This file gets every campaign
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../services/prisma";
import getServiceName from "../../utils/getServiceName";


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

  let data: any = [];

  services.forEach(service => {
    service.pings.forEach(ping => {
      let item = {
        category: getServiceName(service.service),
        start: new Date(ping.createdAt).getTime(),
        end: new Date(moment(ping.createdAt).add("10", "minutes").toISOString()).getTime(),
        task: ping.error || "No Information Available"
      }
      data.push(item)
    })
  })

  res.json(data);
};