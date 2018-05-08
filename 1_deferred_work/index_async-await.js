var delayInput = document.getElementById('delay-input')
var numberCountInput = document.getElementById('number-count-input')
var runButton = document.getElementById('run')
var resultSpan = document.getElementById('result')

runButton.addEventListener('click', async function () {
  runButton.classList.add('loading')
  var numberCount = Number(numberCountInput.value)

  let average = await getAverageOfRandomNumbersAsync(numberCount)
  
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

async function getAverageOfRandomNumbersAsync (numberCount) {
  let randomNumbers = await getRandomNumbersAsync(numberCount)
  let average = 0

  for (var i = 0; i < randomNumbers.length; i++) {
    average += randomNumbers[i]
  }

  average = average / numberCount

  return average
}

async function getRandomNumbersAsync (numberCount, callback) {
  var maxFrameDurationMs = 10
  var randomNumbers = []

  while (randomNumbers.length < numberCount) {
    let frameStartTimestamp = await nextFrame()

    while((frameStartTimestamp + maxFrameDurationMs) > performance.now()) {
      randomNumbers.push(getRandomNumber())
    }
  }

  return randomNumbers
}


function nextFrame () {
  return new Promise(resolve => requestAnimationFrame(resolve))
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