const express = require("express");
const { getAllCards, addCard } = require("../controllers/cardController");

// Create a new router
const router = express.Router();

// GET route to retrieve all cards in the user's collection
router.get("/", getAllCards);

// POST route to add a new card to the collection
router.post("/", addCard);

module.exports = router;
