const menuCardSubmit = (e) => {
  e.preventDefault();
  const $menuCard = $(e.currentTarget);
  const menuCardJSON = $menuCard.data().json;
  menuCardJSON.quantity = Number(e.target[0].value);
  deleteOrderItem(menuCardJSON.id)
    .then(addMenuItemToOrder(menuCardJSON))
    .then(view.show('order'))
    .catch(err => console.log(err.message));
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
  };

  // create order id and store in cookie
  createNewOrder(window.cookie.id)
    .then(data => {
      window.cookie.orderId = data;
    })
    .catch(err => console.log(err.message));

  view.show('menu', menuRequestObj);
  view.show('order');
};

const filterOptionSubmit = (e) => {
  e.preventDefault();
  const options = $(e.currentTarget).serialize();
  const menuRequestObj = {
    restaurantId: currentRestaurantId,
    options: options
  };
  view.show('menu', menuRequestObj);

};

$('#is_vegan').click(function() {
  if ($(this).is(':checked')) {
    $('#vegan').addClass('green');
  } else $('#vegan').removeClass('green');
});

$('#is_vegetarian').click(function() {
  if ($(this).is(':checked')) {
    $('#vegetarian').addClass('green');
  } else $('#vegetarian').removeClass('green');
});

$('#is_gluten_free').click(function() {
  if ($(this).is(':checked')) {
    $('#gluten_free').addClass('green');
  } else $('#gluten_free').removeClass('green');
});

const deleteItem = (e) => {
  e.preventDefault();
  const $orderItem = $(e.target).parents('.menu-item-card');
  const orderCardJSON = $orderItem.data().json;
  deleteOrderItem(orderCardJSON.menu_item_id);
  view.show('order');
};

const loadCheckout = (e) => {
  e.preventDefault();
  $('#order-cart-container').detach();
  $('#cart-dropdown .dropdown-menu').append(checkoutCard);
};

const loginUser = (e) => {
  e.preventDefault();
  $('#user-icon-status').toggleClass('icon-active');
  const $loginForm = $('#login');
  const formData = $loginForm.serialize();
  getUser(formData)
    .then((userData) => {
      if (userData) {
        window.cookie = userData;
      }
      view.show('restaurants');
    })
    .catch(err => console.log(err.message));
};

const logoutUser = (e) => {
  $('#user-icon-status').toggleClass('icon-active');
  unGetUser()
    .then((userData) => {
      window.cookie = userData;
      view.show('restaurants');
      $('#name').focus();
    })
    .catch(err => console.log(err.message));
};

const logoHome = (e) => {
  e.preventDefault();
  view.show('restaurants');
};

const userContainerSlide = (e) => {
  const $this = $(e.currentTarget).parent();
  $this.children('i').removeClass('rotate unrotate');
  if ($this.hasClass('out')) {
    $this
      .removeClass('out')
      .addClass('in')
      .animate({left:'97vw'},500)
      .children('i')
      .addClass('rotate');
  } else {
    $this
      .removeClass('in shadow')
      .addClass('out')
      .animate({left:'67vw'},500)
      .children('i')
      .addClass('unrotate');
  }
};

const isUserLogged = () => {
  return window.cookie ? true : false;
};
