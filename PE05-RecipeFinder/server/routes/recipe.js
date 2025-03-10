const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

router.get("/recipes", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

router.post("/recipes", async (req, res) => {
  const recipe = new Recipe(req.body);
  await recipe.save();
  res.json(recipe);
});

router.delete("/recipes/:id", async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Recipe deleted" });
});
module.exports = router;
