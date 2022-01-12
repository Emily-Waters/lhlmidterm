$(() => {
  window.user = {};
  const $loggedOutCard = $(`
  <form action="api/users/login" method="post" id="login">
    <label for="name">Username :</label>
    <input type="text" id="name" name="name">
    <button>Login</button>
  </form>
  `);

  const $loggedInCard = $(`
  <a class="dropdown-item" href="#">Register</a>
  <a class="dropdown-item" href="#">Order History</a>
  <a class="dropdown-item" href="#" id='logout'>Logout</a>
`);

  window.$loggedOutCard = $loggedOutCard;
  window.$loggedInCard = $loggedInCard;

  const userStatusAttachment = ($userContainer) => {
    if (!window.cookie) {
      $loggedInCard.detach();
      $('#order-cart-dropdown').prop('disabled', true);
      $userContainer.append($loggedOutCard);
    } else {
      $loggedOutCard.detach();
      $('#order-cart-dropdown').prop('disabled', false);
      $userContainer.append($loggedInCard);
    }
  };

  window.user.userStatusAttachment = userStatusAttachment;

  $('body').on('submit', '#login', loginUser);
  $('body').on('click', '#logout', logoutUser);

});
