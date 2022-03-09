var currentNumberWrap = document.getElementById('current-number')
var currentNumber = 0

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrap.innerHTML = currentNumber
  if (currentNumber < 0) {
    currentNumberWrap.style.color = 'red'
  }
}
function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrap.innerHTML = currentNumber
  if (currentNumber > 0) {
    currentNumberWrap.style.color = 'green'
  }
}
