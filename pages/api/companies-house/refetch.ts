import Axios from "axios";
// This file enriches our company data once the director has been added to companies house
import { NextApiResponse, NextApiRequest } from "next";
import moment from "moment";
import ch from "../../../services/ch";
import prisma from "../../../services/prisma";
import targetedSICList from "../../../utils/sic-tiers.json";
import { CompanyGrade } from ".prisma/client";
import setServiceStatus from "../mutations/set-service-status";

const reformatName = (name: string) => {
  let firstName, lastName;
  if (name.includes(",")) {
    firstName = `${name.split(",")[1].split(" ")[1]}`;
    lastName = `${name.split(",")[0]}`;
  } else {
    firstName = `${name.split(" ")[1]}`;
    lastName = `${name.split(" ")[name.split(" ").length - 1]}`;
  }
  return { firstName, lastName };
};

const gradeCompany = (company: any) => {
  let list = JSON.stringify(targetedSICList);
  const intersection = company.industries.filter((element: any) =>
    list.includes(element)
  );
  if (intersection.length > 0) {
    list = JSON.parse(list);
    let val = list[intersection[0]];
    if (val === "A") return CompanyGrade.A;
    if (val === "B") return CompanyGrade.B;
  } else {
    return CompanyGrade.SCREEN;
  }
};

const linkCompany = async (company_number: any) => {
  let people;
  try {
    const {
      data: { links, type }
    } = await ch(`/company/${company_number}`);
    setServiceStatus("COMPANIES_HOUSE", "UP");
    if (type === "limited-partnership") {
      return await prisma.company.update({
        where: { companyNumber: company_number as string },
        data: { refetch: false }
      });
    }

    if (links?.officers) {
      const {
        data: { items }
      } = await ch(links.officers);

      if (items[0]?.name) people = items;
    }
    if (!people && links?.persons_with_significant_control) {
      const {
        data: { items }
      } = await ch(links?.persons_with_significant_control);
      if (items[0]?.name) people = items;
    }
    if (people?.length > 0) {
      const company = await prisma.company.findUnique({
        where: {
          companyNumber: company_number
        },
        select: {
          industries: true
        }
      });
      await prisma.company.update({
        where: { companyNumber: company_number as string },
        data: {
          directors: {
            create: people?.map(({ name, date_of_birth }: any) => ({
              firstName: reformatName(name).firstName || undefined,
              lastName: reformatName(name).lastName || undefined,
              dateOfBirth: date_of_birth
                ? new Date(`${date_of_birth.year}-${date_of_birth.month}-01`)
                : undefined
            }))
          },
          refetch: false,
          grade: gradeCompany(company)
        }
      });
      await Axios.post(`${process.env.API_URL}/campaigns/ongoing-mail`, {
        company_number
      });
    }
  } catch (e) {
    console.log("companies house error / refetch ", company_number);
    setServiceStatus("COMPANIES_HOUSE", "DOWN");
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const companies = await prisma.company.findMany({
    where: {
      refetch: true,
      createdAt: { lt: moment().subtract(300, "minutes").toISOString() }
    },
    take: 40,
    orderBy: { createdAt: "asc" }
  });
  await Promise.all(
    companies.map(company => linkCompany(company.companyNumber))
  );
  res.end();
};
