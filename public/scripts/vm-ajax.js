//  Grabs all restaurants
const getAllRestaurants = () => {
  return $.get('/api/restaurants/');
};

const getMenuItems = (url = '/api/menu') => { // TODO: Make it so menus can be got by id
  return $.get(url);
};

// On submission from menu, item is added to cart
const addMenuItemToOrder = (menuItemData, id = window.cookie.orderId) => {
  return $.post(`/api/order?order_id=${id}&menu_item=${menuItemData.id}&quantity=${menuItemData.quantity}`);
};

// creates an order for the current user
const createNewOrder = (userId) => {
  return $.post(`/api/order/create?user_id=${userId}`);
};

// Grabs items from current order
const getOrderItems = (orderId = window.cookie.orderId) => {
  return $.get(`api/order/${orderId}/items`);
};

// Grabs current order total
const getOrderTotal = (orderId = window.cookie.orderId) => {
  return $.get(`api/order/${orderId}/total`);
};

const deleteOrderItem = (itemId, orderId = window.cookie.orderId) => {
  return $.post(`api/order/delete?order_id=${orderId}&item_id=${itemId}`);
};

const getUser = (userData) => {
  return $.post('/api/users/login', userData);
};

const unGetUser = () => {
  return $.post('/api/users/logout');
};
