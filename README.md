# Jedlik Complex Starter

## netlify link a program teszteléséhez:
https://jedlik-complex-starter.netlify.com/

## Sablonban használt technológiák / megoldások:
=================================================
1. Frontend:
    - Vue.js (https://vuejs.org/)
    - Node.js (https://nodejs.org/en/about/)
    - Bootstrap (https://getbootstrap.com/)
    - BootstrapVue (https://bootstrap-vue.js.org/)
    - Vuex (https://vuex.vuejs.org/)
    - Vue-router (https://router.vuejs.org/)
2. Frontend development:
    - TypeScript (http://www.typescriptlang.org/)
    - ES Lint (https://eslint.org/)
    - Prettier Code formatter (https://prettier.io/)
    - VUE CLI 3 (https://cli.vuejs.org/)
    - Jest (https://jestjs.io/)

## Fejlesztői környezet telepítése, beállítása (Windows)
1.  Node.js v14.x (pl.: node-v14.16.0-x64.msi) letöltése, telepítése:<br>
    https://nodejs.org/en/download/
2.  Command prompt, npm frissítése, globális Node.js csomag(ok) telepítése:<br>
    "npm install -g npm@next" paranccsal<br>
    "npm install -g @vue/cli" paranccsal<br>
2.  Git for windows telepítése (opcionális, git-hez):<br>
    https://git-for-windows.github.io/
3.  Visual Studio Code (User Installer) telepítése:<br>
    https://code.visualstudio.com/Download<br>
    (User installer: "%LocalAppData%\Programs\Microsoft VS Code\bin" települ!)
4.  VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X<br>
    Kiterjesztések keresése, telepítés:<br>

    - Auto Rename Tag (telepítése opcionális, nyitó és záró tagek szinkron átnevezése)<br>
    https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

    - Debugger for Chrome (nyomkövetéshez, fontos)<br>
    https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

    - ESLint (linter, fontos)<br>
    https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

    - GitLens (telepítése opcionális, kiterjesztett Git szolgáltatások)<br>
    https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

    - npm (npm csomagok ellenőrzése)<br>
    https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script 

    - npm Intellisense (autocompletes npm modules in import statements)<br>
    https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense

    - Prettier - Code formatter (forráskód formázó, fontos)<br>
    https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

    - Spell Right (telepítése opcionális, angol-magyar helyesírásellenőrzés)<br>
    https://marketplace.visualstudio.com/items?itemName=ban.spellright

    - Vetur (Vue.js syntax-kemelés, snippet, emmet, linting / error checking, Auto Completion, Debugging, fontos)<br>
    https://marketplace.visualstudio.com/items?itemName=octref.vetur

    - vscode-pdf (telepítése opcionális, beépülő PDF olvasó)<br>
    https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf

    - további kiterjesztések telepítése igény szerint
    
5.  Billentyűkombinációk beállítása (opcionális):<br> 
    File\Preferences\Keyboard Shortcuts menüvel<br>
    Parancs keresése: gépeléssel<br>
    Hozzárendelés, módosítás: "ceruza" ikonra kattintással, törlés: Delete bill.<br>
     - gépel: "reopen" > parancs: "Reopen Closed Editor" > Remove Keybindings (vagy Del bill.)
     - gépel: "test" > parancs: "Run Test Task" > hozzárendel: Ctrl-Shift-T
     - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
     - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
6.  "Vue.js devtools" Chrome bővítmény telepítése, Chrome böngésző újraindítása
    Nyomkövetéskor (F5) induló Chrome-nál is telepíteni kell! Link:<br>
    https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
7.  Opcionális: VSCode beállítása: lsd. az oldal végén

## Fejlesztés, tesztelés
1.  VSCode indítása (utoljára megnyitott projektet visszatölti), vagy<br>
    Project mappa helyi menüből: Open with Code, vagy<br>
    VSCode indítása után File/Open Folder... menüpontba a project mappa (my-first-vuejs-app) megnyitása
2.  Letöltött (GitHub-clone, ZIP) repók esetén a node csomagok telepítése új terminál ablakból (Ctr-Shift-ö):<br>
    "npm install" vagy "npm i"
2.  Fejlesztői fordítás új terminál ablakból (Ctrl-Shift-ö):<br>
    "npm run serve" (vagy Ctrl-Shift-B -> task.json kell a minta szerinti tartalommal)<br>
    (első indítás után, ha változás történik, akkor újrafordít)
3.  Output: http://localhost:8080/
4.  Forrás állományok (pl.: *.ts, *.vue, ...) létrehozása, meglévők szerkesztése<br>
5.  Futtatás, nyomkövetés (opcionális):<br>
    Töréspontok elhelyezése, vagy a "debugger;" parancs elhelyezése a forráskódban.<br>
    Nyomkövetés indítása: F5-el<br>
    Első nyomkövetésnél: Select environment -> Chrome<br>
    Majd: launch.json beállítások bővítése: "sourceMaps": true<br>
6.  Terjesztési verzió fordítása új terminál ablakból (+ ikonnal is lehet új ablakot nyitni): (opcionális)<br>
    "npm run build"
7.  Formázási hibák ellenőrzése és javítása: (opcionális)<br>
    "npm run lint"
8.  Jest - Unit tesztek futtatása<br>
    "npm run test:unit"<br>
    (vagy Ctrl-Shift-T -> task.json kell a minta szerinti tartalommal + bill.kombináció hozzárendelés)<br>


## Hasznos linkek:
- https://vuejs.org/
- https://vuejs.hu/
- https://vuejs.org/v2/guide/typescript.html
- https://github.com/vuejs/awesome-vue/blob/master/README.md

## Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális):
1. GitHub account létrehozása:<br>
   https://github.com/<br>
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:<br>
   pl.: GitHub asztali alkalmazással vagy github.com-on<br>
   (JedlikVueJsStarter a repository neve a példában)
3. Git konfigurálása Git CMD ablakból (1x kell csak, Windows megjegyzi):<br>
   git config --global user.email nitslaszlo@gmail.com<br>
   git config --global user.name nitslaszlo<br>
   git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
8. Remote repository megadása új terminál ablakból (Ctr-Shift-ö)
   - "git remote add origin https://github.com/nitslaszlo/JedlikVueJsStarter.git"
   - "git push -u origin master"

### Fel/le töltés GitHub-ra későbbiekben:
1. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
2. Változások szinkronizálása ("feltöltés"):<br>
   Alul a státus sorban balra "Synchronize Changes" -ra kattint

## VS Code editor beállítása:
1. Ctrl-Shift-P vagy F1
2. "Preferen..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy
4. Preferences: "Open User Settings" a felhasználónál tárolt beállításokhoz<br>
   Konfig fájl workspace: projekt/.vscode/settings.json<br>
   Konfig fájl user: c:/Users/nitslaszlo/AppData/Roaming/Code/User/settings.json

## Deploy on netlify.com
lsd.: Deploy_on_netlify.pdf
