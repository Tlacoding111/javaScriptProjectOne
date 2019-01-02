const toggleList = document.querySelector("#toggleList");
const listDiv = document.querySelector(".list");
const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");
const myList = document.getElementsByTagName("li");
const listUl = listDiv.querySelector("ul");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const groceryItemInput = document.querySelector("input.groceryItemInput");
const groceryItemButton = document.querySelector("button.groceryItemButton");
const newItemInput = document.querySelector("input.newItemInput");
const newItemButton = document.querySelector("button.newItemButton");
const evens = document.querySelectorAll("li:nth-child(odd)");
// const lis = litUl.children;


function colorMe() {
    const myList = document.getElementsByTagName("li");
    for (let i = 0; i < myList.length; i += 1) {
        myList[i].style.color = "purple";
    }
    for (let i = 0; i < evens.length; i += 1) {
        evens[i].style.backgroundColor = "lightgreen";
        evens[i].style.color = "blue";
    }
}


function attachListItemButtons(li) {
    let up = document.createElement("button");
    up.className = "up";
    up.textContent = "Up";
    li.appendChild(up);

    let down = document.createElement("button");
    up.className = "down";
    up.textContent = "Down";
    li.appendChild(down);

    let remove = document.createElement("button");
    up.className = "remove";
    up.textContent = "Remove";
    li.appendChild(remove);
}

// for (let i = 0; i < lis.length; i += 1) {
//     attachListItemButtons(lis[i]);
// }

listUl.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
        if (event.target.className = "remove") {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (event.target.className == "up") {
            let li = event.target.parentNode;
            let prevLi = li.previousElementsSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi)
            }
        }
        if (event.target.className == "down") {
            let li = event.target.parentNode;
            let nextLi = li.nextElementsSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi, prevLi)
            }
        }
    }
})

// listDiv.addEventListener("mouseover", (event) => {
//     if (event.target.tagName == "LI") {
//         event.target.textContent = event.target.textContent.toUpperCase();
//     }
// });
// listDiv.addEventListener("mouseout", (event) => {
//     if (event.target.tagName == "LI") {
//         event.target.textContent = event.target.textContent.toLowerCase();
//     }
// });


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



const thirdInput = document.querySelector("input.third");
const thirdP = document.querySelector("p.third");
const thirdButton = document.querySelector("button.third");

thirdButton.addEventListener("click", () => {
    thirdP.textContent = thirdInput.value + ":";
    thirdInput.value = "";
});

//Add

addItemButton.addEventListener("click", () => {
    let ul = document.getElementsByClassName("bringList")[0];
    let li = document.createElement("li");
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = "";
    colorMe();
});

groceryItemButton.addEventListener("click", () => {
    let ul = document.getElementsByClassName("groceryList")[0];
    let li = document.createElement("li");
    li.textContent = groceryItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    groceryItemInput.value = "";
    colorMe();
});

newItemButton.addEventListener("click", () => {
    let ul = document.getElementsByClassName("newList")[0];
    let li = document.createElement("li");
    li.textContent = newItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    newItemInput.value = "";
    colorMe();
});




