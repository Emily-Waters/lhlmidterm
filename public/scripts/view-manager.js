$(() => {

  const $main = $('main');
  const $userContainer = $('#user-container');
  window.view = {};

  //  View manager
  window.view.show = (page, data) => {

    if (!window.cookie) {
      console.log('Cookie: ',window.cookie);
      $loggedInCard.detach();
      $userContainer.append($loggedOutCard);
    } else {
      console.log('Cookie: ',window.cookie);
      $loggedOutCard.detach();
      $userContainer.append($loggedInCard);
    }

    switch (page) {
    case 'restaurants':
      $menuContainer.detach();
      $main.append($resContainer);
      break;
    case 'menu':
      $resContainer.detach();
      // TODO: need to load menu cards by restaurant id
      getMenuItems(data)
        .then(menuData => {
          menuCards.addManyMenuCards(menuData);
          $main.append($menuContainer);
        });
      break;
    case 'order':
      // TODO: Update order cart
      break;
    default:
      // Render home
      break;
    }

  };

});
