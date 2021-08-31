const client = require("../../config/database");
const { getCode } = require("../Util/verificationCodeGenerator");
module.exports = class saveDataServices {
  static async addUserRecordToDatabase(data) {
    try {
      return new Promise((resolve, reject) => {
        const verificationCode = getCode();
        const { email, fullName, password } = data;
        const userRecord = {
          fullName: fullName,
          email: email,
          password: password,
          accountStatus: "inactive",
          registrationDate: new Date(Date.now()),
          verificationCode: verificationCode,
          expiryDate: new Date(Date.now() + 24 * (60 * 60 * 1000)),
        };
        client.INCR("id", function (err, id) {
          client.HMSET("user", id, JSON.stringify(userRecord));

          err
            ? reject(err)
            : resolve({
                fullName: data.fullName,
                email: email,
                code: verificationCode,
                expiry: userRecord.expiryDate,
              });
        });
      });
    } catch (error) {
      return error;
    }
  }
};
