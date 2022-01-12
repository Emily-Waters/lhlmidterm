$(() => {
  window.user = {};

  const $loggedOutCard = $(`
  <form action="api/users/login" method="post" id="login">
    <label for="name">Username :</label>
    <input class="name-input" type="text" id="name" name="name">
    </form>
  <line id="login-button">Login</line>
  <a href="#">Register</a>

  `);

  const $loggedInCard = $(`
  <a href="#">Order History</a>
  <a href="#" id='logout'>Logout</a>
  `);

  window.$loggedOutCard = $loggedOutCard;
  window.$loggedInCard = $loggedInCard;

  const userStatusAttachment = () => {
    if (!window.cookie) {
      $loggedInCard.fadeOut();
      $loggedInCard.detach();
      $('#order-cart-dropdown').prop('disabled', true);
      $userContainer.append($loggedOutCard);
      $loggedOutCard.fadeIn();
    } else {
      $loggedOutCard.fadeOut();
      $loggedOutCard.detach();
      $('#order-cart-dropdown').prop('disabled', false);
      $userContainer.append($loggedInCard);
      $loggedInCard.fadeIn();
    }
  };

  window.user.userStatusAttachment = userStatusAttachment;

  $('body').on('click', '#login-button', loginUser);
  $('body').on('click', '#logout', logoutUser);
  $('body').on('submit', '#login', loginUser);
  $('body').on('click', '#slide-button', userContainerSlide);

});
