const express = require("express");
const route = express.Router();

const user = require("../controller/userController");

route.get("/user", user.get);

module.exports = route;
