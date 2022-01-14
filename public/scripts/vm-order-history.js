$(() => {

  const $orderHistory = $(`
  <div class="order-col-1 order-info-card" id="order-history-card">
    <line class="order-info" id="order-history">Order History</line>
      <div id="order-history-container">
      </div>
  </div>
  `);

  const $currentOrder = $(`
  <div class="order-col-1 order-info-card" id="current-order-card">
    <line class="order-info" id="current-order">Active Orders</line>
      <div id="current-order-container">
      </div>
  </div>
 `);

  const $latestTimer = $(`
  <div class="order-col-1 order-info-card">
    <line class="order-info">Latest Timer</line>
      <line id="timer-counter"></line>
  </div>
  `);

  const $orderHistoryContainer = $('#order-history-container');
  const $currentOrderContainer = $('#current-order-container');
  window.$currentOrderContainer = $currentOrderContainer;
  window.$orderHistoryContainer = $orderHistoryContainer;

  window.$orderHistory = $orderHistory;
  window.$currentOrder = $currentOrder;
  window.$latestTimer = $latestTimer;

  const createOrderHistoryCard = (orderData) => {
    const subtotal = orderData.total / 100;
    const gst = subtotal * 0.05;
    const pst = subtotal * 0.07;
    const total = subtotal + gst + pst;
    return $(`
      <div class="order-history-item">
        <line>${orderData.name}</line>
        <line>${orderData.time}</line>
        <line>${'$' + total.toFixed(2)}</line>
      </div>
    `);
  };

  const createCurrentOrderCard = (orderData) => {
    const subtotal = orderData.total / 100;
    const gst = subtotal * 0.05;
    const pst = subtotal * 0.07;
    const total = subtotal + gst + pst;

    //TODO: Put the timer in here
    return $(`
      <div class="order-history-item">
        <line>${orderData.name}</line>
        <line>${orderData.time}</line>
        <line>${'$' + total.toFixed(2)}</line>
      </div>
    `);
  };

  const addOrderHistoryItem = (order) => {
    $('#order-history-container').append(order);
  };

  const clearOrderHistoryItems = () => {
    $('#order-history-container').empty();
  };

  const addManyOrderHistoryItems = (orderData) => {
    clearOrderHistoryItems();
    for (const id in orderData) {
      const orderHistoryData = orderData[id];
      const orderHistoryCard = orderHistory.createOrderHistoryCard(orderHistoryData);
      addOrderHistoryItem(orderHistoryCard);
    }
  };

  const addCurrentOrderItem = (order) => {
    $('#current-order-container').append(order);
  };

  const clearCurrentOrderItems = () => {
    $('#current-order-container').empty();
  };

  const addManyCurrentOrderItems = (orderData) => {
    clearCurrentOrderItems();
    for (const id in orderData) {
      const currentOrderData = orderData[id];
      const currentOrderCard = currentOrder.createCurrentOrderCard(currentOrderData);
      addCurrentOrderItem(currentOrderCard);
    }
  };

  window.orderHistory = {
    createOrderHistoryCard,
    addOrderHistoryItem,
    clearOrderHistoryItems,
    addManyOrderHistoryItems

  };

  window.currentOrder = {
    createCurrentOrderCard,
    addCurrentOrderItem,
    clearCurrentOrderItems,
    addManyCurrentOrderItems
  };

});
