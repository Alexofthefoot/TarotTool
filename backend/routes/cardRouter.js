// Router says:  "That's a DELETE on /:id, talk to deleteOne."
// router is kinda like the receptionist, it just directs messages for this (card) department 
// of the big office
const express = require('express');
const cardController = require('../controllers/cardController');

const cardRouter = express.Router();
cardRouter.route('/')
.get(cardController.getAllCards)
.post(cardController.createCard);

cardRouter.route('/random')
.get(cardController.randomCard);

cardRouter.route('/:id')
.get(cardController.getCard)
.put(cardController.updateCard)
.delete(cardController.deleteCard);

module.exports = cardRouter;