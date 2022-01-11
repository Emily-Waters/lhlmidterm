const getAllRestaurants = () => {
  return $.get('/api/restaurants/');
};

const getMenuItems = () => {
  return $.get('/api/menu');
};
