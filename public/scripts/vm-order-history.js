$(() => {

  window.orderHistory = {};
  const $orderHistory = $(`
  <div class="order-col-1" id="order-history-card">
    <line id="order-history">Order History</line>
      <div id="order-history-container">
      </div>
  </div>
  `);
  const $orderHistoryContainer = $('#order-history-container');

  window.$orderHistoryContainer = $orderHistoryContainer;

  window.$orderHistory = $orderHistory;
  // window.$orderHistoryCard = $orderHistoryCard;

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

  window.orderHistory.createOrderHistoryCard = createOrderHistoryCard;


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

  window.orderHistory.addOrderHistoryItem = addOrderHistoryItem;
  window.orderHistory.clearOrderHistoryItems = clearOrderHistoryItems;
  window.orderHistory.addManyOrderHistoryItems = addManyOrderHistoryItems;

});
