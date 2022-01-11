const getAllRestaurants = () => {
  return $.get('/api/restaurants/');
};

const getMenuItems = (url = '/api/menu') => { // TODO: Make it so menus can be got by id
  return $.get(url);
};

const getOrderItems = (id = 1) => {
  return $.get(`api/order/${id}/items`);
};

const getOrderTotal = (id = 1) => {
  return $.get(`api/order/${id}/total`);
};

const getUser = (userData) => {
  return $.post('/api/users/login', userData);
};

const unGetUser = () => {
  return $.post('/api/users/logout');
};
