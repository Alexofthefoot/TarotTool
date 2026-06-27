const DEFAULT_POSITIONS = ['Past', 'Present', 'Future'];
const DEFAULT_NUMBER_OF_CARDS = 3;
let CURRENT_NUMBER_OF_CARDS = 3;

function setButtons(num) {
    if (num == CURRENT_NUMBER_OF_CARDS) {
        return;
    }
    else if (num > CURRENT_NUMBER_OF_CARDS) {
        addbuttons(num - CURRENT_NUMBER_OF_CARDS);
    }
    else {
        removebuttons(CURRENT_NUMBER_OF_CARDS - num);
    }
    CURRENT_NUMBER_OF_CARDS = num;
}

//adds the desired number of buttons to HTML structure
function addbuttons(num) {
    const parentDiv = document.getElementById("spreadBoard");
    for (let i = 0; i < num; i++) {
        const newDiv = document.createElement("div");
        const newButton = document.createElement("button");
        const newImg = document.createElement("img");
        const newSubDiv = document.createElement("div");

        newDiv.className = "spread-slot";
        newButton.type = "button";
        newButton.className = "card-selection-btn";
        newImg.src = "../frontend/assets/Cards-png/CardBacks.png";
        newSubDiv.className = "card-position-label";
        newSubDiv.contentEditable = "true";

        newDiv.append(newButton);
        newDiv.append(newSubDiv);
        newButton.append(newImg);
        parentDiv.append(newDiv);
    }
}

//removes the desired number of buttons from HTML structure
function removebuttons(num) {
    const parentDiv = document.getElementById("spreadBoard");
    for (let i = 0; i < num; i++) {
        parentDiv.children[parentDiv.children.length - 1].remove();
    }
}

function clearPositions() {
    const labels = document.getElementsByClassName("card-position-label");
    for (let i = 0; i < CURRENT_NUMBER_OF_CARDS && i < DEFAULT_POSITIONS.length; i++) {
        labels[i].innerHTML = "";
    }
}

//should this reset card number too?
function resetPositions() {
    const labels = document.getElementsByClassName("card-position-label");
    for (let i = 0; i < CURRENT_NUMBER_OF_CARDS && i < DEFAULT_POSITIONS.length; i++) {
        labels[i].innerHTML = DEFAULT_POSITIONS[i];
    }
}



