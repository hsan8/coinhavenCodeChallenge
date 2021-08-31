const axios = require("axios");
const registry = require("../../registry.json");
exports.userDataRequest = async (req) => {
  /**
   * call to the microservice server
   */
  const validateUserDataMicroservice = await axios.post(
    registry.services["validateUserData"].url,
    req.body
  );

  /**
   * getting the response
   */

  const respons = await validateUserDataMicroservice.data;

  return respons;
};
