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
      console.log(response);
      return res.status(200).json({ response });
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
}
