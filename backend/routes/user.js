const express = require("express");
const UserController = require("../controllers/CreateUserController")
const LoginController = require("../controllers/UserLoginController")
const user = require("../models/user");
const router = express.Router();

router.post("/signup", UserController.createUser);
router.post("/login", LoginController.userLogin);
module.exports = router;
