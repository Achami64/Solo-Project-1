// Routes to get, post, patch, and delete the cards created in card controller
const express = require('express');
const app = require("../server");
const cardController = require('../controllers');
const Card = require('../models/cardModel');
const router = express.router();

// Get all cards router
router.get('/cards', cardController.getCards, (req,res) => {
    return res.status(200).json(res.locals.cards);
});

router.post('/cards', cardController.createCard, (req, res) => {
    return res.status(200).json(res.locals.newCard);
});

router.delete('/cards', cardController.deleteCard, (req, res) => {
    return res.status(200).json(res.locals.deletedCard);
})

module.exports = router;