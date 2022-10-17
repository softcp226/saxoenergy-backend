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

const create_element = (data) => {
  const container_tr = document.createElement("tr");
  const proccessing_name_td = document.createElement("td");
  const proccessing_name_span = document.createElement("span");
  const proccessing_img_td = document.createElement("td");
  const proccessing_img = document.createElement("img");
  const btn_container_td = document.createElement("td");
  const edit_btn_a=document.createElement("a")
  const delete_btn_a = document.createElement("a");
  data.deposit_enabled ==true ?proccessing_name_span.style.fontWeight="bold":""
  proccessing_name_span.innerHTML=data.name;
  proccessing_img.src=data.icon
  proccessing_img.height="17"
  proccessing_img_td.append(proccessing_img)
 
  edit_btn_a.innerHTML="edit"
  delete_btn_a.innerHTML="delete"
  edit_btn_a.className = "sbmt btn-sm btn-info";
  delete_btn_a.className = "sbmt btn-sm btn-danger";
  btn_container_td.append(edit_btn_a,delete_btn_a)
  proccessing_name_td.append(proccessing_name_span)
  container_tr.append(proccessing_name_td,proccessing_img_td,btn_container_td)
  document.querySelector("#list").append(container_tr)
};

(async () => {
  let admin = get_adminInfo("admin");
  let token = get_adminInfo("admin_token");

  try {
    const response = await fetch("/api/admin/payment_proccessing/fetch", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ admin, token }),
    });
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector("#errMessage").innerHTML = result.errMessage;
    } else {
      result.message.forEach((element) => {
        create_element(element);
      });
    }
  } catch (error) {
    console.log(error);
    document.querySelector("#errMessage").innerHTML = error.message;
  }
})();
