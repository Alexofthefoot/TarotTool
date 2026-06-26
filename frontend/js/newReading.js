let NUMBER_OF_CARDS = 5;

function setButtons(num) {
    if (num == NUMBER_OF_CARDS) {
        return;
    }
    else if (num > NUMBER_OF_CARDS){
        addbuttons(num - NUMBER_OF_CARDS);
    }
    else {
        removebuttons(NUMBER_OF_CARDS - num);
    }
    NUMBER_OF_CARDS = num;
}

//adds the desired number of buttons to HTML structure
function addbuttons(num) {
    const parentDiv = document.getElementsByClassName("card-button-row")[0];
    for (let i = 0; i < num; i++){
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.className = "card-selection-btn";
        const newImg = document.createElement("img");
        newImg.src = "../frontend/assets/Cards-png/CardBacks.png";
        
        // newButton.onclick = 
        newButton.append(newImg);
        parentDiv.append(newButton);
    }
}

//removes the desired number of buttons from HTML structure
function removebuttons(num) {
    const parentDiv = document.getElementsByClassName('card-button-row')[0];
    for (let i = 0; i < num; i++){
        parentDiv.children[parentDiv.children.length - 1].remove();
    }
}