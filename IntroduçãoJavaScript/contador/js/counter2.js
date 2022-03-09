var currentNumberWrap = document.getElementById('current-number')
var buttonDecrement = document.getElementById('button-decrement')
var buttonIncrement = document.getElementById('button-increment')
var currentNumber = 0

function counterDecrement() {
  if (currentNumber <= 0) {
    buttonDecrement.disabled = true
  } else {
    currentNumber = currentNumber - 1
    currentNumberWrap.innerHTML = currentNumber
  }
}

function counterIncrement() {
  if (currentNumber >= 10) {
    buttonIncrement.disabled = true
  } else {
    currentNumber = currentNumber + 1
    currentNumberWrap.innerHTML = currentNumber
  }
}
