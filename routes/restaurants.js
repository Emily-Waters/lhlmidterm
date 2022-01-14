const express = require('express');
const router  = express.Router();
const restaurantQueries = require('../db/restaurant-queries');

// GET restaurant by id
router.get('/:id', (req, res) => {
  const queryParams = req.params.id;
  restaurantQueries.getRestaurantById(queryParams)
    .then((restaurant) => {
      res.json(restaurant);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// GET all restaurants
router.get('/', (req, res) => {
  restaurantQueries.getAllRestaurants()
    .then((restaurants) => {
      res.json(restaurants || []);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// export router object
module.exports = router;
