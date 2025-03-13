document
  .getElementById("sold-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let drugName = document.getElementById("sold-drug").value;
    let quantitySold = parseInt(document.getElementById("sold-quantity").value);
    updateStock(drugName, -quantitySold);
  });

document
  .getElementById("restock-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let drugName = document.getElementById("restock-drug").value;
    let quantityRestocked = parseInt(
      document.getElementById("restock-quantity").value
    );
    updateStock(drugName, quantityRestocked);
  });

function updateStock(drugName, quantityChange) {
  let rows = document.querySelectorAll("#drug-list tr");
  let found = false;

  rows.forEach((row) => {
    let name = row.cells[0].textContent;
    let stockCell = row.cells[3];

    if (name.toLowerCase() === drugName.toLowerCase()) {
      let newStock = parseInt(stockCell.textContent) + quantityChange;
      stockCell.textContent = newStock;
      found = true;

      if (newStock <= 5) {
        document.getElementById(
          "low-stock-msg"
        ).textContent = `⚠️ ${drugName} is running out of stock!`;
      }
    }
  });

  if (!found) {
    alert("Drug not found in inventory.");
  }
}
