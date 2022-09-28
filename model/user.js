const mongoose = require("mongoose");
const connect = require("./dbConnector");
connect("connected to user database");

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

  password: {},
  final_balance: {
    type: Number,
    default: 5,
  },
  profit_loss: {
    type: Number,
    default: 0,
  },
  active_investment: {
    type: Number,
    default: 0,
  },
  referral_bonus: {
    type: Number,
    default: 0,
  },
  referral_link: String,
  has_made_deposit: {
    type: Boolean,
    required: true,
    default: false,
  },
  referral: String,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
