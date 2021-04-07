const { Router } = require("express");
const Cuisine = require("../models").cuisine;
const Ingredient = require("../models").ingredient;
const CuisineIngredient = require("../models").cuisineingredient;

const router = new Router();

// get all cusines
router.get("/", async (req, res, next) => {
  try {
    const allCuisines = await Cuisine.findAll({
      include: [{ model: Ingredient }],
    });
    if (!allCuisines) {
      res.status(404).send("Cuisines not found");
    } else {
      res.send(allCuisines);
    }
  } catch (e) {
    next(e.message);
  }
});

//details page
router.get("/cuisinedetails", async (req, res, next) => {
  try {
    const allCuisines = await Cuisine.findAll({
      include: [
        {
          model: Ingredient,
          required: true,

          through: {
            model: CuisineIngredient,
            as: "cuisineingredients",
            attributes: ["amount"],
          },
        },
      ],
    });

    if (!allCuisines) {
      res.status(404).send("Cuisines not found");
    } else {
      const formatted_cuisines = JSON.parse(JSON.stringify(allCuisines));

      let finalData = [];
      console.log("raw data", formatted_cuisines);
      const cuisineArray = formatted_cuisines.map((c) => {
        c.ingredients.map((i) => {
          const obj = new Object();
          obj.cuisineId = c.id;
          obj.userId = c.userId;
          obj.title = c.title;
          obj.instructions = c.instructions;
          obj.imageUrl = c.imageUrl;
          obj.cuisineType = c.cuisineType;
          obj.servings = c.servings;
          obj.cookingTime = c.cookingTime;
          obj.calories = c.calories;
          obj.likes = c.likes;
          obj.name = i.name;
          obj.amount = i.cuisineingredients.amount;

          finalData.push(obj);
          return;
        });
        return;
      });

      res.send(finalData);
      console.log("Final data: ", finalData);
    }
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
