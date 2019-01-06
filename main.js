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

const evens = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < evens.length; i += 1) {
    evens[i].style.backgroundColor = "lightgray";
}