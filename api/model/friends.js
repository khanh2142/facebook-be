const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const friendsSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    background: { type: String },
    news: { type: Array },
    images: { type: Array },
  },
  { collection: "friends" }
);

const Friends = mongoose.model("friends", friendsSchema);

module.exports = Friends;
