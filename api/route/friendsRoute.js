const express = require("express");
const route = express.Router();

const friends = require("../controller/friendsController");

route.get("/friend/:id", friends.getOnce);
route.get("/friends/list", friends.get);

module.exports = route;
