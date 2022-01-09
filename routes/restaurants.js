const express = require('express');
const router  = express.Router();
const restaurantQueries = require('../db/restaurant-queries');

// GET user by id
router.get('/:id', (req, res) => {
  const queryParams = req.params.id;
  restaurantQueries.getRestaurantById(queryParams)
    .then((restaurant) => {
      res.json({ restaurant });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// export router object
module.exports = router;
