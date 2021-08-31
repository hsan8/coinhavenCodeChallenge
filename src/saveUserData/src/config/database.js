const redis = require("redis");
require("dotenv").config();

const client = redis.createClient({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_PASSWORD,
});

client.on("connect", function () {
  console.log("Start connecting to redis server");
});

module.exports = client;
