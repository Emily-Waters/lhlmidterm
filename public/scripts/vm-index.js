$(() => {
  document.cookie = null;
  getAllRestaurants()
    .then(data => {
      resCards.addManyResCards(data);
      view.show('restaurants');
    });
});
