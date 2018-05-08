var delayInput = document.getElementById('delay-input')
var numberCountInput = document.getElementById('number-count-input')
var runButton = document.getElementById('run')
var resultSpan = document.getElementById('result')

runButton.addEventListener('click', function () {
  runButton.classList.add('loading')
  var numberCount = Number(numberCountInput.value)

  getAverageOfRandomNumbersAsync(numberCount, function (average) {
    runButton.classList.remove('loading')
    resultSpan.innerText = average
  })
})

function getAverageOfRandomNumbers (numberCount) {
  var sum = 0
  for (var i = 0; i < numberCount; i++) {
    sum += getRandomNumber()
  }

  sum = sum / numberCount

  return sum
}

function getAverageOfRandomNumbersAsync (numberCount, callback) {
  getRandomNumbersAsync(numberCount, function (randomNumbers) {
    var sum = 0

    for (var i = 0; i < randomNumbers.length; i++) {
      sum += randomNumbers[i]
    }

    sum = sum / numberCount

    callback(sum)
  })
}

function getRandomNumbersAsync (numberCount, callback) {
  var randomNumbers = []
  var getRandomNumbersInFrame = function (frameStartTimestamp) {
    var maxFrameDurationMs = 10
    var now = performance.now()

    while ((randomNumbers.length < numberCount) && (frameStartTimestamp + maxFrameDurationMs) > now) {
      randomNumbers.push(getRandomNumber())
      now = performance.now()
    }

    if (randomNumbers.length >= numberCount) {
      callback(randomNumbers)
    } else {
      requestAnimationFrame(getRandomNumbersInFrame)
    }
  }

  requestAnimationFrame(getRandomNumbersInFrame)
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