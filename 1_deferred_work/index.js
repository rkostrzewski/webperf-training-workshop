var delayInput = document.getElementById('delay-input')
var numberCountInput = document.getElementById('number-count-input')
var runButton = document.getElementById('run')
var resultSpan = document.getElementById('result')

runButton.addEventListener('click', function () {
  runButton.classList.add('loading')
  var numberCount = Number(numberCountInput.value)

  // TODO: Make this async and non-blocking
  var average = getAverageOfRandomNumbers(numberCount)

  runButton.classList.remove('loading')
  resultSpan.innerText = average
})

function getAverageOfRandomNumbers (numberCount) {
  var sum = 0
  for (var i = 0; i < numberCount; i++) {
    sum += getRandomNumber()
  }

  sum = sum / numberCount

  return sum
}

function getRandomNumber () {
  simulateHeavyWork()

  // Return random number between 0 and 100
  return Math.floor(Math.random(0, 1) * 100)
}

function simulateHeavyWork () {
  var delay = Number(delayInput.value)
  var start = Date.now()

  while(start + delay > Date.now()) {
    // Do nothing for X ms
  }
}