//  <tr class="row1">
//                                                                                     <td style="text-align:center"> <br>
//                                                                                         <a href="?a=programs&amp;action=down&amp;id=1&amp;form_id=16637567271321&amp;form_token=4a53101d60527411b5271f9b1582b34c"
//                                                                                             class="arrs">▾</a> </td>
//                                                                                     <td><b>8% After 24 hours</b> </td>
//                                                                                     <td>
//                                                                                         <nobr>Limits: $50.00 - $499.00
//                                                                                         </nobr><br> Total: &nbsp; <span
//                                                                                             class="badge badge-primary">2392</span>
//                                                                                         <span
//                                                                                             class="badge badge-success">$443244.40</span><br>
//                                                                                         Active: <span
//                                                                                             class="badge badge-danger">82</span>
//                                                                                         <span
//                                                                                             class="badge badge-warning">$17225.01</span>
//                                                                                     </td>
//                                                                                     <td>8.00% / after 24 hours<br> +
//                                                                                         return 100.00% principal</td>
//                                                                                     <td> <a href="?a=programs&amp;action=edit&amp;id=1"
//                                                                                             class="sbmt btn-sm btn-success"
//                                                                                             style="margin-bottom:2px;">edit</a><br>
//                                                                                         <a href="?a=programs&amp;action=delete&amp;id=1&amp;form_id=16637567271321&amp;form_token=4a53101d60527411b5271f9b1582b34c"
//                                                                                             class="sbmt btn-sm btn-danger"
//                                                                                             style="margin-bottom:2px;"
//                                                                                             onclick="return confirm('  Are you sure delete this package? All users deposits in this package will be lost!  ')">delete</a>
//                                                                                     </td>
//                                                                           </tr>




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

// document.create_element ;

let row_number = 1;
construct_row_number = () => (row_number == 1 ? ++row_number : --row_number);




const create_element = (data) => {
  const container_tr = document.createElement("tr");
  const down_arrow_td = document.createElement("td");
  const down_arrow_br = document.createElement("br");
  const down_arrow_a = document.createElement("a");
  down_arrow_a.innerHTML = "▾";
  const percentage_td = document.createElement("td");
  const percentage_b = document.createElement("b");
  const limits_container_td = document.createElement("td");
  const limits_nobr = document.createElement("nobr");
  const nobr_br=document.createElement("br");
  const total_invest_span=document.createElement("span");
  const total_amount_span = document.createElement("span");
  const active_invest_span = document.createElement("span");
  const total_active_span= document.createElement("span");
  const active_br=document.createElement("br")
  const percentage_over_time_td=document.createElement("td")
  const percentage_over_time_br=document.createElement("br");
  const button_container_td=document.createElement("td");
  const edit_btn=document.createElement("a");
  edit_btn.className = "sbmt btn-sm btn-success";
  edit_btn.innerHTML="edit";
  const plan_container_tr=document.createElement("tr");
  const plan_container_td = document.createElement("td");
  const plan_container_table=document.createElement("table")
const plan_container_tbody=document.createElement("tbody");
const plan_tr = document.createElement("tr");
const  plan_td=document.createElement("td")
const plan_price_td = document.createElement("td");
const plan_percentage_td = document.createElement("td");
plan_container_tr.className = `row${construct_row_number()}`;

  const delete_btn=document.createElement("a")
  delete_btn.className = "sbmt btn-sm btn-danger";
  delete_btn.innerHTML="delete"

  container_tr.className=`row${construct_row_number()}`

  down_arrow_td.style.textAlign="center";
  down_arrow_td.append(down_arrow_a)
  down_arrow_a.href =
    "?a=programs&amp;action=down&amp;id=1&amp;form_id=16637567271321&amp;form_token=4a53101d60527411b5271f9b1582b34c";

    percentage_td.append(percentage_b)
    percentage_b.innerHTML=`${data.percentage}% After 24 hours`;
    limits_container_td.append(limits_nobr)
    limits_nobr.innerHTML=`Limits $${data.min} - $${data.max}`
     const limits_container_br=document.createElement("br")
     total_invest_span.className = "badge badge-primary";
     total_invest_span.innerHTML="0"
     total_amount_span.className="badge badge-success"
     total_amount_span.innerText=`$${ '0'}`
     active_invest_span.innerText = `$${"0"}`;
     active_invest_span.className = "badge badge-danger";
total_active_span.className = "badge badge-warning";
total_active_span.innerText = `$${"0"}`;

    limits_container_td.append(limits_container_br, "Total: ", total_invest_span,  total_amount_span,active_br,"Active:", active_invest_span,total_active_span);
   percentage_over_time_td.innerText = `${data.percentage}% After 24 hours`;
   percentage_over_time_td.append(percentage_over_time_br);
   percentage_over_time_td.append("+ return 100.00% principal");
  button_container_td.append(edit_btn,delete_btn)

   container_tr.append(down_arrow_td,percentage_td,limits_container_td,percentage_over_time_td,button_container_td);
 
 plan_container_td.colSpan="5"
 plan_container_table.cellSpacing="0"
 plan_container_table.cellPadding="2";
 plan_container_table.border="0";
 plan_container_table.width="66%";
 plan_container_table.align="right";
 plan_container_table.style.paddingBottom="20px";
 plan_container_table.style.marginRight="60px";

 plan_container_tr.onmouseover = "bgColor='#FFECB0';";
  plan_container_tr.onmouseout = "bgColor='';";
  plan_container_td.width="120"
  plan_container_td.innerHTML = `${data.name}`;

  plan_container_tr.append(plan_container_td)
 plan_container_tbody.append(plan_container_tr);

 plan_container_table.append(plan_container_tbody)
// plan_price_td.append(plan_container_table);

 plan_price_td.align="right"
 plan_price_td.innerHTML=`${data.min} - ${data.max}`

   plan_container_tr.append(plan_container_td,plan_price_td)

  document.querySelector("#list").append(container_tr,plan_container_tr)
};








(async () => {
  let admin = get_adminInfo("admin");
  let token = get_adminInfo("admin_token");

  try {
    const response = await fetch("/api/admin/investment_packages", {
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
