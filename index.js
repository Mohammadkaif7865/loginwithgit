const express = require("express");
const app = express();
const superagent = require("superagent");
const request = require("request");
const port = 9700;
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send(
    '<a href="https://github.com/login/oauth/authorize?client_id=9edc4c52568908cf3570">Login with github</a>'
  );
});
app.get("/profile", (req, res) => {
  res.send("ok");
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
