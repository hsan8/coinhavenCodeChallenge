var createError = require("http-errors");
var express = require("express");
require("dotenv").config();

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes handler
require(`./src/${process.env.VERSION}/routes`)(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
