const Post = require("../models/post");
exports.deletPost = (req, res, next) => {
  Post.deleteOne({
    _id: req.params.id,
    creator: req.userData.userId
  }).then(result => {

    if (result.n > 0) {
      res.status(200).json({
        message: "Deletion successful!"
      });
    } else {
      res.status(401).json({
        message: "Not authorized!"
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "failed deleting!!"
    })
  })
}
