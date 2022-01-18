// This file gets the most recent leads
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../services/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {page, filter} = req.body
  const {age, locations, classifications, address, email, linkedin} = filter;
  
  const skip = parseInt(page) * 30;
  const companies = await prisma.company.findMany({
    where: {
      subscriptionStatus: null,
      refetch: false,
      directors: {
        some: {
          ...(linkedin
            ? {
                linkedinId: { not: null }
              }
            : {}),
          ...(email
            ? {
                contactEmail: { not: null }
              }
            : {}),
          dateOfBirth: {
            lt: moment().subtract(age.min, "years").toDate(),
            gt: moment().subtract(age.max, "years").toDate()
          }
        }
      },
      registeredAddress: {
        ...(locations.length > 0
          ? {
              locality: { in: locations }
            }
          : {})
      },
      ...(classifications.length > 0
        ? {
            OR: classifications.map((code: any) => ({
              industries: {
                equals: [code]
              }
            }))
          }
        : {}),
        ...(address
          ? {
              isAddressUnique: true
            }
          : {})
    },
    include: {
      directors: {
        include: {
          contactOwner: true
        }
      },
      registeredAddress: {
        include: {
          companies: {
            take: 2,
            select: {
              id: true
            }
          }
        }
      }
    },
    orderBy: {
      id: "desc"
    },
    skip,
    take: 30
  });



  res.json({companies});
};