const validateUserDataService = require("../service/validateUserData.service");
const httpStatusCode = require("../Util/httpStatusCode.status");

module.exports = class Store {
  static async validateController(req, res) {
    try {
      res.send("done");
      return;
    } catch (error) {
      res
        .status(httpStatusCode.INTERNAL_ERROR_SERVER)
        .send({ error: "error found during this request" });
    }
  }
};
