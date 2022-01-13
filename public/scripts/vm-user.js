$(() => {
  window.user = {};

  const $signUpCard = $(`
  <div class="user-data-card" id="user-sign-card">
    <line class="user-row-1">
    <i class="fas fa-user-plus" id="user-icon"></i>
      <div class="user-col-2">
        <form action="api/users/login" method="post" class="user-form" id="signup">
          <line>
            <label for="name">Name :</label>
            <input class="user-input" type="text" id="new-name" name="name" placeholder="Username">
          </line>
          <line>
            <label for="phone">Phone :</label>
            <input class="user-input" type="tel" id="new-phone" name="phone" placeholder="phone">
          </line>
          <line class="styled-submit" id="sign-button">Register</line>
        </form>
        </div>
    </line>
  </div>
  `);

  const $loggedOutCard = $(`
  <div class="user-data-card" id="user-log-card">
    <line class="user-row-1">
      <i class="fas fa-user-circle" id="user-icon"></i>
      <div class="user-col-1">
        <form action="api/users/login" method="post" class="user-form" id="login">
          <label for="name">Login :</label>
          <input class="user-input" type="text" id="name" name="name" placeholder="Username">
        </form>
        <line class="styled-submit" id="login-button">Submit</line>
      </div>
    </line>
    <line id="user-register">Don't have an account? <a href="" id="sign-up">Sign up</a> and enjoy some <b>FüD</b></line>
  </div>
  `);

  const $loggedInCard = $(`
  <a href="">Order History</a>
  <a href="" id='logout'>Logout</a>
  `);

  window.$loggedOutCard = $loggedOutCard;
  window.$loggedInCard = $loggedInCard;
  window.$signUpCard = $signUpCard;

  const userStatusAttachment = () => {
    $signUpCard.detach();
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

  const displayMessageToLogin = () => {
    const 
  };

  window.displayMessageToLogin = displayMessageToLogin;

  $('body').on('click', '#login-button', loginUser);
  $('body').on('submit', '#login', loginUser);
  $('body').on('click', '#logout', logoutUser);
  $('body').on('click', '#sign-up',signupClick);
  $('body').on('click', '#sign-button',registerUser);
  $('body').on('submit', '#signup', registerUser);
  $('body').on('click', '#slide-button', userContainerSlide);

});


