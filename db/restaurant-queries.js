const db = require('./index');

const getRestaurantById = (id) => {
  return db.query('SELECT * FROM restaurants WHERE id = $1;', [id])
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getAllRestaurants = () => {
  return db.query('SELECT * FROM restaurants;')
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getRestaurantById, getAllRestaurants
};
