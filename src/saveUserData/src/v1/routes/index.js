module.exports = (app) => {
  const saveUSerData = require("./saveUserData.routes");
  app.use("/", saveUSerData);
};
