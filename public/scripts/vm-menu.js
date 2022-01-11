$(() => {
  window.menuCard = {};

  // Single Menu Cards
  const createMenuCard = (menuItemData) => {
    const menuItemJSON = JSON.stringify(menuItemData);
    return `
    <div class="row menu-card mb-3" id="menu-card" data-json='${menuItemJSON}'>
        <img src="${menuItemData.image_url}" class="col-3 menu-img">
        </img>
        <div class="col-9 menu-details">
          <div class="container">
            <div class="row">
              <div class="col menu-title p-2 font-weight-bold">
                ${menuItemData.name}
                <p class "menu-cost">Price: ${menuItemData.cost / 100}</p>
              </div>
            </div>
            <div class="row">
              <div class="col menu-description">
                <p class="mb-0">${menuItemData.description}</p>
              </div>
            </div>
            <div class="row">
              <div class="col menu-options">
                <div>
                VEGAN/GF/VEGETARIAN ICONS
                </div>
                <form name="order-add">
                  <input type="number" placeholder="QTY"></input>
                  <button>ADD</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
    `;
  };

  window.menuCard.createMenuCard = createMenuCard;

  const $menuContainer = $('<div class="container menu-items-container"></div>');

  window.$menuContainer = $menuContainer;

  window.menuCards = {};

  const addMenuCard = (menu) => {
    $menuContainer.append(menu);
  };

  const clearMenuCards = () => {
    $menuContainer.empty();
  };

  const addManyMenuCards = (menuData) => {
    clearMenuCards();
    for (const id in menuData) {
      const menuItemData = menuData[id];
      const menuItemCard = menuCard.createMenuCard(menuItemData);
      addMenuCard(menuItemCard);
    }
  };

  window.menuCards.addMenuCard = addMenuCard;
  window.menuCards.clearMenuCards = clearMenuCards;
  window.menuCards.addManyMenuCards = addManyMenuCards;

  $('body').on('submit','#menu-card',(e) => {
    e.preventDefault();
    const $menuCard = $(e.currentTarget);
    const menuCardJSON = $menuCard.data().json;
    console.log('Menu Card Meta Data: ', menuCardJSON);
    // TODO: MenuCardJSON needs to be sent to the order card
  });

});

