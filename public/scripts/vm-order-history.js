$(() => {

  window.orderHistory = {};

  const $orderHistory = $(`
  <div class="order-col-1" id="order-history-card">
    <line id="order-history">Order History</line>
      <div id="order-history-container">
      </div>
  </div>
  `);

  window.$orderHistory = $orderHistory;
  // window.$orderHistoryCard = $orderHistoryCard;
  window.$orderHistoryContainer = $('#order-history-container');

  const createOrderHistoryCard = (orderData) => {

    console.log(orderData.time);
    return $(`
      <div class="order-history-item">
        <line>${orderData.name}</line>
        <line>${orderData.time}</line>
        <line>${'$' + (orderData.total / 100).toFixed(2)}</line>
      </div>
    `);
  };

  window.orderHistory.createOrderHistoryCard = createOrderHistoryCard;


  const addOrderHistoryItem = (order) => {
    console.log('Order: ',order);
    console.log('Order Container: ',$('#order-history-container'));
    $('#order-history-container').append(order);
  };

  const clearOrderHistoryItems = () => {
    $orderHistoryContainer.empty();
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
