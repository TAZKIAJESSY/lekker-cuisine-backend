const { Router } = require("express");
const NodeGeocoder = require("node-geocoder");
const axios = require("axios");
const router = new Router();

var options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: "AIzaSyA3K0C0fExKEAShuqb-Z3Efgmyk1n7y598",
  formatter: null,
};

var geocoder = NodeGeocoder(options);

const API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
const API_KEY = "AIzaSyA3K0C0fExKEAShuqb-Z3Efgmyk1n7y598";

router.get("/:location", async (req, res, next) => {
  try {
    const location = req.params.location;

    console.log("Location:", location);

    geocoder.geocode(location, function (err, data) {
      if (err || !data.length) {
        console.log(err);
        req.flash("error", "Invalid address");
        return res.redirect("back");
      }
      var lat = data[0].latitude;
      var lng = data[0].longitude;
      //var location = data[0].formattedAddress;
      console.log("latitude ", lat);
      console.log("long ", lng);

      const response = axios
        .get(
          `${API_URL}location=${lat},${lng}&radius=2000&type=supermarket&key=${API_KEY}&rankBy?google.maps.places.RankBy.DISTANCE`
        )
        .then((response) => {
          //console.log(response.data.status);
          console.log(response.data);
          res.send(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  } catch (e) {
    next(e.messgae);
  }
});

module.exports = router;
