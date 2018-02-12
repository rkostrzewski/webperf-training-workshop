# Service Workers

## Uruchamianie

Strona:
Wykonaj w konsoli komendę `statik -p 3001 .` i otwórz w przeglądarce http://localhost:3001

API:
Wykonaj w konsoli `npm install` a następnie `npm start`. API jest dostępne pod adresem http://localhost:8080

## Cel

Zapoznać się z service workerami.
Aktualna implementacja cache'uje wszystkie odpowiedzi, po tym jak zostaną wykonane.
Zaimplementuj Service Workera tak żeby wysyłał odpowiedzi na requesty do API z cache'u tylko jeśli nie minęło 15 sekund od poprzedniego requestu.
Jeśli minęło więcej niż 15 sekund wykonaj request do API, a następnie go dodaj do cache'u.
