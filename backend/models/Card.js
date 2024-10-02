const mongoose = require("mongoose");

// Define the schema for a Magic: The Gathering card
const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  set: {
    type: String,
    required: true,
  },
  rarity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model using the schema
const Card = mongoose.model("Card", cardSchema);

// Export the model to be used in other parts of the app
module.exports = Card;
