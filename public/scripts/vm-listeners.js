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

const resCardClick = (e, cookie) => {
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

const displayNotification = (message) => {
  const alert = `
  <h4><span class="badge badge-secondary">${message}</span><h4>`
  $('#dropdown-section').prepend(alert)
  setTimeout(() => {
    $('.badge').slideUp();
  }, 1500);

};

$('#dropdown-section').click(function() {
  if (!window.cookie) {
    displayNotification(`Please log in and get some FüD.`);
  }
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
  const $loginForm = $('#login');
  const formData = $loginForm.serialize();
  getUser(formData)
    .then((userData) => {
      if (userData) {
        $('#user-icon-status').toggleClass('icon-active');
        $('#user-sign-card').fadeOut('slow').detach();
        window.cookie = userData;
        $('#dropdown-section').prepend(`<h5><span class="badge badge-secondary" id="signed-in">Signed in as ${userData.name}</span></h5>`)
      }
      view.show('restaurants');
    })
    .catch(err => console.log(err.message));
};

const logoutUser = (e) => {
  e.preventDefault();
  $('#user-icon-status').toggleClass('icon-active');
  $('#signed-in').detach();
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
      .animate({
        left: '97vw'
      }, 500)
      .children('i')
      .addClass('rotate');
  } else {
    $this
      .removeClass('in shadow')
      .addClass('out')
      .animate({
        left: '67vw'
      }, 500)
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
  $(e.currentTarget).animate({
    opacity: '1'
  }, 200);
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
