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
const cardRouter  = require('./routes/cardRouter.js') 

// CREATE THE EXPRESS APP
const app = express()

// USING MIDDLEWARE
app.use(express.json())

// MOUTING EACH ROUTE
app.use('/api/v1/cards', cardRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})  








// app.get('/cards/:id', (req, res) => {
//     readCard(req.params.id, (err, row) => {
//         if (err) {
//             res.status(500).send(err.message)
//         }
//         else {
//             res.status(200).json(row)
//         }
//     })
// })

// app.post('/cards', (req, res) => {
//     const { name, deck_order } = req.body
//     createCard(name, deck_order, (err, data) => {
//         if (err) {
//             res.status(500).send(err.message)
//         }
//         else {
//             res.status(201).send(`Card is added ID : ${data.id}`)
//         }
//     })
// })

// app.put('/cards/:id', (req, res) => {
//     const { name, deck_order } = req.body
//     updateCard(req.params.id, name, deck_order, (err) => {
//         if (err) {
//             res.status(500).send(err.message)
//         }
//         else {
//             res.status(200).send(`Card with ID : ${req.params.id} is updated`)
//         }
//     })
// })

// app.delete('/cards/:id', (req, res) => {
//     deleteCard(req.params.id, (err) => {
//         if (err) {
//             res.status(500).send(err.message)
//         }
//         else {
//             res.status(200).send(`Card with ID : ${req.params.id} is deleted`)
//         }
//     })
// })
