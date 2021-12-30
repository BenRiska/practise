require("dotenv").config();
const cron = require("node-cron");
const axios = require("axios");

cron.schedule("* * * * *", () => {
  console.log("PING");
  axios.get(`${process.env.API_URL}/refetch`).catch(() => {
    return;
  });
});
