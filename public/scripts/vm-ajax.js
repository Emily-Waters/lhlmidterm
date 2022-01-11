const getAllRestaurants = () => {
  return $.get('/api/restaurants/');
};

const getMenuItems = (url = '/api/menu') => { // TODO: Make it so menus can be got by id
  return $.get(url);
};
