document.addEventListener('DOMContentLoaded', () => {
    // 8 candidatos y sus scores
    const candidatos = {
      jara:       { nombre: 'Jeannette Jara', score: 0 },
      winter:     { nombre: 'Gonzalo Winter', score: 0 },
      toha:       { nombre: 'Carolina Tohá', score: 0 },
      mulet:      { nombre: 'Jaime Mulet', score: 0},
      kaiser:     { nombre: 'Johannes Kaiser', score: 0 },
      kast:       { nombre: 'José Antonio Kast', score: 0 },
      matthei:    { nombre: 'Evelyn Matthei', score: 0 },
      parisi:     { nombre: 'Franco Parisi', score: 0 },

    };
  
    // Array de 10 preguntas (rellena texto y opciones)
    const preguntas = [
      {
        texto: '1. ¿Qué modelo económico considera más adecuado para el país?',
        opciones: [
          { texto: 'Estado controlador del sistema económico', afecta: ['jara','mulet'] },
          { texto: 'Economía mixta con iniciativa privada y regulación estatal del mercado', afecta: ['winter','toha'] },
          { texto: 'Libre mercado con intervención estatal mínima o nula', afecta: ['matthei','kast','kaiser','parisi']}
          // …
        ]
      },
      {
        texto: '2. ¿Cuál debería ser la prioridad en materia de seguridad?',
        opciones: [
            {texto: 'Prevención social y programas comunitarios', afecta: ['jara','winter']},
            {texto: 'Equilibrio entre prevención y aplicación de leyes', afecta: ['toha','mulet']},
            {texto: 'Refuerzo de la seguridad mediante normas más estrictas y mayor presencia policial', afecta: ['matthei','kast','kaiser','parisi']}
        ]
      },
      {
        texto: '3. ¿Qué rol debería tener el Estado respecto a la protección de los derechos de las minorías y diversidades? <br><br> (pueblos originarios, diversidad sexual y de género, personas con discapacidad, comunidades religiosas, inmigrantes)',
        opciones: [
            {texto: 'Promover activamente políticas públicas para garantizar la inclusión y ampliar derechos, con participación del Estado a través de leyes', afecta: ['jara','winter','toha','mulet']},
            {texto: 'Evitar enfoques diferenciados por grupos; todos los ciudadanos deben regirse por los mismos derechos y deberes sin distinciones específicas.', afecta: ['matthei','kast','kaiser','parisi']},
        ]
      },
      {
        texto: '4. ¿Qué nivel de importancia debería tener el medio ambiente en el desarrollo económico y en las políticas públicas del país?',
        opciones: [
            {texto: 'El medio ambiente debe ser un eje central del desarrollo, incluso si eso implica revisar o replantear proyectos económicos para asegurar la protección de ecosistemas y enfrentar el cambio climático.', afecta: ['jara','winter','mulet']},
            {texto: 'Se debe buscar un equilibrio entre el crecimiento económico y la protección ambiental, evaluando caso a caso el impacto de las decisiones.', afecta: ['toha','parisi']},
            {texto: 'El crecimiento económico debe ser el motor principal del país, ya que el progreso genera empleo, inversión y bienestar, elementos que permiten abordar desafíos como el medioambiental.', afecta: ['matthei','kast','kaiser']}
        ]
      },
      {
        texto: '5. ¿Cuál debería ser la política migratoria del país?',
        opciones: [
            {texto: 'Apertura y acogida con integración social', afecta: ['jara','winter']},
            {texto: 'Control y regulación equilibrada', afecta: ['toha','mulet','matthei']},
            {texto: 'Restricción y cierre de fronteras', afecta: ['kast','kaiser','parisi']}
        ]
      },
      {
        texto: '6. ¿Cuál debería ser la política respecto a la selección de estudiantes en el sistema escolar chileno?',
        opciones: [
            {texto: 'Prohibir todo tipo de selección, garantizando que el acceso a las escuelas sea completamente igualitario y regulado por un sistema centralizado como el SAE (Sistema de Admisión Escolar).', afecta: ['jara','winter','mulet']},
            {texto: 'Permitir ciertos mecanismos de selección en casos justificados, como proyectos educativos específicos o rendimiento académico, con supervisión estatal.', afecta: ['toha','matthei','parisi']},
            {texto: 'Otorgar plena libertad a los establecimientos para definir sus propios criterios de admisión, promoviendo la diversidad de proyectos educativos.', afecta: ['kast','kaiser']}
        ]
      },
      {
        texto: '7. ¿Cuál es su postura respecto a la legislación sobre el aborto en Chile?',
        opciones: [
            {texto: 'Despenalización total, sin restricciones, hasta un plazo que se pueda extender hasta las 12-24 semanas', afecta: ['jara','winter','toha']},
            {texto: 'Mantener la ley actual (tres causales)', afecta: ['mulet','matthei','parisi']},
            {texto: 'Prohibición total del aborto', afecta: ['kast','kaiser']}
        ]
      },
      {
        texto: '8. ¿Cómo evalúa el golpe de Estado ocurrido en Chile en 1973?',
        opciones: [
            {texto: 'Fue un quiebre democrático injustificable y condenable, que dio paso a graves violaciones a los derechos humanos y rompió el orden institucional legítimo.', afecta: ['jara','winter','toha','mulet']},
            {texto: 'Aunque condeno las violaciones a los derechos humanos que ocurrieron posteriormente, considero que el golpe permitió recuperar la estabilidad económica y evitar un colapso institucional mayor.', afecta: ['matthei','parisi']},
            {texto: 'Dadas las condiciones políticas y sociales del momento, el golpe fue una medida inevitable y justificable para restablecer el orden en el país.', afecta: ['kast','kaiser']}
        ]
      },
      {
        texto: '9. ¿Qué modelo de sistema de pensiones considera más adecuado para Chile?',
        opciones: [
            {texto: 'Un sistema público de reparto solidario, financiado por el Estado y empleadores, que garantice pensiones dignas sin fines de lucro.', afecta: ['jara']},
            {texto: 'Un modelo mixto, donde exista ahorro individual, pero con regulación estatal y un componente solidario que mejore las pensiones más bajas.', afecta: ['winter','toha','mulet']},
            {texto: 'Un sistema basado en la capitalización individual, donde cada persona administra sus fondos de forma autónoma y el Estado cumple un rol subsidiario mínimo o nulo.', afecta: ['matthei','kast','kaiser','parisi']}
        ]
      },
      {
        texto: '10. ¿Qué orientación debería tener una futura reforma tributaria en Chile?',
        opciones: [
            {texto: 'Elevar la carga tributaria a los sectores de mayores ingresos y grandes empresas, para aumentar la recaudación y financiar políticas sociales.', afecta: ['jara','winter','mulet']},
            {texto: 'Bajar ciertos impuestos de forma gradual, priorizando la responsabilidad fiscal y el equilibrio presupuestario del Estado.', afecta: ['toha']},
            {texto: 'Reducir impuestos y simplificar el sistema tributario, con el objetivo de incentivar la inversión privada, el empleo y el crecimiento económico.', afecta: ['matthei','kast','kaiser','parisi']}
        ]
      },
      // … repetir hasta 10 preguntas …
    ];
    
    let indice = 0;
    const contenedor = document.getElementById('pregunta-container');
    const btnSiguiente = document.getElementById('btn-siguiente');
    const divCuestionario = document.getElementById('cuestionario');
    const divResultado = document.getElementById('resultado');
    const listaResultados = document.getElementById('lista-resultados');
    const btnReiniciar = document.getElementById('btn-reiniciar');
  
    function mostrarPregunta() {
      btnSiguiente.disabled = true;
      const p = preguntas[indice];
      contenedor.innerHTML = `<h3>${p.texto}</h3>`;
      p.opciones.forEach((opt, i) => {
        const el = document.createElement('div');
        el.className = 'opcion';
        el.textContent = opt.texto;
        el.addEventListener('click', () => seleccionar(el, opt));
        contenedor.appendChild(el);
      });
    }
  
    function seleccionar(elemento, opcion) {
      // desmarcar resto
      contenedor.querySelectorAll('.opcion')
        .forEach(el => el.classList.remove('seleccionada'));
      // marcar este
      elemento.classList.add('seleccionada');
      btnSiguiente.disabled = false;
  
      // guardar elección temporalmente
      elemento.dataset.afecta = JSON.stringify(opcion.afecta);
    }
  
    btnSiguiente.addEventListener('click', () => {
      // al hacer click, sumar a scores
      const sel = contenedor.querySelector('.opcion.seleccionada');
      const afecta = JSON.parse(sel.dataset.afecta);
      afecta.forEach(key => candidatos[key].score += 10);
  
      indice++;
      if (indice < preguntas.length) {
        mostrarPregunta();
      } else {
        mostrarResultado();
      }
    });
  
    function mostrarResultado() {
      divCuestionario.classList.add('oculto');
      // Ordenar candidatos por score descending
      const orden = Object.values(candidatos)
        .sort((a,b) => b.score - a.score);
      listaResultados.innerHTML = '';
      orden.forEach(c => {
        const li = document.createElement('li');
        li.textContent = `${c.nombre}: ${c.score}%`;
        listaResultados.appendChild(li);
      });
      divResultado.classList.remove('oculto');
    }
  
    btnReiniciar.addEventListener('click', () => {
      // reset
      Object.values(candidatos).forEach(c => c.score = 0);
      indice = 0;
      divResultado.classList.add('oculto');
      divCuestionario.classList.remove('oculto');
      mostrarPregunta();
    });
  
    // Inicio
    mostrarPregunta();
  });
  