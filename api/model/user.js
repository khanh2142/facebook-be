const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    avatar: { type: String },
    news: { type: Array },
    background: { type: String },
    nickname: { type: String },
    images: { type: Array },
  },
  { collection: "user" }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
