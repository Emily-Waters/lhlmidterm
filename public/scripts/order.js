$menuItemsContainer.submit(e => {
  e.preventDefault();
  const $menuCard = $(e.target).parents(".menu-card");
  const quantityValue = e.target[0].value;
  const menuCardMeta = $menuCard.data().json;
  menuCardMeta.quantity = quantityValue;
  addMenuItemToOrder(menuCardMeta);
  $('#order-container').empty();
  loadOrder();
});

const addMenuItemToOrder = (menuItemData) => {
  return $.post(`/api/order?&order_id=${1}&menu_item=${menuItemData.id}&quantity=${menuItemData.quantity}`);
};

const createOrderItem = (orderItemData) => {
  return `
  <div class="card text-white bg-dark mb-3" style="width: 24rem;">
  <div class="card-header">
    ${orderItemData.name}
  </div>
  <div class="container">
    <div class="row justify-content-around">
      <div class="col-4">Quantity: ${orderItemData.quantity}</div>
      <div class="col-4">Price: $${orderItemData.cost / 100}</div>
      <div class="col-1"><i class="fas fa-times"></i></div>
    </div>
  </div>
</div>
  `;
};

const updateOrderSummary = (orderId = 1) => {
  $.get(`api/order/${orderId}/total`)
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

const loadOrder = (orderId = 1) => {
  $.get(`api/order/${orderId}/items`)
    .then((orderData) => {
      renderOrder(orderData);
    })
    .catch(err => console.log(err.message));

};

const renderOrder = (orderItems) => {
  const $orderContainer = $('#order-container');
  for (const orderItem of orderItems) {
    let $orderItem = createOrderItem(orderItem);
    $orderContainer.append($orderItem);
  }
  updateOrderSummary();
};
