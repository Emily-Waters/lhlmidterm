$(() => {

  const checkoutCard = `
  <div class="card">
    <div class="card-body">
    </div>
  </div>
  `;



  window.checkoutCard = checkoutCard;
  $(document).on('click', '#checkout', loadCheckout);

});
