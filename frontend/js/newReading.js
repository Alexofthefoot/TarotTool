const DEFAULT_POSITIONS = ['Past', 'Present', 'Future'];
const DEFAULT_NUMBER_OF_CARDS = 3;
let CURRENT_NUMBER_OF_CARDS = 3;

function setupEventHandlers() {
    //The button-row buttons
    const parentDiv = document.getElementById("number-button-row");
    for (let i = 0; i < parentDiv.children.length; i++) {
        const button = parentDiv.children[i];
        button.addEventListener("click", () => {
            changeNumberofCards(i + 1);
            console.log('firing the set buttons event for ', i + 1);
        });
    }
    // The spread board card/buttons
    const spreadBoard = document.getElementById('spreadBoard');
    for (let i = 0; i < spreadBoard.children.length; i++) {
        const idVal = 'spread-' + (i + 1);
        const btn = document.getElementById(idVal);
        btn.addEventListener("click", () => {
            openModal(i + 1);
        });
    }
    // Closing the modal window
    const modal = document.getElementById("modal-window");
    const span = document.getElementById('close-modal');
    span.addEventListener("click", () => {
        modal.style.display = "none";
        console.log('closing modal window via span event listener');
    });
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            console.log('closing modal window via window click event listener');
        }
    });
    // Card position buttons
     const resetBtn = document.getElementById('reset-position');
     resetBtn.addEventListener("click", resetPositions);
     const clearBtn = document.getElementById('clear-position');
     clearBtn.addEventListener("click", clearPositionNames);
    // Submitting the form
    const form = document.getElementById('reading-form');
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Stop reload
        console.log('submit button');

    });
}

// Adjusts number of card buttons up or down
function changeNumberofCards(num) {
    if (num == CURRENT_NUMBER_OF_CARDS) {
        return;
    }
    else if (num > CURRENT_NUMBER_OF_CARDS) {
        addCards(num - CURRENT_NUMBER_OF_CARDS);
    }
    else {
        removeCards(CURRENT_NUMBER_OF_CARDS - num);
    }
    CURRENT_NUMBER_OF_CARDS = num;
}

// Adds the desired number of buttons to HTML structure
function addCards(num) {
    const parentDiv = document.getElementById("spreadBoard");
    for (let i = 0; i < num; i++) {
        const newDiv = document.createElement("div");
        const newButton = document.createElement("button");
        const newImg = document.createElement("img");
        const newSubDiv = document.createElement("div");

        const idVal = CURRENT_NUMBER_OF_CARDS + 1 + i;

        newDiv.className = "spread-slot";
        newButton.type = "button";
        newButton.className = "card-selection-btn";
        newButton.id = "spread-" + idVal;
        newButton.addEventListener("click", () => {
            openModal(idVal);
        });
        newImg.src = "../frontend/assets/Cards-png/CardBacks.png";
        newSubDiv.className = "card-position-label";
        newSubDiv.contentEditable = "true";

        newDiv.append(newButton);
        newDiv.append(newSubDiv);
        newButton.append(newImg);
        parentDiv.append(newDiv);
    }
}

// Removes the desired number of buttons from HTML structure
function removeCards(num) {
    const parentDiv = document.getElementById("spreadBoard");
    for (let i = 0; i < num; i++) {
        parentDiv.children[parentDiv.children.length - 1].remove();
    }
}

function clearPositionNames() {
    const labels = document.getElementsByClassName("card-position-label");
    for (let i = 0; i < CURRENT_NUMBER_OF_CARDS && i < DEFAULT_POSITIONS.length; i++) {
        labels[i].innerHTML = "";
    }
}

// TODO:
// Should this reset card number too?
function resetPositions() {
    const labels = document.getElementsByClassName("card-position-label");
    for (let i = 0; i < CURRENT_NUMBER_OF_CARDS && i < DEFAULT_POSITIONS.length; i++) {
        labels[i].innerHTML = DEFAULT_POSITIONS[i];
    }
}

// Open the card-picker modal window
function openModal(cardID) {
    const modal = document.getElementById('modal-window');
    console.log("opening modal for card " + cardID);
    modal.style.display = "block";
}






window.onload = function () {
    setupEventHandlers();
};