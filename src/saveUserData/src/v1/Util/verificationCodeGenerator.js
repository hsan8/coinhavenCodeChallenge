const referralCodes = require("referral-codes");
exports.getCode = () => {
  try {
    return referralCodes.generate({
      count: 1,
      length: 30,
    })[0];
  } catch (e) {
    return;
  }
};
