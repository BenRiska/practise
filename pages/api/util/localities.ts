// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../services/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let addresses: any = await prisma.address.findMany({
    select: {
      locality: true
    }
  })
  addresses = addresses.map(({locality}: any) => locality)
  // @ts-ignore
  res.json([...new Set(addresses)]);
}