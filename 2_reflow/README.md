# Reflow

## Uruchamianie

Wykonaj w konsoli komendę `statik -p 3000 .` i otwórz w przeglądarce http://localhost:3000

## Cel

Osiągnąć płynność animacji równą 60 klatkom na sekundę.

Przypomnienie na czym polega reflow

```
element.style.width = '50%'

// Browser has to compute what 50% actually means
// Same goes for px as overflow could happen
var elementActualWidth = element.clientWidth
```

Lista rzeczy, które powoduję wymuszone renderowanie: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
