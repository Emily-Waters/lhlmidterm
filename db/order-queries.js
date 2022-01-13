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
  SELECT sum(menu_items.cost * order_items.quantity)
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

const gerOrderItemsByOrderId = (id) => {
  return db.query(`
  SELECT orders.id, menu_items.name, menu_items.id AS menu_item_id, order_items.quantity, menu_items.cost
  FROM orders
  JOIN order_items ON orders.id = order_id
  JOIN menu_items ON menu_items.id = menu_item_id
  WHERE orders.id = $1;
  `, [id])
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const deleteItemFromCart = (params) => {
  return db.query(`
  DELETE FROM order_items WHERE order_id = $1 AND menu_item_id = $2 RETURNING *;
  `, [params.order_id, params.item_id])
    .then(res => {
      return res;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addMenuItem = (params) => {
  return db.query(`
  INSERT INTO order_items (order_id, menu_item_id, quantity)
  VALUES ($1, $2, $3)
  RETURNING *
  ;
  `, [params.order_id, params.menu_item, params.quantity])
    .then(res => {
      return res;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const createOrder = (params) => {
  return db.query(`
  INSERT INTO orders (user_id)
  VALUES ($1)
  RETURNING id
  `, [params.user_id])
    .then(res => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// TODO: fix parameter bug if there's time
const addInterval = (params) => {
  return db.query(`
  UPDATE orders SET estimated_time = justify_interval(random() * (interval '2 minutes')) WHERE id = $1 RETURNING estimated_time;
  `, [params.order_id])
    .then(res => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getOrdersById,
  getOrderTotal,
  getOrdersByUserId,
  gerOrderItemsByOrderId,
  deleteItemFromCart,
  addMenuItem,
  createOrder,
  addInterval
};
