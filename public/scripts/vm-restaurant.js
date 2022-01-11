$(() => {
  window.resCard = {};


  // Single Res Cards
  const createResCard = (resItem) => {
    return `
      <div onclick="loadMenuById(${resItem.id})" class="restaurant-card mb-3 pointer">
        <img src="${resItem.cover_image_url}" class="col-12 restaurant-img p-0"></img>
        <div class="col-12 restaurant-details text-center pb-2">
          <h5 class="restaurant-title font-weight-bold text-center">${resItem.name}</h5>
          <span class="mr-5">Address: ${resItem.address}</span>
          <span>Phone: ${resItem.phone}</span>
        </div>
    </div>
    `;
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


});
