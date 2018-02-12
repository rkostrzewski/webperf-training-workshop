# Deferred work

## Uruchamianie

Wykonaj w konsoli komendę `statik -p 3000 .` i otwórz w przeglądarce http://localhost:3000

## Cel

Zmienić sposób działania funkcji `getAverageOfRandomNumbers`, tak by nie blokowała cały czas głównego wątku podczas wykonwania.
Animacja ma cały czas mieć płynność 60 klatek na sekundę.

Funkcja `getAverageOfRandomNumbers` powinna pobierać kolejne losowe liczby tylko jeśli jest zdąży podczas aktualnej klatki.

Przykładowy kod realizujący przetwarzanie podczas klatek:
```
function doWorkAsync (callback) {
  var maxFrameDurationMs = 10

  // requestAnimationFrame callbacks are called with DOMHighResTimeStamp when the frame started
  // DOMHighResTimeStamp represents number of milliseconds from time origin (document's lifetime beggining)
  // performance.now() returns current DOMHighResTimeStamp
  function doWorkOnFrame(frameStartTimestamp) {
    // while work is not finished and there is time to perform work inside current frame
    while (isFinished() && (frameStartTimestamp + maxFrameDurationMs) < performance.now()) {
      // do some work from where we left off
    }

    // check if finished
    if (isFinished()) {
      // notify work is finished
      callback()
    } else {
      // continue working on next frame
      requestAnimationFrame(doWorkOnFrame)
    }
  }

  requestAnimationFrame(doWorkOnFrame)
}
```

