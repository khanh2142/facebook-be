const User = require("../model/user");

const get = (req, res) => {
  User.find().then((data) => {
    res.send(JSON.stringify(data));
  });
};

module.exports = { get };
