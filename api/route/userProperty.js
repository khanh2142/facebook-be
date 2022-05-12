const express = require("express");
const route = express.Router();

const userProperty = require("../controller/userProperty");

route.get("/api/", userProperty.get);

module.exports = route;
