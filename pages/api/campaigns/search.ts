import { CompanyGrade } from ".prisma/client";
// This file searches for directors on linkedin and sends them a message and connection request if we find the right person
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";
const axios = require("axios");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // find free agent
  let agents = await prisma.agent.findMany({
    where: {
      currentlyScanning: true,
      email: { not: null }
    }
  });

  const agentIds = agents.map(agent => agent.id)
  // return if all agents are busy/ no directors
  if (agents.length === 0) return res.end();

  await prisma.agent.updateMany({
    where: {
      id: { in: agentIds }
    },
    data: {
      currentlyScanning: true
    }
  });

  try {
    let directors = await prisma.director.findMany({
      where: {
        linkedinMatch: null,
        companies: {
          every: {
            grade: {
              not: CompanyGrade.SCREEN
            }
          }
        }
      },
      include: {
        companies: true
      },
      orderBy: {
        id: "desc"
      },
      take: agents.length
    });

    if (directors.length < agents.length) {
      await agents.forEach(async agent => {
        await prisma.agent.update({
          where: {
            id: agent.id
          },
          data: {
            currentlyScanning: false
          }
        });
      });
      return res.end();
    }
    if (directors.length === 0) throw "Error";

    await agents.forEach(async (agent, i) => {
      console.log({ agent, director: directors[i] })
      // execute phantombot
      let userData = await axios.post(`${process.env.API_URL}/phantombuster/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agentId: agent.id,
          directorId: directors[i].id
        })
      });
      // return if no results
      if (userData.data.status === "FAILURE") {
        console.log("search-connect -", agent.id, "- Search failed");
        if (directors[i].companies[0].isAddressUnique) {
          await axios.post(
            `${process.env.API_URL}/campaigns/add-lemlist-lead`,
            {
              director_id: directors[i].id,
              campaign_name: "lemlist - pure mail - stannp",
              lemlist_id: "cam_qf6k5hDZTrDSSaqFf"
            }
          );
        }
        // set agent to available
        await prisma.director.update({
          where: {
            id: directors[i].id
          },
          data: {
            viewed: true
          }
        });
        await prisma.agent.update({
          where: {
            id: agent.id
          },
          data: {
            currentlyScanning: false
          }
        });
        return res.end();
      }

      // execute dux soup crawler
      await axios.post(`${process.env.API_URL}/duxsoup/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agentId: agent.id,
          directorId: directors[i].id,
          type: "visit"
        })
      });
      // set agent to available
      await prisma.agent.update({
        where: {
          id: agent.id
        },
        data: {
          currentlyScanning: false
        }
      });

      await prisma.director.update({
        where: {
          id: directors[i].id
        },
        data: {
          viewed: true
        }
      });
    });
  } catch (err) {
    await agents.forEach(async agent => {
      await prisma.agent.update({
        where: {
          id: agent.id
        },
        data: {
          currentlyScanning: false
        }
      });
    });
  }
  return res.end();
};