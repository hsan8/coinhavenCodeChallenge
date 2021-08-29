const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log("Microservice 1 running on 3001 port");
});
