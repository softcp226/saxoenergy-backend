const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to transaction database");
require("./user");
const transaction_Schema = mongoose.Schema({
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  refrence_number: {
    type: String,
    required: true,
  },
  transaction_date: {
    type: String,
    required: true,
    // default: Date.now(),
  },
  debit: String,
  credit: String,
  status: {
    type: String,
    required: true,
    enum: ["pending", "success", "failed"],
  },
});

const Transaction = mongoose.model("transaction", transaction_Schema);
module.exports = Transaction;



