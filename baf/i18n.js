/* Traducciones de Buenos Aires Front y U-MA: es (original), en, de, ja, zh, hi.
   Clave: el texto en español tal como aparece en la página; valor: [en, de, ja, zh, hi].
   Se traduce todo el texto visible, también el que aparece después (al cambiar de sección, de estación o de tema).
   Los textos compuestos con " · " se traducen por partes. Para sumar un texto nuevo, agregalo a TR. */
(()=>{
const L=["es","en","de","ja","zh","hi"],NM={es:"Español",en:"English",de:"Deutsch",ja:"日本語",zh:"中文",hi:"हिन्दी"};
const TR={
/* ---------- comunes ---------- */
"← INICIO":["← HOME","← START","← ホーム","← 首页","← होम"],
"Abrir":["Open","Öffnen","開く","打开","खोलें"],
"Próximamente":["Coming soon","Demnächst","近日公開","即将推出","जल्द आ रहा है"],
"Hecho en Buenos Aires":["Made in Buenos Aires","Gemacht in Buenos Aires","ブエノスアイレス製","布宜诺斯艾利斯制造","ब्यूनस आयर्स में बना"],
"código abierto":["open source","Open Source","オープンソース","开源","ओपन सोर्स"],
"Música":["Music","Musik","音楽","音乐","संगीत"],
"Radio":["Radio","Radio","ラジオ","电台","रेडियो"],
"Gear":["Gear","Gear","機材","设备","गियर"],
"Links":["Links","Links","リンク","链接","लिंक"],
"tocá para abrir":["tap to open","tippen zum Öffnen","タップして開く","点按打开","खोलने के लिए टैप करें"],
/* ---------- Buenos Aires Front: inicio ---------- */
"Máquinas y humanos haciendo música y sonidos.":["Machines and humans making music and sounds.","Maschinen und Menschen, die Musik und Klänge machen.","音楽とサウンドをつくる機械と人間。","机器与人类一起创造音乐和声音。","मशीनें और इंसान मिलकर संगीत और आवाज़ें बनाते हैं।"],
"en pausa":["paused","pausiert","一時停止中","已暂停","रुका हुआ"],
"tocá para escuchar":["tap to listen","tippen zum Hören","タップして聴く","点按收听","सुनने के लिए टैप करें"],
"próximamente":["coming soon","demnächst","近日公開","即将推出","जल्द आ रहा है"],
"Modo play":["Play mode","Play-Modus","プレイモード","演奏模式","प्ले मोड"],
"tocá los pads":["tap the pads","tippe auf die Pads","パッドを叩こう","敲击打击垫","पैड बजाइए"],
"Modo button":["Button mode","Button-Modus","ボタンモード","按钮模式","बटन मोड"],
/* ---------- radio ---------- */
"Sonando":["Now playing","Läuft","再生中","正在播放","चल रहा है"],
"EN EL AIRE":["ON AIR","ON AIR","オンエア","直播中","ऑन एयर"],
"SINTONIZANDO":["TUNING","ABSTIMMEN","チューニング中","调谐中","ट्यूनिंग"],
"Sintonizando…":["Tuning…","Abstimmen…","チューニング中…","调谐中…","ट्यूनिंग…"],
"Buscando…":["Searching…","Suche…","検索中…","搜索中…","खोज रहे हैं…"],
"Cargando…":["Loading…","Lädt…","読み込み中…","加载中…","लोड हो रहा है…"],
"No se pudo sintonizar":["Couldn't tune in","Kein Sender gefunden","受信できませんでした","无法调到电台","ट्यून नहीं हो सका"],
"No se pudo reproducir":["Couldn't play","Wiedergabe nicht möglich","再生できませんでした","无法播放","चल नहीं सका"],
"ESTACIONES":["STATIONS","SENDER","局","电台列表","स्टेशन"],
/* ---------- música ---------- */
"TEMAS":["TRACKS","TRACKS","曲","曲目","ट्रैक"],
"AÑO":["YEAR","JAHR","年","年份","वर्ष"],
"ÁLBUM":["ALBUM","ALBUM","アルバム","专辑","एल्बम"],
"Texto del tema: dos o tres líneas sobre cómo se hizo, con qué equipos o de qué trata. Se completa con la data.":["Track notes: two or three lines about how it was made, with what gear or what it's about. To be filled in.","Notizen zum Track: zwei, drei Zeilen darüber, wie er entstand, mit welchen Geräten oder worum es geht. Folgt noch.","曲の解説：どう作ったか、どの機材を使ったか、何についての曲かを2〜3行で。準備中。","曲目说明：用两三行介绍它是怎么做的、用了哪些设备或讲了什么。待补充。","ट्रैक नोट्स: यह कैसे बना, किस गियर से या किस बारे में है, इस पर दो-तीन पंक्तियाँ। जल्द जोड़ी जाएँगी।"],
/* ---------- gear ---------- */
"EQUIPOS":["GEAR","GERÄTE","機材","设备","उपकरण"],
"ESTUDIO":["STUDIO","STUDIO","スタジオ","工作室","स्टूडियो"],
"Marca":["Brand","Marke","メーカー","品牌","ब्रांड"],
"Modelo":["Model","Modell","モデル","型号","मॉडल"],
"Sin audio todavía":["No audio yet","Noch kein Audio","音声はまだありません","暂无音频","अभी ऑडियो नहीं"],
"Me gusta su versatilidad, sirve para tocar lead, para diseñar sonido, para experimentar con patch y la posibilidad de sumar sintes oficiales, me encanta. Lo elijo como Gear fijo, no tengo intenciones de venderlo":["I love how versatile it is: it works for playing leads, for sound design, for experimenting with patches, and you can add official synth engines, which I love. It's a permanent part of my gear, I have no plans to sell it","Ich mag seine Vielseitigkeit: Er taugt für Leads, für Sounddesign, zum Experimentieren mit Patches, und man kann offizielle Synth-Engines dazuladen, das liebe ich. Er gehört fest zu meinem Gear, verkaufen will ich ihn nicht","汎用性が好き。リードも弾けるし、音作りにも、パッチの実験にも使えて、公式のシンセエンジンを追加できるのも最高。ずっと手元に置いておく機材で、売るつもりはない","我喜欢它的多功能：能弹主音、能做音色设计、能做跳线实验，还能加装官方合成器引擎，我超爱。它是我固定的器材，没打算卖","मुझे इसकी बहुमुखी प्रतिभा पसंद है: लीड बजाने, साउंड डिज़ाइन करने और पैच के साथ प्रयोग करने के काम आता है, और इसमें आधिकारिक सिंथ इंजन जोड़े जा सकते हैं, यह मुझे बहुत पसंद है। यह मेरा स्थायी गियर है, इसे बेचने का कोई इरादा नहीं"],
"Lo vi en una review y no entendí qué era pero me destrozó la cabeza: algo que hace Sonido y no se entiende si jugas o tocas. Pedí una usada de Francia y al toque empecé a hacer sintes con vibe coding, están":["I saw it in a review and didn't understand what it was, but it blew my mind: something that makes sound where you can't tell if you're playing a game or an instrument. I ordered a used one from France and right away started making synths with vibe coding, they're","Ich habe es in einem Review gesehen und nicht verstanden, was es ist, aber es hat mich umgehauen: ein Ding, das Klang macht, und man weiß nicht, ob man spielt oder musiziert. Ich habe ein gebrauchtes aus Frankreich bestellt und sofort angefangen, mit Vibe Coding Synths zu bauen, sie sind","レビューで見て、何なのか分からなかったけど衝撃を受けた。音が出るのに、遊んでいるのか演奏しているのか分からない。フランスから中古を取り寄せて、すぐにバイブコーディングでシンセを作り始めた。作ったものは","我在一篇评测里看到它，没搞懂是什么，但它彻底震撼了我：一个能发声的东西，分不清你是在玩还是在演奏。我从法国买了一台二手的，马上开始用 vibe coding 做合成器，都在","मैंने इसे एक रिव्यू में देखा और समझ नहीं आया कि यह क्या है, पर इसने मेरा दिमाग़ हिला दिया: एक चीज़ जो आवाज़ बनाती है और पता नहीं चलता कि आप खेल रहे हैं या बजा रहे हैं। मैंने फ़्रांस से एक पुराना मँगवाया और तुरंत vibe coding से सिंथ बनाने लगा, वे"],
"acá":["here","hier","こちら","这里","यहाँ"],
", si tenes una norns los podes instalar y darles duro":["; if you have a norns you can install them and go wild","; wenn du ein norns hast, kannst du sie installieren und loslegen","。norns を持っていればインストールして思い切り遊べる","，如果你有 norns 就可以安装，尽情玩"," हैं, अगर आपके पास norns है तो इन्हें इंस्टॉल करके जमकर बजाइए"],
"Conocía de vista el Bdrum Kastle y me gustaba pero me parecía que todavía le faltaba un golpe de horno. Estaba en Tokyo y fui":["I knew the Bdrum Kastle by sight and liked it, but it felt a bit half-baked to me. I was in Tokyo and went to","Ich kannte den Bdrum Kastle vom Sehen und mochte ihn, aber er wirkte noch nicht ganz ausgereift. Ich war in Tokio und ging zu","Bdrum Kastle は見たことがあって好きだったけど、まだ詰めが甘い気がしていた。東京にいたときに","我早就见过 Bdrum Kastle，也挺喜欢，但总觉得还差点火候。我在东京时去了","मैं Bdrum Kastle को देखकर जानता था और पसंद करता था, पर लगता था कि उसमें अभी कुछ कमी है। मैं टोक्यो में था और"],
", ahi lo vi y lo pude, a duras penas, hacer sonar pero el concepto me pareció violento y es como pienso que los sintes deben ser, pequeños, baratos, versatiles y con actitud...":["; I saw it there and barely managed to get a sound out of it, but the concept blew me away, and it's how I think synths should be: small, cheap, versatile and with attitude...",", dort sah ich ihn und brachte ihn mit Müh und Not zum Klingen, aber das Konzept hat mich umgehauen, und so sollten Synths meiner Meinung nach sein: klein, günstig, vielseitig und mit Attitüde..."," に行って実物を見た。なんとか音を出すのがやっとだったけど、コンセプトに衝撃を受けた。シンセはこうあるべきだと思う。小さくて、安くて、多才で、アティチュードがある...","，在那里看到它，好不容易才让它出声，但这个理念太猛了，这正是我心中合成器该有的样子：小巧、便宜、多才多艺、有态度……"," गया, वहाँ इसे देखा और बड़ी मुश्किल से इसकी आवाज़ निकाल पाया, पर इसका कॉन्सेप्ट ज़बरदस्त लगा, मेरे हिसाब से सिंथ ऐसे ही होने चाहिए: छोटे, सस्ते, बहुमुखी और तेवर वाले..."],
"No me gusta la política de Korg, en la gama media que yo consumo todo parece estar listo para que suene genial, todo parece un gran preset, si bien el drumlogue es un instrumento genial, jamás pude incorporarlo a mi sonido, a la fecha lo tengo en venta y no quiero saber nada más con Korg":["I don't like Korg's approach: in the mid-range gear I buy, everything seems designed to sound great out of the box, it all feels like one big preset. The drumlogue is a great instrument, but I never managed to fit it into my sound; it's up for sale and I'm done with Korg","Ich mag Korgs Politik nicht: In der Mittelklasse, die ich kaufe, scheint alles darauf ausgelegt, sofort toll zu klingen, alles wirkt wie ein großes Preset. Der drumlogue ist ein tolles Instrument, aber ich konnte ihn nie in meinen Sound einbauen; er steht zum Verkauf und ich will mit Korg nichts mehr zu tun haben","Korg の方針が好きじゃない。自分が買う中価格帯では、何もかもが最初からいい音に鳴るよう作られていて、全部が大きなプリセットみたいに感じる。drumlogue は素晴らしい楽器だけど、自分のサウンドに取り込めなかった。今は売りに出していて、Korg とはもう関わりたくない","我不喜欢 Korg 的路线：在我买的中端产品里，一切似乎都为开箱即好听而设计，全都像一个大预设。drumlogue 是很棒的乐器，但我始终没能把它融入我的声音，现在正在出售，我不想再和 Korg 打交道了","मुझे Korg की नीति पसंद नहीं: मैं जो मिड-रेंज गियर लेता हूँ, उसमें सब कुछ ऐसा बना लगता है कि तुरंत बढ़िया बजे, सब एक बड़े प्रीसेट जैसा लगता है। drumlogue एक शानदार इंस्ट्रूमेंट है, पर मैं इसे कभी अपनी साउंड में शामिल नहीं कर पाया; अभी यह बिक्री के लिए है और मुझे Korg से अब कोई मतलब नहीं"],
"Para mí logra la conjunción perfecta entre instrumento, estética, sonido y lo lúdico, es un placer tocarlo, todavía no lo tengo incorporado al 100 pero lo uso mucho, es muy versátil para hacer ritmos y disparar samplers. No lo vendería pero sí lo cambiaría por el blanco, me gusta más la estética y los sonidos; a este le cargué todo el banco del EP-133":["For me it nails the perfect mix of instrument, looks, sound and play. It's a joy to play; I haven't fully worked it into my setup yet, but I use it a lot, it's very versatile for beats and triggering samples. I wouldn't sell it, but I'd swap it for the white one, I prefer its look and sounds; I loaded the whole EP-133 bank onto this one","Für mich trifft er die perfekte Mischung aus Instrument, Ästhetik, Klang und Spiel. Es macht Freude, ihn zu spielen; ganz eingebunden ist er noch nicht, aber ich nutze ihn viel, er ist sehr vielseitig für Beats und Samples. Verkaufen würde ich ihn nicht, aber gegen den weißen tauschen schon, dessen Look und Sounds gefallen mir besser; auf diesen habe ich die ganze EP-133-Bank geladen","楽器、見た目、音、遊び心が完璧に組み合わさっていると思う。弾くのが楽しい。まだ完全には使いこなせていないけどよく使っていて、ビート作りやサンプル再生にとても便利。売るつもりはないけど、白いモデルとなら交換したい。見た目も音もそっちが好き。これには EP-133 のバンクを全部入れた","对我来说，它把乐器、外观、声音和趣味完美结合在一起，弹起来很享受。我还没完全把它融入我的设备，但用得很多，做节奏和触发采样都非常灵活。我不会卖它，但会想换成白色那款，我更喜欢那款的外观和音色；这台我装了 EP-133 的全部音色库","मेरे लिए यह इंस्ट्रूमेंट, लुक, साउंड और खेल का परफ़ेक्ट मेल है, इसे बजाना मज़ेदार है। अभी इसे पूरी तरह अपने सेटअप में नहीं जोड़ पाया, पर बहुत इस्तेमाल करता हूँ, बीट बनाने और सैंपल चलाने के लिए बहुत बहुमुखी है। इसे बेचूँगा नहीं, पर सफ़ेद वाले से बदल ज़रूर लूँगा, उसका लुक और साउंड ज़्यादा पसंद है; इसमें मैंने EP-133 का पूरा बैंक डाल दिया"],
"Si hubiese sabido lo que puede hacer la norns, no lo hubiese comprado pero la idea de tirar acordes y arpegios standalone es genial, tiene un sonido súper sólido, y los presets uff, suenan increíble. Es un sinte simple, poca perilla, medianamente sencillo de usar y con buen sonido":["If I'd known what the norns can do, I wouldn't have bought it, but the idea of playing chords and arpeggios standalone is great. It has a really solid sound, and the presets, wow, they sound incredible. It's a simple synth, few knobs, fairly easy to use and it sounds good","Hätte ich gewusst, was das norns kann, hätte ich ihn nicht gekauft, aber die Idee, Akkorde und Arpeggios standalone zu spielen, ist genial. Er klingt super solide, und die Presets, wow, klingen unglaublich. Ein einfacher Synth, wenige Regler, recht leicht zu bedienen und mit gutem Klang","norns に何ができるか知っていたら買わなかったけど、単体でコードやアルペジオを鳴らせるアイデアは最高。音はすごくしっかりしていて、プリセットは信じられないほどいい音。ツマミの少ないシンプルなシンセで、わりと簡単に使えて音もいい","要是早知道 norns 能做什么，我就不会买它了，但能独立弹和弦和琶音这个想法很棒。声音超级扎实，预设好听得难以置信。这是一台简单的合成器，旋钮不多，上手比较容易，声音也好","अगर मुझे पता होता कि norns क्या कर सकता है, तो मैं इसे नहीं खरीदता, पर अकेले कॉर्ड और आर्पेजियो बजाने का आइडिया शानदार है। इसकी साउंड बहुत ठोस है, और प्रीसेट्स कमाल के लगते हैं। यह एक सीधा-सादा सिंथ है, कम नॉब, इस्तेमाल में आसान और अच्छी आवाज़ वाला"],
"Este es MI sinte, es el que más conozco, el que más toco, el que más entiendo y más lejos de sonido llevé. El secuencer lo uso apenas, lo uso más con el teclado. Como base de sonido un sinte analógico me parece imprescindible y ni hablar de todo lo que se aprende de sonido.":["This is MY synth: the one I know best, play most, understand most and have pushed furthest sound-wise. I barely use the sequencer, I mostly play it from the keyboard. As a sound foundation I think an analog synth is essential, not to mention everything you learn about sound.","Das ist MEIN Synth: der, den ich am besten kenne, am meisten spiele, am besten verstehe und klanglich am weitesten getrieben habe. Den Sequencer nutze ich kaum, eher die Tastatur. Als Klangbasis halte ich einen Analogsynth für unverzichtbar, ganz zu schweigen davon, was man dabei über Klang lernt.","これが「自分の」シンセ。一番よく知っていて、一番弾いていて、一番理解していて、音を一番遠くまで追い込んだ一台。シーケンサーはほとんど使わず、主に鍵盤で弾く。音の土台としてアナログシンセは欠かせないと思うし、音について学べることは計り知れない。","这是「我的」合成器：我最熟悉、弹得最多、最理解、在声音上走得最远的一台。音序器我几乎不用，更多用键盘弹。作为声音的基础，我觉得模拟合成器必不可少，更别提能从中学到多少关于声音的东西。","यह मेरा सिंथ है: जिसे मैं सबसे अच्छी तरह जानता हूँ, सबसे ज़्यादा बजाता हूँ, सबसे ज़्यादा समझता हूँ और जिसकी आवाज़ को सबसे दूर तक ले गया हूँ। सीक्वेंसर बहुत कम चलाता हूँ, ज़्यादातर कीबोर्ड से बजाता हूँ। आवाज़ की नींव के लिए एनालॉग सिंथ ज़रूरी लगता है, और इससे आवाज़ के बारे में जो सीखने को मिलता है, उसका तो कहना ही क्या।"],
"Es difícil de usar, tiene un sequencer que no termino de entender y se hace demasiado denso a veces, no obstante tiene un re buen sonido, con mucha fuerza. Para meter drones está sobradísimo":["It's hard to use: it has a sequencer I still don't fully get, and it can get too dense sometimes. Still, it sounds really good, with a lot of power. For drones it's more than enough","Er ist schwer zu bedienen: Er hat einen Sequencer, den ich immer noch nicht ganz verstehe, und manchmal wird es zu dicht. Trotzdem klingt er richtig gut, mit viel Kraft. Für Drones ist er mehr als genug","使いこなすのが難しい。いまだに理解しきれないシーケンサーがあって、音が密になりすぎることもある。それでも音はすごく良くて、迫力がある。ドローンを鳴らすには十分すぎる","很难上手：它的音序器我到现在还没完全搞懂，有时声音会太密。不过它的声音真的很好，很有力量。用来铺 drone 绰绰有余","इसे चलाना मुश्किल है: इसमें एक सीक्वेंसर है जिसे मैं अभी तक पूरी तरह नहीं समझ पाया, और कभी-कभी आवाज़ बहुत घनी हो जाती है। फिर भी इसकी साउंड बहुत अच्छी है, बहुत दम है। ड्रोन के लिए तो यह ज़रूरत से ज़्यादा है"],
/* ---------- links ---------- */
"Álbumes y singles":["Albums and singles","Alben und Singles","アルバムとシングル","专辑和单曲","एल्बम और सिंगल"],
"Patches y procesos":["Patches and process","Patches und Prozesse","パッチと制作過程","音色与过程","पैच और प्रोसेस"],
"Bocetos y experimentos":["Sketches and experiments","Skizzen und Experimente","スケッチと実験","草稿与实验","स्केच और प्रयोग"],
"Procesos, videos y novedades":["Process, videos and news","Prozesse, Videos und Neuigkeiten","制作過程、動画、お知らせ","过程、视频和动态","प्रोसेस, वीडियो और ख़बरें"],
/* ---------- U-MA ---------- */
"INSTRUMENTOS DIY":["DIY INSTRUMENTS","DIY-INSTRUMENTE","DIY楽器","DIY 乐器","DIY इंस्ट्रूमेंट"],
"Instrumentos y herramientas para hacer música.":["Instruments and tools for making music.","Instrumente und Werkzeuge zum Musikmachen.","音楽を作るための楽器とツール。","用来做音乐的乐器和工具。","संगीत बनाने के लिए इंस्ट्रूमेंट और टूल।"],
"Scripts que suenan":["Scripts that make sound","Scripts, die klingen","音が鳴るスクリプト","会发声的脚本","आवाज़ करने वाली स्क्रिप्ट"],
"Instrumentos para norns y norns shield, cada uno con su propio motor. Deslizá de costado para pasar de uno a otro.":["Instruments for norns and norns shield, each with its own engine. Swipe sideways to move from one to the next.","Instrumente für norns und norns shield, jedes mit eigener Engine. Wische seitlich, um zum nächsten zu wechseln.","norns と norns shield のための楽器。それぞれ独自のエンジンを搭載。横にスワイプして切り替え。","为 norns 和 norns shield 打造的乐器，每个都有自己的引擎。左右滑动切换。","norns और norns shield के लिए इंस्ट्रूमेंट, हर एक का अपना इंजन। एक से दूसरे पर जाने के लिए साइड में स्वाइप करें।"],
"COPIAR":["COPY","KOPIEREN","コピー","复制","कॉपी"],
"¡COPIADO!":["COPIED!","KOPIERT!","コピーしました","已复制","कॉपी हो गया"],
"SELECCIONADO":["SELECTED","MARKIERT","選択済み","已选中","चुना गया"],
"Synth ochentoso, puede contener trazas de synthwave, dreamwave y Windows 3.1.":["An eighties-style synth; may contain traces of synthwave, dreamwave and Windows 3.1.","Ein Achtziger-Synth, kann Spuren von Synthwave, Dreamwave und Windows 3.1 enthalten.","80年代風シンセ。シンセウェイブ、ドリームウェイブ、Windows 3.1 の成分を含む場合があります。","八十年代风格合成器，可能含有 synthwave、dreamwave 和 Windows 3.1 成分。","अस्सी के दशक वाला सिंथ, इसमें synthwave, dreamwave और Windows 3.1 के अंश हो सकते हैं।"],
"FM de 4 operadores, un DX7 shield.":["4-operator FM, a DX7 shield.","4-Operator-FM, ein DX7-Shield.","4オペレーターFM、DX7 shield。","4 算子 FM，一台 DX7 shield。","4-ऑपरेटर FM, एक DX7 shield।"],
"Un sinte de strings para meter orquesta a tu sonido.":["A string synth to add an orchestra to your sound.","Ein String-Synth, der deinem Sound ein Orchester verpasst.","サウンドにオーケストラを加えるストリングスシンセ。","一台弦乐合成器，为你的声音加入管弦乐。","आपकी साउंड में ऑर्केस्ट्रा जोड़ने वाला स्ट्रिंग सिंथ।"],
"Wavetable para todos: barré los 8 bancos con sus 8 formas de onda.":["Wavetable for everyone: sweep through 8 banks with 8 waveforms each.","Wavetable für alle: Fahre durch 8 Bänke mit je 8 Wellenformen.","誰でも使えるウェーブテーブル。8つのバンクと各8種類の波形をスイープ。","人人可用的波表：扫过 8 个音色库，每个 8 种波形。","सबके लिए वेवटेबल: 8 बैंक और उनकी 8-8 वेवफ़ॉर्म पर स्वीप करें।"],
"Sonido de consola con estética tracker: 8 chips y 8 presets que van a gastar todas tus monedas y atrofiarte los pulgares.":["Console sound with a tracker look: 8 chips and 8 presets that will eat all your coins and wear out your thumbs.","Konsolensound im Tracker-Look: 8 Chips und 8 Presets, die all deine Münzen schlucken und deine Daumen ruinieren.","トラッカー風のゲーム機サウンド。8つのチップと8つのプリセットが、コインを全部飲み込み親指を疲れさせる。","带 tracker 风格的游戏机音色：8 种芯片和 8 个预设，会吃光你所有硬币、磨坏你的拇指。","ट्रैकर लुक वाली कंसोल साउंड: 8 चिप और 8 प्रीसेट जो आपके सारे सिक्के खा जाएँगे और अँगूठे थका देंगे।"],
"Pads, texturas, drones... usá el movimiento para generar layers de sonido.":["Pads, textures, drones... use motion to build layers of sound.","Pads, Texturen, Drones... nutze Bewegung, um Klangschichten zu erzeugen.","パッド、テクスチャー、ドローン…動きを使ってサウンドのレイヤーを生み出す。","铺底、纹理、drone……用动作生成声音层次。","पैड, टेक्सचर, ड्रोन... मूवमेंट से आवाज़ की परतें बनाइए।"],
"Una voz mono y una nube de granos que se rompen como un VHS gastado. En K2, en lugar de arpegiador, tenés una falla.":["A mono voice and a cloud of grains that break up like a worn-out VHS. On K2, instead of an arpeggiator, you get a glitch.","Eine Monostimme und eine Körnerwolke, die zerfällt wie ein abgenutztes VHS. Auf K2 gibt es statt Arpeggiator eine Störung.","モノボイスと、すり切れたVHSのように崩れるグレインの雲。K2 にはアルペジエーターの代わりに「故障」がある。","一个单音声部和一团像旧录像带一样破碎的颗粒云。K2 上没有琶音器，而是一个故障。","एक मोनो आवाज़ और ग्रेन का बादल जो घिसे हुए VHS की तरह टूटता है। K2 पर आर्पेजिएटर की जगह एक गड़बड़ी मिलती है।"],
"El sinte flagship de U-MA: 3 voces con decenas de motores combinables para crear el sonido que buscás, y la posibilidad de secuenciar todo en un sequencer circular de tres pistas.":["U-MA's flagship synth: 3 voices with dozens of combinable engines to create the sound you're after, and you can sequence it all on a three-track circular sequencer.","Der Flaggschiff-Synth von U-MA: 3 Stimmen mit Dutzenden kombinierbarer Engines für den Sound, den du suchst, und alles lässt sich in einem kreisförmigen Drei-Spur-Sequencer sequenzieren.","U-MA のフラッグシップシンセ。組み合わせ可能な数十のエンジンを持つ3ボイスで理想の音を作り、3トラックの円形シーケンサーですべてをシーケンスできる。","U-MA 的旗舰合成器：3 个声部，数十种可组合的引擎，做出你想要的声音，还能在三轨环形音序器里编排一切。","U-MA का फ़्लैगशिप सिंथ: 3 आवाज़ें, दर्जनों जोड़े जा सकने वाले इंजन, जिनसे मनचाही साउंड बनाइए, और सब कुछ तीन ट्रैक वाले गोल सीक्वेंसर में सीक्वेंस कीजिए।"],
"Un cuerpo en 3D hecho de datos donde cada parte es una voz de drone: movelo, girá la cámara y desintegralo en partículas.":["A 3D body made of data where each part is a drone voice: move it, turn the camera and dissolve it into particles.","Ein 3D-Körper aus Daten, bei dem jeder Teil eine Drone-Stimme ist: bewege ihn, dreh die Kamera und lös ihn in Partikel auf.","データでできた3Dの体。各部位がドローンの声になる。動かし、カメラを回し、粒子に分解しよう。","一个由数据构成的 3D 身体，每个部位都是一个 drone 声部：移动它、转动镜头，把它分解成粒子。","डेटा से बना एक 3D शरीर जिसका हर हिस्सा एक ड्रोन आवाज़ है: इसे हिलाइए, कैमरा घुमाइए और इसे कणों में बिखेर दीजिए।"],
"Un mar que se toca solo: Tucker el velero, Mobba la ballena y Lea el ave son tres voces. Las olas eligen las notas y vos manejás el viento.":["A sea that plays itself: Tucker the sailboat, Mobba the whale and Lea the bird are three voices. The waves pick the notes and you control the wind.","Ein Meer, das sich selbst spielt: Tucker das Segelboot, Mobba der Wal und Lea der Vogel sind drei Stimmen. Die Wellen wählen die Töne, du steuerst den Wind.","ひとりでに鳴る海。帆船のタッカー、クジラのモッバ、鳥のレアが3つの声。波が音を選び、あなたは風を操る。","一片会自己演奏的海：帆船 Tucker、鲸鱼 Mobba 和鸟 Lea 是三个声部。海浪选择音符，你掌控风。","एक समुद्र जो ख़ुद बजता है: नाव टकर, व्हेल मोब्बा और पक्षी लिया तीन आवाज़ें हैं। लहरें सुर चुनती हैं और आप हवा चलाते हैं।"],
"Caja de ritmos hecha de electrónica rota: 3 voces con 3 máquinas cada una, patrones con probabilidad que se desfasan solos, stutter y estática de TV.":["A drum machine made of broken electronics: 3 voices with 3 machines each, probability patterns that drift out of phase on their own, stutter and TV static.","Eine Drum Machine aus kaputter Elektronik: 3 Stimmen mit je 3 Maschinen, Wahrscheinlichkeits-Patterns, die sich von selbst verschieben, Stutter und TV-Rauschen.","壊れた電子回路でできたリズムマシン。3ボイス×3マシン、確率で勝手にずれていくパターン、スタッター、テレビの砂嵐。","由坏掉的电子器件做成的鼓机：3 个声部，每个 3 台机器，按概率自行错位的节奏型、stutter 和电视雪花噪声。","टूटे इलेक्ट्रॉनिक्स से बनी ड्रम मशीन: 3 आवाज़ें, हर एक में 3 मशीनें, प्रॉबेबिलिटी वाले पैटर्न जो अपने आप खिसकते हैं, स्टटर और टीवी की खरखराहट।"],
"Un poeta que canta: cada palabra es una nota y cada sílaba un paso, en 7 idiomas. Jugá al cadáver exquisito o escribí el poema con tu teclado MIDI.":["A poet who sings: each word is a note and each syllable a step, in 7 languages. Play exquisite corpse or write the poem with your MIDI keyboard.","Ein Dichter, der singt: jedes Wort ist ein Ton, jede Silbe ein Schritt, in 7 Sprachen. Spiel Cadavre exquis oder schreib das Gedicht mit deinem MIDI-Keyboard.","歌う詩人。単語ひとつが音符、音節ひとつがステップ、7か国語対応。優美な死骸ゲームで遊ぶか、MIDIキーボードで詩を書こう。","一位会唱歌的诗人：每个词是一个音符，每个音节是一步，支持 7 种语言。玩「精致的尸体」接龙，或用 MIDI 键盘写诗。","गाने वाला कवि: हर शब्द एक सुर और हर अक्षर एक स्टेप, 7 भाषाओं में। 'एक्सक्विज़िट कॉर्प्स' खेलिए या अपने MIDI कीबोर्ड से कविता लिखिए।"],
"Un soplido, mil semillas: cada semilla que vuela es una nota. Congelalas en el aire y movelas para cambiar la melodía y el brillo.":["One breath, a thousand seeds: each seed that flies is a note. Freeze them in the air and move them to change the melody and brightness.","Ein Hauch, tausend Samen: jeder fliegende Samen ist ein Ton. Friere sie in der Luft ein und bewege sie, um Melodie und Brillanz zu ändern.","ひと吹きで千の種。飛んでいく種のひとつひとつが音符。空中で止めて動かし、メロディと明るさを変えよう。","一口气，千粒种子：每颗飞起的种子都是一个音符。把它们冻结在空中，移动它们来改变旋律和亮度。","एक फूँक, हज़ार बीज: उड़ता हर बीज एक सुर है। उन्हें हवा में रोकिए और हिलाकर धुन और चमक बदलिए।"],
/* tipos de script y de app (también en mayúsculas) */
"Polisynth":["Polysynth","Polysynth","ポリシンセ","复音合成器","पॉलीसिंथ"],
"Acordes":["Chords","Akkorde","コード","和弦","कॉर्ड"],
"Cuerdas":["Strings","Streicher","ストリングス","弦乐","स्ट्रिंग्स"],
"Granular":["Granular","Granular","グラニュラー","颗粒","ग्रैन्युलर"],
"Sinte":["Synth","Synth","シンセ","合成器","सिंथ"],
"Secuenciador":["Sequencer","Sequencer","シーケンサー","音序器","सीक्वेंसर"],
"Cuerpo 3D":["3D body","3D-Körper","3Dボディ","3D 身体","3D शरीर"],
"Mar generativo":["Generative sea","Generatives Meer","ジェネラティブな海","生成之海","जनरेटिव समुद्र"],
"Batería":["Drums","Drums","ドラム","鼓","ड्रम"],
"Poesía":["Poetry","Poesie","詩","诗","कविता"],
"Semillas":["Seeds","Samen","種","种子","बीज"],
"Sinte modular web":["Web modular synth","Web-Modularsynth","Webモジュラーシンセ","网页模块合成器","वेब मॉड्यूलर सिंथ"],
"Caja de ritmos":["Drum machine","Drum Machine","リズムマシン","鼓机","ड्रम मशीन"],
"Simulador de circuito":["Circuit simulator","Schaltungssimulator","回路シミュレーター","电路模拟器","सर्किट सिम्युलेटर"],
"Escalas":["Scales","Tonleitern","スケール","音阶","स्केल"],
"Técnica":["Technique","Technik","テクニック","技巧","तकनीक"],
"Curso":["Course","Kurs","コース","课程","कोर्स"],
"Síntesis":["Synthesis","Synthese","シンセシス","合成","सिंथेसिस"],
"Editor de pantalla":["Screen editor","Screen-Editor","画面エディター","屏幕编辑器","स्क्रीन एडिटर"],
"Diseño de sonido":["Sound design","Sounddesign","サウンドデザイン","声音设计","साउंड डिज़ाइन"],
"Clon":["Clone","Klon","クローン","复刻","क्लोन"],
/* filtros de web apps */
"Todo":["All","Alle","すべて","全部","सभी"],
"Secuencias":["Sequences","Sequenzen","シーケンス","音序","सीक्वेंस"],
"Piano":["Piano","Klavier","ピアノ","钢琴","पियानो"],
"Electrónica":["Electronics","Elektronik","電子工作","电子","इलेक्ट्रॉनिक्स"],
"Código":["Code","Code","コード","代码","कोड"],
/* vistas de categoría */
"Aprendé, practicá y experimentá":["Learn, practice and experiment","Lernen, üben und experimentieren","学んで、練習して、実験しよう","学习、练习、实验","सीखिए, अभ्यास कीजिए और प्रयोग कीजिए"],
"Corren en el navegador del celu o la compu, se instalan como app, guardan tus presets y no juntan datos. Deslizá para pasar de una a otra.":["They run in your phone or computer browser, install as an app, save your presets and don't collect data. Swipe to move from one to the next.","Sie laufen im Browser auf Handy oder Computer, lassen sich als App installieren, speichern deine Presets und sammeln keine Daten. Wische, um zur nächsten zu wechseln.","スマホやパソコンのブラウザで動き、アプリとしてインストールでき、プリセットを保存し、データは集めない。スワイプで切り替え。","在手机或电脑浏览器中运行，可安装为应用，保存你的预设，不收集数据。滑动切换。","ये फ़ोन या कंप्यूटर के ब्राउज़र में चलते हैं, ऐप की तरह इंस्टॉल होते हैं, आपके प्रीसेट सेव करते हैं और डेटा इकट्ठा नहीं करते। एक से दूसरे पर जाने के लिए स्वाइप करें।"],
"Diseñá tu script":["Design your script","Gestalte dein Script","スクリプトをデザインしよう","设计你的脚本","अपनी स्क्रिप्ट डिज़ाइन कीजिए"],
"Para quien programa norns: buscá el sonido y la cara de tu instrumento y llevate el código listo para pegar.":["For people who code norns: find the sound and the face of your instrument and take the code ready to paste.","Für alle, die norns programmieren: Finde Klang und Gesicht deines Instruments und nimm den fertigen Code zum Einfügen mit.","norns をプログラムする人へ。楽器の音と顔を見つけて、貼り付けるだけのコードを持ち帰ろう。","写 norns 程序的人看过来：找到乐器的声音和外观，带走可直接粘贴的代码。","norns प्रोग्राम करने वालों के लिए: अपने इंस्ट्रूमेंट की आवाज़ और चेहरा खोजिए और पेस्ट करने के लिए तैयार कोड ले जाइए।"],
"Hacé tus propios instrumentos":["Build your own instruments","Bau deine eigenen Instrumente","自分の楽器を作ろう","打造你自己的乐器","अपने इंस्ट्रूमेंट ख़ुद बनाइए"],
"Prototipos, sintes, módulos y cosas electrónicas. Están en el banco de trabajo.":["Prototypes, synths, modules and electronic stuff. They're on the workbench.","Prototypen, Synths, Module und elektronischer Kram. Sie liegen auf der Werkbank.","プロトタイプ、シンセ、モジュール、電子工作。作業台の上で製作中。","原型、合成器、模块和各种电子玩意儿。都还在工作台上。","प्रोटोटाइप, सिंथ, मॉड्यूल और इलेक्ट्रॉनिक चीज़ें। ये अभी वर्कबेंच पर हैं।"],
"Herramientas":["Tools","Werkzeuge","ツール","工具","टूल्स"],
"En el banco":["On the bench","Auf der Werkbank","作業台の上","工作台上","वर्कबेंच पर"],
/* web apps */
"Matriz de patcheo":["Patch matrix","Patch-Matrix","パッチマトリクス","跳线矩阵","पैच मैट्रिक्स"],
"Laboratorio Pd":["Pd Lab","Pd-Labor","Pd ラボ","Pd 实验室","Pd लैब"],
"Una aproximación a las Síntesis":["An approach to synthesis","Eine Annäherung an die Synthese","シンセシス入門","合成入门","सिंथेसिस से एक परिचय"],
"¿Cómo car4j* se programa una de estas? Escribí tu bass-line, entendé los ligados, los acentos y los tiempos, y llevate un sheet para pasarla a tu 303 paso a paso.":["How the h*ll do you program one of these? Write your bassline, understand slides, accents and timing, and take a sheet to enter it into your 303 step by step.","Wie zum T*ufel programmiert man so ein Ding? Schreib deine Bassline, versteh Slides, Akzente und Timing, und nimm ein Blatt mit, um sie Schritt für Schritt in deine 303 zu übertragen.","いったいどうやってプログラムするの？ベースラインを書き、スライド、アクセント、タイミングを理解して、303に1ステップずつ入力するためのシートを持ち帰ろう。","这玩意儿到底怎么编程？写下你的 bassline，弄懂滑音、重音和节拍，再带走一张表，一步步输入你的 303。","आख़िर इसे प्रोग्राम कैसे करते हैं? अपनी बेसलाइन लिखिए, स्लाइड, एक्सेंट और टाइमिंग समझिए, और एक शीट लेकर उसे अपने 303 में स्टेप-दर-स्टेप डालिए।"],
"¿Qué pasa si conecto un LFO con un attack o con un release? Acá tenés una matriz de patcheo para probar lo que quieras con la calidez del Synthi. Olvidate de que es un sinte: acá la onda es patchear.":["What happens if I connect an LFO to an attack or a release? Here's a patch matrix to try anything you want with the warmth of the Synthi. Forget it's a synth: here it's all about patching.","Was passiert, wenn ich einen LFO mit einem Attack oder Release verbinde? Hier hast du eine Patch-Matrix, um alles mit der Wärme des Synthi auszuprobieren. Vergiss, dass es ein Synth ist: Hier geht's ums Patchen.","LFO をアタックやリリースにつないだらどうなる？Synthi の温かさで何でも試せるパッチマトリクス。シンセだということは忘れて、ここではパッチングを楽しもう。","如果把 LFO 接到 attack 或 release 上会怎样？这里有一个跳线矩阵，让你带着 Synthi 的温暖尝试任何想法。忘了它是合成器：这里玩的就是跳线。","अगर मैं LFO को attack या release से जोड़ूँ तो क्या होगा? यह रहा एक पैच मैट्रिक्स, Synthi की गर्माहट के साथ जो चाहें आज़माइए। भूल जाइए कि यह सिंथ है: यहाँ असली मज़ा पैचिंग में है।"],
"Practicá cómo hacer un Amen Brother o cómo hiphopearla. La idea es que pruebes cómo se escribe una línea de batería.":["Practice making an Amen Brother or getting your hip-hop on. The idea is to try out how a drum line is written.","Übe, wie man einen Amen Break baut oder Hip-Hop-Beats macht. Die Idee: ausprobieren, wie man eine Drumline schreibt.","Amen Brother の作り方やヒップホップのビートを練習しよう。ドラムラインがどう書かれるかを試すためのアプリ。","练习如何做出 Amen Brother，或者来点 hip-hop。目的是让你试试鼓点是怎么写出来的。","Amen Brother बनाना या हिप-हॉप बीट बनाना सीखिए। मक़सद है यह आज़माना कि ड्रम लाइन कैसे लिखी जाती है।"],
"Armá una Atari Punk Console con dos 555. Si vas a construir la tuya, probá cómo cambia el sonido con el valor de cada pieza, miralo en el osciloscopio, probala a ver si te cierra y llevale la lista de componentes a tu dealer de confianza.":["Build an Atari Punk Console with two 555s. If you're going to build your own, try how the sound changes with each part's value, watch it on the oscilloscope, check that it works for you and take the parts list to your trusted dealer.","Bau eine Atari Punk Console mit zwei 555ern. Wenn du deine eigene baust, teste, wie sich der Klang mit jedem Bauteilwert ändert, schau ihn dir am Oszilloskop an, prüf, ob er dir gefällt, und bring die Bauteilliste zu deinem Händler des Vertrauens.","2つの555でAtari Punk Consoleを組もう。自作するなら、部品の値で音がどう変わるか試し、オシロスコープで見て、納得できたら部品リストをなじみの店に持っていこう。","用两颗 555 搭一台 Atari Punk Console。如果你要自己做，试试每个元件的数值怎样改变声音，在示波器上看看，确认满意后把元件清单带给你信得过的店家。","दो 555 से Atari Punk Console बनाइए। अगर अपना बनाने वाले हैं, तो देखिए हर पुर्ज़े की वैल्यू से आवाज़ कैसे बदलती है, ऑसिलोस्कोप पर देखिए, जाँचिए कि जम रहा है या नहीं, और पुर्ज़ों की सूची अपने भरोसेमंद दुकानदार के पास ले जाइए।"],
"La familia CMOS 4000, 45 chips: patas, funcionamiento, simulación lógica en vivo, relaciones y un proyecto sonoro por chip.":["The CMOS 4000 family, 45 chips: pinouts, how they work, live logic simulation, relationships and a sound project for each chip.","Die CMOS-4000-Familie, 45 Chips: Pinbelegung, Funktionsweise, Live-Logiksimulation, Zusammenhänge und ein Klangprojekt pro Chip.","CMOS 4000 ファミリー、45チップ。ピン配置、動作、ライブ論理シミュレーション、関係性、チップごとのサウンドプロジェクト。","CMOS 4000 系列，45 颗芯片：引脚、工作原理、实时逻辑仿真、相互关系，以及每颗芯片一个声音项目。","CMOS 4000 परिवार, 45 चिप: पिन, काम करने का तरीका, लाइव लॉजिक सिमुलेशन, आपसी संबंध और हर चिप के लिए एक साउंड प्रोजेक्ट।"],
"61 escalas de piano con digitaciones, arpegios, armonización y progresiones. Hacé crecer tu sonido y encontrá las sensaciones para tu música.":["61 piano scales with fingerings, arpeggios, harmonization and progressions. Grow your sound and find the feelings for your music.","61 Klaviertonleitern mit Fingersätzen, Arpeggios, Harmonisierung und Progressionen. Lass deinen Sound wachsen und finde die Stimmungen für deine Musik.","運指、アルペジオ、ハーモナイズ、コード進行つきの61のピアノスケール。サウンドを育て、音楽に合う感覚を見つけよう。","61 个钢琴音阶，附指法、琶音、和声与和弦进行。让你的声音成长，为你的音乐找到感觉。","उँगलियों की स्थिति, आर्पेजियो, हार्मनी और प्रोग्रेशन के साथ 61 पियानो स्केल। अपनी साउंड को बढ़ाइए और अपने संगीत के लिए सही एहसास खोजिए।"],
"Si usás sintes, tenés que aprender a usar los deditos. Usá esta app para entrenarte, joven padawan.":["If you use synths, you've got to learn to use your fingers. Use this app to train, young padawan.","Wer Synths spielt, muss lernen, die Finger zu benutzen. Trainier mit dieser App, junger Padawan.","シンセを使うなら、指の使い方を覚えないと。このアプリで鍛えよう、若きパダワンよ。","玩合成器就得学会用手指。用这个应用来训练吧，年轻的学徒。","अगर आप सिंथ बजाते हैं, तो उँगलियाँ चलाना सीखना होगा। इस ऐप से अभ्यास कीजिए, युवा पदावान।"],
"Sí, «programar no es para vos», pero acá tenés una aproximación real y usable para dar tus primeros pasos en este lenguaje, que también sirve para norns.":["Yes, «coding isn't for you», but here's a real, usable introduction to take your first steps in this language, which also works for norns.","Ja, „Programmieren ist nichts für dich“, aber hier gibt es einen echten, brauchbaren Einstieg für deine ersten Schritte in dieser Sprache, die auch für norns funktioniert.","そう、「プログラミングは自分には無理」。でもここには、この言語の第一歩を踏み出すための実用的な入門がある。norns にも使える言語だ。","是的，「编程不适合你」，但这里有一个真实可用的入门，帮你迈出这门语言的第一步，它也能用于 norns。","हाँ, «प्रोग्रामिंग आपके बस की नहीं», पर यहाँ इस भाषा में पहले क़दम रखने के लिए एक असली, काम का परिचय है, जो norns के लिए भी काम आती है।"],
"Pure Data es una bomba: aprendé qué cable cortar para que te explote en el cerebro.":["Pure Data is a bomb: learn which wire to cut so it blows your mind.","Pure Data ist eine Bombe: Lerne, welches Kabel du durchschneiden musst, damit sie dir im Kopf explodiert.","Pure Data は爆弾だ。どのケーブルを切れば頭の中で爆発するかを学ぼう。","Pure Data 是一颗炸弹：学会剪哪根线，让它在你脑中炸开。","Pure Data एक बम है: सीखिए कौन-सा तार काटें कि वह आपके दिमाग़ में फटे।"],
"Un recorrido por las bases de todo esto. Es imprescindible que, aunque sea, «lo tengas visto»: acá hay un par de cositas visuales que te la hacen más asible.":["A tour of the basics behind all of this. It's essential that you've at least «seen it once»: here are a few visual things that make it easier to grasp.","Ein Rundgang durch die Grundlagen von all dem. Du solltest es wenigstens „mal gesehen haben“: Hier gibt es ein paar visuelle Dinge, die es greifbarer machen.","このすべての基礎をめぐるツアー。少なくとも「一度は見たことがある」ことが大事。理解しやすくなるビジュアルをいくつか用意した。","带你走一遍这一切的基础。至少要「见过一次」：这里有一些可视化的小东西，让它更容易理解。","इन सबकी बुनियाद का एक सफ़र। ज़रूरी है कि आपने इसे कम से कम «एक बार देखा हो»: यहाँ कुछ विज़ुअल चीज़ें हैं जो इसे समझना आसान बनाती हैं।"],
/* tools */
"Probá cómo sería la cara de tu instrumento: elegí entre las formas prediseñadas, las de la galería o dibujá a mano. Cuando lo tengas, exportá el código Lua de screen.":["Try out what your instrument's face could look like: choose from preset shapes, the gallery, or draw by hand. When you've got it, export the Lua screen code.","Probier aus, wie das Gesicht deines Instruments aussehen könnte: Wähle vorgefertigte Formen, die Galerie oder zeichne von Hand. Wenn es passt, exportiere den Lua-Screen-Code.","楽器の顔がどうなるか試そう。プリセットの形、ギャラリー、または手描きから選べる。できたら screen の Lua コードを書き出そう。","试试你的乐器界面会是什么样：从预设图形、图库中选，或手绘。满意后导出 screen 的 Lua 代码。","देखिए आपके इंस्ट्रूमेंट का चेहरा कैसा होगा: पहले से बनी आकृतियों, गैलरी में से चुनिए या हाथ से बनाइए। तैयार होने पर screen का Lua कोड एक्सपोर्ट कीजिए।"],
"Explorá las posibilidades de sonido de la norns, ¡con motores que ni sabías que existían! Probalos, sumalos, restalos y llevate el código para tu script.":["Explore the norns' sound possibilities, with engines you didn't even know existed! Try them, add them up, subtract them and take the code for your script.","Erkunde die Klangmöglichkeiten des norns, mit Engines, von denen du nicht mal wusstest! Probier sie aus, kombiniere sie, zieh sie ab und nimm den Code für dein Script mit.","norns の音の可能性を探ろう。存在すら知らなかったエンジンも！試して、足して、引いて、スクリプト用のコードを持ち帰ろう。","探索 norns 的声音可能性，还有你都不知道存在的引擎！试试它们、叠加、删减，再带走用于脚本的代码。","norns की आवाज़ की संभावनाएँ खोजिए, ऐसे इंजनों के साथ जिनके होने का आपको पता भी नहीं था! उन्हें आज़माइए, जोड़िए, घटाइए और अपनी स्क्रिप्ट के लिए कोड ले जाइए।"],
/* diy */
"Módulo rítmico de bajo rendimiento":["Low-performance rhythm module","Leistungsschwaches Rhythmusmodul","低性能リズムモジュール","低性能节奏模块","कम परफ़ॉर्मेंस वाला रिदम मॉड्यूल"],
"Una batería glitch construida a partir de un 40106 y un 4021.":["A glitch drum machine built from a 40106 and a 4021.","Eine Glitch-Drum-Machine aus einem 40106 und einem 4021.","40106 と 4021 で作ったグリッチドラム。","用 40106 和 4021 做的故障鼓机。","40106 और 4021 से बनी ग्लिच ड्रम मशीन।"],
"Coron DS7 clon":["Coron DS7 clone","Coron-DS7-Klon","Coron DS7 クローン","Coron DS7 复刻","Coron DS7 क्लोन"],
"Un clon de esa pequeña bestia sobrada en versatilidad.":["A clone of that little beast overflowing with versatility.","Ein Klon dieses kleinen Biests voller Vielseitigkeit.","多才さがあふれる小さな怪物のクローン。","那只多才多艺的小怪兽的复刻版。","बहुमुखी प्रतिभा से भरे उस छोटे जानवर का क्लोन।"],
"Módulos":["Modules","Module","モジュール","模块","मॉड्यूल"],
"VCO, LFO, VCA, ADSR y más: todos proyectos DIY.":["VCO, LFO, VCA, ADSR and more: all DIY projects.","VCO, LFO, VCA, ADSR und mehr: alles DIY-Projekte.","VCO、LFO、VCA、ADSR など。すべて DIY プロジェクト。","VCO、LFO、VCA、ADSR 等等：全是 DIY 项目。","VCO, LFO, VCA, ADSR और भी: सब DIY प्रोजेक्ट।"]
};
/* textos con números */
const RX=[
 [/^Tema (\d+)$/i,["Track $1","Track $1","トラック $1","曲目 $1","ट्रैक $1"]],
 [/^Equipo (\d+)$/i,["Item $1","Gerät $1","機材 $1","设备 $1","उपकरण $1"]],
 [/^Foto (\d+)$/i,["Photo $1","Foto $1","写真 $1","照片 $1","फ़ोटो $1"]],
 [/^(\d+) temas$/i,["$1 tracks","$1 Tracks","$1 曲","$1 首曲目","$1 ट्रैक"]]
];
const K={};for(const k in TR)K[k.toLowerCase()]=TR[k];
let cur="es";
const isUp=s=>/\p{L}/u.test(s)&&s===s.toUpperCase()&&s!==s.toLowerCase();
function one(s){
 const ix=L.indexOf(cur)-1,v=K[s.toLowerCase()];let r=null;
 if(v)r=v[ix];else for(const [re,t] of RX){if(re.test(s)){r=s.replace(re,t[ix]);break}}
 if(r==null)return null;if(isUp(s))return r.toUpperCase();
 if(cur==="en"&&/^\p{Ll}/u.test(s))r=r[0].toLowerCase()+r.slice(1);return r}
function t(s){
 if(cur==="es"||!s)return s;
 const m=s.match(/^(\s*)([\s\S]*?)(\s*)$/),c=m[2];if(!c)return s;
 let r=one(c);
 if(r==null&&c.startsWith("● ")){const x=one(c.slice(2));if(x!=null)r="● "+x}
 if(r==null&&c.includes(" · ")){let any=false;const parts=c.split(" · ").map(p=>{const x=one(p);if(x!=null){any=true;return x}return p});if(any)r=parts.join(" · ")}
 return r==null?s:m[1]+r+m[3]}
/* cada texto guarda su original en español; si la página lo cambia, se toma el nuevo como original */
const ORIG=new WeakMap(),MINE=new WeakMap(),SKIP=new Set(["SCRIPT","STYLE","NOSCRIPT","TEXTAREA","CODE"]);
function node(n){
 const p=n.parentElement;if(!p||SKIP.has(p.tagName)||p.closest(".lng"))return;
 if(!ORIG.has(n)||n.nodeValue!==MINE.get(n))ORIG.set(n,n.nodeValue);
 const v=t(ORIG.get(n));if(v!==n.nodeValue)n.nodeValue=v;MINE.set(n,n.nodeValue)}
function walk(root){if(root.nodeType===3)return node(root);const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode())node(n)}
new MutationObserver(ms=>{for(const m of ms){if(m.type==="characterData")node(m.target);else m.addedNodes.forEach(a=>{if(a.nodeType===3||a.nodeType===1)walk(a)})}})
 .observe(document.body,{subtree:true,childList:true,characterData:true});

/* idioma inicial: el que eligió la persona; si no, según la zona horaria y el idioma del navegador; si no, español */
function detect(){
 let tz="";try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(e){}
 if(/^(America\/(Argentina\/.*|Buenos_Aires|Montevideo|Santiago|Punta_Arenas|Asuncion|La_Paz|Lima|Bogota|Caracas|Guayaquil|Mexico_City|Cancun|Merida|Monterrey|Matamoros|Chihuahua|Ciudad_Juarez|Ojinaga|Hermosillo|Mazatlan|Bahia_Banderas|Tijuana|Guatemala|El_Salvador|Tegucigalpa|Managua|Costa_Rica|Panama|Havana|Santo_Domingo|Puerto_Rico)|Europe\/Madrid|Atlantic\/Canary|Africa\/(Ceuta|Malabo)|Pacific\/(Galapagos|Easter))$/.test(tz))return "es";
 if(/^Asia\/Tokyo$/.test(tz))return "ja";
 if(/^Asia\/(Shanghai|Chongqing|Chungking|Harbin|Urumqi|Hong_Kong|Macau|Taipei)$/.test(tz))return "zh";
 if(/^Asia\/(Kolkata|Calcutta)$/.test(tz))return "hi";
 if(/^Europe\/(Berlin|Busingen|Vienna|Zurich|Vaduz)$/.test(tz))return "de";
 const prefs=(navigator.languages&&navigator.languages.length)?navigator.languages:[navigator.language||""];
 for(const p of prefs){const b=String(p).toLowerCase().split("-")[0];if(L.includes(b))return b}
 return "es"}

/* botón discreto arriba a la derecha del inicio */
const css=document.createElement("style");
css.textContent=`.lng{position:absolute;z-index:6;top:calc(env(safe-area-inset-top,0px) + 14px);right:max(16px,env(safe-area-inset-right,0px));font:700 11px/1 JBM,ui-monospace,monospace}
.lng-b{appearance:none;cursor:pointer;background:none;border:1px solid rgba(255,255,255,.28);color:rgba(255,255,255,.7);border-radius:12px;padding:6px 9px;font:inherit;letter-spacing:.1em}
.lng-b:hover,.lng-b[aria-expanded="true"]{color:#fff;border-color:#fff}
.lng-m{position:absolute;right:0;top:calc(100% + 6px);min-width:160px;padding:4px;background:#0b0b0b;border:1px solid #333;border-radius:10px;box-shadow:0 10px 24px rgba(0,0,0,.5)}
.lng-m[hidden]{display:none}
.lng-m button{display:flex;align-items:center;gap:10px;width:100%;appearance:none;cursor:pointer;background:none;border:0;border-radius:7px;color:#d6d6d1;padding:9px 10px;text-align:left;font:500 13px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.lng-m button b{width:22px;font:700 11px/1 JBM,ui-monospace,monospace;letter-spacing:.06em;color:#8a8a85}
.lng-m button:hover{background:#222}
.lng-m button[aria-pressed="true"]{background:#f5d802;color:#0b0b0b}
.lng-m button[aria-pressed="true"] b{color:#0b0b0b}
.lng button:focus-visible{outline:2px solid #f5007f;outline-offset:2px}`;
document.head.appendChild(css);
const box=document.createElement("div");box.className="lng";
box.innerHTML=`<button type="button" class="lng-b" aria-haspopup="true" aria-expanded="false" aria-label="Idioma / Language">ES</button><div class="lng-m" role="group" aria-label="Idioma / Language" hidden>${L.map(l=>`<button type="button" data-l="${l}" lang="${l}" aria-pressed="false"><b>${l.toUpperCase()}</b>${NM[l]}</button>`).join("")}</div>`;
(document.querySelector(".hero")||document.body).appendChild(box);
const bt=box.querySelector(".lng-b"),mn=box.querySelector(".lng-m");
const open=o=>{mn.hidden=!o;bt.setAttribute("aria-expanded",String(o))};
bt.addEventListener("click",e=>{e.stopPropagation();open(mn.hidden)});
document.addEventListener("click",e=>{if(!mn.hidden&&!e.target.closest(".lng"))open(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!mn.hidden){open(false);bt.focus()}});
function setLang(l){
 if(!L.includes(l))l="es";cur=l;document.documentElement.lang=l;
 bt.textContent=l.toUpperCase();mn.querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.l===l)));
 walk(document.body)}
mn.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{setLang(b.dataset.l);try{localStorage.setItem("baf-lang-pick",b.dataset.l)}catch(e){}open(false)}));
let saved=null;try{saved=localStorage.getItem("baf-lang-pick")}catch(e){}
setLang(L.includes(saved)?saved:detect());
window.I18N={t,get lang(){return cur}};
})();
