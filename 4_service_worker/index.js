var loadButton = document.getElementById('load')
var resultSpan = document.getElementById('result')

loadButton.addEventListener('click', function () {
  fetch('http://localhost:8080/api/date')
    .then(function (response) {
      return response.text()
    })
    .then(function (text) {
      resultSpan.innerText = text
    })
})

// check if service workers are available
if ('serviceWorker' in navigator) {
  // register service worker
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // report progress
    if(registration.installing) {
      console.log('Service worker is installing')
    } else if(registration.active) {
      console.log('Service worker is active')
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error)
  })
}

