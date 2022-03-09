var currentNumberWrap = document.getElementById('current-number')
var currentNumber = 0

function counterDecrement() {
  currentNumber = currentNumber - 1
  currentNumberWrap.innerHTML = currentNumber
}

function counterIncrement() {
  currentNumber = currentNumber + 1
  currentNumberWrap.innerHTML = currentNumber
}
