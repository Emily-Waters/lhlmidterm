const getAllRestaurants = () => {
  return $.get('/api/restaurants/');
};

const getMenuItems = () => { // TODO: Make it so menus can be got by id
  return $.get('/api/menu');
};
