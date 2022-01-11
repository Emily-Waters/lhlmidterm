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

const createOrderItem = (orderItemData) => {//TODO:
  return `
  <div class="card text-white bg-dark mb-1" style="width: 24rem;">
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



  // `
  // <div class="row order-item">
  //   <div>
  //   Name: ${orderItemData.name}
  //   </div>
  //   <div>
  //   Quantity: ${orderItemData.quantity}
  //   </div>
  //   <div>
  //   Price: ${orderItemData.cost}
  //   </div>
  //   <a>X</a>   <!-- REMOVE FROM ORDER BUTTON, SHOULD PROBABLY BE AN ICON -->
  // </div>
  // `;

};

const createOrderTotal = (orderId) => {
  // GET order total from db
  $.get(`api/order/${orderId}/total`)
    .then((orderTotal) => {

      return `
      <div>
      TOTAL
      ${orderTotal}

      </div>
      `;
    });
};

const loadOrder = (orderId = 1) => {
  console.log('i ran');
  $.get(`api/order/${orderId}/items`)
    .then((orderData) => {
      renderOrder(orderData);
    })
    .catch(err => console.log(err.message));

};

const renderOrder = (orderItems) => {
  console.log(orderItems);
  const $orderContainer = $('#order-container');
  for (const orderItem of orderItems) {
    let $orderItem = createOrderItem(orderItem);
    $orderContainer.append($orderItem);
  }
  const $orderTotal = createOrderTotal();
  $orderContainer.append($orderTotal);
};
