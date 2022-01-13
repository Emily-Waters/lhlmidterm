$(() => {
  window.menuCard = {};

  // Single Menu Cards
  const createMenuCard = (menuItemData) => {
    const menuItemJSON = JSON.stringify(menuItemData);
    return $(`
      <div class="row menu-card mb-3" id="menu-card" data-json='${menuItemJSON}'>
        <img src="${menuItemData.image_url}" class="col-3 menu-img">
        </img>
        <div class="col-9 menu-details">
          <div class="container">
            <div class="row mt-3">
              <h4 class="col-10 menu-title p-0 font-weight-bold">
                ${menuItemData.name}
              </h4>
              <h5 class="col-2 menu-cost p-0">Price: $<span class="label label-success">${menuItemData.cost / 100}</span></h5>
           </div>
            <div class="row mb-3">
              <div class="col menu-description">
                <p class="mb-0">${menuItemData.description}</p>
            </div>
          </div>

          <div class="row justify-content-between">
            <div class="col-3 menu-options">
              <div>
                <i class="fas fa-leaf mr-2 ${isOptionActive(menuItemData.is_vegan)}" title="Vegan"></i>
                <i class="fas fa-carrot mr-2 ${isOptionActive(menuItemData.is_vegetarian)}" title="Vegetarian"></i>
                <i class="fab fa-goodreads ${isOptionActive(menuItemData.is_gluten_free)}" title="Gluten Free"></i>
              </div class="row">
            </div>
            <div class="col-2">
              <form class="row form-group" name="order-add">
                <select class="form-control" id="menu-quantity">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <button class="btn btn-success">ADD</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  `);
  };

  const isOptionActive = (optionValue) => {
    let assignClass = 'green';
    if (!optionValue) {
      assignClass = 'red';
    }
    return assignClass;
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

  $('body').on('submit','#menu-card',menuCardSubmit);
  $('body').on('submit','#filter-options',filterOptionSubmit);
});

