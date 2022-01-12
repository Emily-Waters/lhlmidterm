/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const menuQueries = require('../db/menu-queries');

router.get("/", (req, res) => {
  menuQueries.getMenuItems(req.query)
    .then((menuItems) => {
      res.json(menuItems || []);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const restaurantId = req.params.id;
  const options = req.query;

  menuQueries.getMenuItems(options, restaurantId)
    .then((menuItems) => {
      res.json(menuItems || []);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// export router object
module.exports = router;
