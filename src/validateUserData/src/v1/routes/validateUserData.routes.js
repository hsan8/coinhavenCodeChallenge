const express = require("express");
const router = express.Router();
const userController = require("../controllers/validateUserData.controller");

router.post("/", userController.validateController);
module.exports = router;
