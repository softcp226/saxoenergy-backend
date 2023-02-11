const express = require("express");
const Router = express.Router();
const Transaction = require("../model/transaction");

Router.get("/first_10_withdrawals", async (req, res) => {
  try {
    const first_10_withdrawals = await Transaction.find({
      status: "success",
      // debit:{$regex:/string/}
    })
      .sort({ transaction_date: -1 })
      .limit(10)
      .populate("user");

    let first_10_withdrawals0 = first_10_withdrawals.filter(
      (first_10_withdrawal) => first_10_withdrawal.debit !== undefined,
    );

    if (first_10_withdrawals0.length <= 0)
      return res.status(404).json({
        error: true,
        errMessage: "No withdrawals has been approved at the moment",
      });

    res.status(200).json({ error: false, message: first_10_withdrawals0 });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

Router.get("/first_10_deposits", async (req, res) => {
  try {
    const first_10_deposit = await Transaction.find({
      status: "success",
      // debit:{$regex:/string/}
    })
      .sort({ transaction_date: -1 })
      .limit(10)
      .populate("user");
    let first_10_deposit0 = first_10_deposit.filter(
      (first_10_deposit) => first_10_deposit.credit !== undefined,
    );

    if (first_10_deposit0.length <= 0)
      return res.status(404).json({
        error: true,
        errMessage: "No deposit has been approved at the moment",
      });

    res.status(200).json({ error: false, message: first_10_deposit0 });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});

module.exports = Router;
