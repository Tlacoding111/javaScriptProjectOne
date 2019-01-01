const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");
const myList = document.getElementsByTagName("li");

myButton.addEventListener("click", () => {
    myHeading.style.color = myTextInput.value;
});

for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = "purple";
}

const notPurple = document.querySelectorAll(".error");

for (let i = 0; i < notPurple.length; i += 1) {
    notPurple[i].style.color = "blue";
}
const evens = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < evens.length; i += 1) {
    evens[i].style.backgroundColor = "lightgray";
}