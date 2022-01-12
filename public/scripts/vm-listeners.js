const menuCardSubmit = (e) => {
  e.preventDefault();
  const $menuCard = $(e.currentTarget);
  const menuCardJSON = $menuCard.data().json;
  menuCardJSON.quantity = Number(e.target[0].value);
  console.log('Menu Card Meta Data: ', menuCardJSON);
  addMenuItemToOrder(menuCardJSON);
  view.show('order');
  // TODO: MenuCardJSON needs to be sent to the order card
};

const resCardClick = (e) => {
  e.preventDefault();
  const $resCard = $(e.currentTarget);
  const resCardJSON = $resCard.data().json;
  console.log('Res Card Meta Data: ', resCardJSON);
  view.show('menu');
  view.show('order');
};

const filterOptionSubmit = (e) => {
  e.preventDefault();
  const formData = $(e.currentTarget).serialize();
  const destinationUrl = '/api/menu?' + formData;
  view.show('menu', destinationUrl);
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
