$menuItemsContainer.submit(e => {
  e.preventDefault();
  const $menuCard = $(e.target).parents(".menu-card");
  console.log($menuCard);

  // addMenuItemToOrder(menuItemData)
  //   .then(() => {
  //     $('order-container').trigger('reset');//TODO:
  //   }).then(() => {
  //     loadOrder();
  //   })
  //   .catch(err => console.log(err.message));
});

const addMenuItemToOrder = (menuItemData) => {
  // return $.post(`/api/order?menu_item=${}&order_id=${}&quantity=${}`);
};

const createOrderItem = (orderItemData) => {//TODO:
  return `
  <div class='order-item'>
  NUMBER IN LIST
  DISH NAME
  QUANTITY
  PRICE
  </div>
  `;

};

const createOrderTotal = () => {
  // GET order total from db
  $.get('api/order/:id/total')
    .then((orderTotal) => {

      return `
      <div>
      TOTAL
      ${orderTotal}

      </div>
      `;
    });
};

const loadOrder = () => {
  $.get('api/order/:id')
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
