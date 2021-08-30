const { validateUser } = require("../middlewares/dataValidator");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/validateUserData.controller");

router.post("/", validateUser, userController.validateController);
module.exports = router;
