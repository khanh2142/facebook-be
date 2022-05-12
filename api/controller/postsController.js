const Posts = require("../model/post");

const get = (req, res) => {
  Posts.find()
    .sort({ updateAt: -1 })
    .then((data) => {
      res.send(JSON.stringify(data));
    });
};

const post = (req, res) => {
  const post = new Posts({
    content: req.body.content ? req.body.content : "",
    user_id: req.body.user_id,
    avatar: req.body.avatar,
    name: req.body.name,
    image: req.file
      ? req.protocol + "://" + req.get("host") + "/" + req.file.originalname
      : "",
    createAt: Date.now(),
    updateAt: Date.now(),
  });
  if (post) {
    res.send("uploaded");
    post.save().then().catch();
  } else {
    res.send("failed");
  }
};

const putLike = (req, res) => {
  const id = req.params.id;
  Posts.findByIdAndUpdate(id, { reaction: 1 }).then();
};

const removeLike = (req, res) => {
  const id = req.params.id;
  Posts.findByIdAndUpdate(id, { reaction: 0 }).then();
};

const getOncePost = (req, res) => {
  const id = req.params.id;
  Posts.findById(id).then((data) => {
    res.send(JSON.stringify(data));
  });
};

const deletePost = (req, res) => {
  const id = req.params.id;
  Posts.findByIdAndDelete(id).then(res.send("deleted"));
};

const getPostByUserId = (req, res) => {
  const id = req.params.id;
  Posts.find({ user_id: id })
    .sort({ updateAt: -1 })
    .then((data) => {
      res.send(JSON.stringify(data));
    })
    .catch((e) => console.log(e));
};

module.exports = {
  get,
  post,
  putLike,
  removeLike,
  getOncePost,
  deletePost,
  getPostByUserId,
};
