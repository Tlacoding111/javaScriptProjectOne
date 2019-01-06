const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");

myButton.addEventListener("click", () => {
    myHeading.style.color = myTextInput.value;

});

const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");

toggleList.addEventListener("click", () => {
    if (listDiv.style.display == "none") {
        toggleList.textContent = "Hide List";
       listDiv.style.display = "block"; 
    } else {
        toggleList.textContent = "Show List";
        listDiv.style.display = "none";
    }
})

const myList = document.getElementsByTagName("li");

for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = "purple";
}

const odd = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < odd.length; i += 1) {
    odd[i].style.backgroundColor = "lightgray";
}

const descriptionInput = document.querySelector("input.description");
const descriptionP = document.querySelector("p.description");
const listButton = document.querySelector("button.description");

listButton.addEventListener("click", () => {
    descriptionP.textContent = descriptionInput.value + ":";
    descriptionInput.value = "";
});

const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemInput");

addItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = "";
});

const removeItemButton = document.querySelector("button.removeItemButton");

removeItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.querySelector("li:last-child");
    ul.removeChild(li);
});