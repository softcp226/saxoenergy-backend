const express = require("express");
const Router = express.Router();
const validateUser = require("../validation/validate_user");
const genToken = require("../token/genToken");
const hashPassword = require("../hash/hashPassword");
const User = require("../model/user");

Router.post("/", async (req, res) => {
  console.log(req.body);
  const isvalid = validateUser(req.body);
  if (isvalid != true)
    return res.status(400).json({ error: true, errMessage: isvalid });

  try {
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(400)
        .json({ error: true, errMessage: "user already exist, please login" });

    const username = await User.findOne({ username: req.body.username });
    console.log(username);
    if (username)
      return res.status(400).json({
        error: true,
        errMessage: "Username already exist, please try a diffrent one",
      });

    const password = await hashPassword(req.body.password);
    const newUser = await new User({
      full_name: req.body.full_name.toUpperCase(),
      username: req.body.username,
      email: req.body.email,
      country: req.body.country,
      password,
      referral_link: `https://www.bristolenergy.ltd?${req.body.username}`,
      referral: req.body.referral,
    });

    const result = await newUser.save();
    console.log("user", result);
    const token = genToken(result._id);
    res.status(200).json({
      error: false,
      message: { user: result._id },
      token,
    });
  } catch (err) {
    return res.status(400).json({ error: true, errMessage: err.message });
  }
});

module.exports = Router;
