$(document).ready(function() {
  $('.slider').slick();
});

/* Formato del slider */
$(document).ready(function() {
  $('.ba-slider').beforeAfter();
});

// Configuramos la librería jQuery Accordion
$('.accordion').accordion({
  transitionSpeed: 400,		// velocidad del acordeón
  transitionEasing: 'ease'	// ritmo del acordeón (linear, ease-in…)
});

// Configuramos la librería Ouibounce
$(document).ready(function() {
  ouibounce(document.getElementById('modal-card'), {
    aggressive: true,			// borra la cookie viewedOuibounceModal
    timer: 5						// espera (evita falsos positivos)
  });
});


function mensaje() {
  swal({
    title: 'Balones Mikasa',
    text: 'No te quedes sin comprar estos magníficos balones de voley',
    imageUrl: 'imagenes/voley.jpg',
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Compra Ya!',
    imageWidth: 440,
    imageHeight: 250,
    padding: 20,
    animation: false,
  });
}

// Opción 2: Personalizar mensaje (indicar clase)
$(document).ready(function() {
  $('.cookie-message').cookieBar({
    closeButton: '.close'
  });
});

/* Javascript */
$(document).ready(function() {
	var input = document.getElementById('datos');
	new Awesomplete(input, {
		list: ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
	});
});

$(document).ready(function() {
$('#input-tags').selectize({
	    plugins: ['remove_button', 
              'drag_drop',
              'optgroup_columns'],
    delimiter: ',',
    persist: false,
    create: function(input) {
      return { 
        value: input,
        text: input 
      }
    }
});
// return ['tag1', 'tag2', …]
function viewTags() {
  tags = document.getElementById('input-tags');
  console.log(tags.value.split(','));
}
	
});

$(document).ready(function() {
	/* Javascript */
	$('.editor').trumbowyg({
	    svgPath: 'imagenes/icons.svg', // path of icons.svg
	    // Habitualmente, se indica la ruta del SVG en este parámetro, pero
	    // en codepen, simplemente pegaremos el contenido del SVG en la parte
	    // del código HTML
	});

	$('.editor').trumbowyg('html'); // Obtienes el HTML generado
	
	$('.editor').trumbowyg({
  lang: 'es', // Idioma (es.min.js incluido)
  btns: [
          ['bold', 'italic', 'underline', 'strikethrough'],
          ['superscript', 'subscript'],
          ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
          ['unorderedList', 'orderedList'],
          ['link', 'insertImage'],
          ['horizontalRule', 'removeformat'],
          ['viewHTML'],
          ['fullscreen']
        ],
});
});

$(document).ready(function() {
	// Nuevo waypoint
	var waypoint = new Waypoint({
	  // Elemento objetivo
	  element: document.getElementById('tres'),
	  // Función disparada
	  handler: function(direction) {
	    alert('¡Has llegado!');
	  }
	});
	var waypoint = new Waypoint({
	  element: document.getElementById('tres'),
	  handler: function(direction) {
	    console.log('¡Has pasado por aquí!');
	    if (direction == 'down') {
	      console.log('¡Hacia abajo!');
	      this.destroy(); 			        // Sólo lo detectará una vez
	    }
	  }
	});
});
$(document).ready(function() {
	var data = {
	  labels: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
	  series: [{ data: [2, 4, 6, 8, 10, 12] }, // ct-series-a
		   { data: [1, 2, 3, 4, 5, 6] },   // ct-series-b
		   { data: [12, 10, 8, 6, 4, 2] }  // ct-series-c
		  ]
	};

	var options = {}

	new Chartist.Line('.chart', data, options);
});

$(document).ready(function() {
	var sample = 'CD Tenerife->UD Las Palmas: Siempre gana a la';
	var sample1 = 'Título: Realidad';
	var sample2 = 'B-->C: Línea a rayas';
	var sample3 = 'C->>D: Línea con flecha hueca';
	var sample4 = 'D-->>E: Línea a rayas con flecha hueca';
	var sample5 = 'A->C: Uno \n B->C: Dos';

	var diagram = Diagram.parse(sample);

	diagram.drawSVG('diagram', {
		theme: 'hand'	// o 'simple'
	});
});
$(document).ready(function() {
	var tabla = document.getElementById('tablesort');
	new Tablesort(tabla);
});
$(document).ready(function() {
	// Configuramos la librería jQuery Flip
	$('#card').flip({
	  axis: 'y',				// 'x' para giro en eje X
	  trigger: 'click',		// 'hover': giro sobre tarjeta
	  speed: 500,				// Velocidad del giro
	});
});
$(document).ready(function() {
	var PSV = PhotoSphereViewer({
	  panorama:  'imagenes/exterior.jpg',
	  container: 'photosphere',
	  loading_img: 'https://media.giphy.com/media/TtZqlvHid7BjW/giphy.gif',
	});
});
