$(() => {

  const $main = $('main');

  window.view = {};

  //  View manager
  window.view.show = (page = 'home') => {

    $resContainer.detach();

    switch (page) {
    case 'restaurants':
      $main.append($resContainer);
      break;
    case 'menu':
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
