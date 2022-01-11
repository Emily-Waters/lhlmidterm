const $loginForm = $('#login');

$loginForm.on('submit', (e) => {
  const formData = $(e.target).serialize();
  console.log('Login');
  e.preventDefault();
  $.post('/api/users/login', formData)
    .then() // TODO: do....something?
    .catch(err => console.log(err.message));
});

const $logOut = $('#logout');

$logOut.on('click', (e) => {
  e.preventDefault();
  console.log('Logout');
  $.post('/api/users/logout')
    .then(res => console.log(res));
  // .catch(err => console.log(err.message));
});
