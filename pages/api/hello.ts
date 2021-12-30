// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../services/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const agents = await prisma.agent.findMany();

  res.json(agents);
}
