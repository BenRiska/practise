// this file syncs with the Ember App to update which companies have signed up
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";
import Axios from "axios";

const syncCompany = async ({ companyNumber, subscriptionStatus }) => {
  await prisma.company.update({
    where: {
      companyNumber
    },
    data: {
      subscriptionStatus:
        subscriptionStatus === "PAST_DUE" ? "CHURNED" : subscriptionStatus
    }
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await Axios.get(
    "https://app-canary.ember.co/api/companies",
    {
      headers: { authorization: "ce6fce6e-3990-4251-b465-34ee8b9822aa" }
    }
  );

  await Promise.all(data.map(company => syncCompany(company)));

  res.end();
};
