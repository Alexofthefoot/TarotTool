import express from 'express';
import readingController from '../controllers/readingController.js';

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

export default readingRouter