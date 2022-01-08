const db = require('./index');

const getOrdersById = (id) => {
  return db.query(`SELECT * FROM orders WHERE id = $1;`, [id])
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getOrderTotal = (id) => {
  return db.query(`
  SELECT sum(cost)
  FROM orders
  JOIN order_items ON orders.id = order_id
  JOIN menu_items ON menu_items.id = menu_item_id
  WHERE orders.id = $1;
  `, [id])
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getOrdersByUserId = (id) => {
  return db.query(`SELECT * FROM orders WHERE user_id = $1;`, [id])
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addMenuItem = (params) => {
  return db.query(`
  INSERT INTO order_items (order_id, menu_item_id, quantity)
  VALUES ($1, $2, $3)
  `, [params.order_id, params.menu_item, params.quantity])
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getOrdersById,
  getOrderTotal,
  getOrdersByUserId,
  addMenuItem
};
