const express = require('express');
const readingServices = require('../services/readingServices');

// ...readings/
function getAllReadings(req, res) {
    readingServices.getAllReadings((err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(rows);
        }
    })
};

function createReading(req, res) {
    const { title, question, notes } = req.body;
    readingServices.createReading(title, question, notes, (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            res.status(200).json(rows);
        }
    })
};

//...readings/id
function getReading(req, res) {
    readingServices.getReading(req.params.id, (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (!rows) {
            res.status(404).send('Reading does not exist in DB');
        }
        else {
            res.status(200).json(rows);
        }
    })
};

function updateReading(req, res) {
    const { id, title, question, notes } = req.body;
    readingServices.updateReading(req.params.id, title, question, notes, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (data.changes === 0) {
            res.status(404).send('Reading does not exist in DB');
        }
        else {
            res.status(200).send(`Reading with ID : ${req.params.id} is updated.`);
        }
    })
};

function deleteReading(req, res) {
readingServices.deleteReading(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (data.changes === 0) {
            res.status(404).send('Reading does not exist in DB.');
        }
        else {
            res.status(200).send(`Reading with ID : ${req.params.id} is deleted.`);
        }
    })
};

module.exports = {
    getAllReadings,
    createReading,
    getReading,
    updateReading,
    deleteReading
}