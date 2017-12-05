const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "/.env")
});

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "okodin_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "okodin_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "okodin_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
