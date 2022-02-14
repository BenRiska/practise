// This file adds a company to the database
import { NextApiRequest, NextApiResponse } from "next";
import ch from "../../../services/ch";
import prisma from "../../../services/prisma";
import setServiceStatus from "../mutations/set-service-status";

const linkCompany = async (company_number: any) => {
  try {
    const {
      data: {
        company_name,
        sic_codes,
        registered_office_address: {
          address_line_1,
          address_line_2,
          locality,
          country,
          postal_code,
          premises
        }
      }
    } = await ch(`/company/${company_number}`);
    setServiceStatus("COMPANIES_HOUSE", "UP");
    const companyExists = await prisma.company.findUnique({
      where: { companyNumber: company_number as string }
    });
    const existingAddresses = await prisma.address.findMany({
      where: {
        sourceId: `${address_line_1}-${address_line_2}-${country}-${postal_code}-${premises}`
      }
    });
    if (!companyExists) {
      return prisma.company.create({
        data: {
          companyNumber: company_number as string,
          registeredAddress: {
            connectOrCreate: {
              where: {
                sourceId: `${address_line_1}-${address_line_2}-${country}-${postal_code}-${premises}`
              },
              create: {
                sourceId: `${address_line_1}-${address_line_2}-${country}-${postal_code}-${premises}`,
                addressLine1: address_line_1,
                addressLine2: address_line_2,
                country,
                postalCode: postal_code,
                locality
              }
            }
          },
          companyName: company_name,
          industries: {
            set: sic_codes || []
          },
          refetch: true,
          isAddressUnique: existingAddresses.length === 0
        }
      });
    }
  } catch (e) {
    setServiceStatus("COMPANIES_HOUSE", "DOWN");
    return;
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { company_number }: { [key: string]: string | string[]; } = req.query;
  await linkCompany(company_number);
  res.end();
};
