const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Cuisine = require("../models").cuisine;
const User = require("../models").user;
const Favourite = require("../models").favourite;

const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const userFav = await Favourite.findAll({
      include: [Cuisine],
      where: { userId: req.user.id },
    });
    res.send(userFav);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
// http POST :4000/login email=test@test.com password=test1234
//http GET :4000/favourites Authorization:"Bearer token"

//new favourite add
router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { cuisineId } = req.body;

    const myNewFav = await Favourite.create({
      userId: req.user.id,
      cuisineId: cuisineId,
    });

    if (!cuisineId) {
      return res.status(400).send("Please provide cuisine id");
    } else {
      res.status(200).send(myNewFav);
    }
  } catch (e) {
    next(e.message);
  }
});
//// http POST :4000/login email=test@test.com password=test1234
////http POST :4000/favourites cuisineId=2 Authorization:"Bearer token"

//delete from fav
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const findFav = await Favourite.findByPk(id);
    const deleteFav = await findFav.destroy();
    res.status(200).send({ message: "Favourite DELETED", findFav });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
//http DELETE :4000/favourites/4 Authorization:"Bearer token"

module.exports = router;
