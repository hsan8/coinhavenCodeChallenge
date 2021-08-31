const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log("Microservice 2 running on 3002 port");
});
