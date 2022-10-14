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
//                                                                                 </tr>

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
//   const total_deposit = document.createElement("span");
  const percentage_over_time_td=document.createElement("td")
  const percentage_over_time_br=document.createElement("br");
  const button_container_td=document.createElement("td");
  const edit_btn=document.createElement("a");
  edit_btn.className = "sbmt btn-sm btn-success";
  const delete_btn=document.createElement("a")
  delete_btn.className = "sbmt btn-sm btn-danger";

  document.querySelector("#list").append(container_tr)
};
