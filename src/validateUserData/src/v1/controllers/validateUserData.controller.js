const validateUserDataService = require("../service/validateUserData.service");
const httpStatusCode = require("../Util/httpStatusCode.status");

module.exports = class validateUserController {
  static async validateController(req, res) {
    try {
      const respons = await validateUserDataService.hashingPassword(req);
      return res
        .status(httpStatusCode.OK)
        .send({ status: "success", userData: await respons });
    } catch (error) {
      res
        .status(httpStatusCode.INTERNAL_ERROR_SERVER)
        .send({ error: "error found during this request" });
    }
  }
};
