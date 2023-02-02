const Card = require('../models/cardModel');
const app = require('../server');

const cardController = {};

// get all cards from database

cardController.getCards = async (req, res, next) => {
  try {
    const cards = await Card.find({});
    res.locals.cards = cards;
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught cardController.getCards error',
      status: 500,
      message: { err: 'An error occured retrieving all cards' },
    });
  }
};

// Create card, save to database

cardController.createCard = async (req, res, next) => {
  try {
    const { title, body, to, from } = req.body;
    const newCard = await Card.create({
      title: title,
      body: body,
      to: to,
      from: from,
    });
    res.locals.newCard = newCard;
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught cardController.createCard error',
      status: 500,
      message: { err: 'An error occured creating a card' },
    });
  }
};

// Delete card and return the data from the deleted card

cardController.deleteCard = async (req, res, next) => {
  const { title, body, to, from } = req.body;
  const deletedCard = await Card.findOne({ title, body, to , from });
  if (!deletedCard)
    return next({
      log: 'Express error handler caught cardController.deleteCard error',
      status: 500,
      message: { err: 'An error occured deleting a card' },
    });
  await deletedCard.remove();
  res.locals.deletedCard = deletedCard;
  console.log('card deleted!');
  return next();
};

// Stretch features below
// // Add photos
// cardController.addPhoto = (req, res, next) => {

// }

// // Update card

// cardController.updateCard = (req, res, next) => {

// }

module.exports = cardController;
