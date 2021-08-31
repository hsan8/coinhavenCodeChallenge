const client = require("../../config/database");
module.exports = class saveDataServices {
  static async addUserRecordToDatabase(data) {
    try {
      client.INCR("id", function (err, id) {
        client.HMSET(
          "user",
          id,
          JSON.stringify({
            fullName: data.fullName,
            email: data.email,
            password: data.password,
            accountStatus: "inactive",
            registrationDate: Date.now(),
          }),
          function (error, reply) {
            if (error) {
              return error;
            }
            console.log(reply);
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
};
