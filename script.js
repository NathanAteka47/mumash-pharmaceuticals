// Function to Search Drugs by Name or Price
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

// Function to Check Low Stock and Alert User
function checkLowStock() {
    let table = document.getElementById("drugTable");
    let rows = table.getElementsByTagName("tr");
    let lowStockList = document.getElementById("lowStockAlerts");
    lowStockList.innerHTML = ""; // Clear previous alerts

    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let stockLevel = parseInt(cells[2].textContent);

        if (stockLevel < 10) { // Low stock threshold
            let drugName = cells[0].textContent;
            let alertMessage = `<p class="low-stock">${drugName} - ${stockLevel} left</p>`;
            lowStockList.innerHTML += alertMessage;
        }
    }
}

// Run low stock check on page load
window.onload = checkLowStock;
