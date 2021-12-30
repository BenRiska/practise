import axios from "axios";

const clicksend = axios.create({
  baseURL: "https://rest.clicksend.com/v3",
  headers: {
    Authorization: `Basic ${process.env.CLICKSEND_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default clicksend;