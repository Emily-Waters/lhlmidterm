//  Grabs all restaurants
const getAllRestaurants = () => {
  return $.get('/api/restaurants/');
};

// Get menus by restaurant ID
const getMenuItems = (menuRequestObj) => {
  const restaurantId = menuRequestObj.restaurantId;
  const options = menuRequestObj.options;

  // 1. set id and path param
  let url = `/api/menu/${restaurantId || ''}`;
  // 2. set url params
  if (options) {
    url += `?${options}`;
  }
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

// adds interval to order
const addIntervalToOrder = (interval, orderId = window.cookie.orderId) => {
  return $.post(`api/order/interval?interval=${interval}&order_id=${orderId}`);
};

// send message with body as param
const sendMessage = (body, number) => {
  return $.post(`api/sms?body=${body}&number=${number}`);
};

const deleteOrderItem = (itemId, orderId = window.cookie.orderId) => {
  return $.post(`api/order/delete?order_id=${orderId}&item_id=${itemId}`);
};

const getUserById = (id = window.cookie.id) => {
  return $.get(`api/users/${id}`);
};

const getRestaurantById = (id = window.cookie.restaurantId) => {
  return $.get(`api/restaurants/${id}`);
};

const getUser = (userData) => {
  return $.post('/api/users/login', userData);
};

const unGetUser = () => {
  return $.post('/api/users/logout');
};

const createUser = (formData) => {
  return $.post(`api/users/register?${formData}`);
};

const getUserOrderHistory = (userId) => {
  return $.get(`api/users/history/${userId.id}`);
};
