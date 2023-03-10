const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cardController = require('./controllers/cardController');
// require statement for exported model. Possible name is card
// Require statement(s) for controllers

const PORT = 3000;

const app = express();

const mongoURI =
  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';
mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded());

app.use('/client', express.static(path.resolve(__dirname, '../client')));

// Routes below

app.get('/', (req,res) => {
   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('/cards', cardController.getCards, (req, res) => {
    return res.status(200).json(res.locals.cards);
});

app.post('/cards', cardController.createCard, (req, res) => {
    return res.status(200).json(res.locals.newCard);
})

app.delete('/cards', cardController.deleteCard, (req, res) => {
    return res.status(200).json(res.locals.deletedCard);
})

app.use((req ,res, next) => {
    res.sendStatus(404);
});

// Global error handler below

app.use((err, req, res, next) => {
    const defaultError = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: {err: 'An error occured'},
    };
    const errObj = Object.assign({}, defaultError, err);
    console.log(errObj.log);

    res.status(errObj.status).send(errObj.message);
})

// Start the server

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
