const { Router } = require("express");
const Cuisine = require("../models").cuisine;
const Ingredient = require("../models").ingredient;
const CuisineIngredient = require("../models").cuisineIngredient;
const authMiddleware = require("../auth/middleware");

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

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const specificCuisine = await Cuisine.findOne({
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
      where: { id: id },
    });

    if (!specificCuisine) {
      res.status(404).send("Cuisine not found");
    } else {
      const formatted_cuisines = JSON.parse(JSON.stringify(specificCuisine));

      console.log("raw data", formatted_cuisines);
      const obj = new Object();
      obj.id = specificCuisine.id;
      obj.userId = specificCuisine.userId;
      obj.title = specificCuisine.title;
      obj.instructions = specificCuisine.instructions;
      obj.imageUrl = specificCuisine.imageUrl;
      obj.cuisineType = specificCuisine.cuisineType;
      obj.servings = specificCuisine.servings;
      obj.cookingTime = specificCuisine.cookingTime;
      obj.calories = specificCuisine.calories;
      obj.likes = specificCuisine.likes;

      //custom made array for number of ingredient object
      obj.ingredients = [];

      specificCuisine.ingredients.map((i) => {
        const ingredientObj = new Object();

        ingredientObj.name = i.name;

        ingredientObj.amount = i.cuisineingredients.amount;

        obj.ingredients.push(ingredientObj);
        return;
      });

      res.send(obj);
      console.log("Final data: ", obj);
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

//Creates a new recipe

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const cuisine = await Cuisine.create(req.body);

    console.log("Request body: ", req.body.ingredients);

    req.body.ingredients.forEach(async (ing) => {
      const lowerCaseNameIngredient = ing.ingredientName.toLowerCase();

      //Check if the ingrident exist already in the database or not
      const ingredient = await Ingredient.findOne({
        where: { name: lowerCaseNameIngredient },
      });

      let newIngredient;
      //if the ingredient already exists in the database, create join row with the id from that ingredient
      if (ingredient) {
        const cuisineIngredients = await CuisineIngredient.create({
          amount: ing.amount,
          ingredientId: ingredient.id,
          cuisineId: cuisine.id,
        });
        //if the ingredient was not found create a new ingredient.
      } else {
        newIngredient = await Ingredient.create({
          name: ing.ingredientName,
        });
        const cuisineIngredients = await CuisineIngredient.create({
          amount: ing.amount,
          ingredientId: newIngredient.id,
          cusineId: cuisine.id,
        });
      }
    });

    res.json(cuisine);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
