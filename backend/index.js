const express = require("express")
const { createCard, readCard, readAllCards, updateCard, deleteCard } = require('./crud')
const app = express()

app.use(express.json())

//Routes
app.get('/cards', (req, res) => {
    readAllCards((err, rows) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            res.status(200).json(rows)
        }
    })
})

app.get('/cards/:id', (req, res) => {
    readCard(req.params.id, (err, row) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            res.status(200).json(row)
        }
    })
})

app.post('/cards', (req, res) => {
    const { name, deck_order } = req.body
    createCard(name, deck_order, (err, data) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            res.status(201).send(`Card is added ID : ${data.id}`)
        }
    })
})

app.put('/cards/:id', (req, res) => {
    const { name, deck_order } = req.body
    updateCard(req.params.id, name, deck_order, (err) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            res.status(200).send(`Card with ID : ${req.params.id} is updated`)
        }
    })
})

app.delete('/cards/:id', (req, res) => {
    deleteCard(req.params.id, (err) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            res.status(200).send(`Card with ID : ${req.params.id} is deleted`)
        }
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})  