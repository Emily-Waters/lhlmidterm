// loadMenu gets json data from the db and serves it to renderMenu
const loadMenu = (url = '/api/menu/') => {
  $.get(url)
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

// event listener for filtering
$filterOptions.submit(function(e) {
  e.preventDefault();
  const formData = $(this).serialize();
  const destinationUrl = '/api/menu?' + formData;
  // empty the container so it can load it in anew
  $menuItemsContainer.empty();
  loadMenu(destinationUrl);
});

// createMenuItem takes in single menuItem and loads the information into an html template in renderMenu and returns that template to be appended to the main body
const createMenuItem = (menuItemData) => {

  const menuItemJSON = JSON.stringify(menuItemData);

  return `
  <div class="row menu-card mb-3" data-json='${menuItemJSON}'>

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
