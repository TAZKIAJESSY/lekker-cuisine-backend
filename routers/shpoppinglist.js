const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Busket = require("../models").shoppingList;
const Ingredient = require("../models").ingredient;

const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const getList = await Busket.findAll({
      include: [Ingredient],
      where: { userId: req.user.id },
    });

    if (!getList) {
      res.status(404).json("Lists not found");
    } else {
      res.json(getList);
    }
  } catch (e) {
    next(e.message);
  }
});
//http GET :4000/lists Authorization:"Bearer token"

//add new a ingredient to shopping list
router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { ingredientId } = req.body;
    console.log("show ingredient id ", ingredientId);

    //Check if the same ingridentId exist already in the database or not
    const ingredientIdCheck = await Busket.findOne({
      where: { ingredientId: ingredientId, userId: req.user.id },
    });

    let myNewList;

    //if already exists in database
    if (ingredientIdCheck) {
      res.status(400).send("Already exist in database");
    } else {
      myNewList = await Busket.create({
        userId: req.user.id,
        ingredientId: ingredientId,
      });
    }

    res.json(myNewList);
  } catch (e) {
    next(e.message);
  }
});
//// http POST :4000/login email=test@test.com password=test1234
////http POST :4000/lists ingredientId=2 Authorization:"Bearer token"

//del a ingredient from list in shooping list by PK
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const findIngredient = await Busket.findByPk(id);
    const deleteIngredient = await findIngredient.destroy();
    res
      .status(200)
      .send({ message: "Ingredient in shopping List DELETED", findIngredient });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
//http DELETE :4000/lists/4 Authorization:"Bearer token"

module.exports = router;
