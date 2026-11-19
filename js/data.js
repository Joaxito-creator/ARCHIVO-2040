/* ARCHIVO 2040 · data.js — versión para niños de 10 años. Todo es FICTICIO. */

const CAPACIDADES = [
  { id: 'c1', nombre: 'Tratar bien a todos' },
  { id: 'c2', nombre: 'Ponerse de acuerdo' },
  { id: 'c3', nombre: 'Solucionar problemas sin pelear' },
  { id: 'c4', nombre: 'Opinar y decidir juntos' },
  { id: 'c5', nombre: 'Ayudar a la comunidad' }
];

const MISIONES = [
  {
    id: 'm1', n: 1, titulo: 'El niño nuevo en el salón',
    capacidad: 'c1',
    imagen: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=600&q=80',
    situacion: 'Al salón de clases llega Mateo, un niño nuevo que viene de otro país. Algunos compañeros se burlan de su acento y no lo dejan jugar en el recreo. Mateo se siente triste y quiere cambiar de colegio.',
    evidencias: ['e1', 'e2', 'e3'],
    opciones: [
      {
        estado: 'fragmentacion',
        texto: 'No hacer nada. Mateo tiene que acostumbrarse solo.',
        exp: 'Si nadie hace nada, Mateo se sentirá más solo. Burlarse de alguien por ser diferente está mal y hace daño.',
        respaldo: 'Cuando nadie ayuda, las personas se quedan solas.',
        impacto: { respeto: -3, trabajo: -2, problemas: -2, ayuda: -3 }
      },
      {
        estado: 'tension',
        texto: 'Decirle a la profesora que lo cambie de grupo.',
        exp: 'Cambiarlo de grupo no soluciona el problema. Solo lo esconde. Mateo seguirá sintiéndose diferente.',
        respaldo: 'Separar a las personas no las hace amigas.',
        impacto: { respeto: -1, trabajo: -1, problemas: 0, ayuda: -2 }
      },
      {
        estado: 'equilibrio',
        texto: 'Hablar con los que se burlan y decirles que paren.',
        exp: 'Está bien defender a Mateo, pero hay que hacerlo con respeto. A veces funciona, pero no siempre cambia las cosas.',
        respaldo: 'Defender a un amigo es valiente, pero se puede hacer mejor.',
        impacto: { respeto: 1, trabajo: 0, problemas: 1, ayuda: 1 }
      },
      {
        estado: 'reconstruccion',
        texto: 'Invitar a Mateo a jugar, presentarlo a todos y contar algo interesante de su país.',
        exp: 'Así Mateo se sentirá bienvenido. Los demás conocerán cosas nuevas y aprenderán que ser diferente está bien.',
        respaldo: 'Incluir a otros hace que todos sean más felices.',
        impacto: { respeto: 3, trabajo: 2, problemas: 2, ayuda: 3 }
      }
    ]
  },
  {
    id: 'm2', n: 2, titulo: 'Las reglas del salón',
    capacidad: 'c2',
    imagen: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
    situacion: 'La profesora pone nuevas reglas en el salón: no hablar, no moverse del sitio, no salir al recreo sin permiso. Nadie preguntó a los estudiantes si estaban de acuerdo. Muchos están molestos.',
    evidencias: ['e4', 'e5'],
    opciones: [
      {
        estado: 'fragmentacion',
        texto: 'Obedecer sin quejarse, aunque no nos gusten las reglas.',
        exp: 'Obedecer por miedo no está bien. Las reglas deben ser justas y todos deben poder opinar sobre ellas.',
        respaldo: 'Las reglas impuestas sin preguntar no funcionan bien.',
        impacto: { respeto: -2, trabajo: -3, problemas: -2, ayuda: -2 }
      },
      {
        estado: 'tension',
        texto: 'Quejarse en secreto con los amigos pero no hacer nada.',
        exp: 'Quejarse no cambia las cosas. Hay que hablar con la profesora de forma respetuosa.',
        respaldo: 'Quejarse en secreto no soluciona nada.',
        impacto: { respeto: 0, trabajo: -1, problemas: 0, ayuda: -1 }
      },
      {
        estado: 'equilibrio',
        texto: 'Elegir a un representante para hablar con la profesora.',
        exp: 'Es un buen paso, pero todos deberían poder opinar, no solo uno.',
        respaldo: 'Hablar ayuda, pero es mejor si todos participan.',
        impacto: { respeto: 1, trabajo: 2, problemas: 1, ayuda: 1 }
      },
      {
        estado: 'reconstruccion',
        texto: 'Pedir una asamblea en el salón para proponer reglas entre todos y votarlas.',
        exp: 'Cuando todos ayudan a hacer las reglas, las cumplen mejor. Eso es trabajar en equipo.',
        respaldo: 'Las reglas hechas entre todos funcionan mejor.',
        impacto: { respeto: 2, trabajo: 3, problemas: 2, ayuda: 3 }
      }
    ]
  },
  {
    id: 'm3', n: 3, titulo: 'La pelea en el recreo',
    capacidad: 'c3',
    imagen: 'https://images.unsplash.com/photo-1526289231029-29b40ec13212?auto=format&fit=crop&w=600&q=80',
    situacion: 'Dos grupos de niños quieren usar la misma cancha al mismo tiempo. Empiezan a empujarse y a gritarse. Nadie quiere ceder.',
    evidencias: ['e6', 'e7'],
    opciones: [
      {
        estado: 'fragmentacion',
        texto: 'Que gane el grupo más fuerte. El otro que se vaya.',
        exp: 'Ganar a la fuerza no está bien. El grupo que pierde se enoja y quiere vengarse. Así no se solucionan los problemas.',
        respaldo: 'La fuerza no es la mejor manera de solucionar las cosas.',
        impacto: { respeto: -3, trabajo: -2, problemas: -3, ayuda: -3 }
      },
      {
        estado: 'tension',
        texto: 'Que venga un profesor y decida quién usa la cancha.',
        exp: 'El profesor puede ayudar, pero los niños no aprenden a solucionar sus propios problemas.',
        respaldo: 'Que otros decidan por nosotros no nos enseña nada.',
        impacto: { respeto: -1, trabajo: -2, problemas: 1, ayuda: -1 }
      },
      {
        estado: 'equilibrio',
        texto: 'Dividir la cancha en dos y que cada grupo use la mitad.',
        exp: 'Así nadie pelea, pero tampoco juegan juntos. No aprenden a compartir.',
        respaldo: 'Dividir no es lo mismo que compartir.',
        impacto: { respeto: 0, trabajo: 0, problemas: 2, ayuda: 0 }
      },
      {
        estado: 'reconstruccion',
        texto: 'Sentarse a hablar, escuchar a todos y hacer un horario para turnarse.',
        exp: 'Hablar y escuchar es la mejor forma de solucionar problemas. Turnarse es justo para todos.',
        respaldo: 'Hablar y llegar a acuerdos es la mejor solución.',
        impacto: { respeto: 3, trabajo: 2, problemas: 3, ayuda: 3 }
      }
    ]
  },
  {
    id: 'm4', n: 4, titulo: 'El dinero del curso',
    capacidad: 'c4',
    imagen: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80',
    situacion: 'El curso tiene dinero para hacer algo especial. Algunos quieren una fiesta, otros quieren comprar juegos para el salón, y otros quieren plantar un jardín. No se ponen de acuerdo.',
    evidencias: ['e8', 'e9', 'e10'],
    opciones: [
      {
        estado: 'fragmentacion',
        texto: 'Que decida la profesora sola. Es más rápido.',
        exp: 'Que decida uno solo no es justo. Todos deberían poder opinar sobre el dinero del curso.',
        respaldo: 'Decidir sin preguntar a nadie no es democrático.',
        impacto: { respeto: -2, trabajo: -3, problemas: -1, ayuda: -2 }
      },
      {
        estado: 'tension',
        texto: 'Hacer una votación rápida en el recreo y ya.',
        exp: 'Votar está bien, pero hay que pensar bien las opciones antes. Votar rápido puede no ser lo mejor.',
        respaldo: 'Votar sin pensar no siempre da el mejor resultado.',
        impacto: { respeto: 0, trabajo: 1, problemas: 0, ayuda: -1 }
      },
      {
        estado: 'equilibrio',
        texto: 'Que cada grupo explique su idea y luego voten.',
        exp: 'Escuchar las ideas y votar es bueno. Pero podrían buscar una solución que guste a todos.',
        respaldo: 'Escuchar y votar es un buen paso.',
        impacto: { respeto: 1, trabajo: 2, problemas: 1, ayuda: 1 }
      },
      {
        estado: 'reconstruccion',
        texto: 'Hablar en grupo, escuchar todas las ideas y buscar una solución que combine las mejores partes.',
        exp: 'Así todos se sienten escuchados y la solución es mejor porque incluye ideas de todos.',
        respaldo: 'Cuando todos opinan y se escuchan, se toman mejores decisiones.',
        impacto: { respeto: 2, trabajo: 3, problemas: 2, ayuda: 3 }
      }
    ]
  },
  {
    id: 'm5', n: 5, titulo: 'El parque del barrio',
    capacidad: 'c5',
    imagen: 'https://images.unsplash.com/photo-1585338107529-13afc5f02b86?auto=format&fit=crop&w=600&q=80',
    situacion: 'El parque del barrio está lleno de basura. Los vecinos se quejan pero nadie hace nada. Algunos dicen que es trabajo del municipio.',
    evidencias: ['e11', 'e12'],
    opciones: [
      {
        estado: 'fragmentacion',
        texto: 'Esperar a que el municipio lo limpie. No es mi problema.',
        exp: 'Esperar a que otros hagan las cosas no ayuda. El parque es de todos y todos podemos cuidarlo.',
        respaldo: 'Si nadie hace nada, nada cambia.',
        impacto: { respeto: -1, trabajo: -2, problemas: -1, ayuda: -3 }
      },
      {
        estado: 'tension',
        texto: 'Quejarse en redes sociales pero no hacer nada más.',
        exp: 'Quejarse en internet no limpia el parque. Hay que hacer algo de verdad.',
        respaldo: 'Quejarse sin actuar no cambia las cosas.',
        impacto: { respeto: 0, trabajo: 0, problemas: 0, ayuda: -1 }
      },
      {
        estado: 'equilibrio',
        texto: 'Ir un día con la familia a recoger basura.',
        exp: 'Ayudar está muy bien, pero si van pocos el parque se ensuciará otra vez.',
        respaldo: 'Ayudar un día está bien, pero se puede hacer más.',
        impacto: { respeto: 1, trabajo: 1, problemas: 1, ayuda: 2 }
      },
      {
        estado: 'reconstruccion',
        texto: 'Organizar a los vecinos para limpiar juntos y hacer un plan para cuidar el parque siempre.',
        exp: 'Trabajar juntos hace que el cambio dure. Así el parque estará limpio por mucho tiempo.',
        respaldo: 'Cuando todos ayudan, las cosas mejoran de verdad.',
        impacto: { respeto: 2, trabajo: 3, problemas: 2, ayuda: 3 }
      }
    ]
  }
];

const INDICADORES = [
  { id: 'respeto', nombre: 'Respeto' },
  { id: 'trabajo', nombre: 'Trabajo en equipo' },
  { id: 'problemas', nombre: 'Solucionar problemas' },
  { id: 'ayuda', nombre: 'Ayudar a otros' }
];

const ESTADOS = [
  { id: 'reconstruccion', nombre: '¡Excelente!', nivel: 4, signo: '+', color: '#1E7A5E', suave: '#E3F1EA', mood: 'feliz',
    corto: 'Tomaste la mejor decisión. ¡Así se construye un futuro mejor!',
    ariadna: '¡Muy bien! Esa decisión ayuda a todos. Mira cómo mejora el futuro.' },
  { id: 'equilibrio', nombre: 'Bien', nivel: 3, signo: '+', color: '#B8893A', suave: '#F7EED8', mood: 'feliz',
    corto: 'Buena decisión, pero se puede hacer aún mejor.',
    ariadna: '¡Bien hecho! Aunque todavía hay algo que mejorar.' },
  { id: 'tension', nombre: 'Más o menos', nivel: 2, signo: '−', color: '#C0623A', suave: '#F8E6DC', mood: 'preocupada',
    corto: 'Esta decisión no resuelve el problema del todo.',
    ariadna: 'Hmm, esto calma un poco, pero no soluciona todo.' },
  { id: 'fragmentacion', nombre: 'No está bien', nivel: 1, signo: '−', color: '#7A2433', suave: '#F3DEE1', mood: 'preocupada',
    corto: 'Esta decisión hace que las cosas empeoren.',
    ariadna: 'Esta decisión no ayuda. Piensa en cómo afecta a los demás.' }
];

const ESCENARIOS = [
  {
    id: 'reconstruccion',
    nombre: 'Un futuro genial',
    color: '#1E7A5E',
    imagen: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
    descripcion: 'En este futuro, las personas se tratan bien, trabajan juntas y se ayudan. Los parques están limpios, los niños juegan felices y todos pueden opinar. ¡Así queremos que sea el mundo!',
    condiciones: 'Se logra cuando tus decisiones ayudan mucho a los demás.',
    evidencias: ['e3', 'e5', 'e7', 'e10', 'e12']
  },
  {
    id: 'equilibrio',
    nombre: 'Un futuro más o menos',
    color: '#B8893A',
    imagen: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80',
    descripcion: 'En este futuro hay cosas buenas y cosas malas. Algunos se llevan bien, otros no. Hay reglas pero no todos opinan. Se puede mejorar.',
    condiciones: 'Se logra cuando tus decisiones ayudan, pero no siempre.',
    evidencias: ['e4', 'e8', 'e9']
  },
  {
    id: 'fragmentacion',
    nombre: 'Un futuro triste',
    color: '#7A2433',
    imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    descripcion: 'En este futuro, las personas no se llevan bien. Hay muros que las separan, nadie se ayuda y los problemas crecen. Así no queremos que sea el mundo.',
    condiciones: 'Se logra cuando las decisiones no ayudan a los demás.',
    evidencias: ['e1', 'e2', 'e6', 'e11']
  }
];

const SECCIONES = [
  { id: 'centro', nombre: 'Mi centro', etapa: 1 },
  { id: 'tutorial', nombre: 'Cómo jugar', etapa: 1 },
  { id: 'evidencias', nombre: 'El archivo', etapa: 4 },
  { id: 'misiones', nombre: 'Misiones', etapa: 5 },
  { id: 'linea', nombre: 'Línea del tiempo', etapa: 4 },
  { id: 'informe', nombre: 'Mi informe', etapa: 9 },
  { id: 'resultados', nombre: 'Mi futuro', etapa: 6 }
];

const INTRO = [
  { t: '¡Llegó un mensaje del futuro!', voz: '¡Hola! Soy NOVA. Recibimos un mensaje del año 2040.', p: 'Alguien nos envió documentos secretos sobre cómo será el mundo en el futuro. Pero hay un problema: el futuro depende de las decisiones que tomemos HOY.' },
  { t: 'Tres futuros posibles', voz: 'Hay tres futuros diferentes. Tú eliges cuál llega.', p: 'Futuro genial: todos se llevan bien. Futuro más o menos: hay cosas buenas y malas. Futuro triste: nadie se ayuda. ¿Cuál quieres que sea el tuyo?' },
  { t: 'Tu misión', voz: '¡Ahora te toca a ti!', p: 'Vas a ser un investigador del futuro. Lee historias, mira imágenes y toma decisiones. Cada decisión que tomes cambiará el futuro. ¡Empecemos!' }
];

const TUTORIAL = [
  { t: '¿Qué es ARCHIVO 2040?', voz: 'Te explico de qué se trata.', p: 'Es un juego donde tú decides cómo será el futuro. Lee historias reales de niños como tú y elige qué harías en su lugar. ¡Tus decisiones importan!', q: 'Piensa: ¿qué decisiones tomas tú cada día que afectan a los demás?' },
  { t: 'Cómo entrar', voz: 'Primero entra con tu equipo.', p: 'Escribe el código que te dio tu profesor y tu nombre. Si no tienes código, crea uno nuevo con el botón. ¡Comparte el código con tu equipo!', q: 'Todos en tu equipo deben usar el mismo código.' },
  { t: 'Los tres futuros', voz: 'Recuerda: hay tres futuros.', p: 'Genial (todos felices), Más o menos (algunos problemas) y Triste (nadie se ayuda). Tus decisiones eligen cuál llega.', q: '¿Qué tipo de futuro quieres construir?' },
  { t: 'Tu centro', voz: 'Este es tu lugar.', p: 'Aquí ves tu progreso, tus misiones y lo que has hecho. En el menú de la izquierda puedes ir a cada parte. ¡Explora todo!', q: 'Cada persona avanza a su ritmo.' },
  { t: 'El archivo', voz: 'Aquí hay pistas del futuro.', p: 'Verás documentos, fotos y mensajes del año 2040. Cada uno te ayuda a entender qué pasó. ¡Son como pistas de detective!', q: 'Regla: no te quedes con la primera idea. Lee todo con atención.' },
  { t: 'Las misiones', voz: 'Aquí tomas decisiones.', p: 'Cada misión es una historia. Lees qué pasa, eliges qué harías tú y ves qué pasa después. ¡Hay 5 misiones!', q: 'Piensa bien antes de elegir. No hay respuestas "malas", pero algunas ayudan más que otras.' },
  { t: 'Tu informe', voz: 'Al final cuentas lo que aprendiste.', p: 'Escribes qué problemas viste, qué decisiones tomaste y qué harías para mejorar el mundo. ¡Se puede imprimir!', q: 'Pregunta final: ¿qué estás construyendo tú hoy?' },
  { t: '¡Practiquemos!', voz: '', practica: true }
];

const PRACTICAS = [
  { titulo: 'El patio del recreo', situacion: 'Dos grupos de niños quieren usar el patio al mismo tiempo. Ambos dicen que es suyo.',
    opciones: [
      { estado: 'tension', texto: 'Dividir el patio en dos mitades.',
        exp: 'Así no pelean, pero tampoco juegan juntos.',
        respaldo: 'Separar no es lo mismo que compartir.' },
      { estado: 'reconstruccion', texto: 'Hablar y hacer turnos entre todos.',
        exp: 'Hablar y turnarse es justo para todos.',
        respaldo: 'Cuando todos opinan, se toman mejores decisiones.' },
      { estado: 'fragmentacion', texto: 'Que use el patio el grupo más grande.',
        exp: 'Decidir por el número de personas no es justo.',
        respaldo: 'La mayoría no siempre tiene la razón.' },
      { estado: 'equilibrio', texto: 'Que el profesor decida los turnos.',
        exp: 'El profesor ayuda, pero los niños no aprenden a decidir solos.',
        respaldo: 'Que otros decidan por nosotros no nos enseña.' }
    ] },
  { titulo: 'Las reglas del salón', situacion: 'La profesora pone reglas nuevas sin preguntar a nadie. Muchos niños están molestos.',
    opciones: [
      { estado: 'fragmentacion', texto: 'Obedecer sin quejarse.',
        exp: 'Obedecer por miedo no está bien.',
        respaldo: 'Las reglas deben ser justas para todos.' },
      { estado: 'equilibrio', texto: 'Elegir a alguien para hablar con la profesora.',
        exp: 'Es un buen paso, pero todos deberían opinar.',
        respaldo: 'Hablar ayuda, pero es mejor si todos participan.' },
      { estado: 'reconstruccion', texto: 'Hacer una asamblea para decidir las reglas entre todos.',
        exp: 'Cuando todos ayudan a hacer las reglas, las cumplen mejor.',
        respaldo: 'Las reglas hechas entre todos funcionan mejor.' },
      { estado: 'tension', texto: 'Quejarse en secreto.',
        exp: 'Quejarse no cambia las cosas.',
        respaldo: 'Hay que hablar de forma respetuosa.' }
    ] }
];

const EVIDENCIAS = [
  {
    id: 'e1',
    categoria: 'Documento',
    titulo: 'Regla nueva: prohibido hablar otros idiomas',
    fecha: 'Año 2040',
    contenido: 'Una escuela prohibió hablar otros idiomas en el recreo. Los niños que hablan diferente fueron castigados.',
    contexto: 'Esta regla se hizo sin preguntar a los niños. Muchos se sintieron tristes.',
    relacion: 'Prohibir lo que nos hace diferentes no está bien. Todos merecemos respeto.',
    imagen: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c1'
  },
  {
    id: 'e2',
    categoria: 'Foto',
    titulo: 'Niños separados por barreras',
    fecha: 'Año 2040',
    contenido: 'En esta foto se ven niños separados por barreras en el patio. Unos miran desde un lado, otros desde el otro. No juegan juntos.',
    contexto: 'La escuela puso barreras para "evitar problemas". Pero así los niños no se conocen.',
    relacion: 'Separar a las personas no soluciona los problemas. Hay que aprender a convivir.',
    imagen: 'https://images.unsplash.com/photo-1517329581696-6a0c16ab7c00?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c1'
  },
  {
    id: 'e3',
    categoria: 'Testimonio',
    titulo: 'Lo que dijo un niño nuevo',
    fecha: 'Año 2040',
    contenido: '"Vine de otro país y nadie quiere jugar conmigo. Me burlan por mi acento. Quiero cambiar de escuela."',
    contexto: 'Un niño de 10 años contó cómo se siente en su nueva escuela.',
    relacion: 'Burlarse de alguien por ser diferente hace mucho daño. Todos merecemos amigos.',
    imagen: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c1'
  },
  {
    id: 'e4',
    categoria: 'Noticia',
    titulo: 'Reglas muy estrictas en una escuela',
    fecha: 'Año 2040',
    contenido: 'Una escuela puso reglas muy duras: no hablar, no moverse, no salir. Los niños no fueron consultados. Muchos están molestos.',
    contexto: 'La noticia cuenta cómo los niños se sienten cuando no pueden opinar.',
    relacion: 'Las reglas deben ser justas y todos deben poder opinar sobre ellas.',
    imagen: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c2'
  },
  {
    id: 'e5',
    categoria: 'Documento',
    titulo: 'Lista de reglas del salón',
    fecha: 'Año 2040',
    contenido: 'Regla 1: No hablar en clase. Regla 2: No salir al recreo sin permiso. Regla 3: No reunirse en grupos. Regla 4: Castigo de 3 días si no cumples.',
    contexto: 'Estas reglas las hizo la directora sola, sin preguntar a nadie.',
    relacion: 'Las reglas hechas por uno solo no son justas. Todos deben participar.',
    imagen: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c2'
  },
  {
    id: 'e6',
    categoria: 'Foto',
    titulo: 'Pelea en el recreo',
    fecha: 'Año 2040',
    contenido: 'Dos grupos de niños se empujan frente a la cancha. Están enojados y se gritan. Nadie quiere ceder.',
    contexto: 'La pelea lleva semanas. Los profesores no saben qué hacer.',
    relacion: 'Pelear no soluciona nada. Hay que hablar y buscar soluciones.',
    imagen: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c3'
  },
  {
    id: 'e7',
    categoria: 'Testimonio',
    titulo: 'Lo que dijo un niño sobre la pelea',
    fecha: 'Año 2040',
    contenido: '"Siempre usamos la cancha los martes. Ahora dicen que cambió el horario, pero nadie nos avisó. Solo queremos que nos escuchen."',
    contexto: 'Un niño de 10 años contó su versión de la pelea.',
    relacion: 'Escuchar a todos es el primer paso para solucionar problemas.',
    imagen: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c3'
  },
  {
    id: 'e8',
    categoria: 'Noticia',
    titulo: 'El curso tiene que decidir algo importante',
    fecha: 'Año 2040',
    contenido: 'El curso tiene dinero para hacer algo especial. Algunos quieren fiesta, otros juegos, otros un jardín. No se ponen de acuerdo.',
    contexto: 'La noticia cuenta cómo los niños están debatiendo qué hacer.',
    relacion: 'Cuando todos opinan y se escuchan, se toman mejores decisiones.',
    imagen: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c4'
  },
  {
    id: 'e9',
    categoria: 'Dato',
    titulo: 'Votación del curso',
    fecha: 'Año 2040',
    contenido: 'Resultados de la votación: Fiesta 40%, Juegos 35%, Jardín 25%. La fiesta ganó por poco.',
    contexto: 'Todos votaron, pero no todos están contentos con el resultado.',
    relacion: 'Votar está bien, pero también hay que escuchar a los que perdieron.',
    imagen: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c4'
  },
  {
    id: 'e10',
    categoria: 'Testimonio',
    titulo: 'Lo que dijo una niña sobre la votación',
    fecha: 'Año 2040',
    contenido: '"Yo quería el jardín porque es bueno para todos. Pero ganó la fiesta. Está bien, aunque me hubiera gustado que habláramos más."',
    contexto: 'Una niña contó cómo se sintió después de la votación.',
    relacion: 'Escuchar todas las ideas hace que las decisiones sean mejores.',
    imagen: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c4'
  },
  {
    id: 'e11',
    categoria: 'Foto',
    titulo: 'El parque lleno de basura',
    fecha: 'Año 2040',
    contenido: 'El parque del barrio está lleno de basura. Hay papeles, botellas y cosas rotas. Nadie lo cuida.',
    contexto: 'Los vecinos se quejan pero nadie hace nada. El municipio dice que no es su trabajo.',
    relacion: 'Cuidar los espacios de todos es responsabilidad de todos.',
    imagen: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c5'
  },
  {
    id: 'e12',
    categoria: 'Testimonio',
    titulo: 'Lo que dijo un vecino',
    fecha: 'Año 2040',
    contenido: '"He dicho muchas veces que limpien el parque, pero nadie hace caso. Algunos vecinos dicen que no es su problema. Pero el parque es de todos."',
    contexto: 'Un vecino contó cómo se siente con el parque abandonado.',
    relacion: 'Cuando todos ayudan, las cosas mejoran. No esperar a que otros lo hagan.',
    imagen: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    capacidad: 'c5'
  }
];
const LINEA_TIEMPO = [
  {
    año: 2030,
    evento: 'Empiezan los problemas',
    descripcion: 'Los niños en las escuelas empiezan a llevarse mal. Hay más peleas y menos amigos.',
    evidencias: ['e1', 'e4'],
  },
  {
    año: 2033,
    evento: 'Reglas muy duras',
    descripcion: 'Algunas escuelas ponen reglas muy estrictas sin preguntar a los niños. Todos están molestos.',
    evidencias: ['e1', 'e5'],
  },
  {
    año: 2035,
    evento: 'Los niños piden opinar',
    descripcion: 'Los niños de muchas escuelas piden poder opinar sobre las reglas y las decisiones.',
    evidencias: ['e4', 'e8'],
  },
  {
    año: 2037,
    evento: 'Algunos lo intentan',
    descripcion: 'Algunas escuelas empiezan a dejar que los niños opinen y decidan juntos. Funciona bien.',
    evidencias: ['e8', 'e9'],
  },
  {
    año: 2039,
    evento: 'Las cosas empeoran',
    descripcion: 'En muchos lugares, los niños no se llevan bien. Hay peleas y nadie se ayuda.',
    evidencias: ['e2', 'e6', 'e11'],
  },
  {
    año: 2040,
    evento: 'Tú decides el futuro',
    descripcion: 'El futuro depende de las decisiones que tomemos hoy. ¿Cuál futuro quieres?',
    evidencias: ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10', 'e11', 'e12'],
  }
];