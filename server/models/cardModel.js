const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  // Different items on cards and what not. Nothing too crazy hopefully
  title: { type: String, required: true },
  body: { type: String, required: true },
  to: { type: String, required: true },
  from: { type: String, required: true },
});

module.exports = mongoose.model('Card', cardSchema);
