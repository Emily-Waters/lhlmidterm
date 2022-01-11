$(() => {

  const $loggedOutCard = $(`
  <button class="btn btn-outline-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i class="far fa-user"></i>
  </button>

  <div class="dropdown-menu dropdown-menu-right">
    <form action="api/users/login" method="post" id="login">
      <label for="name">Username :</label>
      <input type="text" id="name" name="name">
      <button>Login</button>
    </form>
  </div>`);

  const $loggedInCard = $(`
  <button class="btn btn-outline-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <i class="far fa-user"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-right">
  <button id='logout'>Logout</button>
  <a class="dropdown-item" href="#">Register</a>
  <a class="dropdown-item" href="#">Order History</a>
  </div>
`);


  window.$loggedOutCard = $loggedOutCard;
  window.$loggedInCard = $loggedInCard;

  $('body').on('submit', '#login', loginUser);
  $('body').on('click', '#logout', logoutUser);
});


// vm-ajax ------------------------------------------
const getUser = (userData) => {
  return $.post('/api/users/login', userData);
};

const unGetUser = () => {
  return $.post('/api/users/logout');
};


// vm-listeners -------------------------------------
const loginUser = (e) => {
  e.preventDefault();
  const formData = $(e.currentTarget).serialize();
  getUser(formData)
    .then((userData) => {
      if (userData) {
        window.cookie = userData;
      }
      view.show('user');
    })
    .catch(err => console.log(err.message));
};

const logoutUser = (e) => {
  unGetUser()
    .then((userData) => {
      window.cookie = userData;
      view.show('user');
    })
    .catch(err => console.log(err.message));
};
