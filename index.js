const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
app.use("/", express.static("html"));

app.use("/admin", express.static("admin"));
const admin_login = require("./admin_api/login");
app.use("/api/admin/login", admin_login);
const admin_fetchuser = require("./admin_api/fetch_user");
app.use("/api/admin/fetch_users", admin_fetchuser);
const admin_deleteuser = require("./admin_api/delete_user");
app.use("/api/admin/users/delete_user", admin_deleteuser);
const admin_fetch_deposit_request = require("./admin_api/fetch_deposit_request");
app.use("/api/admin/deposit_request", admin_fetch_deposit_request);
const approve_deposit = require("./admin_api/approve_deposit");
app.use("/api/admin/deposit/approve", approve_deposit);

const admin_approve_withdrawal = require("./admin_api/approve_withdrawal");
app.use("/api/admin/withdrawal/approve", admin_approve_withdrawal);

const user_edit = require("./admin_api/edit_user");
app.use("/api/admin/user/edit", user_edit);

const admin_fetch_dashboard_details = require("./admin_api/dashboard");
app.use("/api/admin/dashboard/details", admin_fetch_dashboard_details);
//dashboard
const fund_user = require("./admin_api/fund_user");
app.use("/api/admin/user/fund", fund_user);
const admin_fetch_investment = require("./admin_api/fetch_investment");
app.use("/api/admin/investment/fetch", admin_fetch_investment);
const admin_cancel_investment = require("./admin_api/cancel_investment");
app.use("/api/admin/investment/cancel", admin_cancel_investment);
const admin_fetch_withdrawal = require("./admin_api/fetch_withdrawal");
app.use("/api/admin/withdrawal/fetch", admin_fetch_withdrawal);
const investment_packages = require("./admin_api/investment_package");
app.use("/api/admin/investment_packages", investment_packages);

const login = require("./api/login");
app.use("/api/user/login", login);
const register = require("./api/register");
app.use("/api/newuser/register", register);
// const complete_registration = require("./api/complete-registration");
// app.use("/api/new_user/complete_registration", complete_registration);
// /api/admin/deposit_request
const find_user = require("./api/find_user");
app.use("/api/user/find", find_user);
const create_new_deposit = require("./api/deposit_request");
app.use("/api/user/create_deposit", create_new_deposit);
const complete_deposit = require("./api/complete_deposit");
app.use("/api/user/deposit/complete", complete_deposit);
const fetch_transactions = require("./api/fetch_transactions");
app.use("/api/user/transactions/fetch", fetch_transactions);
const create_investment = require("./api/create_investment");
app.use("/api/user/create_investment", create_investment);

const cancel_investment = require("./api/cancel_investment");
app.use("/api/user/investment/cancel", cancel_investment);

const fetch_investment = require("./api/fetch_investment");
app.use("/api/user/investments/fetch", fetch_investment);

const withdrawal = require("./api/withdraw");
app.use("/api/user/withdraw", withdrawal);

const forgotten_password = require("./api/forgotten-password");
app.use("/api/password/forgotten", forgotten_password);
const reset_password = require("./api/reset-password");
app.use("/api/user/password/reset", reset_password);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`running on port ${port}`));
