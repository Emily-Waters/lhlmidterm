$(() => {

  const checkoutCard = `
  <div class="card">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  `;

  window.checkoutCard = checkoutCard;
  $(document).on('click', '#order', loadCheckout);

});
