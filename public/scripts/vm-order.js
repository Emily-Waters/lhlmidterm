$(() => {

  // Single Order Card
  const createOrderCard = (orderItemData) => {
    const orderItemJSON = JSON.stringify(orderItemData);

    return `
    <div class="card menu-item-card text-white bg-dark mb-3" style="width: 24rem;" data-json='${orderItemJSON}'>
      <div class="card-header">
        ${orderItemData.name}
      </div>
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-4">Quantity: ${orderItemData.quantity}</div>
          <div class="col-4">Price: $${(orderItemData.cost * orderItemData.quantity) / 100}</div>
          <div class="col-1"><i class="fas fa-times"></i></div>
        </div>
      </div>
    </div>
    `;
  };

  const $orderContainer = $('#order-container');

  window.$orderContainer = $orderContainer;

  const addOrderCard = (order) => {
    $orderContainer.append(order);
  };

  const clearOrderCards = () => {
    $orderContainer.empty();
  };

  const updateOrderSummary = () => {
    getOrderTotal()
      .then((orderTotal) => {
        const subtotal = orderTotal.sum / 100;
        const gst = subtotal * 0.05;
        const pst = subtotal * 0.07;
        const total = subtotal + gst + pst;
        $('#summary-subtotal').text(`$${subtotal.toFixed(2)}`);
        $('#summary-gst').text(`$${gst.toFixed(2)}`);
        $('#summary-pst').text(`$${pst.toFixed(2)}`);
        $('#summary-total').text(`$${total.toFixed(2)}`);
      })
      .catch(err => console.log(err.message));
  };

  const addManyOrderCards = (orderData) => {
    clearOrderCards();
    for (const id in orderData) {
      const orderItemData = orderData[id];
      const orderItemCard = createOrderCard(orderItemData);
      addOrderCard(orderItemCard);
    }
  };

  $(document).on('click', '#cart-dropdown .dropdown-menu', function(e) {
    e.stopPropagation();
  });

  // NOT WORKING TODO:
  $(document).on('click', '.fa-times', deleteItem);

  window.orderCards = {
    addOrderCard,
    clearOrderCards,
    addManyOrderCards,
    updateOrderSummary
  };

});
