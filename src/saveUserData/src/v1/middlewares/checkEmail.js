const httpStatusCode = require("../Util/httpStatusCode.status");
const client = require("../../config/database");

exports.checkEmailIfExist = async (req, res, next) => {
  try {
    client.hgetall("user", function (err, result) {
      if (err) {
        res.json(err);
      } else {
        console.log(result);
        for (var key in result) {
          var value = result[key];
          const obj = JSON.parse(value);
          if (obj.email === req.body.email) {
            console.log("email already exsist");
            res.json({ error: "email already exist" });
            break;
          }
        }
        next();
      }
    });
  } catch (error) {
    res.status(httpStatusCode.INTERNAL_ERROR_SERVER).send({ error: error });
  }
};
