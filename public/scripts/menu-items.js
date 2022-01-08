// loadMenu gets json data from the db and serves it to renderMenu
const loadMenu = () => {
  $.get('/api/menu/')
    .then(menuData => {
      renderMenu(menuData);
    })
    .catch(err => {
      console.log(err.message);
    });
};

// renderMenu
const renderMenu = (menuItems) => {
  const $menuItemsContainer = $('div.menu-items-container');
  console.log(menuItems);
  for (const item of menuItems) {
    let $menuItem = createMenuItem(item);
    $menuItemsContainer.append($menuItem);
  }
};

// createMenuItem takes in single menuItem and loads the information into an html template in renderMenu and returns that template to be appended to the main body
const createMenuItem = (menuItemData) => {

  // menu-card needs flex-direction row
  // menu-details needs flex-direction column
  // menu-options needs flex-direction row
  return `
  <div class='menu-card'>
    <div>

      <img src="${menuItemData.image_url}" class='menu-img'>
      </img>

      <div class='menu-details'>

        <div class ='menu-title'>
          ${menuItemData.name}
        </div>

        <div class='menu-description'>
        ${menuItemData.description}
        </dive>

        <div class='menu-options'>
          <div>
            VEGAN/GF/VEGETARIAN ICONS
          </div>

          <form>
            QTY SELECTOR
            <button>ADD</button>
          </form>

        </div>

      </div>

    </div>

  </div>
  `;
};


