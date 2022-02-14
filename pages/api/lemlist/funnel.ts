// This file gets the most recent leads
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";
import Axios from "axios";
import { CompanyGrade } from ".prisma/client";

const getCampaignId = type => {
  if (type === "linkedin") {
    return "cam_umW2YQMTvbdv9kcmj";
  } else if (type === "linkedin & address & email") {
    return "cam_mSTWZ3ncmpk86fKk6";
  } else if (type === "linkedin & address") {
    return "cam_ETARg6xs6MNHDJAJt";
  } else if (type === "linkedin & email") {
    return "cam_uLwj8DZh72NF6WKkP";
  } else if (type === "self assessment") {
    return "cam_pbbpB59ur27vCmF52";
  }
};

const getCampaignName = type => {
  if (type === "linkedin") {
    return "lemlist - pure linkedin";
  } else if (type === "linkedin & address & email") {
    return "lemlist - linkedin & email & address";
  } else if (type === "linkedin & address") {
    return "lemlist - linkedin & address";
  } else if (type === "linkedin & email") {
    return "lemlist - linkedin & email";
  } else if (type === "self assessment") {
    return "lemlist - self assessment";
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { director_id, type } = req.body;

  let director = await prisma.director.findUnique({
    where: {
      id: director_id
    },
    include: {
      companies: true
    }
  });

  if (
    director.companies[0].grade === CompanyGrade.A ||
    director.companies[0].grade === CompanyGrade.B
  ) {
    await Axios.post(`${process.env.API_URL}/campaigns/add-lemlist-lead`, {
      campaign_name: getCampaignName(type),
      director_id: director.id,
      lemlist_id: getCampaignId(type)
    });
    res.end();
  }

  res.end();
};