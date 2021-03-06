$(() => {
  const $logoButton = $('#logo-button');
  const $main = $('main');
  const $filterButton = $('#filter-option-button');
  const $userContainer = $('#user-options');
  const orderOptionsContainer = $('#order-options');

  window.$userContainer = $userContainer;
  window.$currentOrderContainer = orderOptionsContainer;
  window.view = {};
  //  View manager
  window.view.show = (page, data) => {
    switch (page) {

    case 'restaurants':
      $('input[type=checkbox]').prop('checked',false);
      $('.form-check').children('i').removeClass('green');
      $filterButton.prop('disabled', true);
      $menuContainer.fadeOut();
      $menuContainer.detach();
      $main.append($resContainer);
      $resContainer.fadeIn();
      break;
    case 'menu':
      $filterButton.prop('disabled', false);
      $resContainer.fadeOut();
      $resContainer.detach();
      getMenuItems(data)
        .then(menuData => {
          menuCards.addManyMenuCards(menuData);
          $main.append($menuContainer);
          if (!window.cookie) {
            $('.foobar').hide();
          } else {
            $('.foobar').fadeIn();
          }
          $menuContainer.fadeIn();
        })
        .catch(err => console.log(err.message));
      break;

    case 'order':
      getOrderItems(data)
        .then(orderData => {
          orderCards.addManyOrderCards(orderData);
          orderCards.updateOrderSummary();
        })
        .catch(err => console.log(err));
      break;

    default:
    }
    user.userStatusAttachment();
    $logoButton.on('click', logoHome);
  };

});
