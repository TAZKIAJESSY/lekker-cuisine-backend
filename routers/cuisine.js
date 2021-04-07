const { Router } = require("express");
const Cuisine = require("../models").cuisine;
const Ingredient = require("../models").ingredient;
const CuisineIngredient = require("../models").cuisineingredient;

const router = new Router();

// get all cusines
// router.get("/", async (req, res, next) => {
//   try {
//     const allCuisines = await Cuisine.findAll({
//       include: [
//         {
//           model: Ingredient,
//           through: {
//             model: CuisineIngredient,
//             as: "cuisineingredients",
//             attributes: ["amount"],
//           },
//         },
//       ],
//     });
//     if (!allCuisines) {
//       res.status(404).send("Cuisines not found");
//     } else {
//       res.send(allCuisines);
//     }
//   } catch (e) {
//     next(e.message);
//   }
// });

// // get all cusines
router.get("/", async (req, res, next) => {
  try {
    const allCuisines = await Cuisine.findAll({
      include: [
        {
          model: Ingredient,

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
        const obj = new Object();
        obj.id = c.id;
        obj.userId = c.userId;
        obj.title = c.title;
        obj.instructions = c.instructions;
        obj.imageUrl = c.imageUrl;
        obj.cuisineType = c.cuisineType;
        obj.servings = c.servings;
        obj.cookingTime = c.cookingTime;
        obj.calories = c.calories;
        obj.likes = c.likes;

        //custom made array for number of ingredient object
        obj.ingredients = [];

        c.ingredients.map((i) => {
          const ingredientObj = new Object();

          ingredientObj.name = i.name;

          ingredientObj.amount = i.cuisineingredients.amount;

          obj.ingredients.push(ingredientObj);
          return;
        });
        finalData.push(obj);

        return;
      });

      res.send(finalData);
      console.log("Final data: ", finalData);
    }
  } catch (e) {
    next(e.message);
  }
});

//update a like button for cuisine
router.patch("/:cuisineId", async (req, res, next) => {
  // if (!cuisine.userId === req.user.id) {
  //   return res
  //     .status(403)
  //     .send({ message: "You are not authorized to like cuisine" });
  // }

  try {
    const cuisine = await Cuisine.findByPk(req.params.cuisineId);
    const cuisineId = parseInt(req.params.cuisineId);

    await cuisine.increment("likes", { by: 1, where: { id: cuisineId } });

    return res.status(200).send({ cuisine });
    console.log("response: ", cuisine);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
