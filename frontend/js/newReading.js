// const tarotDeck = require('../assets/tarotDeck.js');
import { tarotDeck } from "../assets/tarotDeck.js";

const DEFAULT_POSITIONS = ['Past', 'Present', 'Future'];
const DEFAULT_NUMBER_OF_CARDS = 3;
const DEFAULT_CARD_TYPE = 'images';

let CURRENT_NUMBER_OF_CARDS = 3;
let CURRENT_CARD_TYPE = 'images';
let CURRENT_CARD_SUIT = 'major';

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
    setupModalEventHandlers();
}

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
    // User chooses IMAGES or TEXT
    imageBtn.addEventListener('change', () => {
        changeModalCardType('images')
    });
    textBtn.addEventListener('change', () => {
        changeModalCardType('text');
    });
    // User chooses their card type (of 5 options)
    const majorBtn = document.getElementById('major-selection');
    majorBtn.addEventListener('click', () => {
        changeModalCardSuit('major');
    });
    const wandsBtn = document.getElementById('wands-selection');
    wandsBtn.addEventListener('click', () => {
        changeModalCardSuit('wands');
    });
    const cupsBtn = document.getElementById('cups-selection');
    cupsBtn.addEventListener('click', () => {
        changeModalCardSuit('cups');
    });
    const swordsBtn = document.getElementById('swords-selection');
    swordsBtn.addEventListener('click', () => {
        changeModalCardSuit('swords');
    });
    const pentaclesBtn = document.getElementById('pentacles-selection');
    pentaclesBtn.addEventListener('click', () => {
        changeModalCardSuit('pentacles');
    });

    // Closing the modal window
    const modal = document.getElementById('modal-window');
    const span = document.getElementById('close-modal');
    span.addEventListener('click', () => {
        modal.style.display = 'none';
        console.log('closing modal window via span event listener');
    });
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            console.log('closing modal window via window click event listener');
        }
    });
}

// Changes the modal window's display between image-based and text-based
function changeModalCardType(type) {
    CURRENT_CARD_TYPE = type;
    setModalCards();
}

// Changes the modal window's suit currently being displayed
function changeModalCardSuit(suit) {
    if (CURRENT_CARD_SUIT != suit){
        CURRENT_CARD_SUIT = suit;
        setModalCards();
    } 
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

    // Adjust text 
    const title = document.getElementById('modal-title');
    const string = "Select a Card for Position " + cardID;
    title.textContent = string;

    //set default card type (major)
    setModalCards();
}

function setModalCards() {
    //10 possible configurations (eg. images cups, text swords, ...)
    // tarotDeck[]
    const parentDiv = document.getElementById("card-selection-container");
    parentDiv.innerHTML = "";
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
            parentDiv.appendChild(newButton);
        }
    }
}


window.onload = function () {
    setupEventHandlers();
};