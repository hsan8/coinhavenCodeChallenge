const { hashPassword } = require("../Util/passwordHash");
module.exports = class validateUserService {
  static async hashingPassword(req) {
    try {
      const { fullName, email, password } = req.body;
      const newHashedPassword = hashPassword(password);
      return { fullName: fullName, email: email, password: newHashedPassword };
    } catch (error) {
      console.log(error);
    }
  }
};
