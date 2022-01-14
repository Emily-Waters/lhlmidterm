$(() => {

  const checkoutCard = `
  <div class="card" id="checkout-card">
    <div class="card-body">
      <p>Order Placed, Redirecting to Homepage</p>
    </div>
  </div>
  `;

  window.checkoutCard = checkoutCard;
  $(document).on('click', '#checkout', loadCheckout);

});
