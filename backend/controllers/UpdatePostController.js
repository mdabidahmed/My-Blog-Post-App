const Post = require("../models/post");
exports.updatePost = (req, res, next) => {
  console.log(req.file);
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename
  }
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath,
    creator: req.userData.userId
  })
  console.log(post);
  Post.updateOne({
    _id: req.params.id,
    creator: req.userData.userId
  }, post).then(result => {
    if (result.n > 0) {
      res.status(200).json({
        message: "Update successful!"
      });
    } else {
      res.status(401).json({
        message: "Not authorized!"
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Couldn't update post!"
    })
  })
};
