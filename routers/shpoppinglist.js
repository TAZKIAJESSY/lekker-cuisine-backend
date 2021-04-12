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

module.exports = router;
