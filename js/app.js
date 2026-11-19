/* ARCHIVO 2040 · app.js — versión completa con todas las mejoras */
const $ = (s, r = document) => r.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const main = $('#main'), app = $('#app'), sidebar = $('#sidebar'), topbar = $('#topbar'), nav = $('#nav');

function toast(msg, tipo = '') {
  const t = document.createElement('div');
  t.className = 'toast ' + tipo; t.textContent = msg;
  $('#toasts').appendChild(t); setTimeout(() => t.remove(), 4200);
}

/* Confeti simple y ligero */
function lanzarConfeti() {
  const canvas = document.createElement('canvas');
  canvas.id = 'confeti-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;

  const colores = ['#1E7A5E', '#B8893A', '#62E5F2', '#F4C96B', '#FF777E', '#67D9A2'];
  const particulas = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 8 + 4,
    h: Math.random() * 8 + 4,
    color: colores[Math.floor(Math.random() * colores.length)],
    vy: Math.random() * 3 + 2,
    vx: Math.random() * 2 - 1,
    rot: Math.random() * 360,
    vr: Math.random() * 10 - 5
  }));

  let frames = 0;
  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach(p => {
      p.y += p.vy; p.x += p.vx; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frames++;
    if (frames < 120) requestAnimationFrame(animar);
    else canvas.remove();
  }
  animar();
}

/* NOVA, tu amiga guía */
const guia = (txt, mood = 'neutral', grande = false) =>
  `<div class="guia ${grande ? 'grande' : ''}"><div class="guia-av">${Ilus.NOVA(mood)}</div><div class="bubble"><b>NOVA · tu amiga</b><p>${esc(txt)}</p></div></div>`;

const Prac = { i: 0, sel: null };

const Pantallas = {
  acceso() {
    main.innerHTML = `<section class="screen access" aria-labelledby="t">
      <div>
        <p class="mono">Un juego educativo</p>
        <h1 id="t">ARCHIVO <span>2040</span></h1>
        <h2>¿Cómo será el futuro?</h2>
        <p class="lema">Tú decides hoy lo que pasará mañana.</p>
        ${guia('¡Hola! Soy NOVA. Voy a ser tu amiga en esta aventura. Escribe el código de tu equipo y tu nombre para empezar.', 'feliz', true)}
      </div>
      <form class="panel" id="formAcceso" novalidate>
        <h3>Entrar al juego</h3>
        <div class="field"><label for="codigo">Código del equipo</label>
          <input id="codigo" name="codigo" autocomplete="off" maxlength="12" placeholder="Ej.: EQ-2040" aria-describedby="e1 h1">
          <p class="hint" id="h1">Pide el código a tu profesor.</p>
          <p class="err" id="e1" role="alert"></p>
          <button class="btn ghost small" id="genCodigo" type="button">Crear código nuevo</button></div>
        <div class="field"><label for="nombre">Tu nombre</label>
          <input id="nombre" name="nombre" autocomplete="off" maxlength="40" aria-describedby="e2">
          <p class="err" id="e2" role="alert"></p></div>
        <button class="btn gold" type="submit">¡Empezar!</button>
        <p class="hint" style="margin-top:1rem">Tu progreso se guarda en este aparato.</p>
      </form>
    </section>`;
    $('#genCodigo').addEventListener('click', () => {
      const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let x = ''; for (let i = 0; i < 5; i++) x += a[Math.floor(Math.random() * a.length)];
      const c = $('#codigo'); c.value = 'EQ-' + x;
      c.setAttribute('aria-invalid', 'false'); $('#e1').textContent = '';
      toast('¡Código creado: ' + c.value + '! Compártelo con tu equipo.', 'ok');
      $('#nombre').focus();
    });
    $('#formAcceso').addEventListener('submit', (e) => {
      e.preventDefault();
      const c = $('#codigo'), n = $('#nombre');
      const codigo = c.value.trim().toUpperCase(), nombre = n.value.trim().replace(/\s+/g, ' ');
      const ec = !/^[A-Z0-9-]{4,12}$/.test(codigo) ? 'El código debe tener 4 a 12 letras, números o guiones.' : '';
      const en = nombre.length < 2 ? 'Escribe tu nombre (mínimo 2 letras).' : '';
      $('#e1').textContent = ec; $('#e2').textContent = en;
      c.setAttribute('aria-invalid', !!ec); n.setAttribute('aria-invalid', !!en);
      if (ec || en) { (ec ? c : n).focus(); return; }
      if (!Store.entrar(codigo, nombre)) { toast('No se pudo guardar. Revisa el navegador.', 'error'); return; }
      toast('¡Bienvenido, ' + nombre + '!', 'ok');
      location.hash = Store.yo().introVista ? '#/centro' : '#/intro';
    });
  },

  intro(paso = 0) {
    const p = INTRO[paso], ultimo = paso === INTRO.length - 1;
    main.innerHTML = `<section class="screen panel" aria-live="polite">
      ${guia(p.voz, 'neutral')}
      <p class="mono">Parte ${paso + 1} de ${INTRO.length}</p>
      <h2>${esc(p.t)}</h2><p>${esc(p.p)}</p>
      ${ultimo ? `<div class="grid">${ESCENARIOS.map(s => `<div class="esc" style="--c:${s.color}"><img src="${s.imagen}" alt="${esc(s.nombre)}" style="width:100%;height:140px;object-fit:cover;border-radius:12px;margin-bottom:.5rem"><h3>${s.nombre}</h3><p>${esc(s.corto)}</p></div>`).join('')}</div>` : ''}
      <div class="dots" aria-hidden="true">${INTRO.map((_, i) => `<i class="${i <= paso ? 'on' : ''}"></i>`).join('')}</div>
      <div class="row">${paso > 0 ? '<button class="btn ghost" id="prev" type="button">Atrás</button>' : ''}
      <button class="btn gold" id="next" type="button">${ultimo ? '¡Vamos al centro!' : 'Siguiente'}</button></div>
    </section>`;
    $('#prev')?.addEventListener('click', () => Pantallas.intro(paso - 1));
    $('#next').addEventListener('click', () => {
      if (!ultimo) return Pantallas.intro(paso + 1);
      Store.actualizarYo(y => { y.introVista = true; }); location.hash = '#/centro';
    });
    main.focus();
  },

  centro() {
    const y = Store.yo(), eq = Store.equipo(), pr = Store.progreso();
    const hechas = MISIONES.filter(m => y.misiones[m.id]?.completada).length;
    const integrantes = Object.keys(eq.investigadores);
    main.innerHTML = `<section class="screen">
      ${guia('¡Hola, ' + y.nombre + '! Este es tu centro. Aquí ves todo lo que has hecho. Si no entiendes algo, ve a "Cómo jugar".', 'feliz')}
      <h2>Mi centro</h2>
      <div class="zona mia">
        <span class="chip">Mi espacio</span>
        <h3>${esc(y.nombre)}</h3>
        <div class="grid">
          <div class="mini" style="padding-bottom: 2rem;">
            <p class="mono">Mi progreso</p>
            <div class="big">${pr}%</div>
            <p class="hint">${hechas} de ${MISIONES.length} misiones hechas.</p>
            <div class="mapa-progreso">
              ${MISIONES.map((m, i) => {
                const hecha = y.misiones[m.id]?.completada;
                let estado = 'bloqueado';
                if (hecha) estado = 'completado';
                else if (i === hechas) estado = 'actual';
                return `
                  <div class="nodo-wrapper">
                    <div class="nodo ${estado}" data-m="${m.id}" title="${esc(m.titulo)}">
                      ${hecha ? '✓' : (i + 1)}
                    </div>
                    <span class="nodo-label">Misión ${m.n}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
          <div class="mini"><p class="mono">Cosas que he visto</p><div class="big">${y.evidenciasVistas.length}</div><p class="hint">De ${EVIDENCIAS.length} disponibles.</p></div>
          <div class="mini"><p class="mono">Mi informe</p><div class="big">${Object.keys(y.informe).length > 0 ? 'Hecho' : 'Pendiente'}</div><p class="hint">Escribe lo que aprendiste.</p></div>
        </div>
        <h3 style="margin-top:1.3rem">Mis misiones</h3>
        <div class="grid">${MISIONES.map(m => {
          const cap = CAPACIDADES.find(c => c.id === m.capacidad);
          const hecha = y.misiones[m.id]?.completada;
          return `<div class="mini"><p class="mono">Misión ${m.n}</p><h3>${esc(m.titulo)}</h3><p class="hint">${esc(cap.nombre)}</p>${hecha ? '<span class="badge" style="--c:#1E7A5E">Hecha</span>' : '<span class="tag">Pendiente</span>'}</div>`;
        }).join('')}</div>
      </div>
      <div class="zona equipo">
        <span class="chip">Mi equipo</span>
        <h3>Equipo ${esc(eq.codigo)}</h3>
        <div class="grid">
          <div class="mini"><p class="mono">Compañeros</p><div class="big">${integrantes.length}</div><p class="hint">${integrantes.map(esc).join(', ')}</p></div>
        </div>
      </div>
    </section>`;
    main.querySelectorAll('.nodo[data-m]').forEach(nodo => {
      nodo.addEventListener('click', () => {
        const id = nodo.dataset.m;
        const estado = nodo.classList.contains('completado') || nodo.classList.contains('actual');
        if (estado) {
          location.hash = '#/misiones';
          setTimeout(() => Pantallas.misionDetalle(id), 100);
        } else {
          toast('¡Aún no desbloqueas esta misión! Completa las anteriores.', 'error');
        }
      });
    });
    main.focus();
  },

  tutorial(paso = 0) {
    const p = TUTORIAL[paso], ultimo = paso === TUTORIAL.length - 1;
    let cuerpo = '';
    if (p.practica) cuerpo = vistaPractica();
    else cuerpo = `${guia(p.voz, 'neutral')}<p>${esc(p.p)}</p><p class="note">${esc(p.q)}</p>`;
    main.innerHTML = `<section class="screen">
      <p class="mono">Cómo jugar · paso ${paso + 1} de ${TUTORIAL.length}</p>
      <h2>${esc(p.t)}</h2>
      <div class="tut ${p.practica ? 'wide' : ''}">
        <ol class="steps" aria-label="Pasos">${TUTORIAL.map((x, i) => `<li><button type="button" data-i="${i}" ${i === paso ? 'aria-current="step"' : ''}>${esc(x.t)}</button></li>`).join('')}</ol>
        <div class="panel tut-body">${cuerpo}
          <div class="row" style="margin-top:1.2rem">${paso > 0 ? '<button class="btn ghost" id="tprev" type="button">Atrás</button>' : ''}
          ${ultimo ? '<a class="btn gold" href="#/centro" style="text-decoration:none">Ir a mi centro</a>' : '<button class="btn gold" id="tnext" type="button">Siguiente</button>'}</div>
        </div>
      </div></section>`;
    main.querySelectorAll('.steps button').forEach(b => b.addEventListener('click', () => Pantallas.tutorial(+b.dataset.i)));
    $('#tprev')?.addEventListener('click', () => Pantallas.tutorial(paso - 1));
    $('#tnext')?.addEventListener('click', () => Pantallas.tutorial(paso + 1));
    if (p.practica) enlazarPractica(paso);
  },

  evidencias() {
    const y = Store.yo();
    main.innerHTML = `<section class="screen">
      ${guia('Aquí hay pistas del futuro. Son documentos, fotos y mensajes del año 2040. Toca cada uno para verlo.', 'feliz')}
      <h2>El archivo</h2>
      <p class="mono">${EVIDENCIAS.length} pistas para descubrir</p>
      <div class="grid">${EVIDENCIAS.map(e => {
        const vista = y.evidenciasVistas.includes(e.id);
        return `<div class="panel" style="cursor:pointer" data-e="${e.id}">
          <div class="ilus" style="margin-bottom:.8rem">${Ilus.evidencia(e.id)}</div>
          <span class="tag">${esc(e.categoria)}</span>
          ${vista ? '<span class="badge" style="--c:#1E7A5E;margin-left:.5rem">Vista</span>' : ''}
          <h3 style="margin:.5rem 0">${esc(e.titulo)}</h3>
          <p class="hint">${esc(e.fecha)}</p>
        </div>`;
      }).join('')}</div>
    </section>`;
    main.querySelectorAll('.panel[data-e]').forEach(p => p.addEventListener('click', () => Pantallas.evidenciaDetalle(p.dataset.e, 'archivo')));
    main.focus();
  },

  evidenciaDetalle(id, desde = 'archivo', idReferencia = null) {
    const y = Store.yo();
    const esNueva = !y.evidenciasVistas.includes(id);

    if (esNueva) {
      Store.actualizarYo(y => { y.evidenciasVistas.push(id); });
    }

    const e = EVIDENCIAS.find(x => x.id === id);
    const cap = CAPACIDADES.find(c => c.id === e.capacidad);

    main.innerHTML = `<section class="screen">
      ${guia('Lee con atención. Esta pista te ayuda a entender qué pasó en el futuro.', 'neutral')}
      <button class="btn ghost small" id="btnVolverEvidencia" type="button">← Volver</button>
      <div class="panel" style="margin-top:1rem">
        <div class="ilus">${Ilus.evidencia(e.id)}</div>
        <span class="tag">${esc(e.categoria)}</span>
        <h2 style="margin:.5rem 0">${esc(e.titulo)}</h2>
        <p class="mono">${esc(e.fecha)}</p>
        <h3>¿Qué dice?</h3>
        <p>${esc(e.contenido)}</p>
        <h3>¿Qué pasó?</h3>
        <p>${esc(e.contexto)}</p>
        <h3>¿Por qué importa?</h3>
        <p>${esc(e.relacion)}</p>
        <div class="note">Esto se relaciona con: <strong>${esc(cap.nombre)}</strong></div>
      </div>
    </section>`;

    $('#btnVolverEvidencia').addEventListener('click', () => {
      if (desde === 'mision' && idReferencia) {
        Pantallas.misionDetalle(idReferencia);
      } else if (desde === 'linea') {
        Pantallas.linea();
      } else {
        Pantallas.evidencias();
      }
    });

    if (esNueva) {
      const panel = main.querySelector('.panel');
      if (panel) {
        panel.classList.add('desbloqueado');
        setTimeout(() => panel.classList.remove('desbloqueado'), 1000);
      }
    }
    main.focus();
  },

  misiones() {
    const y = Store.yo();
    main.innerHTML = `<section class="screen">
      ${guia('Cada misión es una historia. Lee qué pasa, elige qué harías tú y ve qué pasa después. ¡Tus decisiones cambian el futuro!', 'feliz')}
      <h2>Misiones</h2>
      <p class="mono">5 historias para decidir</p>
      <div class="grid">${MISIONES.map(m => {
        const cap = CAPACIDADES.find(c => c.id === m.capacidad);
        const completada = y.misiones[m.id]?.completada;
        return `<div class="panel" style="cursor:pointer" data-m="${m.id}">
          <img src="${m.imagen}" alt="${esc(m.titulo)}" style="width:100%;height:160px;object-fit:cover;border-radius:12px;margin-bottom:.8rem">
          <span class="tag">Misión ${m.n}</span>
          <h3 style="margin:.5rem 0">${esc(m.titulo)}</h3>
          <p class="hint">${esc(cap.nombre)}</p>
          ${completada ? '<span class="badge" style="--c:#1E7A5E">Hecha</span>' : '<span class="tag">Pendiente</span>'}
        </div>`;
      }).join('')}</div>
    </section>`;
    main.querySelectorAll('.panel[data-m]').forEach(p => p.addEventListener('click', () => Pantallas.misionDetalle(p.dataset.m)));
    main.focus();
  },

  misionDetalle(id) {
    const m = MISIONES.find(x => x.id === id);
    const y = Store.yo();
    const seleccion = y.misiones[m.id]?.seleccion;
    const razonamiento = y.misiones[m.id]?.razonamiento || '';

    if (seleccion !== undefined && seleccion !== null) {
      const op = m.opciones[seleccion];
      const est = ESTADOS.find(e => e.id === op.estado);
      main.innerHTML = `<section class="screen">
        ${guia(est.ariadna, est.mood)}
        <h2>${esc(m.titulo)}</h2>
        <p class="mono">Misión ${m.n} · ${esc(CAPACIDADES.find(c => c.id === m.capacidad).nombre)}</p>
        <div class="panel">
          <img src="${m.imagen}" alt="${esc(m.titulo)}" style="width:100%;max-height:300px;object-fit:cover;border-radius:12px;margin-bottom:1rem">
          <h3>¿Qué pasó?</h3>
          <p>${esc(m.situacion)}</p>
          <h3>Lo que elegiste</h3>
          <div class="opt sel" style="--c:${est.color};--s:${est.suave};border-color:${est.color};background:${est.suave}">${esc(op.texto)}</div>
          <div class="escala" aria-label="Qué tan buena fue tu decisión">${ESTADOS.map(e => `<span class="${e.id === est.id ? 'on' : ''}" style="--c:${e.color}">${e.signo} ${e.nombre}</span>`).join('')}</div>
          <h3>¿Qué pasó después?</h3>
          <p>${esc(op.exp)}</p>
          <p class="note">${esc(op.respaldo)}</p>
          <h3>Tu razón</h3>
          <p>${esc(razonamiento)}</p>
          <div class="row">
            <button class="btn ghost small" id="volverMis">Volver a misiones</button>
          </div>
        </div>
      </section>`;
      $('#volverMis').addEventListener('click', () => Pantallas.misiones());
    } else {
      main.innerHTML = `<section class="screen">
        ${guia('Lee la historia. Elige qué harías tú y explica por qué. ¡No hay respuestas malas, pero algunas ayudan más!', 'neutral')}
        <h2>${esc(m.titulo)}</h2>
        <p class="mono">Misión ${m.n} · ${esc(CAPACIDADES.find(c => c.id === m.capacidad).nombre)}</p>
        <div class="panel">
          <img src="${m.imagen}" alt="${esc(m.titulo)}" style="width:100%;max-height:300px;object-fit:cover;border-radius:12px;margin-bottom:1rem">
          <h3>¿Qué pasó?</h3>
          <p>${esc(m.situacion)}</p>
          <h3>Pistas relacionadas</h3>
          <div class="grid" style="margin:1rem 0">${m.evidencias.map(eid => {
            const ev = EVIDENCIAS.find(e => e.id === eid);
            return `<div style="cursor:pointer" data-ev="${eid}">
              <div class="ilus">${Ilus.evidencia(eid)}</div>
              <p class="hint">${esc(ev.titulo)}</p>
            </div>`;
          }).join('')}</div>
          <h3>¿Qué harías tú?</h3>
          <div class="opts">${m.opciones.map((o, i) => `<button class="opt" data-o="${i}" type="button">${esc(o.texto)}</button>`).join('')}</div>
          <div class="field" style="margin-top:1.2rem">
            <label for="razon">¿Por qué elegiste eso?</label>
            <textarea id="razon" maxlength="500" placeholder="Escribe tu razón (mínimo 15 letras)..."></textarea>
            <p class="err" id="eRazon" role="alert"></p>
          </div>
          <div class="row">
            <button class="btn ghost small" id="cancelarMis">Cancelar</button>
            <button class="btn gold" id="confirmar" type="button">¡Elegir!</button>
          </div>
        </div>
      </section>`;
      main.querySelectorAll('[data-ev]').forEach(b => b.addEventListener('click', () => Pantallas.evidenciaDetalle(b.dataset.ev, 'mision', id)));
      let sel = null;
      main.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
        main.querySelectorAll('.opt').forEach(x => { x.classList.remove('sel'); x.style.borderColor = ''; x.style.background = ''; });
        b.classList.add('sel');
        const op = m.opciones[+b.dataset.o];
        const est = ESTADOS.find(e => e.id === op.estado);
        b.style.borderColor = est.color;
        b.style.background = est.suave;
        sel = +b.dataset.o;
      }));
      $('#cancelarMis').addEventListener('click', () => Pantallas.misiones());
      $('#confirmar').addEventListener('click', () => {
        const razon = $('#razon').value.trim();
        if (sel === null) { toast('Elige una opción.', 'error'); return; }
        if (razon.length < 15) { $('#eRazon').textContent = 'Escribe al menos 15 letras.'; $('#razon').setAttribute('aria-invalid', 'true'); return; }
        $('#eRazon').textContent = '';
        const op = m.opciones[sel];
        const est = ESTADOS.find(e => e.id === op.estado);
        Sonido[est.id]();
        Store.actualizarYo(y => {
          y.misiones[m.id] = {
            completada: true,
            seleccion: sel,
            razonamiento: razon,
            estado: est.id,
            impacto: op.impacto,
            fecha: new Date().toISOString()
          };
        });
        toast('¡Decisión guardada! Resultado: ' + est.nombre, 'ok');
        lanzarConfeti();
        Pantallas.misionDetalle(id);
      });
    }
    main.focus();
  },

    linea() {
    main.innerHTML = `<section class="screen">
      ${guia('Esta línea del tiempo cuenta qué pasó entre 2030 y 2040. Toca cada año para ver las pistas.', 'neutral')}
      <h2>Línea del tiempo</h2>
      <p class="mono">De 2030 a 2040</p>
      <div style="position:relative;padding-left:2rem">
        <div style="position:absolute;left:.5rem;top:0;bottom:0;width:3px;background:var(--oro)"></div>
        ${LINEA_TIEMPO.map((lt) => `
          <div style="position:relative;margin-bottom:2rem">
            <div style="position:absolute;left:-1.7rem;top:1.5rem;width:1rem;height:1rem;border-radius:50%;background:var(--oro);border:3px solid var(--marfil)"></div>
            <div class="panel">
              <div class="ilus" style="margin-bottom:1rem">${Ilus.linea(lt.año)}</div>
              <span class="tag">${lt.año}</span>
              <h3 style="margin:.5rem 0">${esc(lt.evento)}</h3>
              <p>${esc(lt.descripcion)}</p>
              <p class="mono" style="margin-top:1rem">Pistas relacionadas:</p>
              <div class="grid" style="margin-top:.5rem">${lt.evidencias.map(eid => {
                const ev = EVIDENCIAS.find(e => e.id === eid);
                return `<div style="cursor:pointer" data-ev="${eid}">
                  <div class="ilus">${Ilus.evidencia(eid)}</div>
                  <p class="hint" style="font-size:.8rem">${esc(ev.titulo)}</p>
                </div>`;
              }).join('')}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>`;
    main.querySelectorAll('[data-ev]').forEach(b => b.addEventListener('click', () => Pantallas.evidenciaDetalle(b.dataset.ev, 'linea')));
    main.focus();
  },

  informe() {
    const y = Store.yo();
    const eq = Store.equipo();
    main.innerHTML = `<section class="screen">
      ${guia('¡Casi terminas! Cuenta lo que aprendiste en 4 preguntas. Puedes imprimirlo cuando acabes.', 'feliz')}
      <h2>Mi informe</h2>
      <p class="mono">Equipo ${esc(eq.codigo)} · ${esc(y.nombre)}</p>
      <form class="panel" id="formInforme">
        <div class="field">
          <label for="problemas">1. ¿Qué problemas viste?</label>
          <textarea id="problemas" maxlength="500" placeholder="Escribe los problemas que encontraste...">${esc(y.informe.problemas || '')}</textarea>
        </div>
        <div class="field">
          <label for="decisiones">2. ¿Qué decisiones tomaste?</label>
          <textarea id="decisiones" maxlength="500" placeholder="¿Qué elegiste en las misiones?">${esc(y.informe.decisiones || '')}</textarea>
        </div>
        <div class="field">
          <label for="propuestas">3. ¿Qué harías para mejorar las cosas?</label>
          <textarea id="propuestas" maxlength="500" placeholder="Tus ideas para un mundo mejor...">${esc(y.informe.propuestas || '')}</textarea>
        </div>
        <div class="field">
          <label for="reflexion">4. ¿Qué estás construyendo tú hoy?</label>
          <textarea id="reflexion" maxlength="500" placeholder="Tu reflexión final...">${esc(y.informe.reflexion || '')}</textarea>
        </div>
        <div class="row">
          <button class="btn gold" type="submit">Guardar</button>
          <button class="btn ghost" type="button" id="imprimir">Imprimir</button>
        </div>
      </form>
    </section>`;
    $('#formInforme').addEventListener('submit', (e) => {
      e.preventDefault();
      Store.actualizarYo(y => {
        y.informe = {
          problemas: $('#problemas').value.trim(),
          decisiones: $('#decisiones').value.trim(),
          propuestas: $('#propuestas').value.trim(),
          reflexion: $('#reflexion').value.trim(),
          completado: new Date().toISOString()
        };
      });
      toast('¡Informe guardado!', 'ok');
    });
    $('#imprimir').addEventListener('click', () => { window.print(); });
    main.focus();
  },

  resultados() {
    const y = Store.yo();
    const misionesCompletadas = MISIONES.filter(m => y.misiones[m.id]?.completada).length;
    if (misionesCompletadas < 5) {
      main.innerHTML = `<section class="screen panel">
        ${guia('¡Aún no terminas todas las misiones! Haz las 5 para ver tu futuro.', 'neutral')}
        <h2>Tu futuro</h2>
        <p>Has hecho ${misionesCompletadas} de 5 misiones.</p>
        <a class="btn gold" href="#/misiones" style="text-decoration:none">Ir a misiones</a>
      </section>`;
    } else {
      const promedios = INDICADORES.map(ind => {
        const valores = MISIONES.map(m => y.misiones[m.id]?.impacto?.[ind.id] || 0);
        const promedio = valores.reduce((a, b) => a + b, 0) / valores.length;
        return { ...ind, promedio };
      });
      const promedioGeneral = promedios.reduce((a, b) => a + b.promedio, 0) / promedios.length;
      let escenarioFinal;
      if (promedioGeneral >= 2) escenarioFinal = ESCENARIOS.find(e => e.id === 'reconstruccion');
      else if (promedioGeneral >= 1) escenarioFinal = ESCENARIOS.find(e => e.id === 'equilibrio');
      else escenarioFinal = ESCENARIOS.find(e => e.id === 'fragmentacion');
      main.innerHTML = `<section class="screen">
        ${guia('¡Tus decisiones muestran qué futuro estás construyendo! Este es el resultado de todo lo que elegiste.', 'feliz', true)}
        <h2>Tu futuro: ${esc(escenarioFinal.nombre)}</h2>
        <div class="panel" style="text-align:center">
          <img src="${escenarioFinal.imagen}" alt="${esc(escenarioFinal.nombre)}" style="width:100%;max-height:400px;object-fit:cover;border-radius:12px;margin-bottom:1rem">
          <h3 style="color:${escenarioFinal.color}">${esc(escenarioFinal.nombre)}</h3>
          <p>${esc(escenarioFinal.descripcion)}</p>
          <div class="note">${esc(escenarioFinal.condiciones)}</div>
        </div>
        <h3 style="margin-top:1.5rem">Tus puntos</h3>
        <div class="grid">${promedios.map(p => `
          <div class="panel">
            <p class="mono">${esc(p.nombre)}</p>
            <div class="big" style="color:${p.promedio >= 2 ? '#1E7A5E' : p.promedio >= 1 ? '#B8893A' : '#7A2433'}">${p.promedio.toFixed(1)}</div>
            <div class="bar"><i style="width:${Math.max(0, Math.min(100, (p.promedio + 3) / 6 * 100))}%"></i></div>
          </div>
        `).join('')}</div>
        <h3 style="margin-top:1.5rem">Tus decisiones</h3>
        <div class="grid">${MISIONES.map(m => {
          const dec = y.misiones[m.id];
          const op = m.opciones[dec.seleccion];
          const est = ESTADOS.find(e => e.id === op.estado);
          return `<div class="panel">
            <span class="tag">Misión ${m.n}</span>
            <h4>${esc(m.titulo)}</h4>
            <p class="hint">${esc(op.texto)}</p>
            <span class="badge" style="--c:${est.color}">${esc(est.nombre)}</span>
          </div>`;
        }).join('')}</div>
        <div class="row" style="margin-top:1.5rem">
          <button class="btn ghost" id="verAlternativos">Ver otros futuros</button>
          <a class="btn gold" href="#/informe" style="text-decoration:none">Hacer mi informe</a>
        </div>
      </section>`;
      $('#verAlternativos').addEventListener('click', () => Pantallas.resultadosAlternativos());
    }
    main.focus();
  },

  resultadosAlternativos() {
    main.innerHTML = `<section class="screen">
      ${guia('Estos son los otros futuros posibles. Cada uno depende de decisiones diferentes. ¡Mira cómo podrían ser las cosas!', 'neutral')}
      <h2>Otros futuros</h2>
      <div class="grid">${ESCENARIOS.map(e => `
        <div class="panel">
          <img src="${e.imagen}" alt="${esc(e.nombre)}" style="width:100%;height:200px;object-fit:cover;border-radius:12px;margin-bottom:.8rem">
          <h3 style="color:${e.color}">${esc(e.nombre)}</h3>
          <p>${esc(e.descripcion)}</p>
          <p class="note">${esc(e.condiciones)}</p>
        </div>
      `).join('')}</div>
      <button class="btn ghost" id="volverRes" type="button">Volver a mi resultado</button>
    </section>`;
    $('#volverRes').addEventListener('click', () => Pantallas.resultados());
    main.focus();
  },

  pendiente(sec) {
    main.innerHTML = `<section class="screen panel"><p class="mono">Aún no está listo</p>
      <h2>${esc(sec.nombre)}</h2>
      <p>Esta parte se hará en la <strong>Etapa ${sec.etapa}</strong>. Por ahora no tiene nada.</p>
      <a class="btn gold" href="#/centro" style="display:inline-block;text-decoration:none">Volver a mi centro</a></section>`;
    main.focus();
  }
};

/* ---------- Práctica ---------- */
function vistaPractica() {
  const pr = PRACTICAS[Prac.i];
  const op = Prac.sel !== null ? pr.opciones[Prac.sel] : null;
  const est = op ? ESTADOS.find(e => e.id === op.estado) : null;
  const opciones = pr.opciones.map((o, i) => {
    const e = ESTADOS.find(x => x.id === o.estado);
    const sel = Prac.sel === i;
    return `<button type="button" class="opt ${sel ? 'sel' : ''}" data-o="${i}" ${sel ? `style="--c:${e.color};--s:${e.suave};border-color:${e.color};background:${e.suave}"` : ''} ${op ? 'disabled' : ''}>${esc(o.texto)}</button>`;
  }).join('');
  const resultado = est ? `
      <span class="badge" style="--c:${est.color}">${est.signo === '+' ? '¡Bien!' : 'Se puede mejorar'}: ${est.nombre}</span>
      <div class="escala" aria-label="Qué tan buena fue tu decisión">${ESTADOS.map(e => `<span class="${e.id === est.id ? 'on' : ''}" style="--c:${e.color}">${e.signo} ${e.nombre}</span>`).join('')}</div>
      <p class="cap">${esc(op.respaldo)}</p>
      <h3>¿Por qué?</h3><p>${esc(op.exp)}</p>
      <div class="field"><label for="razon">¿Por qué elegiste eso?</label>
        <textarea id="razon" maxlength="400"></textarea><p class="err" id="eRazon" role="alert"></p>
        <button class="btn small" id="regRazon" type="button">Guardar razón</button></div>
      <div class="row"><button class="btn ghost small" id="otra" type="button">Probar otra</button>
        ${PRACTICAS.length > 1 ? '<button class="btn ghost small" id="sigSit" type="button">Siguiente historia</button>' : ''}</div>`
    : `<p class="hint">Elige una opción. Aquí verás qué pasa después.</p>`;
  return `${guia(est ? est.ariadna : '¡Tu turno! Lee la historia y elige. Esto es práctica, no cuenta para tu progreso.', est ? est.mood : 'neutral')}
    <p class="mono">Práctica · no cuenta</p>
    <div class="prac">
      <div class="col decide"><p class="mono">Tú decides · historia ${Prac.i + 1} de ${PRACTICAS.length}</p><h3>${esc(pr.titulo)}</h3><p>${esc(pr.situacion)}</p><div class="opts">${opciones}</div></div>
      <div class="col result" ${est ? `style="border-color:${est.color};background:${est.suave}"` : ''}><p class="mono">¿Qué pasó?</p>${resultado}</div>
    </div>`;
}
function enlazarPractica(paso) {
  const pr = PRACTICAS[Prac.i];
  main.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    Prac.sel = +b.dataset.o;
    Sonido[pr.opciones[Prac.sel].estado]();
    Pantallas.tutorial(paso);
  }));
  $('#otra')?.addEventListener('click', () => { Prac.sel = null; Pantallas.tutorial(paso); });
  $('#sigSit')?.addEventListener('click', () => { Prac.i = (Prac.i + 1) % PRACTICAS.length; Prac.sel = null; Pantallas.tutorial(paso); });
  $('#regRazon')?.addEventListener('click', () => {
    const t = $('#razon'), v = t.value.trim();
    if (v.length < 15) { $('#eRazon').textContent = 'Escribe al menos 15 letras.'; t.setAttribute('aria-invalid', 'true'); t.focus(); return; }
    $('#eRazon').textContent = ''; t.setAttribute('aria-invalid', 'false');
    toast('¡Así se hace! En las misiones también tendrás que explicar.', 'ok');
  });
}

/* ---------- Router ---------- */
function renderNav(actual) {
  nav.innerHTML = SECCIONES.map(s => `<a href="#/${s.id}" ${s.id === actual ? 'aria-current="page"' : ''}>
    <span>${esc(s.nombre)}</span>${s.etapa > 1 ? `<span class="mono">E${s.etapa}</span>` : ''}</a>`).join('');
}
function router() {
  const ruta = (location.hash.replace('#/', '') || 'acceso').split('/')[0];
  const logged = !!(Store.sesion() && Store.yo());
  app.classList.toggle('logged', logged);
  sidebar.hidden = topbar.hidden = !logged;
  sidebar.classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false');
  if (!logged) { if (ruta !== 'acceso') { location.hash = '#/acceso'; return; } return Pantallas.acceso(); }
  $('#topWho').textContent = Store.sesion().codigo;
  if (ruta === 'acceso') { location.hash = '#/centro'; return; }
  if (ruta === 'intro') { renderNav(''); return Pantallas.intro(); }
  const sec = SECCIONES.find(s => s.id === ruta);
  if (!sec) { location.hash = '#/centro'; return; }
  renderNav(sec.id);
  if (sec.id === 'centro') Pantallas.centro();
  else if (sec.id === 'tutorial') { Prac.sel = null; Pantallas.tutorial(); }
  else if (sec.id === 'evidencias') Pantallas.evidencias();
  else if (sec.id === 'misiones') Pantallas.misiones();
  else if (sec.id === 'linea') Pantallas.linea();
  else if (sec.id === 'informe') Pantallas.informe();
  else if (sec.id === 'resultados') Pantallas.resultados();
  else Pantallas.pendiente(sec);
}

/* ---------- Eventos ---------- */
$('#menuBtn').addEventListener('click', () => {
  const o = sidebar.classList.toggle('open'); $('#menuBtn').setAttribute('aria-expanded', o);
});
$('#logout').addEventListener('click', () => { Store.salir(); toast('Sesión cerrada. Tu progreso sigue guardado.'); location.hash = '#/acceso'; router(); });
const snd = $('#sndBtn');
const pintarSnd = () => { snd.textContent = 'Sonido: ' + (Sonido.activo() ? 'sí' : 'no'); snd.setAttribute('aria-pressed', Sonido.activo()); };
snd.addEventListener('click', () => { Sonido.alternar(); pintarSnd(); });
document.addEventListener('click', (e) => {
  const b = e.target.closest('button, a.btn, #nav a');
  if (b && !b.classList.contains('opt') && b.id !== 'sndBtn') Sonido.click();
});
pintarSnd();
addEventListener('hashchange', router);
router();