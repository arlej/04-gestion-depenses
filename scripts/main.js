const inputDescription = document.querySelector(".description");
const inputAmount = document.querySelector(".amount");
const inputCategory = document.querySelector(".category");

const depBtn = document.querySelector(".add-btn");
const depList = document.querySelector(".list-depense");
const depTotal = document.querySelector(".total");

const depListArray = [];

// AFFICHER LISTE
function displayList() {
    depListArray.forEach((item, index) => {
        const [description, amount, category] = item;
        const itemBox = document.createElement("p");
        itemBox.innerHTML = `${description}, ${amount} €, ${category}`;

        // BTN DELETE
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.dataset.index = index;
        deleteBtn.name = "Delete";
        // deleteBtn.setAttribute("class", "add-btn");

        depList.appendChild(itemBox);
        itemBox.appendChild(deleteBtn);
    });
}

// ADD ITEM
depBtn.addEventListener("click", function (e) {
    e.preventDefault();
    depList.innerHTML = "";

    const depDescription = inputDescription.value;
    const depAmount = inputAmount.value;
    const depCategory = inputCategory.value;
    const depNewItem = [depDescription, depAmount, depCategory];

    depListArray.push(depNewItem);
    displayList();
});

// DELETE ITEM
depList.addEventListener("click", function (e) {
    const itemToDelete = e.target.dataset.index;
    depListArray.splice(itemToDelete, 1);

    depList.innerHTML = "";
    displayList();
});

// GENEREATE TOTAL
depAmount.forEach((amount) => {
    // reduce ?
});
