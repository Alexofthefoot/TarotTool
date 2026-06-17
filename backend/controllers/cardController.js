// no sql here, thats down in the weeds work. We have underlings for that.
// Controllers are responsible for:
//      receiving req, res
//      deciding HTTP status codes
//      sending JSON response
//      error handling
const express = require('express');
const cardServices = require('../services/cardServices');

<<<<<<< HEAD
// ...cards/
=======
>>>>>>> refactor/routes-and-controllers
function getAllCards(req, res) {
    cardServices.getAllCards((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(rows);
        }
    })
    //no meaningful return needed, as its already send the relevant res
};

function createCard(req, res) {
    const { name, deck_order } = req.body;
    cardServices.createCard(name, deck_order, (err, rows) => {
        if (err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
                res.status(409).send(err.message); // duplicate / unique constraint
            } else {
                res.status(500).send(err.message); // everything else
            }
        } else {
            res.status(201).send(`Card is added ID: ${rows.id}`);
        }
    })
};

<<<<<<< HEAD
// ...cards/random
function getRandomCard(req, res) {
    cardServices.getRandomCard((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(rows);
        }
    })

};

// ...cards/:id
=======
>>>>>>> refactor/routes-and-controllers
function getCard(req, res) {
    cardServices.getCard(req.params.id, (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (!rows) {
            res.status(404).send('Card does not exist in DB');
        }
        else {
            res.status(200).json(rows);
        }
    })
};

function updateCard(req, res) {
    const { name, deck_order } = req.body;
    cardServices.updateCard(req.params.id, name, deck_order, (err, data) => {
        if (err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
                res.status(409).send(err.message); // duplicate / unique constraint
            }
            else {
                res.status(500).send(err.message);
            }
        }
        else if (data.changes === 0) {
            res.status(404).send('Card does not exist in DB');
        }
        else {
<<<<<<< HEAD
            res.status(200).send(`Card with ID : ${req.params.id} is updated`);
=======
            res.status(200).send(`Card with ID : ${req.params.id} is updated`)
>>>>>>> refactor/routes-and-controllers
        }
    });
};

function deleteCard(req, res) {
    cardServices.deleteCard(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (data.changes === 0) {
            res.status(404).send('Card does not exist in DB');
        }
        else {
<<<<<<< HEAD
            res.status(200).send(`Card with ID : ${req.params.id} is deleted`);
=======
            res.status(200).send(`Card with ID : ${req.params.id} is deleted`)
>>>>>>> refactor/routes-and-controllers
        }
    })
};

module.exports = {
    getAllCards,
    createCard,
<<<<<<< HEAD
    getRandomCard,
    getCard,
    updateCard,
    deleteCard
};
=======
    getCard,
    updateCard,
    deleteCard
}
>>>>>>> refactor/routes-and-controllers
