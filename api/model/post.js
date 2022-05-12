const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    content: { type: String },
    image: { type: String },
    user_id: mongoose.Schema.Types.ObjectId,
    avatar: { type: String },
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
    reaction: { type: Number, default: 0 },
    comment: { type: Array },
    name: { type: String },
  },
  { collection: "posts" }
);

const Posts = mongoose.model("posts", postsSchema);

module.exports = Posts;
