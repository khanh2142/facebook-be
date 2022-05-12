const express = require("express");
const route = express.Router();

const posts = require("../controller/postsController");

const uploadFile = require("../middleware/uploadFile");

route.get("/posts", posts.get);
route.post("/posts/create", uploadFile.single("image"), posts.post);
route.put("/post/like/:id", posts.putLike);
route.put("/post/remove/:id", posts.removeLike);
route.get("/post/:id", posts.getOncePost);
route.delete("/post/delete/:id", posts.deletePost);
route.get("/post/userPost/:id", posts.getPostByUserId);

module.exports = route;
