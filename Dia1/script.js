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
ouibounce(document.getElementById('modal-card'), {
  aggressive: true,			// borra la cookie viewedOuibounceModal
  timer: 5						// espera (evita falsos positivos)
});

// Opcional (activa a los 5 segundos)
var modal = ouibounce(...);
setTimeout(function() { modal.fire() }, 5000);	// muestra a los 5seg

