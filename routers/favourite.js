const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Cuisine = require("../models").cuisine;
const User = require("../models").user;
const Favourite = require("../models").favourite;

const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const userFav = await Favourite.findAll({
      include: [{ model: User, where: { id: req.user.id } }],
    });
    res.send(userFav);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
// http POST :4000/login email=test@test.com password=test1234
//http GET :4000/favourites Authorization:"Bearer token"

module.exports = router;
