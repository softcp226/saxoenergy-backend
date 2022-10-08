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
// // console.log(datetime)
// // console.log()



const fetch = require("isomorphic-fetch");
const approve_deposit = async (user_form) => {

  try {
    const response = await fetch("http://localhost:3000/api/admin/deposit/approve", {
      method: "POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(user_form)

    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
approve_deposit({
  admin: "632c45376d593dd16347a6ca",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyYzQ1Mzc2ZDU5M2RkMTYzNDdhNmNhIiwiaWF0IjoxNjY0ODEwMjQyfQ.mso3hVtvvYkZV3Zwi0sAoX7ZbManPl5sAhdFGxMTGBc",
  deposit_request: "633b1bdef9c41a174bd49241",
  deposit_amount: 100000,
});