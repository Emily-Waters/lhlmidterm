const menuCardSubmit = (e) => {
  e.preventDefault();
  const $menuCard = $(e.currentTarget);
  const menuCardJSON = $menuCard.data().json;
  menuCardJSON.quantity = Number(e.target[0].value);
  deleteOrderItem(menuCardJSON.id);
  addMenuItemToOrder(menuCardJSON);
  view.show('order');
};

let currentRestaurantId;

const resCardClick = (e) => {
  e.preventDefault();
  const $resCard = $(e.currentTarget);
  const resCardJSON = $resCard.data().json;
  currentRestaurantId = resCardJSON.id;
  const menuRequestObj = {
    restaurantId: currentRestaurantId,
    options: null
  }
  view.show('menu', menuRequestObj);
  view.show('order');
};

const filterOptionSubmit = (e) => {
  e.preventDefault();
  const options = $(e.currentTarget).serialize();
  const menuRequestObj = {
    restaurantId: currentRestaurantId,
    options: options
  }
  view.show('menu', menuRequestObj);

};

$('#is_vegan').click(function() {
  if ($(this).is(':checked')) {
    $('#vegan').addClass('green');
  } else $('#vegan').removeClass('green')
});

$('#is_vegetarian').click(function() {
  if ($(this).is(':checked')) {
    $('#vegetarian').addClass('green');
  } else $('#vegetarian').removeClass('green')
});

$('#is_gluten_free').click(function() {
  if ($(this).is(':checked')) {
    $('#gluten_free').addClass('green');
  } else $('#gluten_free').removeClass('green')
});

// not working TODO:
const deleteItem = (e) => {
  e.preventDefault();
  const $orderItem = $(e.target).parents('.menu-item-card');
  const orderCardJSON = $orderItem.data().json;
  deleteOrderItem(orderCardJSON.menu_item_id);
  view.show('order');
};

const loginUser = (e) => {
  e.preventDefault();
  const formData = $(e.currentTarget).serialize();
  getUser(formData)
    .then((userData) => {
      if (userData) {
        window.cookie = userData;
      }
      view.show('user');
    })
    .catch(err => console.log(err.message));
};

const logoutUser = (e) => {
  unGetUser()
    .then((userData) => {
      window.cookie = userData;
      view.show('user');
    })
    .catch(err => console.log(err.message));
};

const logoHome = (e) => {
  e.preventDefault();
  view.show('restaurants');
};
