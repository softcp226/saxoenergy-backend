const express = require("express");
const Router = express.Router();
const verifyToken = require("../secure-admin-api/verifyToken");
const Investment_Package = require("../model/investment-package");
const Admin = require("../model/admin");
const validate_admin_fetch_investentPackages = require("../validation/validate-admin-dashboard");
Router.post("/", verifyToken, async (req, res) => {
  const request_isvalid = validate_admin_fetch_investentPackages(req.body);
  if (request_isvalid != true)
    return res.status(400).json({ error: true, errMessage: request_isvalid });

  try {
    const admin = await Admin.findById(req.body.admin);
    if (!admin)
      return res.status(403).json({
        error: true,
        errMessage: "Forbidden!, please login again to access this api",
      });
    const investment_Packages = await Investment_Package.find().populate("user");
    if (investment_Packages.length < 1)
      return res.status(400).json({
        error: true,
        errMessage: "No investment package has been created at the moment",
      });
    res.status(200).json({ error: false, message: investments });
  } catch (error) {
    res.status(400).json({ error: true, errMessage: error.message });
  }
});
module.exports = Router;
