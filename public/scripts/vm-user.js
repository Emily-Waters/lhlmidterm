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

  const $userOptions = $(`
  <div class="user-options out">
    <i class="fas fa-chevron-right"></i>
    <div class="options">
      <line>THIS IS TEXT</line>
      <line>THIS IS ALSO TEXT</line>
      <line>THIS IS NOT TEXT</line>
      <line>K, THAT LAST ONE WAS A LIE</line>
    </div>
  </div>
  `);

  $('main').append($userOptions);

  window.user.userStatusAttachment = userStatusAttachment;

  $('body').on('submit', '#login', loginUser);
  $('body').on('click', '#logout', logoutUser);

  $('body').on('click', '.user-options', (e) => {
    const $this = $(e.currentTarget);
    $this.children('i').removeClass('rotate unrotate');
    if ($this.hasClass('out')) {
      $this
        .removeClass('out')
        .addClass('in')
        .animate({left:'97vw'},500)
        .children('i')
        .addClass('rotate');
    } else {
      $this
        .removeClass('in shadow')
        .addClass('out')
        .animate({left:'67vw'},500)
        .children('i')
        .addClass('unrotate');
    }
  });

});
