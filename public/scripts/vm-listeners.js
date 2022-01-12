const menuCardSubmit = (e) => {
  e.preventDefault();
  const $menuCard = $(e.currentTarget);
  const menuCardJSON = $menuCard.data().json;
  menuCardJSON.quantity = Number(e.target[0].value);
  console.log(menuCardJSON.id);
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

// not working TODO:
const deleteItem = (e) => {
  e.preventDefault();
  const $orderItem = $(e.currentTarget);
  console.log($orderItem);
};

const loginUser = (e) => {
  // console.log('E is for cookie : ',$(e.currentTarget).prev('#login'));


  // e.target.preventDefault();
  const formData = $(e.currentTarget).prev('#login').serialize();
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
