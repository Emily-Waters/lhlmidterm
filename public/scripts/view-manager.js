$(() => {

  const $main = $('main');

  window.view = {};

  //  View manager
  window.view.show = (page, data) => {

    $resContainer.detach();
    $menuContainer.detach();

    switch (page) {
    case 'restaurants':
      $main.append($resContainer);
      break;
    case 'menu':
      // TODO: need to load menu cards by restaurant id and incorporate filter options
      getMenuItems(data)
        .then(menuData => {
          menuCards.addManyMenuCards(menuData);
          $main.append($menuContainer);
        });
      break;
    case 'order':
      getOrderItems(data)
        .then(orderData => {
          orderCards.addManyOrderCards(orderData);
          orderCards.updateOrderSummary();
        });
      break;
    case 'login':
      // TODO: Update user dropdown
      break;
    case 'logout':
      // TODO: Update user dropdown
      break;
    default:
      // Render home
      break;
    }

  };

});
