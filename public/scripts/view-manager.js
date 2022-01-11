$(() => {

  const $main = $('main');

  window.view = {};

  //  View manager
  window.view.show = (page = 'home', data) => {

    $resContainer.detach();
    $menuContainer.detach();

    switch (page) {
    case 'restaurants':
      $main.append($resContainer);
      break;
    case 'menu':
      // TODO: need to load menu cards by restaurant id and incorporate filter options
      getMenuItems()
        .then(menuData => {
          menuCards.addManyMenuCards(menuData);
          $main.append($menuContainer);
        });
      break;
    case 'order':
      break;
    case 'login':
      break;
    case 'logout':
      break;
    default:
      // Render home
      break;
    }

  };

});
