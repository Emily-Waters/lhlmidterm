// TODO: make sure to include in scriptsource in index.ejs

// loadMenu gets json data from the db and serves it to renderMenu
const loadMenu = () => {
  $.get('/menu')
    .then(menuData => {
      renderMenu(menuData);
    })
    .catch(err => {
      console.log(err.message)
    })
};

// renderMenu
const renderMenu = (menuItems) => {
  for (const item of menuItems) {
    let $menuItem = createMenuItem(item);
    $main.append($menuItem);
  }
};

// createMenuItem takes in single menuItem and loads the information into an html template in renderMenu and returns that template to be appended to the main body TODO:
const createMenuItem = (menuItemData) => {
  return `
  <div>
    <div>

      <img src="${menuItemData/*.WHATEVERTHEDATABASECOLUMNISCALLED*/}">
      Image
      </img>

      <div>

        <h3>
          ${menuItemData.title}
        </h3>

        <article>
        ${menuItemData.description}
        </article>

        <form>
          ${/*QTY SELECTOR*/}
          <button>ADD</button>
        </form>
      </div>

    </div>

  </div>
  `;
};
