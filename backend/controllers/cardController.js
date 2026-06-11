// no sql here, thats down in the weeds work. We have underlings for that.
// Controllers are responsible for:
//      receiving req, res
//      deciding HTTP status codes
//      sending JSON response
//      error handling

//      if error → 500
//      else → 200

// Remember how anonymous functions work
// (err, rows) => {...} 
// is equivalent to
// function (err, rows) {...}


// name functions related to HTTPS verbs
const express = require('express');
const cardServices = require('../services/cardServices');

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


module.exports = {
    getAllCards, 
    createCard
}