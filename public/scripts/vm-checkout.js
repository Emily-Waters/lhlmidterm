$(() => {

  const checkoutCard = `
  <div class="card">
    <div class="card-body">
      <p class="card-text" id="timer-counter"></p>
    </div>
  </div>
  `;



  window.checkoutCard = checkoutCard;
  $(document).on('click', '#checkout', loadCheckout);

});
