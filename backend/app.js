const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post')
const app = express();
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
mongoose.connect('mongodb://localhost:27017/crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use("/images", express.static(path.join("backend/images")));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("db is connected");
});

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
module.exports = app;
