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

// TODO: Handle incoming messages
onmessage = function () {
  
}