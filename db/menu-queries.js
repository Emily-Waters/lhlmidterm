const db = require('./index');

const getMenuItems = () => {
  return db.query(`SELECT * FROM menu_items;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getMenuItems
};
