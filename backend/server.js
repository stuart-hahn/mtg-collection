const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// load env variables
dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const cardRoutes = require("./routes/cardRoutes");
app.use("/api/cards", cardRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error: ", error));

const PORT = process.env.PORT || 5000;

// start the express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. You better go catch it!`);
});
