// createOrder , paynmentInfo, orderSummary, updateWalletBalance

const cart = ["Fruits", "Clothes", "Books", "Devices", "Drinks"];
const walletBalance = 23700;
const orderId = 123456;
const orderValue = 749;
//Execute Fns
createOrder(cart, orderId)
  .then(function (data) {
    console.log("Order placed successfully");
    console.log(data);
    return proceedPayment(data.orderId, data.cart);
  })
  .then(function (data) {
    console.log("Order near the summary");
    console.log(data);
    return orderSummary(data.orderId, data.cart);
  })
  .then(function () {
    return updateWalletBalance(walletBalance, orderValue);
  })
  .catch(function (err) {
    console.log(err.message);
  });

//createOrder Fn
function createOrder(cart, orderId) {
  const err = new Error("Cart not valid");
  const promise = new Promise((resolve, reject) => {
    if (cart) {
      resolve({ orderId, cart });
    } else {
      reject(err.message);
    }
  });
  return promise;
}

//Proceedpayment Fn
function proceedPayment(orderId, cart) {
  let success = "payment successful";
  let error = new Error("error found in payment");
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve({ orderId, cart });
    } else {
      reject(error.message);
    }
  });
}

//orderSummary Fn
function orderSummary(orderId, cart) {
  const summary = {};
  summary.id = orderId;
  summary.items = [];
  summary.items.push(cart);
  summary.totalValue = "$1239";
  console.log(summary);
  return summary;
}

//updateWalletBalance Fn
function updateWalletBalance(wallet, orderValue) {
  const updatedBalance = wallet - orderValue;
  console.log(updatedBalance);
  return updatedBalance;
}
