// This file fires off our Dux Soup Agent
import { NextApiRequest, NextApiResponse } from "next";
import jsSHA from "jssha";
import axios from "axios";
import prisma from "../../../services/prisma";
// import setServiceStatus from "./setServiceStatus";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("fired dux");
  const { agentId, directorId, type } = JSON.parse(req.body.body);
  // get director
  let director = await prisma.director.findFirst({
    where: {
      id: directorId
    },
    include: {
      companies: {
        include: {
          registeredAddress: true
        }
      }
    }
  });
  // get agent
  let agent = await prisma.agent.findFirst({
    where: {
      id: agentId
    }
  });
  try {
    // create template message
    let message = `Hi ${director?.firstName},\n\n I wanted to introduce you to Ember, a new-age accounting service designed just for small businesses.\n\n ⚡️ Slick iOS, Android & Web app\n 👨‍💼 Live accounting support\n ✨ Filing & tax optimisation\n 🚀 Free 1 month trial\n\n Would love to chat if it sounds relevant?\n\n  https://ember.co/`;
    // execute dux-soup bot
    let reqBody = {
      command: type,
      targeturl: agent.duxSoupUrl,
      userid: director.id,
      timestamp: Date.now(),
      params:
        type === "visit"
          ? { profile: director.linkedinId }
          : { profile: director.linkedinId, messagetext: message }
    };
    let shaObj = new jsSHA("SHA-1", "TEXT");
    shaObj.setHMACKey(agent.duxSoupId, "TEXT");
    shaObj.update(JSON.stringify(reqBody));
    let hmac = shaObj.getHMAC("B64");
    let options = {
      headers: {
        "Content-Type": "application/json",
        "X-Dux-Signature": hmac
      }
    };
    console.log("sending request to - ", directorId);
    // get results
    await axios.post(agent.duxSoupUrl, reqBody, options);
    setServiceStatus("DUX_SOUP", "UP");
  } catch (err) {
    // get agent
    setServiceStatus("DUX_SOUP", "DOWN");
    await prisma.agent.update({
      where: {
        id: agentId
      },
      data: {
        currentlyScanning: false
      }
    });
  }

  // get agent
  await prisma.agent.update({
    where: {
      id: agentId
    },
    data: {
      currentlyScanning: false
    }
  });

  return res.end();
};