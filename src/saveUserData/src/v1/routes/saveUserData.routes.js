const express = require("express");
const router = express.Router();
const saveController = require("../controllers/saveUserData.controller");
const { checkEmailIfExist } = require("../middlewares/checkEmail");
router.post("/", checkEmailIfExist, saveController.creatNewUser);
module.exports = router;
