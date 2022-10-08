const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to transaction database");

const investment_package_schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  min: {
    type: String,
    required: true,
  },
  max: {
    type: String,
    required: true,
  },
  percentage: {
    type: String,
    required: true,
  },
});
const Investment_package = mongoose.model(
  "investment_package",
  investment_package_schema,
);
module.exports = Investment_package;
