const validateUserDataService = require("../service/validateUserData.service");
const httpStatusCode = require("../Util/httpStatusCode.status");

module.exports = class Store {
  static async validateController(req, res) {
    try {
      const respons = validateUserDataService.checking(req);
      return res.send(respons);
    } catch (error) {
      res
        .status(httpStatusCode.INTERNAL_ERROR_SERVER)
        .send({ error: "error found during this request" });
    }
  }
};
