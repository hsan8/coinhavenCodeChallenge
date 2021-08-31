const express = require("express");
const router = express.Router();
const saveController = require("../controllers/saveUserData.controller");

router.post("/", saveController.creatNewUser);
module.exports = router;
