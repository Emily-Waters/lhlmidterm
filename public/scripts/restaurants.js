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

const createRestaurant = (restaurantItem) => {

  return `

  <div class="row restaurant-card mb-3">

    <img src="${restaurantItem.cover_image_url}" class="col-12 restaurant-img p-0"></img>
    <div class="col-12 restaurant-title p-2 font-weight-bold text-center">
      ${restaurantItem.name}
    </div>
    <div class="col-12">
      ${restaurantItem.address}
    </div>
    <div class="col-12">
      ${restaurantItem.phone}
    </div>

  </div>
  `
};
