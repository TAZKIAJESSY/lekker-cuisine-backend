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

//http GET :4000/cusines

//update a like button for cuisine
router.patch("/likes/:id", async (req, res, next) => {
  // if (!cuisine.userId === req.user.id) {
  //   return res
  //     .status(403)
  //     .send({ message: "You are not authorized to like cuisine" });
  // }

  try {
    const id = parseInt(req.params.id);

    const cuisine = await Cuisine.findByPk(id);
    const likes = cuisine.likes;

    const updatedCuisine = await cuisine.update({ likes: likes + 1 });

    return res.status(200).send(updatedCuisine);
  } catch (e) {
    next(e.message);
  }
});

//http PATCH :4000/cuisines/likes/2

module.exports = router;
