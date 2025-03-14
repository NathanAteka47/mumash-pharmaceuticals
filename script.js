document.addEventListener("DOMContentLoaded", function () {
  const salesForm = document.getElementById("sales-form");
  const salesList = document.getElementById("sales-list");
  const restockForm = document.getElementById("restock-form");
  const restockList = document.getElementById("restock-list");

  // Load saved sales data
  function loadSales() {
      const sales = JSON.parse(localStorage.getItem("sales")) || [];
      salesList.innerHTML = "";
      sales.forEach((sale, index) => {
          const li = document.createElement("li");
          li.textContent = `${sale.name} - ${sale.quantity} units @ Ksh ${sale.price} each`;
          salesList.appendChild(li);
      });
  }

  // Load saved restock data
  function loadRestocks() {
      const restocks = JSON.parse(localStorage.getItem("restocks")) || [];
      restockList.innerHTML = "";
      restocks.forEach((restock, index) => {
          const li = document.createElement("li");
          li.textContent = `${restock.name} - ${restock.quantity} units from ${restock.supplier}`;
          restockList.appendChild(li);
      });
  }

  // Handle sales form submission
  if (salesForm) {
      salesForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const name = document.getElementById("drug-name").value;
          const quantity = document.getElementById("quantity").value;
          const price = document.getElementById("price").value;

          const sales = JSON.parse(localStorage.getItem("sales")) || [];
          sales.push({ name, quantity, price });
          localStorage.setItem("sales", JSON.stringify(sales));

          document.getElementById("sales-form").reset();
          loadSales();
      });

      loadSales();
  }

  // Handle restock form submission
  if (restockForm) {
      restockForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const name = document.getElementById("restock-name").value;
          const quantity = document.getElementById("restock-quantity").value;
          const supplier = document.getElementById("supplier").value;

          const restocks = JSON.parse(localStorage.getItem("restocks")) || [];
          restocks.push({ name, quantity, supplier });
          localStorage.setItem("restocks", JSON.stringify(restocks));

          document.getElementById("restock-form").reset();
          loadRestocks();
      });

      loadRestocks();
  }
});
