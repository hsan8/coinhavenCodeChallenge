const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log("gatway running on 3000 port");
});
