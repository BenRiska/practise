// boilerplate for migrating prisma data
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const throat = require("throat");

const run = async () => {
  await prisma.$connect();
  // migration script here
  let companiesWithAddress = await prisma.company.findMany({
    where: { isAddressUnique: null }
  });

  await Promise.all(
    companiesWithAddress.map(
      throat(1, async company => {
        // wait for 100ms to not hit timeout
        company = await prisma.company.findUnique({
          where: { id: company.id },
          include: {
            registeredAddress: {
              include: { companies: true }
            }
          }
        });

        if (company.registeredAddress.companies.length === 1) {
          await prisma.company.update({
            where: { id: company.id },
            data: {
              isAddressUnique: true
            }
          });
        } else {
          await prisma.company.update({
            where: { id: company.id },
            data: {
              isAddressUnique: false
            }
          });
        }
      })
    )
  );
};

run().finally(() => prisma.$disconnect());