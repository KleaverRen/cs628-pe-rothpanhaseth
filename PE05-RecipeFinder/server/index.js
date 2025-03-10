const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const recipeRoutes = require("./routes/recipe");

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.use("/api/recipes", recipeRoutes);
const uri = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000,
    retryWrites: true,
    w: "majority",
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error details:", {
      message: err.message,
      code: err.code,
      name: err.name,
    });
    process.exit(1);
  });

app.listen(port, () => console.log(`Server running on port ${port}`));
