import tarotDeck from "../assets/tarotDeck.js";

const DEFAULT_POSITIONS = ['Past', 'Present', 'Future'];
const DEFAULT_NUMBER_OF_CARDS = 3;
const DEFAULT_CARD_TYPE = 'images';

let CURRENT_NUMBER_OF_CARDS = 3;
let CURRENT_CARD_TYPE = 'images';
let CURRENT_CARD_SUIT = 'major';

//  Set the event handlers for buttons on the main HTML window (not the modal)
//  Calls the function to set the rest of the event handlers
function setupGeneralEventHandlers() {
    //The button-row (numeral) buttons
    const parentDiv = document.getElementById("number-button-row");
    for (let i = 0; i < parentDiv.children.length; i++) {
        const button = parentDiv.children[i];
        button.addEventListener("click", () => {
            changeNumberofCards(i + 1);
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
    // Card position buttons
    const resetBtn = document.getElementById('reset-position');
    resetBtn.addEventListener("click", resetSpread);
    const clearBtn = document.getElementById('clear-position');
    clearBtn.addEventListener("click", clearPositionNames);

    // Submitting the form
    const form = document.getElementById('reading-form');
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Stop reload
        console.log('submit button');

    });
}

// the event handlers that are the same regardless of the current spread card open
function setupModalEventHandlers() {
    // Set defaults according to user preferences
    CURRENT_CARD_TYPE = DEFAULT_CARD_TYPE;
    const imageBtn = document.getElementById('display-images');
    const textBtn = document.getElementById('display-text');
    if (DEFAULT_CARD_TYPE == 'images') {
        imageBtn.checked = true;
    }
    else {
        textBtn.checked = true;
    }

    // Closing the modal window 2 possible ways
    const modal = document.getElementById('modal-window');
    const span = document.getElementById('close-modal');
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

// Adjusts number of spread card buttons up or down
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

// Adds the desired number of spread buttons to HTML structure
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
        newButton.className = "spread-buttons";
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

// Removes the desired number of spread buttons from HTML structure
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

// Reset positions & number of cards in the spread
function resetSpread() {
    removeCards(CURRENT_NUMBER_OF_CARDS);
    addCards(DEFAULT_NUMBER_OF_CARDS);
    const labels = document.getElementsByClassName("card-position-label");
    for (let i = 0; i < CURRENT_NUMBER_OF_CARDS && i < DEFAULT_POSITIONS.length; i++) {
        labels[i].innerHTML = DEFAULT_POSITIONS[i];
    }
}

// Changes the modal window's display between image-based and text-based
function changeModalCardType(type, cardID) {
    CURRENT_CARD_TYPE = type;
    setModalCards(cardID);
}

// Changes the modal window's suit currently being displayed
function changeModalCardSuit(suit, cardID) {
    if (CURRENT_CARD_SUIT != suit) {
        CURRENT_CARD_SUIT = suit;
        setModalCards(cardID);
    }
    else if (CURRENT_CARD_SUIT === suit) {
        console.log('no changes needed :)')
    }
}

function setPositioncard(cardID, deckOrder) {
    const modal = document.getElementById('modal-window');
    const string = 'spread-' + cardID;
    const btn = document.getElementById(string);
    btn.innerHTML = "";
    const newImg = document.createElement('img');
    const path = "../frontend/assets/Cards-png/";
    newImg.src = path + tarotDeck[deckOrder].image_location;
    btn.appendChild(newImg);
    modal.style.display = 'none';
}

// Open the card-picker modal window
function openModal(cardID) {
    CURRENT_CARD_SUIT = 'major';
    const modal = document.getElementById('modal-window');
    modal.style.display = "block";

    // Adjust text 
    const title = document.getElementById('modal-title');
    const string = "Select a Card for Position " + cardID;
    title.textContent = string;

    // Set default type (image or text)
    const imageBtn = document.getElementById('display-images');
    const textBtn = document.getElementById('display-text');
    imageBtn.addEventListener('change', () => {
        changeModalCardType('images', cardID)
    });
    textBtn.addEventListener('change', () => {
        changeModalCardType('text', cardID);
    });
    // erase & re-make the type selection buttons & their set the event listeners
    const container = document.getElementById('suit-selection-container');
    container.innerHTML = "";
    const types = ['major', 'wands', 'cups', 'swords', 'pentacles'];
    const names = ['Major Arcana', 'Wands', 'Cups', 'Swords', 'Pentacles'];
    for (let i = 0; i < types.length; i++){
        const typeBtn = document.createElement('button');
        typeBtn.id = types[i] + '-selection';
        typeBtn.dataset.type = types[i];
        typeBtn.innerText = names[i];
        typeBtn.addEventListener('click', () => {
            changeModalCardSuit(types[i], cardID);
        });
        container.appendChild(typeBtn);
    }
    setModalCards(cardID);
}

function setModalCards(cardID) {
    //10 possible configurations (eg. images cups, text swords, ...)
    const parentDiv = document.getElementById("card-selection-container");
    parentDiv.innerHTML = ""; // empty child elements, inclusing any existing event listeners?
    // major arcana
    let offset = 0;
    let length = 22;
    //all 4 minor suits have 14 cards
    if (CURRENT_CARD_SUIT != "major") {
        length = 14;
    }
    // Set offsets to line up with relevant suits
    if (CURRENT_CARD_SUIT === "wands") {
        offset = 22;
    }
    else if (CURRENT_CARD_SUIT === "cups") {
        offset = 36;
    }
    else if (CURRENT_CARD_SUIT === "swords") {
        offset = 50;
    }
    else if (CURRENT_CARD_SUIT === "pentacles") {
        offset = 64;
    }

    if (CURRENT_CARD_TYPE === "images") {
        for (let i = offset; i < offset + length; i++) {
            const newButton = document.createElement("button");
            newButton.className = "card-selection-btn";
            newButton.dataset.card = tarotDeck[i].name;
            newButton.dataset.id = ""
            newButton.addEventListener('click', () => {
                setPositioncard(cardID, i);
            })

            const newImg = document.createElement("img");
            const imgPath = "../frontend/assets/Cards-png/" + tarotDeck[i].image_location;
            newImg.src = imgPath;
            newImg.alt = tarotDeck[i].name;

            newButton.appendChild(newImg);
            parentDiv.appendChild(newButton);
        }
    }
    // else display in text format
    else {
        for (let i = offset; i < offset + length; i++) {
            const newButton = document.createElement("button");
            newButton.classList.add("card-btn-as-text");
            newButton.classList.add("card-selection-btn");
            newButton.dataset.card = tarotDeck[i].name;
            newButton.dataset.id = ""
            newButton.textContent = tarotDeck[i].name;
            newButton.addEventListener('click', () => {
                setPositioncard(cardID, i);
            })
            parentDiv.appendChild(newButton);
        }
    }
}

window.onload = function () {
    setupGeneralEventHandlers();
    setupModalEventHandlers();
};