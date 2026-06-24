//the controller function that calls the helper functions for each of its responsibilities
async function randomDraw() {
    // fetches the card data
    const imgPath = "../frontend/assets/Cards-png/";
    const result = await fetchRandom();

    // display the card to the user
    const cardSection = document.getElementsByClassName("card-display");
    const cardInfo = document.getElementById('card-of-the-day-reveal');
    const cardImage = document.getElementById('card-of-the-day-image');
    cardInfo.innerHTML = result.name;
    cardImage.src = imgPath + result.image_location;

    // remove unnecesary html
    const header = document.getElementsByTagName("header")[0];
    header.children[0].innerHTML = "Your Card is..."; // h1
    header.children[1].remove(); // p
  
    // remove the button div
    const button = document.getElementById("draw-card-btn");
    button.parentElement.remove();

    const section = document.getElementsByClassName("card-display")[0];
    const p = section.children[1];
    p.remove();

    // TODO: 
    // make it so the user wont redraw?

};

async function fetchRandom() {
    const url = "http://localhost:3000/api/v1/cards/random";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        //Everything is good, go ahead with the task
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err.message);
    }
}