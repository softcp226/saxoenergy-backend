const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to user database");
const { datetime } = require("../shape-model/system-variables");


const userSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  country: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  final_balance: {
    type: Number,
    default: 5,
  },
  total_deposit: {
    type: Number,
    default: 0,
  },
  total_withdrawal: {
    type: Number,
    default: 0,
  },
  profit_loss: {
    type: Number,
    default: 0,
  },
  active_investment: {
    type: Number,
    default: 0,
  },
  total_earning:{
     type: Number,
     required:true,
    default: 0,
  },
  referral_bonus: {
    type: Number,
    default: 0,
  },
  referral_link: String,
  made_first_deposit: {
    type: Boolean,
    required: true,
    default: false,
  },
  referral: String,
  registration_date: {
    type: String,
    required: true,
    default: datetime,
  },
  is_suspended: {
    type: Boolean,
    required: true,
    default: false,
  },
  is_disabled: {
    type: Boolean,
    required: true,
    default: false,
  },
  status: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
