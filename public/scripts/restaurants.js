const loadRestaurants = () => {
  const url = '/api/restaurants';
  $.get(url)
    .then(restaurantsData => {
      renderRestaurants(restaurantsData);
    })
    .catch(err => {
      console.log(err.message);
    });
};

const renderRestaurants = (restaurants) => {
  console.log(restaurants);
  for (const restaurant of restaurants) {
    let $restaurant = createRestaurant(restaurant);
    $restaurantsContainer.append($restaurant);
  }
};

// TODO: load menu by restaurant id?
const loadMenuById = (restaurantId) => {
  loadMenu();
  $restaurantsContainer.addClass("d-none");
};

const createRestaurant = (restaurantItem) => {
  return `

    <div onclick="loadMenuById(${restaurantItem.id})" class="restaurant-card mb-3 pointer">

      <img src="${restaurantItem.cover_image_url}" class="col-12 restaurant-img p-0"></img>
      <div class="col-12 restaurant-details text-center pb-2">
        <h5 class="restaurant-title font-weight-bold text-center">${restaurantItem.name}</h5>
        <span class="mr-5">Address: ${restaurantItem.address}</span>
        <span>Phone: ${restaurantItem.phone}</span>
      </div>

  </div>
  `;
};
