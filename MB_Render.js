const div = document.getElementById('my-money-button');
  var MB = {
    to: "3052",
    amount: "0.01",
    currency: "USD",
    label: "Unlock",
    clientIdentifier: "70b4e966e422161cae4eafb498766d3a",
    buttonId: "1554147627294",
    buttonData: "{}",
    type: "tip",
    onPayment: handleSuccessfulPayment,
    onError: handleFailedPayment,
	devMode: "false"
  };
  moneyButton.render(div, MB);