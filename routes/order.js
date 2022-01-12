const express = require('express');
const router  = express.Router();
const orderQueries = require('../db/order-queries');

// GET orders by the id of the user
router.get('/user/:id', (req, res) => {
  const queryParams = req.params.id;
  orderQueries.getOrdersByUserId(queryParams)
    .then((orders) => {
      res.json({ orders });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// GET order items by order id

router.get('/:id/items', (req, res) => {
  const queryParams = req.params.id;
  orderQueries.gerOrderItemsByOrderId(queryParams)
    .then((items) => {
      res.json(items);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// GET order total by id
router.get('/:id/total', (req, res) => {
  const queryParams = req.params.id;
  orderQueries.getOrderTotal(queryParams)
    .then((total) => {
      res.json(total);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// GET order by id
router.get('/:id', (req, res) => {
  const queryParams = req.params.id;
  orderQueries.getOrdersById(queryParams)
    .then((order) => {
      res.json({ order });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  const queryParams = req.query;
  orderQueries.addMenuItem(queryParams)
    .then(res => {
      return res;
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/delete', (req, res) => {
  const queryParams = req.query;
  orderQueries.deleteItemFromCart(queryParams)
    .then(res => {
      return res;
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// export router object
module.exports = router;
