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
    title: 'Título',
    text: 'Mensaje de texto',
    imageUrl: 'imagenes/voley.jpg',
    imageWidth: 440,
    imageHeight: 250,
    padding: 20,
    animation: false,
  });
}


