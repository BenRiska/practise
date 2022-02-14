// This file gets the most recent leads
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";
import Axios from "axios";
// import setServiceStatus from "../util/setServiceStatus";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { director_id, campaign_name, lemlist_id } = req.body;

  let campaign;
  if (campaign_name) {
    campaign = await prisma.campaign.findFirst({
      where: {
        name: campaign_name
      }
    });

    if (!campaign) res.end();
  }
  const director = await prisma.director.findUnique({
    where: { id: director_id },
    include: {
      companies: {
        include: {
          registeredAddress: true
        }
      }
    }
  });
  let dummyEmail = `ssgm-${director.id}@ember.co`;
  try {
    const result = await Axios.post(
      `https://api.lemlist.com/api/campaigns/${lemlist_id}/leads/${director.contactEmail || dummyEmail
      }`,
      {
        firstName: director.firstName,
        lastName: director.lastName,
        linkedinUrl: director.linkedinId,
        companyName: director.companies[0].companyName
      },
      {
        headers: {
          Authorization: `Basic ${process.env.LEMLIST_KEY}`
        }
      }
    );
    // setServiceStatus("LEMLIST", "UP");
  } catch (err) {
    // setServiceStatus("LEMLIST", "DOWN");
  }
  if (campaign) {
    await prisma.companyCampaign.create({
      data: {
        status: "SENT",
        companyId: director.companies[0].id,
        campaignId: campaign.id
      }
    });
  }

  res.end();
};
