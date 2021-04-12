const Post = require("../models/post");
const {
  count
} = require("../models/post");
const express = require("express");
exports.getPostById = (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post)
    } else {
      res.status(404).json({
        message: 'Post not found'
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Fetchng post failed!"
    })
  })
}


exports.getPost = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = Post.find();
  let fetchedPosts;
  if (pageSize && currentPage) {
    postQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);

  }
  postQuery.then(documents => {
    fetchedPosts = documents
    return Post.count();
  }).then(count => {
    res.status(200).json({
      message: 'Posts fetched succsessfully!',
      posts: fetchedPosts,
      maxPosts: count
    });
  })

}
