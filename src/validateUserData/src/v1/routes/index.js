module.exports = (app) => {
  const validateUserDataRouter = require("./validateUserData.routes");
  app.use("/", validateUserDataRouter);
};
