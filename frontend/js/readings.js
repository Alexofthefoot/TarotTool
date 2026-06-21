//If applicable, replace with user's actual readings.
function removePlaceholder() {
    // // if at least 1 user-created reading exists remove all
    if (true) {
        //target reading container
        let wrapper = document.getElementsByClassName("card-wrapper")[0];
        //empty it
        wrapper.innerHTML = "";
        //append 10 new reading cards
    }
}

// display 10 more readings, so long as data exists
async function showMore() {
    const readings = await fetchReadings(); //this is an asyc function
    const wrapper = document.getElementsByClassName("card-wrapper")[0];
    console.log('before loop')
    for (let i = 0; i < readings.length; i++) {
        console.log('in loop');
        //create div container
        const newDiv = document.createElement("div");
        newDiv.className = "reading-card";
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
        //create div wrapper and images(for now empty)
        const subDiv = document.createElement("div");
        subDiv.className = "reading-images-wrapper";
            //create div container2
            const subsubDiv = document.createElement("div")
            subsubDiv.className = "reading-images";
            //TODO: images will be fixed once reading_cards is connected
            const img = document.createElement("img");
            img.src = "/frontend/assets/Cards-png/CardBacks.png";
            subsubDiv.appendChild(img);
            subDiv.appendChild(subsubDiv);
        newDiv.appendChild(subDiv);
        
        wrapper.appendChild(newDiv);
    }
}

// fetch the data for the next 10 
async function fetchReadings() {
    let url = 'http://localhost:3000/api/v1/readings';
    // Hard-coded for now, later make this adjustable by the user?
    let offset = 0;
    let limit = 10;
    // fetch data from db
    try {
        const response = await fetch(url + '?limit=' + limit + '&offset=' + offset);
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
    removePlaceholder();
};