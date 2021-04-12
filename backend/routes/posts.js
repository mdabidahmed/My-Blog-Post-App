const express = require("express");
const createPostController = require("../controllers/CreatePostController");
const getPostController = require("../controllers/GetPostController");
const deletePostController = require("../controllers/DeletePostController")
const updatePostController = require("../controllers/UpdatePostController")
const extractFile = require("../middleware/file");
const {
  count
} = require("../models/post");
const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth")
const router = express.Router();

router.get("", getPostController.getPost);
router.get("/:id", checkAuth, getPostController.getPostById);
router.post("", checkAuth, extractFile, createPostController.createPost);
router.put("/:id", checkAuth, extractFile, updatePostController.updatePost);
router.delete("/:id", checkAuth, deletePostController.deletPost)
module.exports = router;
