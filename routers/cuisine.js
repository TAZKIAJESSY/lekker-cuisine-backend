const { Router } = require("express");
const Cuisine = require("../models").cuisine;
const Ingredient = require("../models").ingredient;
const CuisineIngredient = require("../models").cuisineIngredient;
const authMiddleware = require("../auth/middleware");
const sequelize = require("sequelize");

const router = new Router();

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

      res.send(formatted_cuisines);
      console.log("Final data: ", formatted_cuisines);
    }
  } catch (e) {
    next(e.message);
  }
});

//http GET :4000/cusines

//cuisine details
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

      res.send(formatted_cuisines);

      console.log("Final data: ", formatted_cuisines);
    }
  } catch (e) {
    next(e.message);
  }
});
//http GET :4000/cuisines/id

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
    console.log("Request body: ", req.body);

    const cuisine = await Cuisine.create(req.body);

    req.body.ingredients.forEach(async (ing) => {
      const ingredientNameHi = ing.ingredientName;

      //Check if the ingrident exist already in the database or not
      const ingredient = await Ingredient.findOne({
        where: sequelize.where(
          sequelize.fn("lower", sequelize.col("name")),
          sequelize.fn("lower", ingredientNameHi)
        ),
        // where: { name: lowerCaseNameIngredient },
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
          cuisineId: cuisine.id,
        });
      }
    });

    res.json(cuisine);
  } catch (e) {
    next(e);
  }
});

//delete a cuisine for a user
router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = req.user;
    const cuisine = await Cuisine.findByPk(id);

    if (cuisine.userId === user.id) {
      const deletedRecipe = await cuisine.destroy();
      res.status(201).send({ message: "Cuisine deleted", cuisine });
    } else {
      return res
        .status(400)
        .send("You are not authorized to delete this cuisine");
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
// http POST :4000/login email=jessy@hi.com password=jessy1234
// http GET :4000/cuisines/id(cuisineIdpk) Authorization:"Bearer token"

module.exports = router;
