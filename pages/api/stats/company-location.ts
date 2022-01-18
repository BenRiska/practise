// This file gets every campaign
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { campaign_id }: any = req.body;

  

  let locations: any = await prisma.companyCampaign.findMany({
    where: {campaignId: campaign_id},
    select: {
      company: {
        select: {
          registeredAddress: {
            select: {
              locality: true
            }
          }
        }
      }
    }
  })

  locations = locations.map((location: any) => location.company.registeredAddress.locality)

 
  const counts = {};

  for (const num of locations) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let data = [];

  Object.keys(counts).find(key => {  
    data.push({network: key, value: counts[key] })
  })


 
  res.json(data.slice(0, 20));
};