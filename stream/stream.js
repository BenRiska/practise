require("dotenv").config();
const needle = require("needle");
const moment = require("moment");
const axios = require("axios");
const ndjson = require("ndjson");

needle
  .get(
    `https://stream.companieshouse.gov.uk/companies`,
    {
      headers: {
        Authorization: `Basic ${process.env.COMPANIES_HOUSE_KEY}`
      }
    },
    (e, res) => {
      console.log(e);
      console.log(`Status Code: ${res.statusCode}`);
      console.log(`Error Message: ${res.statusMessage}`);
    }
  )
  .setEncoding("utf8")
  .pipe(ndjson.parse())
  .on("error", e => {
    console.log("Stream Error");
    console.log(e);
  })
  .on("data", value => {
    const today = moment().format("YYYY-MM-DD");

    try {
      const {
        data: { date_of_creation, company_number }
      } = value;
      if (date_of_creation === today) {
        console.log(`${new Date().toISOString()}: ${company_number}`);
        setTimeout(
          () =>
            axios.get(
              `${process.env.API_URL}/add?company_number=${company_number}`
            ),
          5000
        );
      }
    } catch (error) {
      console.log("---error---");
    }
  })
  .on("done", () => {
    console.log("done!");
  });
