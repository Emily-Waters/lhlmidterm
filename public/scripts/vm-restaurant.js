$(() => {
  window.resCard = {};


  // Single Res Cards
  const createResCard = (resItemData) => {
    const resItemJSON = JSON.stringify(resItemData);
    return $(`
      <div class="restaurant-card mb-3 pointer" id="res-card" data-json='${resItemJSON}'>
        <img src="${resItemData.cover_image_url}" class="col-12 restaurant-img p-0"></img>
        <div class="col-12 restaurant-details text-center pb-2">
          <h5 class="restaurant-title font-weight-bold text-center">${resItemData.name}</h5>
          <span class="mr-5">Address: ${resItemData.address}</span>
          <span>Phone: ${resItemData.phone}</span>
        </div>
    </div>
    `);
  };

  window.resCard.createResCard = createResCard;

  // Many Res Cards

  // Main Res Card Container
  const $resContainer = $(`<div class="container restaurants-container"></div>`);

  window.$resContainer = $resContainer;

  window.resCards = {};

  const addResCard = (restaurant) => {
    $resContainer.append(restaurant);
  };

  const clearResCards = () => {
    $resContainer.empty();
  };

  const addManyResCards = (resData) => {
    clearResCards();
    for (const id in resData) {
      const res = resData[id];
      const card = resCard.createResCard(res);
      addResCard(card);
    }
  };


  window.resCards.addResCard = addResCard;
  window.resCards.addManyResCards = addManyResCards;
  window.resCards.clearResCards = clearResCards;


  $('body').on('click','#res-card',(e) => {
    const $resCard = $(e.currentTarget);
    const resCardJSON = $resCard.data().json;
    console.log('Res Card Meta Data: ', resCardJSON);
    view.show('menu', resCardJSON);
    // TODO: Load menu by restaurant id
  });

});
