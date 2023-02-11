// // // let currentdate = new Date();
// // // const monthNames = [
// // //   "January",
// // //   "February",
// // //   "March",
// // //   "April",
// // //   "May",
// // //   "June",
// // //   "July",
// // //   "August",
// // //   "September",
// // //   "October",
// // //   "November",
// // //   "December",
// // // ];

// // // let datetime = `${
// // //   monthNames[currentdate.getMonth()]
// // // } ${currentdate.getDate()} ${currentdate.getFullYear()} - ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
// // // // console.log(datetime)
// // // // console.log()

// // const fetch = require("isomorphic-fetch");
// // const approve_deposit = async (user_form) => {

// //   try {
// //     const response = await fetch("http://localhost:3000/api/admin/deposit/approve", {
// //       method: "POST",
// //       headers:{"content-type":"application/json"},
// //       body:JSON.stringify(user_form)

// //     });
// //     const result = await response.json();
// //     console.log(result);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // approve_deposit({
// //   admin: "632c45376d593dd16347a6ca",
// //   token:
// //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyYzQ1Mzc2ZDU5M2RkMTYzNDdhNmNhIiwiaWF0IjoxNjY0ODEwMjQyfQ.mso3hVtvvYkZV3Zwi0sAoX7ZbManPl5sAhdFGxMTGBc",
// //   deposit_request: "633b1bdef9c41a174bd49241",
// //   deposit_amount: 100000,
// // });

// const set_expiring_date = (req) => {
//   let date = new Date();
//   date.setDate(date.getDate() + 7);
//   let end_date = date.getDate();
//   return end_date;
// };
// console.log(set_expiring_date());

// let currentdate = new Date();
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// let datetime = `${
//   monthNames[currentdate.getMonth()]
// } ${currentdate.getDate()} ${currentdate.getFullYear()} - ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

//   let date = new Date();

// date.setDate(date.getDate() + 18);

// let result = `${
//   monthNames[date.getMonth()]
// } ${date.getDate()} ${date.getFullYear()} - ${date.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

// console.log(result)

// const Payment_proccessing = require("./model/proccessings");

// const create_payment_proccessing = async () => {
//   try {
//     const payment_processing = await new Payment_proccessing({
//       name: "Bitcoin",
//       wallet_address: "btc-wallet-me",
//       // wallet_note:`send ${"am"}`
//       icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTuyc5UTf_-kvmj_bwOPbFvZvoq-LhlkO7OV6B5ZAb_Qgx9iwYQlah17gnnlrn1r-RW8&usqp=CAU",
//       deposit_enabled: true,
//       withdrawal_enabled: true,
//       total_system_earnings: 0,
//       total_users_balance: 0,
//       total_referral_commision: 0,
//       total_withdrawals: 0,
//       pending_withdrawals: 0,
//     });
//     await payment_processing.save();
//     console.log(payment_processing);
//   } catch (error) {
//     console.log(error);
//   }
// };
// create_payment_proccessing();

// const Investment_Package=require("./model/investment-package");

// const create_investment_package=async()=>{
// try {
//   const investment_package=await new Investment_Package({
//    name:"Basic Plan" ,
//    min:50,
//    max:500,
//    percentage:20
//   })
//   const result=await investment_package.save()
//   console.log(result)
// } catch (error) {
//  console.log(error) 
// }
// }
// create_investment_package()





const Transaction=require("./model/transaction")
const create_transaction = async () => {
  const transaction = await new Transaction({
    refrence_number: "user made sec deposit",
    transaction_date: "12/12/2025",
    credit: "$550",
    status: "success",
  });
  const result = await transaction.save();
  console.log(result) ;
};


create_transaction()
