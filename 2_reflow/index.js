var wavesContainer = document.getElementById('waves')
var frame = 0
var wavesCount = 200
var waveBaseHeight = Number(wavesContainer.dataset.size)

createWaves()
var waves = Array.from(wavesContainer.children)

animate()

function createWaves() {
  for (var i = 0; i < wavesCount; i++) {
    var wave = document.createElement('div')
    wave.classList.add('wave')
    wavesContainer.appendChild(wave)
  }
}

function updateWaves() {
  waves[0].style.height = `${waveBaseHeight + calculateWaveHeight(0)}px`

  for (var i = 1; i < waves.length; i++) {
    var previous = waves[i - 1]
    var current = waves[i]
    updateWave(current, previous, i)
  }
}

function updateWave(current, previous, waveNumber) {
  var previousHeight = previous.clientHeight
  var newHeight = previousHeight + calculateWaveHeight(waveNumber)

  current.style.height = `${newHeight}px`
}

function calculateWaveHeight(number) {
  return Math.sin(number + frame * 0.2) * 5
}

function animate() {
  frame += 1
  updateWaves()
  requestAnimationFrame(() => animate())
}
