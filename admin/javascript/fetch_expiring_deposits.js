let row_number = 1;
construct_row_number = () => (row_number == 1 ? ++row_number : --row_number);

const create_element = (data) => {
  const container_tr = document.createElement("tr");
  const username_td = document.create_element("td");
  const percentage_td=document.createElement("td");
  const deposit_amount_td=document.createElement("td");
  const deposit_method_img=document.createElement("img");
 const expiring_time_td = document.createElement("td");
 const button_container_td=document.createElement("td")
 const account_btn_a=document.createElement("a");
 account_btn_a.className = "sbmt btn-sm btn-success";

 const funds_btn_a=document.createElement("a")
 funds_btn_a.className = "sbmt btn-sm btn-info";
};
