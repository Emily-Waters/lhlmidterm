const menuCardSubmit = (e) => {
  e.preventDefault();
  const $menuCard = $(e.currentTarget);
  const menuCardJSON = $menuCard.data().json;
  console.log('Menu Card Meta Data: ', menuCardJSON);
  // TODO: MenuCardJSON needs to be sent to the order card
};

const resCardClick = (e) => {
  e.preventDefault();
  const $resCard = $(e.currentTarget);
  const resCardJSON = $resCard.data().json;
  console.log('Res Card Meta Data: ', resCardJSON);
  view.show('menu');
  // view.show('menu', resCardJSON);
};

const filterOptionSubmit = (e) => {
  e.preventDefault();
  const formData = $(e.currentTarget).serialize();
  const destinationUrl = '/api/menu?' + formData;
  console.log('formData in filterOptionSubmit: ', formData);
  console.log('url in filterOptionsSubmit: ', destinationUrl);
  view.show('menu', destinationUrl);
};
