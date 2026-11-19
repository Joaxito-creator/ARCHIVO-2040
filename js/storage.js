/* ARCHIVO 2040 · storage.js
   Capa de persistencia. HOY: localStorage (solo este navegador y dispositivo).
   FUTURO: reemplazar la implementación de Store por Supabase/Firebase sin tocar app.js.
   LIMITACIÓN: no hay sincronización entre dispositivos en esta versión. */
const Store = (() => {
  const KEY = 'archivo2040:v1';
  const SESSION = 'archivo2040:sesion';
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || { equipos: {} }; } catch { return { equipos: {} }; } };
  const write = (d) => { try { localStorage.setItem(KEY, JSON.stringify(d)); return true; } catch { return false; } };
  const nuevo = (nombre) => ({
    nombre, creado: new Date().toISOString(), introVista: false,
    misiones: {}, evidenciasVistas: [], indicadores: {}, autoevaluacion: {}, informe: {}
  });
  return {
    entrar(codigo, nombre) {
      const d = read();
      const eq = d.equipos[codigo] || (d.equipos[codigo] = { codigo, creado: new Date().toISOString(), investigadores: {}, decisionesGrupales: {} });
      if (!eq.investigadores[nombre]) eq.investigadores[nombre] = nuevo(nombre);
      if (!write(d)) return false;
      try { localStorage.setItem(SESSION, JSON.stringify({ codigo, nombre })); } catch { return false; }
      return true;
    },
    sesion() { try { return JSON.parse(localStorage.getItem(SESSION)); } catch { return null; } },
    salir() { try { localStorage.removeItem(SESSION); } catch {} },
    equipo() { const s = this.sesion(); return s ? read().equipos[s.codigo] || null : null; },
    yo() { const s = this.sesion(); const e = this.equipo(); return s && e ? e.investigadores[s.nombre] || null : null; },
    actualizarYo(fn) {
      const s = this.sesion(); if (!s) return false;
      const d = read(); const inv = d.equipos[s.codigo]?.investigadores[s.nombre];
      if (!inv) return false; fn(inv); return write(d);
    },
    progreso() {
      const y = this.yo(); if (!y) return 0;
      return Math.round(MISIONES.filter(m => y.misiones[m.id]?.completada).length / MISIONES.length * 100);
    }
  };
})();
