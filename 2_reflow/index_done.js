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
  var waveHeights = []
  waveHeights[0] = waveBaseHeight + calculateWaveHeight(0)

  for (var i = 1; i < waves.length; i++) {
    var previousHeight = waveHeights[i - 1]
    waveHeights[i] = previousHeight + calculateWaveHeight(i)
  }

  for (var i = 0; i < waveHeights.length; i++) {
    waves[i].style.height = waveHeights[i] + 'px'
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
