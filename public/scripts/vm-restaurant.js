$(() => {
  // Create resCard object in window
  window.resCard = {};

  const createResCard = (resItemData) => {
    const resItemJSON = JSON.stringify(resItemData);
    return $(`
      <div class="restaurant-card pointer" id="res-card" data-json='${resItemJSON}'>
        <img src="${resItemData.cover_image_url}" class="col-12 restaurant-img p-0"></img>
        <div class="col-12 restaurant-details text-center pb-2">
          <h5 class="restaurant-title text-center">${resItemData.name}</h5>
          <span class="mr-5">Address: ${resItemData.address}</span>
          <span>Phone: ${resItemData.phone}</span>
        </div>
    </div>
    `);
  };

  window.resCard.createResCard = createResCard;

  // Main Res Card Container
  const $resContainer = $(`<div class="container restaurants-container"></div>`);
  window.$resContainer = $resContainer;

  // Create resCards object in window
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
      const resItemData = resData[id];
      const resItemCard = resCard.createResCard(resItemData);
      addResCard(resItemCard);
    }
  };

  window.resCards.addResCard = addResCard;
  window.resCards.addManyResCards = addManyResCards;
  window.resCards.clearResCards = clearResCards;

  // Res Cards Event Listeners
  $('body').on('click','#res-card', resCardClick);

});


