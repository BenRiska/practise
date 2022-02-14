import prisma from "../../../services/prisma";
const incrementPingCount = async (service: any) => {
  const s: any = await prisma.services.findFirst({ where: { service } });
  await prisma.ping.create({
    data: {
      serviceId: s.id
    }
  });
};

export default incrementPingCount;