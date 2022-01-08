// loadMenu gets json data from the db and serves it to renderMenu
const loadMenu = () => {
  $.get('/api/menu/')
    .then(menuData => {
      console.log(menuData);
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
  return `
  <div>
    <div>

      <img src="${menuItemData.image_url}">
      Image
      </img>

      <div>

        <h3>
          ${menuItemData.name}
        </h3>

        <article>
        ${menuItemData.description}
        </article>

        <form>
          <button>ADD</button>
        </form>
      </div>

    </div>

  </div>
  `;
};
