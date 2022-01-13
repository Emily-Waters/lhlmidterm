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

const resCardClick = (e,cookie) => {
  e.preventDefault();
  const $resCard = $(e.currentTarget);
  const resCardJSON = $resCard.data().json;
  currentRestaurantId = resCardJSON.id;
  const menuRequestObj = {
    restaurantId: currentRestaurantId,
    options: null
  };
  // create order id and store in cookie
  if (cookie) {
    createNewOrder(window.cookie.id)
      .then(data => {
        window.cookie.orderId = data;
      })
      .catch(err => console.log(err.message));
    view.show('order');
  }
  view.show('menu', menuRequestObj);
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
  // number in brackets represents max minutes for the db to generate random interval with
  addIntervalToOrder(5)
    .then(interval => {
      // this gives you back the rng interval that was put in db, to be used in SMS
      console.log(interval);
    })
    .catch(err => console.log(err.message));
  // Send first SMS here with message that the order has been placed and the interval TODO:
  $('#order-cart-container').detach();
  $('#cart-dropdown .dropdown-menu').append(checkoutCard);
};

const loginUser = (e) => {
  e.preventDefault();
  const $loginForm = $('#login');
  const formData = $loginForm.serialize();
  getUser(formData)
    .then((userData) => {
      if (userData) {
        $('#user-icon-status').toggleClass('icon-active');
        $('#user-sign-card').fadeOut('slow').detach();
        window.cookie = userData;
      }
      view.show('restaurants');
    })
    .catch(err => console.log(err.message));
};

const logoutUser = (e) => {
  e.preventDefault();
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

const signupClick = (e) => {
  e.preventDefault();
  $signUpCard.hide();
  $signUpCard.fadeIn('slow');
  $userContainer.append($signUpCard);
  $('#new-name').focus();
};

const focusClicked = (e) => {
  console.log(e);
  $(e.currentTarget).animate({opacity:'1'},200);
};

const registerUser = (e) => {
  e.preventDefault();
  const formData = $('#signup').serialize();
  createUser(formData)
    .then((data) => {
      console.log(data);
      view.show('restaurants');
    })
    .catch(err => console.log(err));
};
