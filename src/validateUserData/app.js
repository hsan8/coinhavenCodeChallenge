var createError = require("http-errors");
var express = require("express");
var app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes handler
require(`./src/${process.env.VERSION}/routes`)(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
