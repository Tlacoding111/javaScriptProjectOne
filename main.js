const myHeading = document.getElementById("myHeading");
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");

myButton.addEventListener("click", () => {
    myHeading.textContent = myTextInput.value;

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

function attachListItemButtons(li) {
    let up = document.createElement("button");
    up.className = "up";
    up.textContent = "Up";
    li.appendChild(up);

    let down = document.createElement("button");
    down.className = "down";
    down.textContent = "Down";
    li.appendChild(down);

    let remove = document.createElement("button");
    remove.className = "remove";
    remove.textContent = "Remove";
    li.appendChild(remove);
}


// function makeItColor(li) {
//     const myList = document.getElementsByTagName("li");

//     for (let i = 0; i < myList.length; i += 1) {
//         myList[i].style.color = "red";
//     }

//     const odd = document.querySelectorAll("li:nth-child(odd)");

//     for (let i = 0; i < odd.length; i += 1) {
//         odd[i].style.backgroundColor = "lightskyblue";
//     }
// }

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
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = "";
});

const listUl = listDiv.querySelector("ul");

listUl.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
        if (event.target.className == "remove") {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (event.target.className== "up") {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }
        if (event.target.className== "down") {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
        }
        }
    }
});


// const firstListItem = listUl.firstElementChild;
// const lastListItem = listUl.lastElementChild;

// firstListItem.style.backgroundColor = "lightskyblue";
// lastListItem.style.backgroundColor = "lightsteelblue";