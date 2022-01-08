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
  <div class="row menu-card mb-3">

      <img src="${menuItemData.image_url}" class="col-3 menu-img">
      </img>

      <div class="col-9 menu-details">

        <div class="container">

          <div class="row">
            <div class="col menu-title p-2 font-weight-bold">
              ${menuItemData.name}
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
