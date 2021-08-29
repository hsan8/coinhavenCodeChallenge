const express = require("express");
const app = express();
require("dotenv").config();
const routes = require(`./src/routes`);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", routes);

module.exports = app;
