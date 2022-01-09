const $window         = $(window);
const $page           = $('html');
const $main = $('main');
const $menuItemsContainer = $('.menu-items-container');
const $restaurantsContainer = $('.restaurants-container');
const $filterOptions = $('#filter-options');

$(document).ready(() => {
  loadRestaurants();
});
