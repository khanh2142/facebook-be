const UserProperty = require("../model/userProperty");

const get = (req, res) => {
  UserProperty.find().then((data) => {
    res.send(JSON.stringify(data));
  });
};

module.exports = { get };
