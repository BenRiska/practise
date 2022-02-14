import incrementPingCount from "./add-error-ping";
import prisma from "../../../services/prisma";

const setServiceStatus = async (service: any, status: any) => {
  await prisma.services.updateMany({
    where: { service },
    data: { status, ...(status === "DOWN" ? { lastDown: new Date() } : {}) }
  });
  incrementPingCount(service);
};

export default setServiceStatus;