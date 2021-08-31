const express = require("express");
const router = express.Router();
const { userDataRequest } = require("./userDataRequest");
const { savingUserDataRequest } = require("./savingUserDataRequest");
router.post("/register", async (req, res) => {
  try {
    /**
     * make call for the first microservice
     */
    const validtionUserRespons = await userDataRequest(req);
    if (validtionUserRespons.status == "success") {
      const sanvingDataRespons = await savingUserDataRequest(
        validtionUserRespons.userData
      );
      res.send(await sanvingDataRespons);
    } else {
      res.status(401).json(validtionUserRespons);
    }
  } catch (error) {
    res.status(401).json(error);
  }
});
module.exports = router;
