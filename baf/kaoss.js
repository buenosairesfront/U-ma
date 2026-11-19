/* BAF PAD: pad XY de efectos, al estilo de un Kaoss Pad, sobre la radio.
   La radio llama a BAFKaoss.attach(audioContext, entrada, salida) al crear su audio:
   el sonido pasa por acá entre el filtro CUT y el analizador de la pantalla.
   Mientras se toca el pad suena el efecto elegido; al soltar vuelve el sonido limpio (salvo con HOLD). */
window.BAFKaoss = (() => {
  const LX = ['es','en','de','ja','zh','hi'];
  const T = {
    filtro: ['Filtro','Filter','Filter','フィルター','滤波器','फ़िल्टर'],
    eco: ['Eco','Echo','Echo','エコー','回声','इको'],
    lofi: ['Lo-fi','Lo-fi','Lo-fi','ローファイ','低保真','लो-फ़ाई'],
    jet: ['Jet','Jet','Jet','ジェット','喷射','जेट'],
    gate: ['Gate','Gate','Gate','ゲート','门限','गेट'],
    corte: ['Corte','Cutoff','Cutoff','カットオフ','截止','कटऑफ़'],
    reso: ['Resonancia','Resonance','Resonanz','レゾナンス','共振','रेज़ोनेंस'],
    tiempo: ['Tiempo','Time','Zeit','タイム','时间','समय'],
    repes: ['Repeticiones','Feedback','Feedback','フィードバック','反馈','फ़ीडबैक'],
    muestreo: ['Muestreo','Sample rate','Samplerate','サンプルレート','采样率','सैंपल रेट'],
    bits: ['Bits','Bits','Bits','ビット','位深','बिट्स'],
    vel: ['Velocidad','Rate','Tempo','レート','速率','रेट'],
    prof: ['Profundidad','Depth','Tiefe','デプス','深度','डेप्थ'],
    hint: ['Tocá y arrastrá','Touch and drag','Tippen und ziehen','タッチしてドラッグ','按住并拖动','छूकर खींचें'],
    pad: ['Pad de efectos: tocá y arrastrá','Effects pad: touch and drag','Effekt-Pad: tippen und ziehen','エフェクトパッド:タッチしてドラッグ','效果垫:按住并拖动','इफ़ेक्ट पैड: छूकर खींचें']
  };
  const ix = () => Math.max(0, LX.indexOf(document.documentElement.lang));
  const tr = k => T[k][ix()];

  // programas: color, ejes y cuánto sonido limpio queda mezclado
  const PROGS = [
    { id: 'filtro', c: '#01d6f4', ax: ['corte', 'reso'], dry: 0 },
    { id: 'eco', c: '#f5007f', ax: ['tiempo', 'repes'], dry: 1 },
    { id: 'lofi', c: '#f5d802', ax: ['muestreo', 'bits'], dry: 0 },
    { id: 'jet', c: '#1fd67a', ax: ['vel', 'prof'], dry: 0 },
    { id: 'gate', c: '#ff7a00', ax: ['vel', 'prof'], dry: 0 }
  ];

  let ctx = null, an = null, dry = null, chains = [];
  let cur = 0, active = false, hold = false, x = .5, y = .5;

  /* ---------- audio ---------- */
  const CRUSH = `class BafCrush extends AudioWorkletProcessor{
    static get parameterDescriptors(){ return [{ name: 'bits', defaultValue: 8, minValue: 1, maxValue: 16 }, { name: 'hold', defaultValue: 4, minValue: 1, maxValue: 64 }]; }
    constructor(){ super(); this.c = [0, 0]; this.v = [0, 0]; }
    process(ins, outs, p){
      const i = ins[0], o = outs[0]; if (!i || !i.length) return true;
      const step = Math.pow(.5, p.bits[0] - 1), hold = p.hold[0];
      for (let ch = 0; ch < o.length; ch++){
        const a = i[ch] || i[0], b = o[ch], k = ch & 1; let c = this.c[k], v = this.v[k];
        for (let n = 0; n < b.length; n++){ if (c <= 0){ v = Math.round(a[n] / step) * step; c += hold; } c--; b[n] = v; }
        this.c[k] = c; this.v[k] = v;
      }
      return true;
    }
  }
  registerProcessor('baf-crush', BafCrush);`;

  function build(){
    const g = v => { const n = ctx.createGain(); n.gain.value = v; return n; };
    const bq = (type, f, q) => { const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; if (q != null) b.Q.value = q; return b; };
    const ramp = (param, v, t, tc = .03) => param.setTargetAtTime(v, t, tc);

    // filtro: a la izquierda pasa bajos, a la derecha pasa altos; arriba más resonancia
    { const inp = g(1), f = bq('lowpass', 20000, .7), out = g(0); inp.connect(f); f.connect(out);
      chains.push({ inp, out, wet: .85, set(t){
        if (x < .5){ if (f.type !== 'lowpass') f.type = 'lowpass'; ramp(f.frequency, 120 * Math.pow(20000 / 120, x * 2), t); }
        else { if (f.type !== 'highpass') f.type = 'highpass'; ramp(f.frequency, 20 * Math.pow(6000 / 20, (x - .5) * 2), t); }
        ramp(f.Q, .7 + y * 17, t); } }); }

    // eco: tiempo de 60 a 750 ms (al moverlo, se estira como una cinta) y repeticiones
    { const inp = g(1), d = ctx.createDelay(2), lp = bq('lowpass', 3500), fb = g(0), mix = g(0), out = g(0);
      inp.connect(d); d.connect(lp); lp.connect(fb); fb.connect(d); lp.connect(mix); mix.connect(out);
      chains.push({ inp, out, wet: 1, set(t){ ramp(d.delayTime, .06 + x * .69, t, .08); ramp(fb.gain, y * .88, t); ramp(mix.gain, .35 + y * .55, t); } }); }

    // lo-fi: baja la frecuencia de muestreo (x) y la cantidad de bits (y)
    { const inp = g(1), out = g(0), sh = ctx.createWaveShaper(), lp = bq('lowpass', 9000);
      const curve = bits => { const n = 4096, c = new Float32Array(n), s = Math.pow(.5, bits - 1); for (let i = 0; i < n; i++){ const v = i * 2 / n - 1; c[i] = Math.round(v / s) * s; } return c; };
      inp.connect(sh); sh.connect(lp); lp.connect(out);
      const ch = { inp, out, wet: .9, node: null, lastBits: 0, set(t){
        const bits = 16 - y * 14;
        if (ch.node){ ramp(ch.node.parameters.get('bits'), bits, t, .02); ramp(ch.node.parameters.get('hold'), 1 + x * x * 40, t, .02); }
        else { const b = Math.round(bits); if (b !== ch.lastBits){ sh.curve = curve(b); ch.lastBits = b; } }
        ramp(lp.frequency, 9000 - x * 6000, t); } };
      chains.push(ch);
      try {
        if (ctx.audioWorklet && window.AudioWorkletNode){
          const url = URL.createObjectURL(new Blob([CRUSH], { type: 'application/javascript' }));
          ctx.audioWorklet.addModule(url).then(() => {
            const node = new AudioWorkletNode(ctx, 'baf-crush', { outputChannelCount: [2] });
            inp.disconnect(); inp.connect(node); node.connect(lp); ch.node = node; apply();
          }).catch(() => {});
        }
      } catch(e){}
    }

    // jet: flanger con una demora cortita que oscila; x velocidad, y profundidad y realimentación
    { const inp = g(1), out = g(0), d = ctx.createDelay(.05), fb = g(0), lfo = ctx.createOscillator(), depth = g(0), direct = g(.7), wetd = g(.75);
      d.delayTime.value = .005; lfo.frequency.value = .3; lfo.connect(depth); depth.connect(d.delayTime); lfo.start();
      inp.connect(direct); direct.connect(out); inp.connect(d); d.connect(fb); fb.connect(d); d.connect(wetd); wetd.connect(out);
      chains.push({ inp, out, wet: 1, set(t){ ramp(lfo.frequency, .05 + x * x * 8, t); ramp(depth.gain, .0004 + y * .0042, t); ramp(fb.gain, y * .82, t); } }); }

    // gate: corta el sonido en ritmo; x velocidad, y cuánto corta
    { const inp = g(1), vca = g(1), out = g(0), lfo = ctx.createOscillator(), amt = g(0);
      lfo.type = 'square'; lfo.frequency.value = 4; lfo.connect(amt); amt.connect(vca.gain); lfo.start();
      inp.connect(vca); vca.connect(out);
      chains.push({ inp, out, wet: 1, set(t){ const dpt = .15 + y * .85; ramp(lfo.frequency, 1.5 + x * x * 22, t); ramp(amt.gain, dpt / 2, t, .01); ramp(vca.gain, 1 - dpt / 2, t, .01); } }); }
  }

  function attach(c, src, dest){
    if (ctx) return;
    ctx = c; an = dest;
    const fxOut = ctx.createGain();
    dry = ctx.createGain(); dry.gain.value = 1;
    src.connect(dry); dry.connect(fxOut); fxOut.connect(dest);
    try { build(); chains.forEach(ch => { src.connect(ch.inp); ch.out.connect(fxOut); }); }
    catch(e){ chains = []; }
    apply();
  }

  function apply(){
    if (!ctx || !chains.length) return;
    const t = ctx.currentTime;
    chains.forEach((ch, i) => { const on = active && i === cur; if (on) ch.set(t); ch.out.gain.setTargetAtTime(on ? ch.wet : 0, t, .015); });
    dry.gain.setTargetAtTime(active ? PROGS[cur].dry : 1, t, .015);
  }

  /* ---------- interfaz ---------- */
  function init(){
    const cv = document.getElementById('kx-pad'); if (!cv) return;
    const c = cv.getContext('2d'), read = document.getElementById('kx-read'), dev = cv.closest('.kx-dev');
    const keys = [...document.querySelectorAll('.kx-keys [data-p]')], holdB = document.getElementById('kx-hold');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, D = 1, down = false, trail = [], ripples = [], lastRip = 0, seen = true, raf = 0, keyT = 0;
    const spec = new Uint8Array(128);

    const fit = () => { const r = cv.getBoundingClientRect(); D = Math.min(2, devicePixelRatio || 1); W = cv.width = Math.max(2, Math.round(r.width * D)); H = cv.height = Math.max(2, Math.round(r.height * D)); };
    fit(); if ('ResizeObserver' in window) new ResizeObserver(fit).observe(cv); else addEventListener('resize', fit);

    const label = () => {
      keys.forEach((k, i) => { k.textContent = tr(PROGS[i].id); k.setAttribute('aria-pressed', String(i === cur)); });
      cv.setAttribute('aria-label', tr('pad'));
      dev.style.setProperty('--c', PROGS[cur].c);
      const p = PROGS[cur];
      read.textContent = `${tr(p.id).toUpperCase()} · ${tr(p.ax[0]).toUpperCase()} ${Math.round(x * 100)} · ${tr(p.ax[1]).toUpperCase()} ${Math.round(y * 100)}`;
    };
    const setXY = (cx, cy) => { const r = cv.getBoundingClientRect(); x = Math.max(0, Math.min(1, (cx - r.left) / r.width)); y = Math.max(0, Math.min(1, 1 - (cy - r.top) / r.height)); };
    const radioOn = () => { try { if (window.BAFRadio) window.BAFRadio.start(); } catch(e){} };
    const engage = on => { active = on || hold; dev.classList.toggle('live', active); apply(); label(); kick(); };

    cv.addEventListener('pointerdown', e => { e.preventDefault(); cv.setPointerCapture(e.pointerId); down = true; radioOn(); setXY(e.clientX, e.clientY); trail = []; engage(true); });
    cv.addEventListener('pointermove', e => { if (!down) return; setXY(e.clientX, e.clientY); apply(); label(); });
    const up = () => { if (!down) return; down = false; engage(false); };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up); cv.addEventListener('lostpointercapture', up);
    // teclado: las flechas mueven el punto y el efecto suena mientras se mueve
    cv.addEventListener('keydown', e => {
      const m = { ArrowLeft: [-.05, 0], ArrowRight: [.05, 0], ArrowUp: [0, .05], ArrowDown: [0, -.05] }[e.key]; if (!m) return;
      e.preventDefault(); radioOn(); x = Math.max(0, Math.min(1, x + m[0])); y = Math.max(0, Math.min(1, y + m[1]));
      engage(true); clearTimeout(keyT); keyT = setTimeout(() => engage(false), 700);
    });
    keys.forEach((k, i) => k.addEventListener('click', () => { cur = i; apply(); label(); kick(); }));
    holdB.addEventListener('click', () => { hold = !hold; holdB.setAttribute('aria-pressed', String(hold)); if (!hold && !down) engage(false); else { if (hold) radioOn(); engage(down || hold); } });
    new MutationObserver(label).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    label();

    const hexA = (h, a) => { const n = parseInt(h.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };
    function draw(t){
      raf = 0;
      const col = PROGS[cur].c, s = W / 400;
      c.fillStyle = '#0b0b0b'; c.fillRect(0, 0, W, H);
      // espectro de lo que está sonando (ya con el efecto)
      let live = false;
      if (an){ an.getByteFrequencyData(spec); live = spec.some(v => v > 8); }
      if (live){
        const n = 32, bw = W / n;
        for (let i = 0; i < n; i++){ const v = (spec[i * 2] + spec[i * 2 + 1]) / 510, h = v * H * .55; c.fillStyle = hexA(col, .1 + v * .25); c.fillRect(i * bw + 1, H - h, bw - 2, h); }
      }
      // grilla de puntos
      for (let gy = 1; gy < 10; gy++) for (let gx = 1; gx < 10; gx++){
        const px = gx * W / 10, py = gy * H / 10, d = Math.hypot(px / W - x, py / H - (1 - y));
        const near = active ? Math.max(0, 1 - d * 3) : 0, r = (1.6 + near * 3.5) * s;
        c.fillStyle = near > 0 ? hexA(col, .25 + near * .75) : 'rgba(255,255,255,.18)'; c.fillRect(px - r / 2, py - r / 2, r, r);
      }
      // ejes
      c.font = `${Math.round(11 * s)}px Silkscreen, "JetBrains Mono", monospace`; c.fillStyle = 'rgba(255,255,255,.55)';
      c.textBaseline = 'bottom'; c.textAlign = 'right'; c.fillText(tr(PROGS[cur].ax[0]).toUpperCase() + ' →', W - 10 * s, H - 8 * s);
      c.save(); c.translate(10 * s, 10 * s); c.rotate(Math.PI / 2); c.textAlign = 'left'; c.textBaseline = 'bottom'; c.fillText('← ' + tr(PROGS[cur].ax[1]).toUpperCase(), 0, 0); c.restore();

      const px = x * W, py = (1 - y) * H;
      if (active){
        if (down) { trail.push({ x: px, y: py }); if (trail.length > 40) trail.shift(); }
        if (!reduce && t - lastRip > 140){ ripples.push({ x: px, y: py, r: 8 * s, a: .9 }); lastRip = t; }
        // cruz
        c.strokeStyle = hexA(col, .45); c.lineWidth = Math.max(1, 1.5 * s);
        c.beginPath(); c.moveTo(px, 0); c.lineTo(px, H); c.moveTo(0, py); c.lineTo(W, py); c.stroke();
      } else if (trail.length) trail.shift();
      ripples = ripples.filter(r => r.a > .03);
      ripples.forEach(r => { c.beginPath(); c.arc(r.x, r.y, r.r, 0, Math.PI * 2); c.strokeStyle = hexA(col, r.a); c.lineWidth = 2 * s; c.stroke(); r.r += 3.2 * s; r.a *= .93; });
      if (trail.length > 1){ c.beginPath(); trail.forEach((q, i) => i ? c.lineTo(q.x, q.y) : c.moveTo(q.x, q.y)); c.strokeStyle = hexA(col, .55); c.lineWidth = 6 * s; c.lineJoin = c.lineCap = 'round'; c.stroke(); }
      if (active){
        const glow = c.createRadialGradient(px, py, 0, px, py, 70 * s); glow.addColorStop(0, hexA(col, .65)); glow.addColorStop(1, hexA(col, 0));
        c.fillStyle = glow; c.fillRect(px - 70 * s, py - 70 * s, 140 * s, 140 * s);
        c.beginPath(); c.arc(px, py, 13 * s, 0, Math.PI * 2); c.fillStyle = '#ffffff'; c.fill();
        c.beginPath(); c.arc(px, py, 13 * s, 0, Math.PI * 2); c.strokeStyle = col; c.lineWidth = 4 * s; c.stroke();
      } else {
        c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = `${Math.round(15 * s)}px Silkscreen, "JetBrains Mono", monospace`;
        c.fillStyle = `rgba(255,255,255,${reduce ? .8 : .45 + .35 * Math.sin(t / 380)})`; c.fillText(tr('hint').toUpperCase(), W / 2, H / 2);
      }
      if (seen && (active || live || ripples.length || trail.length || !reduce)) raf = requestAnimationFrame(draw);
    }
    const kick = () => { if (!raf && seen) raf = requestAnimationFrame(draw); };
    if ('IntersectionObserver' in window) new IntersectionObserver(es => { seen = es[es.length - 1].isIntersecting; if (seen) kick(); }).observe(cv);
    (document.fonts && document.fonts.load ? document.fonts.load('12px Silkscreen') : Promise.resolve()).then(kick, kick);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  return { attach };
})();
