# Maksymilian — Złota rączka

Strona wizytówka dla serwisu domowego (montaż, okna, meble, rolety, drzwi,
serwis, elektryka, hydraulika). Wrocław.

Statyczna strona: `index.html` + `style.css` + `script.js`. Bez frameworków,
bez backendu — działa od razu po wrzuceniu na GitHub Pages.

## Struktura

```
├── index.html      strona główna
├── style.css       style
├── script.js       menu mobilne, animacja grafiki hero, rok w stopce
├── assets/         tu wrzucaj zdjęcia i filmy z realizacji
└── README.md
```

## Jak opublikować na GitHub Pages

1. Utwórz nowe repozytorium na GitHub, np. `maksymilian-zlota-raczka`.
2. Wgraj do niego wszystkie pliki z tego folderu (`index.html`, `style.css`,
   `script.js`, folder `assets`).
3. W repozytorium wejdź w **Settings → Pages**.
4. W sekcji **Branch** wybierz `main` i folder `/ (root)`, kliknij **Save**.
5. Po chwili strona będzie dostępna pod adresem
   `https://TWOJA-NAZWA-UZYTKOWNIKA.github.io/NAZWA-REPOZYTORIUM/`.

## Zdjęcia i filmy z realizacji

W folderze `assets/` są już dodane realne materiały (1 zdjęcie + 8 filmów,
skompresowane pod kątem szybkiego ładowania strony) i podpięte w sekcji
„Realizacje” w `index.html`.

### Jak dodać kolejne

1. Wrzuć nowy plik do folderu `assets/`.
2. W `index.html`, w sekcji `<!-- ============ REALIZACJE ============ -->`,
   dodaj kolejny blok w `.portfolio-grid`:

   Zdjęcie:
   ```html
   <div class="portfolio-item">
     <img src="assets/nazwa-pliku.jpg" alt="Krótki opis, np. Montaż rolet w salonie">
   </div>
   ```

   Wideo:
   ```html
   <div class="portfolio-item">
     <video src="assets/nazwa-pliku.mp4" controls preload="metadata" playsinline></video>
   </div>
   ```

3. Duże filmy z telefonu warto skompresować przed dodaniem (np. przez
   `ffmpeg`), żeby strona ładowała się szybko — obecne filmy zostały
   zmniejszone do szerokości 480px, co znacznie ograniczyło ich wagę
   bez większej utraty jakości na podglądzie.

## Dane, które są już wpisane na stronie

- Telefon: `+48 691 847 756` (link `tel:` i WhatsApp)
- Adres: Wandy 3, 53-320 Wrocław (z mapą Google w sekcji kontakt)
- Godziny pracy: pon–pt 9:00–19:00, sob 9:00–15:00, niedziela zamknięte

Jeśli któreś z tych danych się zmienią, wystarczy podmienić je w
`index.html` (sekcja kontakt) — wszystkie linki (`tel:`, WhatsApp, mapa)
trzeba zaktualizować ręcznie w tych samych miejscach.
