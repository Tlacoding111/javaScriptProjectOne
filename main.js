const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");

myButton.addEventListener("click", () => {
    myHeading.style.color = myTextInput.value;

});

const myList = document.getElementsByTagName("li");

for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = "purple";
}

const odd = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < odd.length; i += 1) {
    odd[i].style.backgroundColor = "lightgray";
}

const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const listButton = document.querySelector("button.description");

listButton.addEventListener("click", () => {
    p.textContent = input.value + ":";
})