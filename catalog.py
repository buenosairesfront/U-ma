# Catálogo de U-MA: de acá salen la página del muestrario (README*.md de este
# repo) y la sección "familia Chordex" de cada instrumento Chordex.
# Para sumar algo nuevo: agregarlo a NORNS o WEB y correr `python3 build.py`.

LANGS = ["en", "es", "fr", "de", "ja", "zh", "hi"]
LANG_NAMES = {"en": "English", "es": "Español", "fr": "Français", "de": "Deutsch",
              "ja": "日本語", "zh": "中文", "hi": "हिन्दी"}

GH = "https://github.com/buenosairesfront/"
RAW = "https://raw.githubusercontent.com/buenosairesfront/"
PAGES = "https://buenosairesfront.github.io/"
UMA_REPO = "U-ma"

# instrumentos para norns: repo, nombre, captura (dentro del repo), familia
NORNS = [
    {"repo": "chordex80", "name": "Chordex 80", "family": "chordex", "thumb": "docs/1_d50.png",
     "desc": {
         "en": "'80s polysynth with an outrun sunset",
         "es": "polisynth ochentoso con atardecer outrun",
         "fr": "polysynthé des années 80 avec un coucher de soleil outrun",
         "de": "80er-Polysynth mit Outrun-Sonnenuntergang",
         "ja": "アウトランの夕焼けを描く 80 年代ポリシンセ",
         "zh": "80 年代复音合成器，配 outrun 日落画面",
         "hi": "outrun सूर्यास्त वाला 80 के दशक का पॉलीसिंथ"}},
    {"repo": "chordexfm", "name": "Chordex FM", "family": "chordex", "thumb": "docs/3_metal.png",
     "desc": {
         "en": "4-operator FM, drawn as a flower",
         "es": "FM de 4 operadores, dibujado como una flor",
         "fr": "FM à 4 opérateurs, dessinée comme une fleur",
         "de": "FM mit 4 Operatoren, als Blume gezeichnet",
         "ja": "花として描かれる 4 オペレーター FM",
         "zh": "4 算子 FM，画成一朵花",
         "hi": "4-ऑपरेटर FM, फूल के रूप में"}},
    {"repo": "chordexstg", "name": "ChordexSTG", "family": "chordex", "thumb": "docs/2_tutti.png",
     "desc": {
         "en": "orchestral strings with real bowed-string motion",
         "es": "cuerdas de orquesta con el movimiento real de una cuerda frotada",
         "fr": "cordes d'orchestre avec le vrai mouvement d'une corde frottée",
         "de": "Orchesterstreicher mit echter Bewegung einer gestrichenen Saite",
         "ja": "弓で擦った弦の実際の動きを描くオーケストラ弦楽",
         "zh": "管弦乐弦乐，呈现真实的拉弦运动",
         "hi": "गज़ से बजे तार की असली गति वाले ऑर्केस्ट्रा स्ट्रिंग्स"}},
    {"repo": "chordexwt", "name": "Chordex WT", "family": "chordex", "thumb": "docs/2_vocal.png",
     "desc": {
         "en": "wavetable: 8 banks of 8 waves, drawn as a 3D table",
         "es": "wavetable: 8 bancos de 8 ondas, dibujado como una tabla en 3D",
         "fr": "wavetable : 8 banques de 8 ondes, dessinée comme une table en 3D",
         "de": "Wavetable: 8 Bänke mit je 8 Wellen, als 3D-Tabelle gezeichnet",
         "ja": "8 波形 × 8 バンクのウェーブテーブル。3D テーブルとして描画",
         "zh": "波表：8 个库、每库 8 个波形，画成 3D 波表",
         "hi": "वेवटेबल: 8 वेव वाले 8 बैंक, 3D टेबल के रूप में"}},
    {"repo": "alto", "name": "alto", "family": None, "thumb": "docs/2_voices.png",
     "desc": {
         "en": "three-layer polyphonic synth with a 3-ring polyrhythmic sequencer; every page is a picture of the sound",
         "es": "sinte polifónico de tres capas con secuenciador polirrítmico de 3 anillos; cada página es un dibujo del sonido",
         "fr": "synthé polyphonique à trois couches avec séquenceur polyrythmique à 3 anneaux ; chaque page est un dessin du son",
         "de": "dreischichtiger polyphoner Synth mit polyrhythmischem 3-Ring-Sequencer; jede Seite ist ein Bild des Klangs",
         "ja": "3 リングのポリリズム・シーケンサーを備えた 3 レイヤーのポリシンセ。どのページも音の絵",
         "zh": "三层复音合成器，配 3 环复节奏音序器；每一页都是声音的图像",
         "hi": "3 रिंग वाले पॉलीरिद्मिक सीक्वेंसर के साथ तीन परतों वाला पॉलीफ़ोनिक सिंथ; हर पेज ध्वनि का चित्र है"}},
]

# herramientas web (GitHub Pages)
WEB = [
    {"repo": "drumpatterns", "name": "Drum Patterns",
     "desc": {
         "en": "drum-machine patterns by style, with ratchets and export",
         "es": "patrones de caja de ritmos por estilo, con ratchets y exportación",
         "fr": "rythmes de boîte à rythmes par style, avec ratchets et export",
         "de": "Drumcomputer-Patterns nach Stil, mit Ratchets und Export",
         "ja": "スタイル別のドラムマシン・パターン。ラチェットとエクスポート付き",
         "zh": "按风格分类的鼓机节奏型，支持 ratchet 和导出",
         "hi": "शैली के अनुसार ड्रम मशीन पैटर्न, रैचेट और एक्सपोर्ट के साथ"}},
    {"repo": "matrizdepatcheo", "name": "Matriz de patcheo",
     "desc": {
         "en": "modular synth in the browser with an EMS Synthi-style pin matrix",
         "es": "sintetizador modular en el navegador con matriz de clavijas al estilo EMS Synthi",
         "fr": "synthé modulaire dans le navigateur avec une matrice à fiches façon EMS Synthi",
         "de": "Modularsynth im Browser mit Steckmatrix im Stil des EMS Synthi",
         "ja": "EMS Synthi 風のピンマトリクスを備えたブラウザ上のモジュラーシンセ",
         "zh": "浏览器中的模块合成器，配 EMS Synthi 风格的插针矩阵",
         "hi": "ब्राउज़र में मॉड्यूलर सिंथ, EMS Synthi शैली के पिन मैट्रिक्स के साथ"}},
    {"repo": "nornssoundcreator", "name": "Norns Sound Creator",
     "desc": {
         "en": "sound design for norns and SuperCollider, exporting Lua, .sc, .scd, Faust (VST/AU) and web apps",
         "es": "diseño de sonidos para norns y SuperCollider; exporta Lua, .sc, .scd, Faust (VST/AU) y web app",
         "fr": "design sonore pour norns et SuperCollider ; exporte Lua, .sc, .scd, Faust (VST/AU) et web app",
         "de": "Sounddesign für norns und SuperCollider; exportiert Lua, .sc, .scd, Faust (VST/AU) und Web-Apps",
         "ja": "norns と SuperCollider の音作り。Lua、.sc、.scd、Faust（VST/AU）、Web アプリに書き出し",
         "zh": "为 norns 和 SuperCollider 设计声音，可导出 Lua、.sc、.scd、Faust（VST/AU）和网页应用",
         "hi": "norns और SuperCollider के लिए साउंड डिज़ाइन; Lua, .sc, .scd, Faust (VST/AU) और वेब ऐप एक्सपोर्ट"}},
    {"repo": "nornscanvas", "name": "norns canvas",
     "desc": {
         "en": "pixel editor for the norns screen: 128×64, 16 brightness levels",
         "es": "editor de píxeles para la pantalla de la norns: 128×64, 16 niveles de brillo",
         "fr": "éditeur de pixels pour l'écran de norns : 128×64, 16 niveaux de luminosité",
         "de": "Pixel-Editor für das norns-Display: 128×64, 16 Helligkeitsstufen",
         "ja": "norns 画面用のピクセルエディター：128×64、16 段階の明るさ",
         "zh": "norns 屏幕的像素编辑器：128×64，16 级亮度",
         "hi": "norns स्क्रीन के लिए पिक्सेल एडिटर: 128×64, चमक के 16 स्तर"}},
    {"repo": "supercollider", "name": "SuperCollider Lab",
     "desc": {
         "en": "learn SuperCollider in the browser: 30 interactive lessons, 10 labs and live coding",
         "es": "aprendé SuperCollider en el navegador: 30 lecciones interactivas, 10 laboratorios y live coding",
         "fr": "apprendre SuperCollider dans le navigateur : 30 leçons interactives, 10 labos et live coding",
         "de": "SuperCollider im Browser lernen: 30 interaktive Lektionen, 10 Labs und Live-Coding",
         "ja": "ブラウザで SuperCollider を学ぶ：30 のレッスン、10 のラボ、ライブコーディング",
         "zh": "在浏览器中学习 SuperCollider：30 节互动课程、10 个实验和现场编程",
         "hi": "ब्राउज़र में SuperCollider सीखें: 30 इंटरैक्टिव पाठ, 10 लैब और लाइव कोडिंग"}},
    {"repo": "puredata", "name": "Laboratorio Pd",
     "desc": {
         "en": "interactive Pure Data course: 14 live patches that play in the browser",
         "es": "curso interactivo de Pure Data: 14 patches vivos que suenan en el navegador",
         "fr": "cours interactif de Pure Data : 14 patches vivants qui sonnent dans le navigateur",
         "de": "interaktiver Pure-Data-Kurs: 14 lebendige Patches, die im Browser klingen",
         "ja": "Pure Data のインタラクティブ講座：ブラウザで鳴る 14 のパッチ",
         "zh": "Pure Data 互动课程：14 个可在浏览器中发声的实时 patch",
         "hi": "Pure Data का इंटरैक्टिव कोर्स: ब्राउज़र में बजने वाले 14 लाइव पैच"}},
    {"repo": "synthlab-2", "name": "Una aproximación a las Síntesis",
     "desc": {
         "en": "an interactive tour of synthesis techniques",
         "es": "un recorrido interactivo por las técnicas de síntesis",
         "fr": "un parcours interactif des techniques de synthèse",
         "de": "ein interaktiver Rundgang durch Synthesetechniken",
         "ja": "シンセシス技法をめぐるインタラクティブなツアー",
         "zh": "合成技术的互动导览",
         "hi": "सिंथेसिस तकनीकों का इंटरैक्टिव सफ़र"}},
    {"repo": "seq", "name": "Seq",
     "desc": {
         "en": "a sequencer for trying out sequences: mutation with memory and a version tree",
         "es": "secuenciador para probar secuencias: mutación con memoria y árbol de versiones",
         "fr": "séquenceur pour essayer des séquences : mutation avec mémoire et arbre de versions",
         "de": "Sequencer zum Ausprobieren von Sequenzen: Mutation mit Gedächtnis und Versionsbaum",
         "ja": "シーケンスを試すためのシーケンサー：記憶付きのミューテーションとバージョンツリー",
         "zh": "用来尝试序列的音序器：带记忆的变异与版本树",
         "hi": "सीक्वेंस आज़माने के लिए सीक्वेंसर: याददाश्त वाला म्यूटेशन और वर्ज़न ट्री"}},
]

T = {
    "tagline": {
        "en": "Instruments and tools for making sound, by Buenos Aires Front.",
        "es": "Instrumentos y herramientas para hacer sonido, de Buenos Aires Front.",
        "fr": "Instruments et outils pour faire du son, par Buenos Aires Front.",
        "de": "Instrumente und Werkzeuge zum Klangmachen, von Buenos Aires Front.",
        "ja": "Buenos Aires Front による、音をつくるための楽器とツール。",
        "zh": "Buenos Aires Front 出品的声音创作乐器与工具。",
        "hi": "Buenos Aires Front के, ध्वनि बनाने के लिए वाद्य और टूल।"},
    "sec_norns": {
        "en": "norns instruments", "es": "Instrumentos para norns", "fr": "Instruments pour norns",
        "de": "Instrumente für norns", "ja": "norns 用の楽器", "zh": "norns 乐器", "hi": "norns के लिए वाद्य"},
    "norns_note": {
        "en": "Install each one from maiden with its `;install` command, then restart norns so the engine compiles.",
        "es": "Cada uno se instala desde maiden con su comando `;install`; después reiniciá la norns para que compile el engine.",
        "fr": "Chacun s'installe depuis maiden avec sa commande `;install`, puis redémarrez norns pour compiler le moteur.",
        "de": "Jedes Instrument in maiden mit seinem `;install`-Befehl installieren und norns danach neu starten, damit die Engine kompiliert wird.",
        "ja": "それぞれ maiden で `;install` コマンドを実行し、エンジンをコンパイルするために norns を再起動してください。",
        "zh": "在 maiden 中运行各自的 `;install` 命令，然后重启 norns 以编译引擎。",
        "hi": "हर एक को maiden में उसके `;install` कमांड से इंस्टॉल करें, फिर इंजन कंपाइल होने के लिए norns रीस्टार्ट करें।"},
    "family_h": {
        "en": "The Chordex family", "es": "La familia Chordex", "fr": "La famille Chordex",
        "de": "Die Chordex-Familie", "ja": "Chordex ファミリー", "zh": "Chordex 系列", "hi": "Chordex परिवार"},
    "family_intro": {
        "en": "Same controls, different engines. Try the others:",
        "es": "Mismos controles, motores distintos. Probá los otros:",
        "fr": "Mêmes contrôles, moteurs différents. Essayez les autres :",
        "de": "Gleiche Bedienung, andere Engines. Probier die anderen aus:",
        "ja": "操作は同じ、エンジンは別。ほかの楽器もどうぞ：",
        "zh": "操作相同，引擎不同。也来试试其他几款：",
        "hi": "कंट्रोल वही, इंजन अलग। बाकी भी आज़माएँ:"},
    "family_page": {
        "en": "One chord per key, same controls, a different engine in each:",
        "es": "Un acorde por tecla, los mismos controles y un motor distinto en cada uno:",
        "fr": "Un accord par touche, les mêmes contrôles et un moteur différent pour chacun :",
        "de": "Ein Akkord pro Taste, gleiche Bedienung, in jedem eine andere Engine:",
        "ja": "1 キーで 1 コード、操作は共通、エンジンはそれぞれ別：",
        "zh": "一键一和弦，操作相同，每款引擎各不相同：",
        "hi": "हर बटन पर एक कॉर्ड, कंट्रोल वही, हर एक में अलग इंजन:"},
    "other_h": {
        "en": "More instruments", "es": "Más instrumentos", "fr": "Autres instruments",
        "de": "Weitere Instrumente", "ja": "そのほかの楽器", "zh": "更多乐器", "hi": "और वाद्य"},
    "sec_web": {
        "en": "In the browser", "es": "En el navegador", "fr": "Dans le navigateur",
        "de": "Im Browser", "ja": "ブラウザで", "zh": "浏览器中使用", "hi": "ब्राउज़र में"},
    "web_note": {
        "en": "Nothing to install: open them and play.",
        "es": "No hay que instalar nada: abrilas y tocá.",
        "fr": "Rien à installer : ouvrez et jouez.",
        "de": "Nichts zu installieren: öffnen und loslegen.",
        "ja": "インストール不要：開いてすぐ使えます。",
        "zh": "无需安装：打开即可使用。",
        "hi": "कुछ इंस्टॉल नहीं करना: खोलें और बजाएँ।"},
    "open": {"en": "open", "es": "abrir", "fr": "ouvrir", "de": "öffnen", "ja": "開く", "zh": "打开", "hi": "खोलें"},
    "code": {"en": "code", "es": "código", "fr": "code", "de": "Code", "ja": "コード", "zh": "代码", "hi": "कोड"},
    "footer": {
        "en": "This page keeps growing: new U-MA things are added as they come out.",
        "es": "Esta página va creciendo: las cosas nuevas de U-MA se suman a medida que salen.",
        "fr": "Cette page s'agrandit : les nouveautés U-MA s'ajoutent au fil des sorties.",
        "de": "Diese Seite wächst: Neue U-MA-Sachen kommen dazu, sobald sie erscheinen.",
        "ja": "このページは随時更新：U-MA の新作は公開しだい追加されます。",
        "zh": "本页持续更新：U-MA 的新作品发布后会陆续加入。",
        "hi": "यह पेज बढ़ता रहता है: U-MA की नई चीज़ें आते ही जोड़ी जाती हैं।"},
    "uma_link": {
        "en": "**More from U-MA:** every instrument and tool in one place → [U-MA showcase]({url})",
        "es": "**Más de U-MA:** todos los instrumentos y herramientas en un solo lugar → [muestrario U-MA]({url})",
        "fr": "**Plus de U-MA :** tous les instruments et outils au même endroit → [vitrine U-MA]({url})",
        "de": "**Mehr von U-MA:** alle Instrumente und Werkzeuge an einem Ort → [U-MA-Übersicht]({url})",
        "ja": "**U-MA のほかの作品：** すべての楽器とツールをひとつに → [U-MA ショーケース]({url})",
        "zh": "**更多 U-MA 作品：** 所有乐器和工具汇集一处 → [U-MA 作品集]({url})",
        "hi": "**U-MA से और:** सभी वाद्य और टूल एक जगह → [U-MA शोकेस]({url})"},
    # títulos de sección de cada README, para saber dónde insertar
    "h_requirements": {
        "en": "## Requirements", "es": "## Requisitos", "fr": "## Prérequis", "de": "## Voraussetzungen",
        "ja": "## 必要なもの", "zh": "## 需求", "hi": "## ज़रूरतें"},
    "h_credits": {
        "en": "## Credits", "es": "## Créditos", "fr": "## Crédits", "de": "## Credits",
        "ja": "## クレジット", "zh": "## 致谢", "hi": "## श्रेय"},
}
