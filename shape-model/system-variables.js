let currentdate = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let datetime = `${
  monthNames[currentdate.getMonth()]
} ${currentdate.getDate()} ${currentdate.getFullYear()} - ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;

  let date = new Date();

  date.setDate(date.getDate() + 7);

   let expiring_date_string = `${
     monthNames[date.getMonth()]
   } ${date.getDate()} ${date.getFullYear()} - ${date.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;


module.exports={datetime,expiring_date_string}