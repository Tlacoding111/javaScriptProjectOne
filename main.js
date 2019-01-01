const toggleList = document.querySelector("#toggleList");
const listDiv = document.querySelector(".list");
const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");
const myList = document.getElementsByTagName("li");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");

toggleList.addEventListener("click", () => {
    if (listDiv.style.display == "none") {
        toggleList.textContent = "Hide list";
        listDiv.style.display = "block";
    } else {
        toggleList.textContent = "Show list";
        listDiv.style.display = "none";
    }
});

myButton.addEventListener("click", () => {
    myHeading.style.color = myTextInput.value;
});

for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = "purple";
}

const evens = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < evens.length; i += 1) {
    evens[i].style.backgroundColor = "lightgreen";
    evens[i].style.color = "blue";
}

const thirdInput = document.querySelector("input.third");
const thirdP = document.querySelector("p.third");
const thirdButton = document.querySelector("button.third");

thirdButton.addEventListener("click", () => {
    thirdP.textContent = thirdInput.value + ":";
});

addItemButton.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = addItemInput.value;
});