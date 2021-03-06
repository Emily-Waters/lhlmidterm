const db = require('./index');

const getMenuItems = (options, restaurantId) => {
  const queryParams = [];
  let queryString = `
  SELECT *
  FROM menu_items
  WHERE menu_items.id IS NOT NULL
  `;

  if (options.is_vegan) {
    queryString += `AND is_vegan = true `;
  }

  if (options.is_vegetarian) {
    queryString += `AND is_vegetarian = true `;
  }

  if (options.is_gluten_free) {
    queryString += `AND is_gluten_free = true `;
  }


  if (restaurantId) {
    queryString += `AND restaurant_id = $1 `;
    queryParams.push(restaurantId);
  }

  queryString += `
  ORDER BY menu_items.id
  `;

  return db.query(queryString, queryParams)
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
