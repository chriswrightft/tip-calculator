document.querySelector('#container').oninput = function() {
  var bill = Number(document.querySelector('#billTotal').value),
      tipPercent = document.querySelector('#tipInput').value,
      split = document.querySelector('#splitInput').value;
  var tipValue = bill * (tipPercent / 100);
  var newBillEach = (bill + tipValue) / split;
  var tipEach = tipValue / split;

      document.querySelector('#tipOutput').innerHTML = tipPercent + "%";
      document.querySelector('#splitOutput').innerHTML = split;
      document.querySelector('#newBill').innerHTML = '£' + newBillEach.toFixed(2);
      document.querySelector('#tipEach').innerHTML = '£' + tipEach.toFixed(2);
}