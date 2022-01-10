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
  // TODO: create button to show back all restaurants
  $restaurantsContainer.addClass("d-none");
};

const createRestaurant = (restaurantItem) => {
  return `

    <div onclick="loadMenuById(${restaurantItem.id})" class="row restaurant-card card mb-3 pointer">

      <img src="${restaurantItem.cover_image_url}" class="col-12 card-img-top p-0"></img>

      <div class="col-12 card-title p-2 font-weight-bold text-center">
        ${restaurantItem.name}
      </div>

        <div class="col-12">
          <div class="row">
            <div class="col-6">
              <p class="mb-0">Address: ${restaurantItem.address}</p>
              <p>Phone: ${restaurantItem.phone}</p>
            </div>
          </div>
        </div>

    </div>
    `
};
