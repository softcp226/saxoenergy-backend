const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to payment proccessing database");
const payment_proccessing_Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  wallet_address: {
    type: String,
    required: true,
  },
  wallet_note: String,
  icon: {
    type: String,
    required: true,
  },
  deposit_enabled: {
    type: Boolean,
    required: true,
    default: false,
  },
  withdrawal_enabled: {
    type: Boolean,
    required: true,
    default: false,
  },
  total_system_earnings: {
    type: String,
    required: true,
  },
  total_funds_added: Number,
  total_users_balance: Number,
  total_referral_commision: Number,
  total_withdrawals: Number,
  pending_withdrawals: Number,
});
const payment_proccessing = mongoose.model(
  "payment_proccessing",
  payment_proccessing_Schema,
);
module.exports = payment_proccessing;
