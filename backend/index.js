// This file has 4 jobs:
// 1. Create the app
// 2. Apply global middleware
// 3. Mount route modules
// 4. Start listening

// Mental model/storytime:
// Index.js is the big boss of the mail office. He basically comes into work in the morning 
// and writes out the directory for the day (npm run dev) then he posts it on the office door 
// and sits back in his office. 
// The request is the customer. "GET /api/v1/cards/1" walks in and knows he wants to find out 
// something about 'cards' so he reads the mounted route and goes 'aha I need to talk to cardRouter.

// cardRouter looks at the request and says "hey cardController, they want you to get them some card info"
// cardController says "it looks like you want card 1, let me just ask my database worker 
// (cardService) to grab that for you" 
// cardService digs through the filing cabinets and grabs card 1
// the message travels back to postman who receives the information in a json format.


const express = require('express');
const cardRouter  = require('./routes/cardRouter.js');

// CREATE THE EXPRESS APP
const app = express();

// USING MIDDLEWARE
app.use(express.json());

// MOUTING EACH ROUTE
app.use('/api/v1/cards', cardRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});