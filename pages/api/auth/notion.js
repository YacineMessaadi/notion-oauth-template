import axios from "axios";

export default function handler(req, res) {
  console.log(req.query);
  //Exchange authorization code for access token
  axios({
    method: "post",
    url: "https://api.notion.com/v1/oauth/token",
    data: {
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: process.env.REDIRECT_AFTER_OAUTH,
    },
    auth: {
      username: process.env.NOTION_CLIENT_ID,
      password: process.env.NOTION_CLIENT_SECRET,
    },
  })
    .then((response) => {
      console.log(response.data);
      // There, store the token and the other informations in a database to retrieve the user account without reasking to grant access to Notion
      return res.status(200).json(response.data);
    })
    .catch((err) => {
      // There, redirect to an error page
      return res
        .status(500)
        .json("Invalid Notion code, impossible to generate the token");
    });
}
