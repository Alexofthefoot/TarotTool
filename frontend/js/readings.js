let offset = 0;
let limit = 1; //changes to 10 once user data is confirmed to exist

//Decides if the placeholder or user data should be used
async function windowInit() {
    const readings = await fetchReadings();
    offset = 0; // reset the offset, as the reading wasnt displayed to the user
    limit = 10;
    console.log(readings)
    if (readings != null && readings.length > 0) {
        // remove placeholder data
        let wrapper = document.getElementsByClassName("card-wrapper")[0];
        wrapper.innerHTML = "";
        showMore();
    }
    else {
        console.log('mystery printing')
    }
}

// Display the user's readings data in the correct html format
async function showMore() {
    const readings = await fetchReadings();
    if (readings == null) {
        return;
    }

    // adjust the page elements
    const wrapper = document.getElementsByClassName("card-wrapper")[0];
    for (let i = 0; i < readings.length; i++) {
        const readingCards = await fetchCards(readings[i].id);
        const newDiv = document.createElement("div");
        newDiv.className = "reading-card";

        // create the meta section and date
        const meta = document.createElement("div");
        meta.className = "question";
        const datestamp = document.createElement("span");
        const date = new Date(readings[i].created_at);
        datestamp.className = "reading-date";
        datestamp.innerHTML = date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
        meta.appendChild(datestamp);
        newDiv.appendChild(meta);

        //create h2 title
        const title = document.createElement("h2");
        title.innerHTML = readings[i].title;
        newDiv.appendChild(title);

        //create 2 p's
        const p1 = document.createElement("p");
        p1.className = "question";
        p1.innerHTML = readings[i].question;
        const p2 = document.createElement("p");
        p2.className = "notes"
        p2.innerHTML = readings[i].notes;
        newDiv.appendChild(p1);
        newDiv.appendChild(p2);

        //create div wrapper and images
        const subDiv = document.createElement("div");
        subDiv.className = "reading-images-wrapper";
        const subsubDiv = document.createElement("div")
        subsubDiv.className = "reading-images";

        // fetch the readingCards per reading 
        for (let j = 0; j < readingCards.length; j++) {
            const img = document.createElement("img");
            img.src = "/frontend/assets/Cards-png/" + readingCards[j].image_location;
            subsubDiv.appendChild(img);
        }
        subDiv.appendChild(subsubDiv);
        newDiv.appendChild(subDiv);
        
        // Add the footer & button
        const footer = document.createElement("div");
        footer.className ="reading-footer";
        const buttonLink = document.createElement("a");
        buttonLink.className = "view-reading-btn";
        // buttonLink.href = "";
        buttonLink.innerHTML = "View Reading";
        footer.appendChild(buttonLink);
        newDiv.appendChild(footer);

        // Append all the new elements
        wrapper.appendChild(newDiv);
    }
}

// fetch the data for the next set of readings & update the offset
async function fetchReadings() {
    let url = 'http://localhost:3000/api/v1/readings' + '?limit=' + limit + '&offset=' + offset;
    // fetch data from db
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log('I AM IN !response.ok')
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        offset += result.length;
        return result;
    } catch (error) {
        console.error(error.message);
    }
    return null;
}

// fetch the cards associated with the current reading
// TODO: 
// fetch all 10 readings' worth at once
async function fetchCards(id) {
    let url = 'http://localhost:3000/api/v1/readings/' + id + '/cards';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
    return null;
}

window.onload = function () {
    windowInit();
};