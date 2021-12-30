import axios from "axios";

const ch = axios.create({
  baseURL: "https://api.companieshouse.gov.uk",
  headers: { Authorization: `Basic ${process.env.COMPANIES_HOUSE_SEARCH_KEY}` }
});

export default ch;