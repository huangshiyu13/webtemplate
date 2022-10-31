$(window).load(function(){
	$('#loading').css('transform','scale(1.4)');
	$('#loading').fadeOut('slow', function(){
		$('section').removeClass('in');
	});
});

	
$(document).ready(function(){
	//MENU
    $('.btnMenu').click(function(){
        var clase = $(this).attr('class');
		if(clase == 'btnMenu'){
			$(this).addClass('open');
			$('nav').fadeIn('fast');
			var elem = $('nav .botonera')
			centrarV(elem);	
		}else{
			$(this).removeClass('open');
			$('nav').fadeOut('fast');	
		}
    });
	//BLUR
	$('.botonera li').hover(
         function () {
			$('.botonera li').addClass('blur');
            $(this).removeClass('blur');
         }, 
         function () {
			$('.botonera li').removeClass('blur');
         }
     );
	//INICIO
	var ex = $('.centered').length;
	for(var i=0; i < ex; i++){
		var elem = $('.centered:eq('+i+')');
		centrarV(elem);		
	}
	function resize(){
	  for(var i=0; i < ex; i++){
		var elem = $('.centered:eq('+i+')');
		centrarV(elem);		
	  }	
	}
	var Resize;
	$(window).resize(function() {
		clearTimeout(Resize);	
		Resize = setTimeout(resize, 200);	
	});
	
	//ANCLAS
	$('a.arrowDown').click(function(e){
		e.preventDefault();
		enlace  = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(enlace).offset().top
		}, 300, 'easeOutCirc');
	});
	//ANCLAS PROYECTOS
	$('#casos .headCasos .arrowIr').click(function(e){
		e.preventDefault();
		enlace  = '.imgPrincipal';
		$('html, body').animate({
			scrollTop: $(enlace).offset().top
		}, 1200, 'easeOutCirc');
	});
	$('#inicio, #slide1, #slide2').click(function(e){
		enlace  = $(this).attr('data-rel');
		$('html, body').animate({
			scrollTop: $(enlace).offset().top
		}, 300, 'easeOutCirc');
	});

	if($(window).width() <= 480){
		$('.legal').html('<strong>Estudio NK</strong>Diseñando con pasión desde el 2006');
	}
});
//Centrar vertical
function centrarV(e){
	var altoCont = $(window).height();
	var altoE = e.height();
	var margen = (altoCont - altoE) / 2;
	e.css('margin-top', margen+'px')
}