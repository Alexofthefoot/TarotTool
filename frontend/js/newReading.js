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
            changeSizeofSpread(i + 1);
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
        if (verifyInput()) {
            await submitNewReading();
        }
        else {
            console.log('missing input, not awaiting')
        }
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
function changeSizeofSpread(num) {
    if (num == CURRENT_NUMBER_OF_CARDS) {
        return;
    }
    else if (num > CURRENT_NUMBER_OF_CARDS) {
        increaseSpread(num - CURRENT_NUMBER_OF_CARDS);
    }
    else {
        decreaseSpread(CURRENT_NUMBER_OF_CARDS - num);
    }
    CURRENT_NUMBER_OF_CARDS = num;
}

// Adds the desired number of spread buttons to HTML structure
function increaseSpread(num) {
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
        newButton.dataset.deckOrder = null;
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
function decreaseSpread(num) {
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
    decreaseSpread(CURRENT_NUMBER_OF_CARDS);
    increaseSpread(DEFAULT_NUMBER_OF_CARDS);
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

function setPositionCard(cardID, deckOrder) {
    const modal = document.getElementById('modal-window');
    const string = 'spread-' + cardID;
    const btn = document.getElementById(string);
    btn.innerHTML = "";
    btn.dataset.deckOrder = deckOrder;
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
    for (let i = 0; i < types.length; i++) {
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
            newButton.dataset.deckOrder = tarotDeck[i].deck_order;
            newButton.addEventListener('click', () => {
                setPositionCard(cardID, i);
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
            newButton.dataset.deckOrder = tarotDeck[i].deck_order;
            newButton.textContent = tarotDeck[i].name;
            newButton.addEventListener('click', () => {
                setPositionCard(cardID, i);
            })
            parentDiv.appendChild(newButton);
        }
    }
}

// TODO:
// For now this works, but think about weird edgecases like "    "
function verifyInput() {
    // A reading requires a question
    const question = document.getElementById('question').value;
    if (question === null || question === "") {
        console.log('Reading does not have a question')
        return false;
    }
    for (let i = 0; i < CURRENT_NUMBER_OF_CARDS; i++) {
        const string = 'spread-' + (i + 1);
        const btn = document.getElementById(string);
        //And all the cards in the spread to be drawn and non-null
        if (btn.dataset.deckOrder === undefined || btn.dataset.deckOrder === null) {
            console.log('card ' + (i + 1) + ' has not been selected.')
            return false;
        }
    }
    console.log('no problems with input');
    return true;
}

// Create the json object for the reading POST request 
function makeReadingBody() {
    let body = {};
    body = addIfPresent(body, 'title');
    body = addIfPresent(body, 'question');
    body = addIfPresent(body, 'interpretation');
    console.log(body);
    return body;
}

// Create the json object for the reading_cards POST request 
// function makeReadingCardBody(readingID) {
//     console.log('now attempting to make reading_cards json body')
//     let body = {};
//     body['reading_id'] = readingID;
//     for (let i = 0; i < CURRENT_NUMBER_OF_CARDS; i++) {
//         const string = 'spread-' + (i + 1);
//         const btn = document.getElementById(string);
//     }
//     body = addIfPresent(body, );
//     console.log('reading_cards json body complete:')
//     console.log(body);
//     return body;
// }

// Helper function for json-building functions
function addIfPresent(body, elementID, tableDataType) {
    const dataType = tableDataType ?? elementID;
    const element = document.getElementById(elementID);
    if (element.value != null && element.value.trim() != "") {
        body[dataType] = element.value.trim();
    }
    return body;
}


// Submit the user's input to the DB
async function submitNewReading() {
    const url1 = 'http://localhost:3000/api/v1/readings';
    const url2 = 'http://localhost:3000/api/v1/reading_cards';
    let json = makeReadingBody();
    try {
        const response1 = await fetch(url1, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(json)
        });
        if (!response1.ok) {
            throw new Error(`Response status: ${response1.status}`);
        }
        const result = await response1.json();
        console.log(result.id)
        // json = makeReadingCardBody(result.id);
        // console.log(json);
        // const response2 = await fetch(url2, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json", },
        //     body: JSON.stringify(json)
        // })
        // if (!response2.ok) {
        //     throw new Error(`Response status: ${response2.status}`);
        // }

        //get the above reading id, use it in the next fetch?


        // console.log(result)
        // console.log(response1)
    } catch (error) {
        console.error(error.message);
    }
}

window.onload = function () {
    setupGeneralEventHandlers();
    setupModalEventHandlers();
};