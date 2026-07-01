import express from 'express';
import reading_cardController from '../controllers/reading_cardController.js';

const reading_cardRouter = express.Router();
reading_cardRouter.route('/')
.get(reading_cardController.getAllReadingCards)
.post(reading_cardController.createReadingCard);

reading_cardRouter.route('/:id')
.delete(reading_cardController.deleteReadingCard);

export default reading_cardRouter