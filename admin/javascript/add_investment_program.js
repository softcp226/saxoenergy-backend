const get_adminInfo = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  // return "";
  window.location.href = "/admin";
};

const show_input_error = (input) => {
  input.style.border = "2px solid red";
};

const package_name = document.querySelector("#package_name");
const package_door = document.querySelector("#package_door");
const package_status = document.querySelector("#package_status");
const payment_period = document.querySelector("#payment_period");
const package_name01 = document.querySelector("#package_name01");
const min_amount = document.querySelector("#min_amount");
const max_amount = document.querySelector("#max_amount");
const percentage = document.querySelector("#percentage");

const add_investment_program = async (data) => {
  alert("called");
  document.querySelector("#save").value = "proccessing";
  try {
    const response = await fetch("/api/admin/investment_packages/edit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector("#save").value = "Try again";
      document.querySelector("#errMessage").innerHTML = result.errMessage;
    } else {
      document.querySelector("#save").value = "Success";
      window.location.href = `/admin/investment-program.html`;
    }
  } catch (error) {
    console.log(error);
    document.querySelector("#save").value = "Try again";

    document.querySelector("#errMessage").innerHTML = error.message;
  }
};

document.querySelector("#save").onclick = () => {
  event.preventDefault();
  if (!package_name.value) return show_input_error(package_name);
  if (!package_door.value) return show_input_error(package_door);
  if (!package_status.value) return show_input_error(package_status);
  if (!payment_period.value) return show_input_error(payment_period);
  if (!package_name01.value) return show_input_error(package_name01);
  if (!min_amount.value) return show_input_error(min_amount);
  if (!max_amount.value) return show_input_error(max_amount);
  if (!percentage.value) return show_input_error(percentage);
 
    let admin = get_adminInfo("admin");
    let token = get_adminInfo("admin_token");

  add_investment_program({
    admin,
    token,
    package_name: package_name.value,
    package_door: package_door.value,
    package_status: package_status.value,
    payment_period: payment_period.value,
    min: min_amount.value,
    max: max_amount.value,
    percentage: percentage.value,
  });
};

document.querySelectorAll("input").forEach(
  (input) =>
    (input.onkeyup = () => {
      input.style.border = "1px inset #FEE498";
    }),
);
document.querySelectorAll("select").forEach(
  (select) =>
    (select.onchange = () => {
      input.style.border = "1px inset #FEE498";
    }),
);
