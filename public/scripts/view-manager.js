$(() => {

  const $userContainer = $('#user-container');
  const $logoButton = $('#logo-button');
  const $main = $('main');
  const $filterButton = $('#filter-option-button');
  window.view = {};

  //  View manager
  window.view.show = (page, data) => {
    switch (page) {

    case 'restaurants':
      $filterButton.prop('disabled', true);
      $menuContainer.detach();
      $main.append($resContainer);
      break;

    case 'menu':
      $filterButton.prop('disabled', false);
      $resContainer.detach();
      getMenuItems(data)
        .then(menuData => {
          menuCards.addManyMenuCards(menuData);
          $main.append($menuContainer);
        })
        .catch(err => console.log(err.message));
      break;

    case 'order':
      getOrderItems(data)
        .then(orderData => {
          orderCards.addManyOrderCards(orderData);
          orderCards.updateOrderSummary();
        })
        .catch(err => console.log(err.message));
      break;

    default:
    }

    user.userStatusAttachment($userContainer);
    $logoButton.on('click', logoHome);
  };

});
