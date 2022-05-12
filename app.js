const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const userProperty = require("./api/route/userProperty");
const friends = require("./api/route/friendsRoute");
const user = require("./api/route/userRoute");
const posts = require("./api/route/postsRoute");
const { default: mongoose } = require("mongoose");
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./public"));

const url =
  "mongodb+srv://khanh2142:khanh2142@cluster0.4xlgs.mongodb.net/facebook?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(console.log("connected to db"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userProperty);

app.use(friends);

app.use(user);

app.use(posts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
