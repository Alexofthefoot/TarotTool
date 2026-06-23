const express = require('express');
const reading_cardController = require('../controllers/reading_cardController');

const reading_cardRouter = express.Router();
reading_cardRouter.route('/')
.get(reading_cardController.getAllReadingCards)
.post(reading_cardController.createReadingCard);

reading_cardRouter.route('/:id')
.delete(reading_cardController.deleteReadingCard);

module.exports = reading_cardRouter;