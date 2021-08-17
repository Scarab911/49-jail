# Kliento mintys

- norim galeti ikurtam kaleimui `new Jail()` suteikti pavadinima ir ji veliau keisti;

- ikurus kalejima, turi buti nurodomas jo dydis pagal kamerose laikymu kaliniu kieki, pvz, reikalingas metodas, muriame nurodysime kameros dydi ir kiek tokiu kameru yra;

- atvezus kalinius, jie visu pirma yra sutalpinami i didziausia apimti turimas kameras;

- reikia galimybes isleisti kalinius i laisve;

- reikia galimybes atlaisvinti kamera ir jeigu joje buvo kaliniu, tai juos privalu perkelti i kitas kameras;

- reikia metodo, kuris isspausdintu visu kameru, pagal dydi, uzimtuma, t.y.

```
============================================================
"XXX" kalejimas
============================================================
Vietu: 1; viso: 10; uzimtos pilnai: 3; uzimtos ne pilnai: 0;
Vietu: 3; viso: 10; uzimtos pilnai: 2; uzimtos ne pilnai: 1;
Vietu: 8; viso: 20; uzimtos pilnai: 5; uzimtos ne pilnai: 2;
============================================================
Viso vietu: 200; kaliniu: 70;
============================================================
```

- reikia metodo, kuris isspausdina individualiu kameru uzimtuma, kameras isspausdinti reikia nuo maziausios kameros link didziausios ir jei yra vienodo dydzio kameros, tai antraeilis rikiavimas yra pagal uzimtuma, nuo didziausio link maziausio;

```
============================================================
"XXX" kaleimas
============================================================
#1 Vietu: 1; uzimtumas: 1;
#2 Vietu: 1; uzimtumas: 0;
#3 Vietu: 3; uzimtumas: 2;
#4 Vietu: 8; uzimtumas: 8;
#5 Vietu: 8; uzimtumas: 5;
============================================================
```
