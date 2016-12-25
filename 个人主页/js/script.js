(function($) {
  "use strict";

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(200).fadeOut("slow"); 
});

$(document).ready(function(){
	
	
//------------------------------------- Site slider ------------------------------------------------//

$("#testimonial-carousel").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: true,
    singleItem: true   
});
  
  
$("#block-slider").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: false,
    singleItem: true,
    navigation:true,
    navigationText: ["<span class='icon-left-open-big'></span>","<span class='icon-right-open-big'></span>"]  
});




//------------------------------------- End site slider------------------------------------------------//





//------------------------------------- Skills percentage setup------------------------------------------------//



$(".percentage").each(function(){
          var  width= $(this).text();
          $(this).css("width", width).empty();
});
		



//------------------------------------- End skills percentage setup------------------------------------------------//




//------------------------------------- Portfolio setup------------------------------------------------//



	
$('.box').magnificPopup({
					  type: 'image',
					fixedContentPos: false,
					fixedBgPos: false,
					mainClass: 'mfp-no-margins mfp-with-zoom',
					image: {
						verticalFit: true
					},
					zoom: {
						enabled: true,
						duration: 300
					}
				});


$('.popup-youtube, .popup-vimeo').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,

	fixedContentPos: false
});
				



/*Filtred portfolio*/
$('.filter li a').on("click", function(e){
	
		e.preventDefault();
		$(this).addClass('active');
		$(this).parent().siblings().find('a').removeClass('active');
		
		
		
        var filters = $(this).attr('data-filter');
        $(this).closest('.works').find('.item').removeClass('disable');

        if (filters !== 'all') {
        
        
        
        
        var selected =  $(this).closest('.works').find('.item');
        
        for(var i = 0; i < selected.length; i++){
        
        if (!selected.eq(i).hasClass(filters)) {
                    selected.eq(i).addClass('disable');
				}
        
        }	
            
   }
   

});



//------------------------------------- End portfolio setup------------------------------------------------//




//------------------------------------- Search input------------------------------------------------//


	
	$('.search-form i').on("click", function(){
		$(this).closest('.search-form').find('input[type="text"]').focus();
		if($(this).closest('.search-form').find('input[type="text"]').val()){
			$(this).closest('.search-form').find('input[type="submit"]').trigger('click');
		}
	});

//------------------------------------- End search input------------------------------------------------//






//---------------------------------- Form validation-----------------------------------------//




$('.submit').on("click", function(){

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");
	
	var error = false; 
	var name = $('input#name').val(); 
	if(name == "" || name == " ") { 
		error = true; 
		$('input#name').addClass("errorForm");
	}
	
	
		var msg = $('textarea#message').val(); 
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");
			
		}
	
	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
	var email = $('input#email').val(); 
	if (email == "" || email == " ") { 
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) { 
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contact-form').serialize(); 
	

	$.ajax({
		type: "POST",
		url: $('.contact-form').attr('action'),
		data: data_string,
		
		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}
			
	});

	return false; 
});



//---------------------------------- End form validation-----------------------------------------//






//---------------------------------- Toogle switcher-----------------------------------------//


$('.toggle').click(function(e) {
        e.preventDefault();
        var styler = $('.styler');
        console.log(styler.css('left'));
        if (styler.css('left') === '-278px') {
            $('.styler').animate({
                left: '0px'
            });

        } else {
            $('.styler').animate({
                left: '-278px'
            });

        }
    });

//---------------------------------- End toogle switcher-----------------------------------------//


});


})(jQuery);
