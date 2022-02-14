// This file is executed by the dux soup webhook - updating our database with campaign related info + potential emails
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../services/prisma";
import { withSentry } from "@sentry/nextjs";
import moment from "moment";

const enrichEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (
    req.body.data.Profile &&
    req.body.type === "visit" &&
    req.body.event === "update"
  ) {
    console.log("dux soup webhook -", req.body);
    const director = await prisma.director.findUnique({
      where: { linkedinId: req.body.data.Profile },
      include: {
        companies: true
      }
    });
    if (moment(director.companies[0].createdAt).isBefore("2021-4-5")) {
      if (req.body.data.Email) {
        await prisma.director.update({
          where: {
            linkedinId: req.body.data.Profile
          },
          data: {
            contactEmail: req.body.data.Email
          }
        });
      }
      await axios.post(`${process.env.API_URL}/campaigns/ongoing-lemlist`, {
        director_id: director.id,
        type: "self assessment"
      });
    } else if (director.companies[0].isAddressUnique && req.body.data.Email) {
      await prisma.director.update({
        where: {
          linkedinId: req.body.data.Profile
        },
        data: {
          contactEmail: req.body.data.Email
        }
      });
      await axios.post(`${process.env.API_URL}/campaigns/ongoing-lemlist`, {
        director_id: director.id,
        type: "linkedin & address & email"
      });
    } else if (director.companies[0].isAddressUnique && !req.body.data.Email) {
      await axios.post(`${process.env.API_URL}/campaigns/ongoing-lemlist`, {
        director_id: director.id,
        type: "linkedin & address"
      });
    } else if (!director.companies[0].isAddressUnique && req.body.data.Email) {
      await prisma.director.update({
        where: {
          linkedinId: req.body.data.Profile
        },
        data: {
          contactEmail: req.body.data.Email
        }
      });
      await axios.post(`${process.env.API_URL}/campaigns/ongoing-lemlist`, {
        director_id: director.id,
        type: "linkedin & email"
      });
    } else if (!director.companies[0].isAddressUnique && !req.body.data.Email) {
      await axios.post(`${process.env.API_URL}/campaigns/ongoing-lemlist`, {
        director_id: director.id,
        type: "linkedin"
      });
    }
  }
  res.end();
};

export default withSentry(enrichEmail);