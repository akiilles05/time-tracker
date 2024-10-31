# Időnyilvántartó Rendszer

Ez az alkalmazás egy egyszerű időnyilvántartó rendszer, amely lehetővé teszi a felhasználók számára, hogy munkaidő-bejegyzéseket hozzanak létre, szerkesszenek, töröljenek, és címkézzenek különböző kategóriák szerint. Az alkalmazás napi, heti és havi nézetben is képes megjeleníteni a bejegyzéseket. Ezen felül statisztikákat és diagramokat is nyújt az összesített munkaórák és kategória szerinti eloszlás megjelenítéséhez.

## Funkciók

- **Munkaidő bejegyzések hozzáadása és szerkesztése**: Dátummal, kezdési és befejezési idővel, leírással és címkékkel.
- **Nézetválasztó**: A bejegyzések napi, heti vagy havi nézetben jeleníthetők meg.
- **Statisztikák és diagramok**:
  - Összesített munkaórák megjelenítése.
  - Kategóriák szerinti eloszlás (diagram).
  - Bejegyzésszám napi, heti és havi nézetenként (diagram).

## Telepítési útmutató

1. **Klonozd le a projektet**:
   ```bash
   git clone https://github.com/felhasznalonev/idonyilvantarto.git
   cd idonyilvantarto
   ```
2. **Telepítsd a szükséges csomagokat**:
   ```bash
   npm install
   ```
3. **Indítsd el a projektet**:
   ```bash
   npm start
   ```

## Használat

- **Bejegyzések létrehozása**: Töltsd ki az űrlapot a dátum, kezdési és befejezési idő, leírás és címke megadásával, majd kattints a "Mentés" gombra.
- **Bejegyzések megtekintése**: Használhatod a nézetválasztót (Napi, Heti, Havi), hogy a bejegyzéseket lebontásban lásd. Minden időszakhoz külön csoportosítva jelennek meg a bejegyzések.
- **Statisztikai nézetek**:
  1. **Összesített munkaórák**: Megjeleníti a teljes munkaórák számát az összes bejegyzés alapján.
  2. **Kategóriák szerinti eloszlás**: Pie-diagram mutatja a bejegyzések kategóriák szerinti megoszlását.

## Főbb komponensek

- **App.js**: A fő komponens, amely kezeli az állapotokat és az alkalmazás logikáját.
- **BejegyzesForm.js**: Bejegyzések hozzáadására és szerkesztésére szolgáló form.
- **BejegyzesList.js**: A bejegyzések megjelenítése lebontásban a kiválasztott nézet (napi, heti vagy havi) szerint.
- **Statistics.js**: Az összesített statisztikák és diagramok megjelenítésére szolgáló komponens.

## Követelmények

- **Node.js**: A projekt fejlesztéséhez Node.js szükséges. Töltsd le a hivatalos oldalról.
- **npm**: A Node.js-hez tartozik, és a szükséges csomagok telepítéséhez használjuk.

## Technológiák

- **React**: Az alkalmazás fő frontend keretrendszere.
- **Tailwind CSS**: A modern és reszponzív felhasználói felülethez.
- **Chart.js és react-chartjs-2**: A statisztikai diagramok megjelenítéséhez.
- **date-fns**: Dátumkezelési műveletekhez, például napi, heti és havi szűréshez.
- **localStorage**: Az adatok helyben tárolása és megőrzése újratöltés után.
