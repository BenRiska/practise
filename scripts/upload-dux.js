// This file will ...
require("dotenv/config");
const Hubspot = require("hubspot");
const hubspot = new Hubspot({
  apiKey: process.env.HUBSPOT_API_KEY
});
var columns = [
  "id",
  "VisitTime",
  "Profile",
  "Picture",
  "Degree",
  "First Name",
  "Middle Name",
  "Last Name",
  "Summary",
  "Title",
  "From",
  "Company",
  "CompanyProfile",
  "CompanyWebsite",
  "PersonalWebsite",
  "Email",
  "Phone",
  "IM",
  "Twitter",
  "Location",
  "Industry",
  "My Tags",
  "My Notes"
];
require("csv-to-array")(
  {
    file: `${__dirname}/../${process.argv[2]}`,
    columns: columns
  },
  async (err, array) => {
    if (err) {
      throw err;
    }

    await Promise.all(
      array.map(async data => {
        if (data["Email"]) {
          try {
            const { vid } = await hubspot.contacts.getByEmail(data["Email"]);
            console.log("Exists" + vid);
          } catch (e) {
            await hubspot.contacts.create({
              properties: [
                { property: "email", value: data["Email"] },
                { property: "dux_id", value: data["id"] },
                {
                  property: "hs_lead_status",
                  value: "ATTEMPTED_TO_CONTACT"
                },
                { property: "hubspot_owner_id", value: 45786650 },
                { property: "firstname", value: data["First Name"] },
                { property: "lastname", value: data["Last Name"] },
                { property: "phone", value: data["Phone"] },
                { property: "industry", value: data["Industry"] },
                { property: "jobtitle", value: data["Title"] },
                { property: "linkedin", value: data["Profile"] },
                { property: "twitterhandle", value: data["Twitter"] },
                { property: "city", value: data["Location"] },
                { property: "company", value: data["Company"] },
                { property: "website", value: data["CompanyWebsite"] }
              ]
            });
          }
        }
      })
    );
    console.log(err || array);
  }
);
