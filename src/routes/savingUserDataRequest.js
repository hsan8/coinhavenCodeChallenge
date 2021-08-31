const axios = require("axios");
const registry = require("../../registry.json");
exports.savingUserDataRequest = async (incomingFlow) => {
  /**
   * call to the microservice server
   */

  const savingUserDataMicroservice = await axios.post(
    registry.services["savingUserData"].url,
    incomingFlow
  );

  /**
   * getting the response
   */

  const outgoingFlow = await savingUserDataMicroservice.data;
  console.log("outgoingFlow", outgoingFlow);
  return outgoingFlow;
};
