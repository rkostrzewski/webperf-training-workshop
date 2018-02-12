# Deferred work

## Uruchamianie

Wykonaj w konsoli komendę `statik -p 3000 .` i otwórz w przeglądarce http://localhost:3000

## Cel

Wykorzystać Web Workera do liczenia średniej liczb losowych bez obciążania głównego wątku.
Animacja ma cały czas mieć płynność 60 klatek na sekundę.

Przykładowy kod komunikujący się z web workerem

index.js
```
var worker = new Worker('/path/to/worker.js')

worker.onmessage = function (event) {
  console.log('Received message from worker')
  console.log('message data:', event.data) // 'Hello John Smith!'
}

worker.postMessage({ firstName: 'John', lastName: 'Smith' })
```

worker.js
```
onmessage = function (event) {
  console.log('Received message in worker!')
  var data = event.data

  postMessage('Hello ' + data.firstName + ' ' + data.lastName + '!')
}
```