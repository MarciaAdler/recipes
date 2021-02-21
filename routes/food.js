const axios = require("axios");
const router = require("express").Router();
const key = process.env.FOOD_APIKEY;
const query = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.FOOD_APIKEY}`;
router.get("/api/food/:food", (req, res) => {
  const queryURL = query + "&query=" + req.params.food;
  axios
    .get(queryURL)
    .then((response) => {
      console.log(response.data.foods);
      res.send(response.data.foods);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
