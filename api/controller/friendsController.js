const Friends = require("../model/friends");

const get = (req, res) => {
  Friends.find().then((data) => {
    res.send(JSON.stringify(data));
  });
};

const getOnce = (req, res) => {
  const id = req.params.id;
  Friends.findById(id).then((data) => {
    res.send(JSON.stringify(data));
  });
};

module.exports = { get, getOnce };
