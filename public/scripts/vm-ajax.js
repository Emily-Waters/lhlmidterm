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
const addMenuItemToOrder = (menuItemData, id = 1) => {
  return $.post(`/api/order?order_id=${id}&menu_item=${menuItemData.id}&quantity=${menuItemData.quantity}`);
};

// Grabs items from current order
const getOrderItems = (id = 1) => {
  return $.get(`api/order/${id}/items`);
};

// Grabs current order total
const getOrderTotal = (id = 1) => {
  return $.get(`api/order/${id}/total`);
};

const deleteOrderItem = (itemId, orderId = 1) => {
  return $.post(`api/order/delete?order_id=${orderId}&item_id=${itemId}`);
};

const getUser = (userData) => {
  return $.post('/api/users/login', userData);
};

const unGetUser = () => {
  return $.post('/api/users/logout');
};
