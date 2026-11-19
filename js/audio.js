/* ARCHIVO 2040 · audio.js — sonidos suaves generados con Web Audio (sin archivos). Volumen bajo, se puede silenciar. */
const Sonido = (() => {
  const KEY = 'archivo2040:sonido';
  let ctx = null, on = true;
  try { on = localStorage.getItem(KEY) !== 'off'; } catch {}
  const tono = (f, t, d, v = 0.05) => {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      const o = ctx.createOscillator(), g = ctx.createGain(), t0 = ctx.currentTime + t;
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(v, t0 + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
      o.connect(g).connect(ctx.destination); o.start(t0); o.stop(t0 + d + 0.02);
    } catch {}
  };
  const si = (fn) => () => { if (on) fn(); };
  return {
    activo: () => on,
    alternar() { on = !on; try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch {} if (on) this.click(); return on; },
    click: si(() => tono(520, 0, 0.07, 0.03)),
    reconstruccion: si(() => { tono(523, 0, 0.18); tono(659, 0.12, 0.2); tono(784, 0.24, 0.32); }),
    equilibrio: si(() => { tono(523, 0, 0.18); tono(659, 0.13, 0.3); }),
    tension: si(() => { tono(330, 0, 0.25, 0.045); tono(294, 0.16, 0.3, 0.04); }),
    fragmentacion: si(() => { tono(262, 0, 0.3, 0.045); tono(220, 0.18, 0.2, 0.04); tono(174, 0.34, 0.45, 0.04); })
  };
})();