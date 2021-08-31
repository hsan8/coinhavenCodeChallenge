const httpStatusCode = require("../Util/httpStatusCode.status");
const { check, validationResult } = require("express-validator");
exports.validateUser = [
  check("email").isEmail().normalizeEmail().withMessage("E-mail not valid"),
  check("fullName")
    .notEmpty()
    .withMessage("The full name required")
    .isLength({ min: 3 })
    .withMessage("The full name must be with 3 chars as min"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password required")
    .isLength({ min: 5 })
    .withMessage("password must be minimum 5 length")
    .matches(/(?=.*?[A-Z])/)
    .withMessage("At least one Uppercase")
    .matches(/(?=.*?[a-z])/)
    .withMessage("At least one Lowercase")
    .matches(/(?=.*?[0-9])/)
    .withMessage("At least one Number")
    .matches(/(?=.*?[#?!@$%^&*-])/)
    .withMessage("At least one special character")
    .not()
    .matches(/^$|\s+/)
    .withMessage("White space not allowed"),

  (req, res, next) => {
    const errors = validationResult(req);
    !errors.isEmpty()
      ? res
          .status(httpStatusCode.OK)
          .send({ status: "fails", errors: errors.array() })
      : next();
  },
];
