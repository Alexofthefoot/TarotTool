async function randomDraw() {
    const cardInfo = document.getElementById('card-of-the-day-reveal');

    const url = "http://localhost:3000/api/v1/cards/random";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        cardInfo.innerHTML = result[0].name; 
    } catch (error) {
        console.error(error.message);
    }
};