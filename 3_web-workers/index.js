var delayInput = document.getElementById('delay-input')
var numberCountInput = document.getElementById('number-count-input')
var runButton = document.getElementById('run')
var resultSpan = document.getElementById('result')

// Create new worker with provided script path as source
var worker = new Worker('worker.js')

runButton.addEventListener('click', function () {
  runButton.classList.add('loading')
  var numberCount = Number(numberCountInput.value)

  // TODO: communicate with web worker
  // Send message to calculate average
  // and wait for response

  

  // runButton.classList.remove('loading')
  // resultSpan.innerText = average
})
