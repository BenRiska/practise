// This file gets every campaign
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const { campaign_id }: any = req.body;

  let campaigns: any = await prisma.companyCampaign.findMany({
    where: {campaignId: campaign_id},
    select: {
      company: {
        select: {
          directors: {
            select: {
              dateOfBirth: true
            }
          }
        }
      }
    }
  })

  let directorAges = campaigns.map((campaign: any) => moment().diff(moment(campaign?.company?.directors[0]?.dateOfBirth), "years"))

  directorAges = directorAges.filter((age: any) => !Number.isNaN(age))

  const data = [{
    category: "16-30",
    value1: 0
  }, {
    category: "30-40",
    value1: 0
  }, {
    category: "40-50",
    value1: 0
  }, 
  {
    category: "50-60",
    value1: 0
  }, 
  {
    category: "60+",
    value1: 0
  }, 
]

  directorAges.forEach((age: any) => {
    if(age > 16 && age < 30){
      data[0].value1 = data[0].value1 + 1
    } else if (age > 30 && age < 40){
      data[1].value1 = data[1].value1 + 1
    }else if (age > 40 && age < 50){
      data[2].value1 = data[2].value1 + 1
    }
    else if (age > 50 && age < 60){
      data[3].value1 = data[3].value1 + 1
    }else if (age > 60 && age < 70){
      data[4].value1 = data[4].value1 + 1
    }
  });
 
  res.json(data);
};