import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";
import orderBy from "lodash/orderBy";
import { CompanyCampaign, Campaign } from ".prisma/client";
import { CompanyStatus } from "@prisma/client";
import moment from "moment";

interface ICompany {
  subscriptionStatus: CompanyStatus;
  attributionCampaign: string;
  attributionMedium: string;
  attributionSource: string;
}

const syncCompany = async (company: any, data: ICompany) => {
  try {
    await prisma.company.update({
      where: {
        companyNumber: company.companyNumber
      },
      data: {
        ...data,
        ...(company.subscriptionStatus === null
          ? { initialSubscriptionDate: moment().toISOString() }
          : {})
      }
    });
  } catch (err) { }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    companies
  }: {
    companies: {
      [companyNumber: string]: ICompany;
    };
  } = req.body;

  const ssgmCompanies = await prisma.company.findMany({
    where: {
      companyNumber: {
        in: Object.keys(companies)
      }
    },
    include: {
      campaigns: {
        include: {
          campaign: true
        }
      }
    }
  });

  await Promise.all(
    ssgmCompanies.map(ssgmCompany =>
      syncCompany(ssgmCompany, companies[ssgmCompany.companyNumber])
    )
  );

  res.json({
    attributedCompanies: ssgmCompanies.reduce((formatted, ssgmCompany) => {
      if (ssgmCompany?.campaigns?.length > 0) {
        const winningCampaign: CompanyCampaign & {
          campaign: Campaign;
        } = orderBy(ssgmCompany.campaigns, "createdAt", "desc")[0];

        formatted[ssgmCompany.companyNumber] = {
          attributionSource: "ssgm",
          attributionCampaign: winningCampaign.campaign?.name,
          attributionMedium: winningCampaign.campaign?.type || "DIRECT_MAIL"
        };
      }
      return formatted;
    }, {})
  });
};
