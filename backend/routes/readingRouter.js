const express = require('express');
const readingController = require('../controllers/readingController');

const readingRouter = express.Router();
readingRouter.route('/')
.get(readingController.getAllReadings)
.post(readingController.createReading);

readingRouter.route('/:id')
.get(readingController.getReading)
.put(readingController.updateReading)
.delete(readingController.deleteReading);

readingRouter.route('/:id/cards')
.get(readingController.getCardsPerReading)

module.exports = readingRouter;