// This file fires off our PhantomBuster Agent
import { NextApiRequest, NextApiResponse } from "next";
const axios = require("axios");
import prisma from "../../../services/prisma";
// import { localities } from "../../../../generated/localities";
// import setServiceStatus from "./setServiceStatus";
import { withSentry } from "@sentry/nextjs";

const enrichLI = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("enrich-li start");
  // get req values
  const { agentId, directorId, yearsExperience } = JSON.parse(req.body.body);
  // get director
  try {
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

    // get location
    let locality = true
    // localities[
    // director?.companies[0]?.registeredAddress.locality.split(" ").join("_")
    // ];
    // return if no location
    if (!locality) {
      console.log("!locality");
      await prisma.director.update({
        where: { id: director?.id },
        data: {
          linkedinMatch: "NO_LOCALITY",
          agentId: agent?.id
        }
      });
      return res.json({ status: "FAILURE" });
    }
    // execute phantombuster linkedin scrape with director info
    const options = {
      headers: {
        "x-phantombuster-key": agent.phantomBusterId,
        "Content-Type": "application/json"
      }
    };
    // search query
    const searchQuery = yearsExperience
      ? `https://www.linkedin.com/sales/search/people?bingPostalCode=${locality}&doFetchHeroCard=false&firstName=${director.firstName}&lastName=${director.lastName}&logHistory=true&page=1&radius=25&yearsOfExperience=${yearsExperience}`
      : `https://www.linkedin.com/sales/search/people?bingPostalCode=${locality}&doFetchHeroCard=false&firstName=${director.firstName}&lastName=${director.lastName}&logHistory=true&page=1&radius=25`;

    // get results

    console.log("firing pb")

    const {
      data: { data }
    } = await axios.post(
      agent.phantomBusterUrl,
      {
        output: "result-object",
        argument: {
          sessionCookie: agent.phantomBusterSessionKey,
          searches: searchQuery,
          numberOfProfiles: 2,
          numberOfResultsPerSearch: 2,
          extractDefaultUrl: true,
          removeDuplicateProfiles: false,
          accountSearch: false,
          watcherMode: false
        }
      },
      options
    );
    // setServiceStatus("PHANTOMBUSTER", "UP");

    console.log({ data })

    // update director accordingly
    let updatedDirector;
    if (
      data?.resultObject?.length === 1 &&
      data?.resultObject[0]?.defaultProfileUrl
    ) {
      let res = data?.resultObject[0];
      updatedDirector = await prisma.director.update({
        where: { id: director.id },
        data: {
          linkedinId: res.defaultProfileUrl || null,
          linkedinMatch: "EXACT_MATCH",
          agentId: agent.id
        }
      });
    } else if (data?.resultObject?.length > 1) {
      updatedDirector = await prisma.director.update({
        where: { id: director.id },
        data: {
          linkedinMatch: "MULTIPLE_PROFILES",
          agentId: agent.id
        }
      });
    } else {
      updatedDirector = await prisma.director.update({
        where: { id: director.id },
        data: {
          linkedinMatch: "NO_MATCH",
          agentId: agent.id
        }
      });
    }
    // return result
    if (updatedDirector.linkedinMatch === "EXACT_MATCH") {
      console.log("exact match", director.id);

      return res.json({ status: "SUCCESS" });
    } else {
      console.log("no match", director.id);

      return res.json({ status: "FAILURE" });
    }
  } catch (err) {
    // setServiceStatus("PHANTOMBUSTER", "DOWN");
    await prisma.agent.update({
      where: {
        id: agentId
      },
      data: {
        currentlyScanning: false
      }
    });
    return res.json({ status: "FAILURE" });
  }
};

export default withSentry(enrichLI);