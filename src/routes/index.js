const express = require("express");
const axios = require("axios");
const router = express.Router();
const registry = require("../../registry.json");
router.post("/register", async (req, res, next) => {
  const validateUserDataMicroservice = await axios.post(
    registry.services["validateUserData"].url,
    req.body
  );
  const respons = await validateUserDataMicroservice.data;
  res.send(respons);
});
module.exports = router;
