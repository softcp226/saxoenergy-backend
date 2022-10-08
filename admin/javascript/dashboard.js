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
const select_element=(id,innerText)=>{
return document.querySelector(`#${id}`).innerHTML=innerText
}
const create_element = (data) => {
    document.querySelector("#user_length").innerHTML=data.user_length;
    document.querySelector(
      "#active_user_length",
    ).innerHTML = `${data.active_users.length} ${data.active_users.percentage}`;
// document.querySelector("#suspended_users_length").innerHTML;
select_element(
  "suspended_users_length",
  `${data.suspended_users.length} ${data.suspended_users.percentage}`,
);
select_element(
  "disabled_users_length",
  `${data.disabled_users.length} ${data.disabled_users.percentage}`,
);
};

(async () => {
  let admin = get_adminInfo("admin");
  let token = get_adminInfo("admin_token");

  try {
    const response = await fetch("/api/admin/dashboard/details", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ admin, token }),
    });
    const result = await response.json();
    if (result.error) {
      alert(error.message);
    }else{
        create_element(result.message);
    }
  } catch (error) {
    alert(error.message);
  }
})();
