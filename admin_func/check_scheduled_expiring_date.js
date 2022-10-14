const Deposit_request = require("../model/deposit_request");
const Expiring_deposit = require("../model/expiring_deposit");
const create_expiring_deposit = async (deposit_ID) => {
  console.log("called");
  const expiring_deposit = await new Expiring_deposit({
    deposit_request: deposit_ID,
  });
  await expiring_deposit.save();
};
const delete_expired_deposit = async (deposit_ID) => {
  try {
    await Deposit_request.findByIdAndDelete(deposit_ID);
  } catch (error) {
    console.log(error);
  }
};

const check_scheduled_expiring_date = async () => {
  const deposit_request = await Deposit_request.find({
    added_to_problem: false,
  });

  if (deposit_request.length < 1)
    return {
      error: true,
      errMessage: "sorry,you no deposit request",
    };
  let up_date = new Date();
  up_date.setDate(up_date.getDate());
  let today = up_date.getTime();

  deposit_request.forEach(async (deposit) => {
    if (
      parseInt(deposit.scheduled_expiring_date) <= parseInt(today) &&
      parseInt(deposit.expiring_datee) >= parseInt(today)
    ) {
      console.log(deposit_request);
      create_expiring_deposit(deposit_request._id);
      return;
    }

    if (
      parseInt(deposit.scheduled_expiring_date) < parseInt(today) &&
      parseInt(deposit.expiring_datee) < parseInt(today)
    ) {
      console.log(deposit_request);
      delete_expired_deposit(deposit_request._id);
      return;
    }
  });
};
