$menuItemsContainer.submit(e => {
  e.preventDefault();
  const $menuCard = $(e.target).parents(".menu-card");
  const quantityValue = e.target[0].value;
  const menuCardMeta = $menuCard.data().json;
  menuCardMeta.quantity = quantityValue;
  addMenuItemToOrder(menuCardMeta)
    .then(() => {
      // $('order-container').trigger('reset');//TODO:
    }).then(() => {
      loadOrder();
    })
    .catch(err => console.log(err.message));
});

const addMenuItemToOrder = (menuItemData) => {
  console.log("DOES THIS WORK?");
  return $.post(`/api/order?&order_id=${1}&menu_item=${menuItemData.id}&quantity=${menuItemData.quantity}`);
};

const createOrderItem = (orderItemData) => {//TODO:
  return `
  <div class='order-item'>
    <div>
    ${orderItemData.id}
    </div>
    <div>
    ${orderItemData.name}
    </div>
    <div>
    ${orderItemData.quantity}
    </div>
    <div>
    ${orderItemData.cost}
    </div>
    <a>X</a>   <!-- REMOVE FROM ORDER BUTTON, SHOULD PROBABLY BE AN ICON -->
  </div>
  `;

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

const loadOrder = (orderId) => {
  $.get(`api/order/${orderId}`)
    .then((orderData) => {
      renderOrder(orderData);
    })
    .catch(err => console.log(err.message));

};

const renderOrder = (orderItems) => {
  const $orderContainer = $('.order-container');
  for (const orderItem of orderItems) {
    let $orderItem = createOrderItem(orderItem);
    $orderContainer.append($orderItem);
  }
  const $orderTotal = createOrderTotal();
  $orderContainer.append($orderTotal);
};
