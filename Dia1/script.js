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



