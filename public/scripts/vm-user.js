$(() => {
  window.user = {};

  const $loggedOutCard = $(`
  <line class="user-row-1">
  <i class="fas fa-user-circle" id="user-icon"></i>
  <div class="user-col-1">
  <form action="api/users/login" method="post" id="login">
    <label for="name">Login :</label>
    <input class="name-input" type="text" id="name" name="name" placeholder="Username">
    </form>
  <line id="login-button">Submit</line>
  </div>
  </line>
  <line id="user-register">Don't have an account? <a href="">Sign up</a> and enjoy some <b>FüD</b></line>

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
