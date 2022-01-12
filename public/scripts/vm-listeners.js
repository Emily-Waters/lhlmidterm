const menuCardSubmit = (e) => {
  e.preventDefault();
  const $menuCard = $(e.currentTarget);
  const menuCardJSON = $menuCard.data().json;
  menuCardJSON.quantity = Number(e.target[0].value);
  deleteOrderItem(menuCardJSON.id);
  addMenuItemToOrder(menuCardJSON);
  view.show('order');
};

const resCardClick = (e) => {
  e.preventDefault();
  const $resCard = $(e.currentTarget);
  const resCardJSON = $resCard.data().json;
  view.show('menu');
  view.show('order');
};

const filterOptionSubmit = (e) => {
  e.preventDefault();
  const formData = $(e.currentTarget).serialize();
  const destinationUrl = '/api/menu?' + formData;
  view.show('menu', destinationUrl);
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
