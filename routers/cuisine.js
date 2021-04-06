const { Router } = require("express");
const Cuisine = require("../models").cuisine;
const Ingredient = require("../models").ingredient;

const router = new Router();

// get all cusines

router.get("/", async (req, res, next) => {
  try {
    const allCuisines = await Cuisine.findAll({ include: [Ingredient] });
    if (!allCuisines) {
      res.status(404).send("Cuisines not found");
    } else {
      res.send(allCuisines);
    }
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
