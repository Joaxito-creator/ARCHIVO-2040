/* ARCHIVO 2040 · ilustraciones.js — ilustraciones vectoriales propias */
const Ilus = (() => {
  const P = (x, y, c, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cy="-27" r="8" fill="${c}"/><path d="M-11 0C-11-14-6-19 0-19S11-14 11 0Z" fill="${c}"/></g>`;
  const S = (id, a, b, alt, body) => `<svg viewBox="0 0 320 200" role="img" aria-label="${alt}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="320" height="200" fill="url(#g${id})"/>${body}</svg>`;

  const escenas = {
    reconstruccion: () => S('r', '#FBEFD2', '#F3D9A4', 'Cinco personas en círculo, unidas por hilos dorados, bajo un sol cálido', `
      <circle cx="262" cy="48" r="26" fill="#D9B76A"/><rect y="150" width="320" height="50" fill="#BFD9C6"/>
      <rect x="26" y="112" width="6" height="42" fill="#6B4A2B"/><circle cx="29" cy="100" r="24" fill="#1E7A5E"/>
      <ellipse cx="160" cy="170" rx="100" ry="14" fill="none" stroke="#B8893A" stroke-width="2" stroke-dasharray="2 5"/>
      <path d="M90 133Q160 100 230 133M125 145Q160 126 195 145" fill="none" stroke="#B8893A" stroke-width="2"/>
      ${P(90, 160, '#1E7A5E')}${P(125, 172, '#B8893A')}${P(160, 176, '#16120E')}${P(195, 172, '#C0623A')}${P(230, 160, '#7A2433')}`),
    equilibrio: () => S('e', '#F4EBDD', '#E8D9BF', 'Dos grupos separados por una cerca baja, con un puente dorado', `
      <circle cx="160" cy="44" r="18" fill="#D9B76A"/><ellipse cx="178" cy="52" rx="34" ry="11" fill="#EFE6D6"/>
      <rect y="152" width="320" height="48" fill="#D9CDB4"/>
      <path d="M138 143Q168 112 200 143" fill="none" stroke="#B8893A" stroke-width="2" stroke-dasharray="4 4"/>
      <path d="M150 150h20M152 142v16M168 142v16" stroke="#8C7B6B" stroke-width="3"/>
      ${P(70, 166, '#1E7A5E')}${P(100, 174, '#16120E')}${P(132, 168, '#B8893A')}${P(205, 168, '#C0623A')}${P(237, 174, '#7A2433')}${P(268, 166, '#1E7A5E')}`),
    tension: () => S('t', '#E5D6C6', '#CFC0AE', 'Dos grupos separados por un muro agrietado', `
      <ellipse cx="80" cy="34" rx="56" ry="16" fill="#9A8878"/><ellipse cx="250" cy="42" rx="62" ry="18" fill="#8C7B6B"/>
      <rect y="152" width="320" height="48" fill="#BFAF9B"/>
      <rect x="150" y="96" width="20" height="74" fill="#5A4A3E"/><path d="M160 96l-6 22 8 14-6 20" fill="none" stroke="#2B241E" stroke-width="2"/>
      <path d="M136 92l8-10h-6l8-12M184 92l-8-10h6l-8-12" fill="none" stroke="#C0623A" stroke-width="2.5"/>
      ${P(58, 170, '#1E7A5E')}${P(92, 176, '#16120E')}${P(124, 170, '#B8893A')}${P(204, 170, '#C0623A')}${P(238, 176, '#7A2433')}${P(270, 170, '#16120E')}`),
    fragmentacion: () => S('f', '#CBBBAA', '#A89684', 'Pocas personas aisladas sobre un suelo agrietado', `
      <ellipse cx="70" cy="30" rx="70" ry="20" fill="#6F6054"/><ellipse cx="230" cy="26" rx="80" ry="22" fill="#5A4A3E"/>
      <rect y="150" width="320" height="50" fill="#8F7F6E"/>
      <path d="M0 154L60 164L90 154L150 178L190 160L260 184L320 162" fill="none" stroke="#3A2E26" stroke-width="2.5"/>
      <path d="M96 150h30M100 150v14M122 150v14" stroke="#3A2E26" stroke-width="3"/>
      ${P(36, 172, '#5A4A3E', .85)}${P(160, 182, '#3A2E26', .8)}${P(292, 170, '#7A2433', .85)}${P(222, 176, '#5A4A3E', .7)}`)
  };

  const evidencia = {
    e1: () => S('e1', '#F7EED8', '#E2D3BA', 'Documento con regla y burbuja tachada', `
      <rect x="58" y="28" width="120" height="150" rx="6" fill="#FFFDF8" stroke="#B8893A" stroke-width="2"/>
      <rect x="72" y="44" width="92" height="9" rx="4" fill="#CDBFA8"/>
      <rect x="72" y="62" width="70" height="6" rx="3" fill="#E2D3BA"/>
      <rect x="72" y="76" width="82" height="6" rx="3" fill="#E2D3BA"/>
      <rect x="72" y="90" width="58" height="6" rx="3" fill="#E2D3BA"/>
      <rect x="72" y="104" width="74" height="6" rx="3" fill="#E2D3BA"/>
      <g transform="translate(205 118)">
        <path d="M0 0Q-38 -8 -38 -28Q-38 -52 -8 -52L22 -52Q46 -52 46 -30Q46 -10 22 -6L12 -6L14 10L-2 -6Z" fill="#fff" stroke="#7A2433" stroke-width="2.5"/>
        <circle cx="4" cy="-30" r="15" fill="none" stroke="#7A2433" stroke-width="3"/>
        <path d="M-6 -39L14 -21" stroke="#7A2433" stroke-width="3"/>
      </g>`),
    e2: () => S('e2', '#E5D6C6', '#CFC0AE', 'Dos niños separados por una valla', `
      <rect y="150" width="320" height="50" fill="#BFAF9B"/>
      <g stroke="#5A4A3E" stroke-width="3" stroke-linecap="round">
        <line x1="138" y1="58" x2="138" y2="150"/><line x1="150" y1="58" x2="150" y2="150"/>
        <line x1="162" y1="58" x2="162" y2="150"/><line x1="174" y1="58" x2="174" y2="150"/>
        <line x1="186" y1="58" x2="186" y2="150"/>
        <line x1="132" y1="74" x2="192" y2="74"/><line x1="132" y1="132" x2="192" y2="132"/>
      </g>
      ${P(82, 150, '#1E7A5E')}${P(240, 150, '#7A2433')}`),
    e3: () => S('e3', '#D9CDB4', '#C2B39A', 'Niño solo con mochila junto a un banco', `
      <rect y="150" width="320" height="50" fill="#A89684"/>
      <rect x="196" y="120" width="78" height="8" rx="3" fill="#5A4A3E"/>
      <rect x="202" y="128" width="6" height="22" fill="#5A4A3E"/><rect x="262" y="128" width="6" height="22" fill="#5A4A3E"/>
      <rect x="150" y="116" width="24" height="30" rx="6" fill="#7A2433"/>
      ${P(110, 150, '#5A4A3E')}
      <path d="M102 124q-8 4 -6 14" fill="none" stroke="#5A4A3E" stroke-width="3" stroke-linecap="round"/>`),
    e4: () => S('e4', '#E8D9BF', '#D4C3A8', 'Pizarra con reglas y símbolo de silencio', `
      <rect x="34" y="34" width="252" height="120" rx="8" fill="#1E3A2E" stroke="#5A4A3E" stroke-width="7"/>
      <g stroke="#EFE6D6" stroke-width="3" stroke-linecap="round">
        <line x1="56" y1="64" x2="170" y2="64"/><line x1="56" y1="84" x2="150" y2="84"/><line x1="56" y1="104" x2="162" y2="104"/>
      </g>
      <circle cx="218" cy="94" r="34" fill="none" stroke="#7A2433" stroke-width="5"/>
      <path d="M200 100h36" stroke="#7A2433" stroke-width="5" stroke-linecap="round"/>
      <path d="M210 86q8 -6 16 0" fill="none" stroke="#7A2433" stroke-width="4" stroke-linecap="round"/>`),
    e5: () => S('e5', '#F7EED8', '#E2D3BA', 'Lista de reglas con candado', `
      <rect x="86" y="24" width="148" height="156" rx="6" fill="#FFFDF8" stroke="#B8893A" stroke-width="2"/>
      <g fill="#C0623A"><circle cx="106" cy="52" r="6"/><circle cx="106" cy="74" r="6"/><circle cx="106" cy="96" r="6"/></g>
      <g fill="#E2D3BA"><rect x="120" y="48" width="96" height="8" rx="4"/><rect x="120" y="70" width="80" height="8" rx="4"/><rect x="120" y="92" width="90" height="8" rx="4"/></g>
      <g transform="translate(160 148)">
        <rect x="-22" y="-6" width="44" height="34" rx="6" fill="#B8893A"/>
        <path d="M-12 -6v-8a12 12 0 0 1 24 0v8" fill="none" stroke="#5A4A3E" stroke-width="5"/>
        <circle cx="0" cy="10" r="5" fill="#16120E"/>
      </g>`),
    e6: () => S('e6', '#F4EBDD', '#E0CFB4', 'Dos grupos enfrentados en cancha con rayo', `
      <rect y="140" width="320" height="60" fill="#BFD9C6"/>
      <line x1="160" y1="140" x2="160" y2="200" stroke="#FFFDF8" stroke-width="3"/>
      <path d="M158 86l-12 30 14 0 -10 32 26 -38 -14 0 10 -24 z" fill="#E9C46A" stroke="#B8893A" stroke-width="2"/>
      ${P(70, 150, '#1E7A5E')}${P(102, 158, '#16120E')}${P(218, 158, '#C0623A')}${P(250, 150, '#7A2433')}`),
    e7: () => S('e7', '#F7EED8', '#E2D3BA', 'Niño que habla con reloj de turnos', `
      <rect y="150" width="320" height="50" fill="#D4C3A8"/>
      ${P(96, 150, '#16120E')}
      <g transform="translate(150 96)">
        <path d="M0 0Q-30 -6 -30 -24Q-30 -44 -4 -44L26 -44Q48 -44 48 -24Q48 -8 26 -4L16 -4L18 10L4 -4Z" fill="#fff" stroke="#B8893A" stroke-width="2.5"/>
        <g stroke="#CDBFA8" stroke-width="3" stroke-linecap="round"><line x1="6" y1="-30" x2="34" y2="-30"/><line x1="6" y1="-18" x2="28" y2="-18"/></g>
      </g>
      <circle cx="248" cy="64" r="26" fill="#FFFDF8" stroke="#5A4A3E" stroke-width="4"/>
      <path d="M248 64V48M248 64l12 8" stroke="#7A2433" stroke-width="4" stroke-linecap="round"/>`),
    e8: () => S('e8', '#FBEFD2', '#EAD9B6', 'Grupo de niños con manos levantadas', `
      <rect y="150" width="320" height="50" fill="#CFC0AE"/>
      ${P(70, 150, '#1E7A5E')}${P(120, 156, '#B8893A')}${P(172, 156, '#C0623A')}${P(224, 150, '#7A2433')}
      <g stroke-width="5" stroke-linecap="round">
        <line x1="64" y1="128" x2="58" y2="104" stroke="#1E7A5E"/><line x1="114" y1="134" x2="108" y2="110" stroke="#B8893A"/>
        <line x1="166" y1="134" x2="172" y2="110" stroke="#C0623A"/><line x1="218" y1="128" x2="224" y2="104" stroke="#7A2433"/>
      </g>`),
    e9: () => S('e9', '#F7EED8', '#E2D3BA', 'Urna de votación con papeletas y barras', `
      <rect y="150" width="320" height="50" fill="#D4C3A8"/>
      <rect x="120" y="108" width="80" height="58" rx="6" fill="#C0623A" stroke="#7A2433" stroke-width="2"/>
      <rect x="146" y="116" width="28" height="7" rx="3" fill="#16120E"/>
      <rect x="150" y="64" width="22" height="28" rx="3" fill="#FFFDF8" stroke="#B8893A" stroke-width="2" transform="rotate(14 161 78)"/>
      <g>
        <rect x="220" y="120" width="14" height="40" fill="#1E7A5E"/><rect x="240" y="132" width="14" height="28" fill="#B8893A"/><rect x="260" y="140" width="14" height="20" fill="#7A2433"/>
      </g>`),
    e10: () => S('e10', '#F4EBDD', '#E0CFB4', 'Niña que habla con planta en burbuja', `
      <rect y="150" width="320" height="50" fill="#CFC0AE"/>
      ${P(96, 150, '#7A2433')}
      <g transform="translate(150 96)">
        <path d="M0 0Q-30 -6 -30 -24Q-30 -44 -4 -44L26 -44Q48 -44 48 -24Q48 -8 26 -4L16 -4L18 10L4 -4Z" fill="#fff" stroke="#1E7A5E" stroke-width="2.5"/>
        <path d="M9 -10v-18M9 -22q-10 -2 -12 -10M9 -22q10 -2 12 -10" fill="none" stroke="#1E7A5E" stroke-width="3" stroke-linecap="round"/>
      </g>`),
    e11: () => S('e11', '#E5D6C6', '#CBBBA9', 'Parque con banco y basura', `
      <rect y="150" width="320" height="50" fill="#A89684"/>
      <rect x="44" y="92" width="10" height="58" fill="#6B4A2B"/><circle cx="49" cy="80" r="30" fill="#1E7A5E"/>
      <rect x="176" y="128" width="96" height="9" rx="3" fill="#5A4A3E"/>
      <rect x="182" y="137" width="6" height="20" fill="#5A4A3E"/><rect x="260" y="137" width="6" height="20" fill="#5A4A3E"/>
      <g>
        <rect x="120" y="160" width="20" height="14" rx="3" fill="#FFFDF8" transform="rotate(-12 130 167)"/>
        <rect x="150" y="166" width="10" height="22" rx="4" fill="#2A9D8F"/>
        <circle cx="200" cy="170" r="7" fill="#E9C46A"/><rect x="224" y="164" width="16" height="12" rx="2" fill="#C0623A" transform="rotate(18 232 170)"/>
      </g>`),
    e12: () => S('e12', '#E8D9BF', '#D0BEA4', 'Vecino adulto que habla frente a parque', `
      <rect y="150" width="320" height="50" fill="#BFAF9B"/>
      <rect x="210" y="120" width="70" height="7" rx="3" fill="#5A4A3E"/><rect x="216" y="127" width="5" height="18" fill="#5A4A3E"/><rect x="269" y="127" width="5" height="18" fill="#5A4A3E"/>
      <g transform="translate(96 150) scale(1.15)"><circle cy="-27" r="8" fill="#5A4A3E"/><path d="M-11 0C-11-14-6-19 0-19S11-14 11 0Z" fill="#5A4A3E"/></g>
      <g transform="translate(150 92)">
        <path d="M0 0Q-30 -6 -30 -24Q-30 -44 -4 -44L26 -44Q48 -44 48 -24Q48 -8 26 -4L16 -4L18 10L4 -4Z" fill="#fff" stroke="#C0623A" stroke-width="2.5"/>
        <g stroke="#CDBFA8" stroke-width="3" stroke-linecap="round"><line x1="6" y1="-30" x2="32" y2="-30"/><line x1="6" y1="-18" x2="24" y2="-18"/></g>
      </g>`)
  };

  const linea = {
    2030: () => S('l30', '#F4EBDD', '#E0CFB4', '2030: Empiezan los problemas', `<text x="160" y="130" font-size="72" font-family="Georgia, serif" font-weight="700" fill="#C0623A" text-anchor="middle" opacity="0.15">2030</text><path d="M130 90l30-30 30 30" fill="none" stroke="#C0623A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="160" cy="60" r="4" fill="#C0623A"/>`),
    2033: () => S('l33', '#E8D9BF', '#D4C3A8', '2033: Reglas muy duras', `<text x="160" y="130" font-size="72" font-family="Georgia, serif" font-weight="700" fill="#7A2433" text-anchor="middle" opacity="0.15">2033</text><rect x="110" y="50" width="100" height="70" rx="4" fill="none" stroke="#7A2433" stroke-width="5"/><line x1="125" y1="70" x2="195" y2="70" stroke="#7A2433" stroke-width="4" stroke-linecap="round"/><line x1="125" y1="88" x2="180" y2="88" stroke="#7A2433" stroke-width="4" stroke-linecap="round"/><line x1="125" y1="106" x2="190" y2="106" stroke="#7A2433" stroke-width="4" stroke-linecap="round"/>`),
    2035: () => S('l35', '#F7EED8', '#E2D3BA', '2035: Los niños piden opinar', `<text x="160" y="130" font-size="72" font-family="Georgia, serif" font-weight="700" fill="#B8893A" text-anchor="middle" opacity="0.15">2035</text><path d="M120 100h80v25h-20l-15 15v-15h-45z" fill="none" stroke="#B8893A" stroke-width="5" stroke-linejoin="round"/><circle cx="145" cy="85" r="3" fill="#B8893A"/><circle cx="160" cy="85" r="3" fill="#B8893A"/><circle cx="175" cy="85" r="3" fill="#B8893A"/>`),
    2037: () => S('l37', '#FBEFD2', '#F3D9A4', '2037: Algunos lo intentan', `<text x="160" y="130" font-size="72" font-family="Georgia, serif" font-weight="700" fill="#1E7A5E" text-anchor="middle" opacity="0.15">2037</text><path d="M120 95l25 25 55-55" fill="none" stroke="#1E7A5E" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`),
    2039: () => S('l39', '#E5D6C6', '#CFC0AE', '2039: Las cosas empeoran', `<text x="160" y="130" font-size="72" font-family="Georgia, serif" font-weight="700" fill="#5A4A3E" text-anchor="middle" opacity="0.15">2039</text><path d="M120 80h35a18 18 0 0 1 0 36h-35a18 18 0 0 1 0-36z" fill="none" stroke="#5A4A3E" stroke-width="5"/><path d="M180 80h25a15 15 0 0 1 0 30h-25a15 15 0 0 1 0-30z" fill="none" stroke="#5A4A3E" stroke-width="5"/><path d="M140 115l-8 15M160 115v15M180 115l8 15" stroke="#5A4A3E" stroke-width="4" stroke-linecap="round"/>`),
    2040: () => S('l40', '#FBEFD2', '#F3D9A4', '2040: Tú decides el futuro', `<text x="160" y="130" font-size="72" font-family="Georgia, serif" font-weight="700" fill="#B8893A" text-anchor="middle" opacity="0.15">2040</text><circle cx="160" cy="85" r="30" fill="none" stroke="#B8893A" stroke-width="5"/><path d="M160 85l15-15M160 85v18" stroke="#B8893A" stroke-width="5" stroke-linecap="round"/>`)
  };

  const NOVA = (m = 'neutral') => {
    const boca = { feliz: 'M52 67Q60 76 68 67', neutral: 'M53 69Q60 72 67 69', preocupada: 'M53 72Q60 66 67 72' }[m] || 'M53 69Q60 72 67 69';
    const cejas = m === 'preocupada' ? 'M45 46Q51 43 57 47M63 47Q69 43 75 46' : 'M45 47Q51 44 57 46M63 46Q69 44 75 47';
    return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#EFE6D6" stroke="#B8893A" stroke-width="2"/>
      <path d="M18 120C20 92 44 84 60 84S100 92 102 120Z" fill="#16120E"/><path d="M46 85L60 102L74 85" fill="none" stroke="#D9B76A" stroke-width="2.5"/>
      <rect x="54" y="72" width="12" height="15" fill="#C98F6B"/><ellipse cx="60" cy="56" rx="20" ry="23" fill="#D9A67F"/>
      <path d="M38 56C34 30 50 23 62 24C80 25 86 42 82 58C78 44 70 38 60 38C50 38 42 45 38 56Z" fill="#2A1B14"/><circle cx="60" cy="19" r="9" fill="#2A1B14"/>
      <path d="M60 10C76 2 96 14 101 32" fill="none" stroke="#B8893A" stroke-width="2"/><circle cx="101" cy="33" r="3" fill="#B8893A"/>
      <circle cx="52" cy="57" r="2.3" fill="#16120E"/><circle cx="68" cy="57" r="2.3" fill="#16120E"/>
      <circle cx="52" cy="57" r="7.5" fill="none" stroke="#B8893A" stroke-width="1.4"/><circle cx="68" cy="57" r="7.5" fill="none" stroke="#B8893A" stroke-width="1.4"/><path d="M59.5 57h1" stroke="#B8893A" stroke-width="1.4"/>
      <path d="${cejas}" fill="none" stroke="#2A1B14" stroke-width="1.6"/><path d="${boca}" fill="none" stroke="#8A3A3A" stroke-width="2" stroke-linecap="round"/>
      <circle cx="45" cy="66" r="4" fill="#E8A090" opacity=".4"/><circle cx="75" cy="66" r="4" fill="#E8A090" opacity=".4"/></svg>`;
  };

  return {
    escena: (id) => (escenas[id] || escenas.equilibrio)(),
    evidencia: (id) => (evidencia[id] || evidencia.e2)(),
    linea: (y) => (linea[y] || linea[2040])(),
    NOVA: NOVA
  };
})();