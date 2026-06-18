
async function randomDraw() {
    const cardSection = document.getElementsByClassName("card-display");
    const cardInfo = document.getElementById('card-of-the-day-reveal');
    const cardImage = document.getElementById('card-of-the-day-image');

    const url = "http://localhost:3000/api/v1/cards/random";
    const imgPath = "../frontend/assets/Cards-png/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        //Everything is good, go ahead with the task
        const result = await response.json();
        cardInfo.innerHTML = result.name; 
        cardImage.src = imgPath + result.image_location ;
    } catch (error) {
        console.error(error.message);
    }
};