// Search Function
function searchDrugs() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let table = document.getElementById("drugTable");
  let rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
      let cells = rows[i].getElementsByTagName("td");
      let drugName = cells[0].textContent.toLowerCase();
      let price = cells[1].textContent.toLowerCase();

      if (drugName.includes(input) || price.includes(input)) {
          rows[i].style.display = "";
      } else {
          rows[i].style.display = "none";
      }
  }
}

// Low Stock Alerts
function checkLowStock() {
  let table = document.getElementById("drugTable");
  let rows = table.getElementsByTagName("tr");
  let lowStockList = document.getElementById("lowStockAlerts");
  lowStockList.innerHTML = "";

  for (let i = 1; i < rows.length; i++) {
      let cells = rows[i].getElementsByTagName("td");
      let stockLevel = parseInt(cells[2].textContent);

      if (stockLevel < 10) {
          let drugName = cells[0].textContent;
          lowStockList.innerHTML += `<p class="low-stock">${drugName} - ${stockLevel} left</p>`;
      }
  }
}

// Record Sales
function recordSale() {
  let drug = document.getElementById("soldDrug").value;
  let qty = document.getElementById("soldQty").value;
  if (drug && qty > 0) {
      document.getElementById("salesList").innerHTML += `<li>${drug} - ${qty} sold</li>`;
  }
}

// Record Restock
function recordRestock() {
  let drug = document.getElementById("restockDrug").value;
  let qty = document.getElementById("restockQty").value;
  if (drug && qty > 0) {
      document.getElementById("restockList").innerHTML += `<li>${drug} - ${qty} restocked</li>`;
  }
}

window.onload = checkLowStock;

let drugs = [
  { name: "Paracetamol / Panadol Blister pack", price: 20, stock: 5 },
  { name: "Amoxicillin 500mg capsules 100s", price: 100, stock: 5 },
  { name: "Amoxicillin 250mg capsules 100s", price: 100, stock: 5 },
  { name: "AL Ionart Tablets 24s", price: 100, stock: 5 }
];

// Save to Local Storage
if (!localStorage.getItem("drugs")) {
  localStorage.setItem("drugs", JSON.stringify(drugs));
}
