const db = require('./index');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getUsersById = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1;', [id])
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getUserByName = (name) => {
  return db
    .query(`SELECT * FROM users WHERE name = $1`, [name])
    .then(res => res.rows[0])
    .catch(err => err);
};

const registerUser = (userData) => {
  console.log(userData);
  return db
    .query(`INSERT INTO users (name, phone) VALUES ($1, $2)`, [userData.name, '+1' + userData.phone])
    .then(res => res.rows[0])
    .catch(err => err);
};

const getUserHistory = (userId) => {
  return db
    .query(`SELECT restaurants.name AS name, orders.time_placed AS time, SUM(menu_items.cost * order_items.quantity) AS total
    FROM users
    JOIN orders ON orders.user_id = users.id
    JOIN order_items ON orders.id = order_items.order_id
    JOIN menu_items ON order_items.menu_item_id = menu_items.id
    JOIN restaurants ON restaurants.id = menu_items.restaurant_id
    WHERE users.id = $1 AND orders.is_completed = True
    GROUP BY restaurants.name, orders.time_placed
    ORDER BY time DESC;`,[userId])
    .then(res => res.rows)
    .catch(err => console.log(err));
};

const getActiveOrders = (userId) => {
  return db
    .query(`SELECT restaurants.name AS name, orders.time_placed AS time, SUM(menu_items.cost * order_items.quantity) AS total
    FROM users
    JOIN orders ON orders.user_id = users.id
    JOIN order_items ON orders.id = order_items.order_id
    JOIN menu_items ON order_items.menu_item_id = menu_items.id
    JOIN restaurants ON restaurants.id = menu_items.restaurant_id
    WHERE users.id = $1 AND orders.is_completed = False
    GROUP BY restaurants.name, orders.time_placed
    ORDER BY time DESC;`,[userId])
    .then(res => res.rows)
    .catch(err => console.log(err));
};

module.exports = {
  getUsers,
  getUsersById,
  getUserByName,
  registerUser,
  getUserHistory,
  getActiveOrders
};
