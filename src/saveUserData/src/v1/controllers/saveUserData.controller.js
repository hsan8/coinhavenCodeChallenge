const saveUserDataService = require("../service/saveUserData.service");
const httpStatusCode = require("../Util/httpStatusCode.status");
module.exports = class saveUserDataController {
  static async creatNewUser(req, res) {
    try {
      const respons = await saveUserDataService.addUserRecordToDatabase(
        req.body
      );

      return res.status(httpStatusCode.OK).send(await respons);
    } catch (error) {
      res
        .status(httpStatusCode.INTERNAL_ERROR_SERVER)
        .send({ error: "error found during this request" });
    }
  }
};
