const inputDescription = document.querySelector(".description");
const inputAmount = document.querySelector(".amount");
const inputCategory = document.querySelector(".category");
const inputDate = document.querySelector(".date");

const depBtn = document.querySelector(".add-btn");
const depList = document.querySelector(".list-depense");
const depTotal = document.querySelector(".total");

const depListArray = [];

// FUNCTION DISPLAY LIST
function displayList() {
    depListArray.forEach((item, index) => {
        const [description, amount, category, date] = item;
        const itemBox = document.createElement("p");
        itemBox.className = "list-item";
        itemBox.innerHTML = `${description}, ${amount} €, ${category}, ${date}`;

        // COLOR BY CATEGORY
        if (category === "alimentation") {
            itemBox.className = "list-item-alimentation";
        } else if (category === "transport") {
            itemBox.className = "list-item-transport";
        } else if (category === "logement") {
            itemBox.className = "list-item-logement";
        } else if (category === "divertissement") {
            itemBox.className = "list-item-divertissement";
        }

        // BTN DELETE
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.dataset.index = index;
        deleteBtn.className = "btn-delete";

        depList.appendChild(itemBox);
        itemBox.appendChild(deleteBtn);
    });
    inputDescription.value = "";
    inputAmount.value = "";
    inputCategory.value = "";
}

// FUNCTION DELETE ITEM
function deleteItem() {
    depList.addEventListener("click", function (e) {
        const itemToDelete = e.target.dataset.index;
        depListArray.splice(itemToDelete, 1);

        depList.innerHTML = "";
        displayList();
        generateTotal();
    });
}

// FUNCTION GENERATE TOTAL
function generateTotal() {
    depTotal.innerHTML = "";
    let total = 0;
    let totalAlimentation = 0;
    let totalLogement = 0;
    let totalTransport = 0;
    let totalDivertissement = 0;

    depListArray.forEach((item) => {
        const amount = item[1];
        const category = item[2];

        if (category === "alimentation") {
            totalAlimentation += Number(amount);
        } else if (category === "logement") {
            totalLogement += Number(amount);
        } else if (category === "transport") {
            totalTransport += Number(amount);
        } else if (category === "divertissement") {
            totalDivertissement += Number(amount);
        }

        total += Number(amount);
        console.log(total);
        depTotal.innerHTML = `Total = ${total} € <br>
        | Alimentation = ${totalAlimentation} € 
        | Logement = ${totalLogement} € 
        | Transport = ${totalTransport} € 
        | Divertissement = ${totalDivertissement}`;
    });
}

// ADD ITEM
depBtn.addEventListener("click", function (e) {
    e.preventDefault();
    depList.innerHTML = "";

    const depDescription = inputDescription.value;
    const depAmount = inputAmount.value;
    const depCategory = inputCategory.value;
    const depDate = inputDate.value;
    const depNewItem = [depDescription, depAmount, depCategory, depDate];

    depListArray.push(depNewItem);
    displayList();
    generateTotal();
});

deleteItem();