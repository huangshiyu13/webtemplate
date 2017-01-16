/**
 * global vars init
 */
 var $headerHeight,
 $isMobile,
 $isDesktop,
 $mapType,
 $mapStyle,
 $wall,
 $mySwiperCentered,
 $tabsSwiper,
 $mySwiperVertical,
 $mySwiperHorizontal,
 $mySwiperParent,
 $mySwiperChild;




/**
 * Windows event
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
 $(window).on("resize",function(e){

 	/* Ipad Modernizr Test */
 	Modernizr.addTest('ipad', function () {
 		return !!navigator.userAgent.match(/iPad/i);
 	});

 	/* Main Menu */
 	if (!Modernizr.ipad) {  
 		initializeMainMenu(); 
 	}
 	preHeaderManagment();
 	$('.sub-menu').hide();


 	/* mobile detection */
 	if(Modernizr.mq('only all and (max-width: 767px)') ) {
 		$isMobile = true;
 	}else{
 		$isMobile = false;
 	}
 	/* tablette and mobile detection */
 	if(Modernizr.mq('only all and (max-width: 1025px)') ) {
 		$isDesktop = false;
 	}else{
 		$isDesktop = true;
 	}

 });



/**
 * Load and resize 
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
 $(window).on("load resize",function(e){


	/*
	|--------------------------------------------------------------------------
	| PARALLAX
	|--------------------------------------------------------------------------
	*/		 

	if ($isDesktop === true && $('.parallax').length ){
		$(window).stellar({
			horizontalScrolling: false,
			responsive:true,
			scrollProperty: 'scroll',
			positionProperty: 'transform',
			parallaxBackgrounds:true,
			parallaxElements:false
		});

	}else{
		if ($('.parallax').length){
			$.stellar('destroy');
		}
	}


	/*
	|--------------------------------------------------------------------------
	| ToTop declaration 
	|--------------------------------------------------------------------------
	*/

	toTop($isMobile);

	/*
	|--------------------------------------------------------------------------
	| Rolls over vertical centering 
	|--------------------------------------------------------------------------
	*/
	if($('.img-hover').length){
		$(".img-hover.neko-hover-2 .mask-over").each(function(index, val) {
			var captionHeight = $(this).outerHeight(true),
			captionPadding = (captionHeight - $(this).children().outerHeight(true))/2;
			$(this).css({'padding-top':captionPadding});

		});
	}
	

	/*
    |--------------------------------------------------------------------------
    | PARALLAXED FOOTER
    |--------------------------------------------------------------------------
    */ 

    if( $('.parallaxed-footer').length && Modernizr.mq('only all and (min-width: 768px)')){
    	var OffsetBottom = $('#main-footer').outerHeight(true);
    	$('.parallaxed-footer main').css('margin-bottom', OffsetBottom);
    }else{
    	$('.parallaxed-footer main').css('margin-bottom', 0);
    }


});




/**
 * document ready
 */
 (function($) {
 	"use strict";


 	/* var asign */
 	$headerHeight = ($('.menu-header.navbar-fixed-top').length)?$('.menu-header.navbar-fixed-top').outerHeight():0;


 	/* mobile detection initial test*/
 	if(Modernizr.mq('only all and (max-width: 767px)') ) {
 		$isMobile = true;
 	}else{
 		$isMobile = false;
 	}
 	/* tablette and mobile detection initial test*/
 	if(Modernizr.mq('only all and (max-width: 1025px)') ) {
 		$isDesktop = false;
 	}else{
 		$isDesktop = true;
 	}


	/*
	|--------------------------------------------------------------------------
	| TIPS
	|--------------------------------------------------------------------------
	*/
	if($('.tips').length && !Modernizr.touch)
		$('.tips').tooltip();
	

	/*
	|--------------------------------------------------------------------------
	| OWL CAROUSEL
	|--------------------------------------------------------------------------
	*/

	if($('.neko-data-owl').length){

		$( '.neko-data-owl' ).each(function( index ) {
			var $this =$(this);
			$this.owlCarousel(
			{
				items:$this.data('neko_items'),
				navigation:$this.data('neko_navigation'),
				singleItem:$this.data('neko_singleitem'),
				autoPlay:$this.data('neko_autoplay'),
				itemsScaleUp:$this.data('neko_itemsscaleup'),
				navigationText:['<i class="icon-owl-navigation-left"></i>','<i class="icon-owl-navigation-right"></i>'], 
				pagination:$this.data('neko_pagination'),
				paginationNumbers:$this.data('neko_paginationnumbers'),
				autoHeight:$this.data('neko_autoheight'),
				mouseDrag:$this.data('neko_mousedrag'),
				transitionStyle:$this.data('neko_transitionstyle'),
				responsive:true,
				lazyLoad : true,
				addClassActive:true,
				itemsDesktop :[1450,4],
				afterInit: function(){

					$('.active .caption-content-position', $this).children().each(function(index, val) {
						$(this).addClass('animated '+$(this).data('neko_animation'));
					});
				},
				beforeMove:  function(){
					$('.caption-content-position').children().each(function(index, val) {
						$(this).removeClass('animated '+$(this).data('neko_animation'));
					});
				},
				afterMove:  function(){
					$('.active .caption-content-position', $this).children().each(function(index, val) {
						$(this).addClass('animated '+$(this).data('neko_animation'));
					});

				}
			});

});

}

	/*
	|--------------------------------------------------------------------------
	| Main menu
	|--------------------------------------------------------------------------
	*/
	preHeaderManagment();
	initializeMainMenu();
	

	/* on scroll detection */
	if($('.header-transparent').length || $('.header-6').length){
		$(window).scroll(function(){
			if($(window).scrollTop() > 40){
				$('.menu-header').addClass('scroll-header');
			}else{
				$('.menu-header').removeClass('scroll-header');
			} 
		});
	}

	/*
	|--------------------------------------------------------------------------
	| Gmap trigger
	|--------------------------------------------------------------------------
	*/	
	appendGmapApi();

	
	/*
	|--------------------------------------------------------------------------
	| Img Hover
	|--------------------------------------------------------------------------
	*/
	if($('.img-hover').length && !Modernizr.csstransitions && !Modernizr.touch){
		$('.img-hover figure').addClass('noCss3');
		$('.img-hover figure').hover(
			function() {
				var captionHeight = $('.mask-over', this).outerHeight(true);
				$('.mask-over', this).stop(true, false).animate({
					opacity:1,
					bottom: captionHeight,
				}, 300, 'easeOutQuad',function() {}).end();
			}, function() {
				$('.mask-over', this).stop(true, false).animate({
					opacity:0,
					bottom: 0
				}, 300, 'easeOutQuad',function() {}).end();				
			});
	}


	/** New rollover system **/
	if (Modernizr.touch) {
		var original_href;
		$('[class*="effect-"] figure').on('touchstart', function(){
			if(!$(this).hasClass('hovered')){
				if($('figcaption>a', this).length && $('figcaption>a', this).attr('href') != 'javascript://' && $('figcaption>a', this).css('display') != 'none' ){
					original_href = $('figcaption>a', this).attr('href');
				}else{
					original_href = 'empty';
				}
			}
			$('figcaption .rollover-content a', this).on( 'touchstart', function(e) {
				e.stopPropagation();
			});
			if(!$(this).hasClass('hovered')){
				$('[class*="effect-"] figure').removeClass('hovered');
				$(this).addClass('hovered');
				$('figcaption>a', this).attr('href','javascript://');
			}else{
				$(this).removeClass('hovered');
				if(original_href != 'empty'){
					var clickedLink = $('figcaption>a', this);
					clickedLink.attr('href', original_href);
					setTimeout(function(){
						window.location.href = original_href;
					}, 500);
				}
			}
		});	
	} else { 
		$('[class*="effect-"] figure').hover(function() {
			$(this).addClass('hovered');
		}, function() {
			$(this).removeClass('hovered');
		});
	} 
	/** End new rollover system **/


	/*
	|--------------------------------------------------------------------------
	| Counter trigger
	|--------------------------------------------------------------------------
	*/
	if($('.counter').length && $().appear){
		$('.counter').each( function(index, val) {
			var $this = $(this);
			if($(window).width() > 1024) {
				$this.html(0);
				$this.appear(function() {
					increment($this);
				}, {accX: 0, accY: 0});
			}
		});

	}



	/*
	|--------------------------------------------------------------------------
	| BACKGROUND VIDEO
	|--------------------------------------------------------------------------
	*/
	if($('#video-bg').length){
		$('#video-bg').mb_YTPlayer();
	}

    /*
    |--------------------------------------------------------------------------
    | FULLSCREEN IMAGE & CONTENT
    |--------------------------------------------------------------------------
    */
    if($(".fullscreen").length){
    	fullscreen($(".fullscreen"));
    }

    if($(".real-fullscreen").length){
    	fullscreen($(".real-fullscreen"), true);
    }


	/*
	|--------------------------------------------------------------------------
	| SUPERSLIDES
	|--------------------------------------------------------------------------
	*/	
	
	if($('.superslides').length){
		var $slides = $('.superslides');
		Hammer($slides[0]).on("swipeleft", function(e) {
			$slides.data('superslides').animate('next');
		});
		Hammer($slides[0]).on("swiperight", function(e) {
			$slides.data('superslides').animate('prev');
		});
		$slides.superslides({
			hashchange: false,
			play: 6000,
			inherit_width_from: '#slider-wrapper',
			inherit_height_from: '#slider-wrapper'
		});		
	}





	
    /*
    |--------------------------------------------------------------------------
    | MAGNIFIC POPUP
    |--------------------------------------------------------------------------
    */


    if( $("a.image-link").length){
    	$("a.image-link").click(function (e) {
    		var items = [];
    		items.push( { src: $(this).attr('href')  } );
    		if($(this).data('gallery')){
    			var $arraySrc = $(this).data('gallery').split(',');
    			$.each( $arraySrc, function( i, v ){
    				items.push( {
    					src: v 
    				});
    			});     
    		}

    		
    		$.magnificPopup.open({
    			type:'image',
    			mainClass: 'mfp-fade',
    			items:items,
    			gallery: {
    				enabled: true 
    			}
    		});

    		e.preventDefault();
    	});

    }



    if( $("a.image-iframe").length){
    	$('a.image-iframe').magnificPopup({type:'iframe',mainClass: 'mfp-fade'});
    }

    if( $(".simple-gallery-link").length){
    	$('.simple-gallery-link').magnificPopup({
    		type: 'image',
    		gallery:{
    			enabled:true
    		}
    	});
    }


    /*
    |--------------------------------------------------------------------------
    | ANCHOR LINKS
    |--------------------------------------------------------------------------
    */
    $('.anchor-link').bind('click', function(event) {
    	var $anchor = $(this);

    	if($('#pre-header').length){
    		var headerH = $('.navbar-fixed-top').outerHeight(true) - $('.pre-header-on-sm, .pre-header-on').outerHeight(true) - 1;
    	}else{
    		var headerH = $('.navbar-fixed-top').outerHeight(true) - 1;
    	}


    	$('html, body').stop().animate({
    		scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
    	}, 1200, 'easeInOutExpo');

    	event.preventDefault();
    });
    



	/*
	|--------------------------------------------------------------------------
	| FREE WALL
	|--------------------------------------------------------------------------
	*/		

	if($("#freewall").length){

		var gutterX = ($("#freewall").data('gutterx'))?$("#freewall").data('gutterx'):0 ,
		gutterY     = ($("#freewall").data('guttery'))?$("#freewall").data('guttery'):0;


		$wall = new freewall("#freewall");
		$wall.reset({
			selector: '.brick',
			animate: true,
			cellW: function(){
				var customWidth = 380;
				if(Modernizr.mq('only all and (max-width: 421px)')){
					customWidth = 100;
				}
				return customWidth;
			},
			cellH: 'auto',
			gutterX:gutterX,
			gutterY:gutterY,
			onResize: function() {
				$wall.fitWidth();

			},
			onComplete:function() {
				if ($isDesktop === true && $('.parallax').length){
					setTimeout(function(){
						$.stellar('refresh');
					}, 300);
				}
			}
		});

		$wall.container.find('.caption img').load(function() {
			$wall.fitWidth();
		});

		$(".filter-label").click(function() {
			$(".filter-label").removeClass("active");
			var filter = $(this).addClass('active').data('filter');
			if (filter) {
				$wall.filter(filter);
			} else {
				$wall.unFilter();
			}

			if ($isDesktop === true && $('.parallax').length){
				setTimeout(function(){
					$.stellar('refresh');
				}, 300);
			}

		});


	}





    /*
    |--------------------------------------------------------------------------
    | SCROLL NAV
    |--------------------------------------------------------------------------
    */ 
    if($('#scroll-menu').length || $('.scroll-link').length){

    	$('#global-wrapper').on( 'click', '#scroll-menu li a, .scroll-link',function(event) {

    		var $anchor  = $(this),
    		content      = $anchor.attr('href'),
    		checkURL     = content.match(/^#([^\/]+)$/i);


    		if(checkURL){
    			event.preventDefault();
    			if( $('.navbar-toggle').length && $('.navbar-toggle').css('display') == 'block' && $anchor.parents('#scroll-menu').length ){
    				$('.navbar-toggle').trigger('click');
    				var Hheight     = $('.navbar-header').height();
    			}else{
    				var Hheight     = ( $('#scroll-menu').length && $('.navbar-toggle').css('display') != 'block' )?$('#scroll-menu').outerHeight(true):$('.navbar-header').height();
    			}
    			
    			var computedOffset  = $($anchor.attr('href')).offset().top - parseInt(Hheight) + 1;

    			$('html, body').stop().animate({
    				scrollTop : computedOffset + "px"
    			}, 1200, 'easeInOutExpo');
    		}
    	});
    }



    /*
    |--------------------------------------------------------------------------
    | MEDIA ELEMENT
    |--------------------------------------------------------------------------
    */ 
    if($('.video-medp').length || $('.audio-medp').length){

    	$('.video, .audio').each( function(index, val) {
    		new MediaElementPlayer(this,{enableAutosize: true, iPadUseNativeControls: true, iPhoneUseNativeControls: true, AndroidUseNativeControls: true, audioWidth: '100%', audioHeight: 50, alwaysShowControls: false, plugins: ['flash','silverlight']});
    	});
    }



 	/*
    |--------------------------------------------------------------------------
    | FULL page
    |--------------------------------------------------------------------------
    */ 

    if($('#fullpage').length){
    	var paddingtop = $('.menu-header').outerHeight(true);

    	$('#fullpage').fullpage({
    		anchors: ['firstPage', 'secondPage', '3rdPage'],
    		sectionsColor: ['#fff', '#549982', '#E2E0C2', '#6E4F26'],
    		navigation: true,
    		resize :false,
    		navigationPosition: 'right',
    		navigationTooltips: ['First page', 'Second page', 'third page', 'fourth and last page'],
    		responsive: 900,
    		paddingTop: paddingtop+'px'
    	});	

    	/* Toggle click on :after arrow on first slide and on the whole slide */
		// $('#fullpage').on ('click', '>div:first-child:after', function(event) {
		// 	$.fn.fullpage.moveSectionDown();
		// });

	}

 	/*
    |--------------------------------------------------------------------------
    | Cart Animation
    |--------------------------------------------------------------------------
    */ 
   
    if($('.cart').length){
    	$('.cart').click(function(event) {
    		event.preventDefault();
    		if($('.shopping-cart-view').css('opacity') == 0){

    			$('.shopping-cart-view').css('display', 'block');
    			$('.shopping-cart-view').addClass('fadeInUp');

    		}else{

    			$('.shopping-cart-view').removeClass('fadeInUp');
    			$('.shopping-cart-view').css('display', 'none');
    			
    		}
    	});
    }


 	/*
    |--------------------------------------------------------------------------
    | Shop product page
    |--------------------------------------------------------------------------
    */ 
    if($('.product-item').length){
    	$('.product-item').click(function(event) {
    		event.preventDefault();
    		$('.product-item-large').hide().attr('src', $(this).attr('src') ).fadeIn(300);
    		$('.product-item').removeClass('product-active');
    		$(this).addClass('product-active');
    	});
    }

}) (jQuery); //END DOC READY



$( window ).load(function() {

	"use strict";

	/*
	|--------------------------------------------------------------------------
	| APPEAR
	|--------------------------------------------------------------------------
	*/
	if($('.activate-appear-animation').length){
		nekoAnimAppear();
		$('.reloadAnim').click(function (e) {
			$(this).parent().parent().find('img[data-nekoanim]').attr('class', '').addClass('img-responsive');
			nekoAnimAppear();
			e.preventDefault();
		});
	}


	
	/*
	|--------------------------------------------------------------------------
	| Isotope masonery
	|--------------------------------------------------------------------------
	*/
	if($('.isotope-filter').length){

		$('.isotope-wrapper').animate({opacity: 1},300, 'easeInOutQuad');

		var isotopeLayout = 'fitRows';

		if($('.isotope-filter').length){
			var $container = $('.isotope-filter').isotope({
				itemSelector: '.isotope-filter article',
				layoutMode: isotopeLayout
			});

		}


		$('#filters').on( 'click', 'button, a', function(e) {
			e.preventDefault();
			var filterValue = $( this ).attr('data-filter');
			$container.isotope({ filter: filterValue }).isotope('arrange');
		});

		$('#filters').on( 'click', 'button, a', function(e) {
			e.preventDefault();
			$('#filters button, #filters a').removeClass('active');
			$( this ).addClass('active');

			if ($isDesktop === true && $('.parallax').length){
				setTimeout(function(){
					$.stellar('refresh');
				}, 300);
			}

		});
		
	}


	/*
	|--------------------------------------------------------------------------
	| FREE WALL
	|--------------------------------------------------------------------------
	*/		

	if($("#freewall").length){
		$wall.fitWidth();
		$('.free-wall').animate({opacity: 1},800, function() {});
	}

	/*
	|--------------------------------------------------------------------------
	| SWIPER CENTERED
	|--------------------------------------------------------------------------
	*/	
	if($('.swiper-centered').length){
		//var $nbSlides = ($isMobile  == true)?1:'auto';
		$mySwiperCentered = new Swiper('.swiper-centered',{
			centeredSlides: true,
			slidesPerView: 'auto',
			initialSlide:2,
			mousewheelControl:true,
			watchActiveIndex: true,
			keyboardControl:true,
			loop:true,
			onFirstInit: function(){
				$('.swiper-centered').animate({ opacity: 1}, 300, 'easeInOutQuad');
			}
		});

		$('.swiper-centered').on('click', '.swiper-prev', function (e) {
			e.preventDefault();
			$mySwiperCentered.swipePrev();
		});
		$('.swiper-centered').on('click', '.swiper-next', function (e) {
			e.preventDefault();
			$mySwiperCentered.swipeNext();
		});

		$(window).on("resize",function(e){
			$mySwiperCentered.swipeTo(2);
		});

	}

	/*
	|--------------------------------------------------------------------------
	| SWIPER TABS
	|--------------------------------------------------------------------------
	*/	
	if($('.swiper-tab').length){
		$('.swiper-tab').animate({ opacity: 1}, 300, 'easeInOutQuad');

		$tabsSwiper = new Swiper('.swiper-tab .swiper-engine',{
			speed:300,
			autoResize:true,
			slidesPerView:1,
			onSlideChangeStart: function(){
				$(".tabs .btn.active").removeClass('active')
				$(".tabs .btn").eq($tabsSwiper.activeIndex).addClass('active')  
			},
			onFirstInit: function(){
				$('.swiper-tab').animate({ opacity: 1}, 300, 'easeInOutQuad');
			}
		});

		$(".tabs .btn").on('touchstart mousedown',function(e){
			e.preventDefault();
			$tabsSwiper.swipeTo( $(this).index() );
		});

		$(".tabs .btn").click(function(e){
			e.preventDefault();
		});
		
		if($('.swiper-tab .swiper-engine').hasClass('fullscreen')){


			var $swiperTabHeight = (Modernizr.mq('only all and (min-width: 1024px)'))?$(window).height()-($headerHeight+$(".swiper-tab .tabs").height()):$(window).height() - $headerHeight ; 

			$('.swiper-tab .swiper-engine, .swiper-tab .swiper-engine .swiper-slide, .swiper-tab .swiper-wrapper').height(
				$swiperTabHeight
			);

		}
	}

	if($('#preloader:not(.preloader-btn-start)').length) $('#preloader').fadeOut('fast');

	/*
	|--------------------------------------------------------------------------
	| SWIPER VERTICAL AJAX LOAD
	|--------------------------------------------------------------------------
	*/	
	if($('.swiper-vertical').length){
		var $nbSlides = ($isMobile  == true)?1:'auto';
		$('.swiper-vertical').animate({ opacity: 1}, 300, 'easeInOutQuad');

		$mySwiperVertical = new Swiper('.swiper-vertical',{
			slidesPerView:'auto',
			autoResize:true,
			mode:'vertical',
			watchActiveIndex: true,
			// resistance:'100%',
			useCSS3Transforms:true,
			onFirstInit: function(){
				$('.swiper-vertical').animate({ opacity: 1}, 300, 'easeInOutQuad');
			}
		});

		$(window).scroll(function(){

			var $offset = $('#main-footer').height() + 100;

			if($(window).scrollTop() >= $(document).height() - ($(window).height() + $offset)){
				loadNewSlides($mySwiperVertical, 'vertical');
			} 	
		});

		

	}

	if($('.neko-Ajax-loader').length){
		$(window).scroll(function(){

			var $offset = $('#main-footer').height() / 2 ;

			if($(window).scrollTop() >= $(document).height() - ($(window).height() + $offset)){
				loadNewAjaxPortfolio();
			} 	
		});
	}

	/*
	|--------------------------------------------------------------------------
	| SWIPER VERTICAL AJAX LOAD
	|--------------------------------------------------------------------------
	*/
	var holdPosition;
	var howManySlides = $('.swiper-horizontal .swiper-slide').length - 1;

	if($('.swiper-horizontal').length){

		var $nbSlides = ($isMobile  == true)?1:5;	

		$mySwiperHorizontal = new Swiper('.swiper-horizontal',{
			autoResize:'auto',
			slidesPerView:$nbSlides,
			mode:'horizontal',
			watchActiveIndex: false,
			mousewheelControl:true,
			loop: true,
			scrollbar: {
				container : '.swiper-scrollbar',
				draggable : true,
				hide: false,
				snapOnRelease: false
			},
			onFirstInit: function(){
				$('.swiper-horizontal').animate({ opacity: 1}, 300, 'easeInOutQuad');
			},
			onResistanceAfter: function(s, pos){
				// holdPosition = pos;
			},
			onTouchEnd: function(){
				/*if (holdPosition>100) {
					loadNewSlides($mySwiperHorizontal, 'horizontal');
				}*/
			},
			onSlideTouch: function(){
				/*if($mySwiperHorizontal.activeIndex === howManySlides){
					loadNewSlides($mySwiperHorizontal, 'horizontal');
				}*/
			}
		});

		$('.swiper-horizontal').on('mouseenter', '.swiper-slide', function () {
			$('figcaption', this).stop().animate({ opacity: 1}, 300, 'easeInOutQuad', function() {}).end();
		});
		$('.swiper-horizontal').on('mouseleave', '.swiper-slide', function () {
			$('figcaption', this).stop().animate({ opacity: 0}, 300, 'easeInOutQuad', function() {}).end();
		});

		$(window).on("resize",function(e){

			if($isMobile == true){
				$mySwiperHorizontal.params.slidesPerView = 1;
			}else{
				$mySwiperHorizontal.params.slidesPerView = 5;
			}	

		});


	}


	/*
	|--------------------------------------------------------------------------
	| SWIPER NESTED
	|--------------------------------------------------------------------------
	*/
	if($('.swiper-parent').length){

		$mySwiperParent = new Swiper('.swiper-parent',{
			pagination: '.pagination-parent',
			mode:'horizontal',
			paginationClickable: true,
			slidesPerView: 1,
			calculateHeight:true,
			mousewheelControl:true
		});
		if($('.swiper-child').length){

			$mySwiperChild = new Swiper('.swiper-child',{
				mode: 'horizontal',
				pagination: false,
				paginationClickable: false,
				slidesPerView: 1,
				autoplay:2000,
				calculateHeight:true
			});

		}
	}


}); //END WINDOW LOAD




/**
 * Ajax content for swiper
 */

 function loadNewSlides(swiperObj, dir) {
 	/* Probably you should do some Ajax Request here But we will just use setTimeout */
 	if (typeof prevSlideNumber === "undefined" || prevSlideNumber === null) { 
 		prevSlideNumber = 0;
 	}

 	if (typeof slideNumber === "undefined" || slideNumber === null) { 
 		slideNumber = 1;
 	}

 	$('.swiper-preloader:not(.end-loading)').addClass('visible');

 	if(!$('.swiper-preloader').hasClass('end-loading') && slideNumber != prevSlideNumber){
 		prevSlideNumber = slideNumber;
 		setTimeout(function() {
 			$.ajax({
 				url: 'ajax-porfolio-parts/ajax-portfolio-part-'+dir+'-'+slideNumber+'.html',
 				type: 'GET'
 			})
 			.done(function(html) {
 				if(dir == 'vertical'){
 					swiperObj.appendSlide(html, 'swiper-slide section-fw animated fadeInUp', 'article');
 				}else if(dir == 'horizontal'){
 					swiperObj.appendSlide(html, 'swiper-slide animated fadeInRight', 'article');
 					var newswiperpos = swiperObj.positions.start - $('.swiper-slide').width();
 					swiperObj.setWrapperTranslate(newswiperpos,0,0);
 				}

			// Hide loader
			$('.swiper-preloader').removeClass('visible');
			slideNumber++;
		})
 			.fail(function() {
 				$('.swiper-preloader').html('That\'s all folks!');
 				$('.swiper-preloader').addClass('end-loading');
 				setTimeout(function() {
 					$('.swiper-preloader').removeClass('visible');
			}, 800); // <-- should be here instead
 			})
 			.always(function() {
			//console.log("complete");
		});
		}, 500); // <-- should be here instead
 	}
 }

 function loadNewAjaxPortfolio() {

 	$('.swiper-preloader:not(.end-loading)').addClass('visible');

 	if (typeof prevSlideNumber === "undefined" || prevSlideNumber === null) { 
 		prevSlideNumber = 0;
 	}


 	if (typeof slideNumber === "undefined" || slideNumber === null) { 
 		slideNumber = 1;
 	}
 	if(!$('.swiper-preloader').hasClass('end-loading') && slideNumber != prevSlideNumber){


 		prevSlideNumber = slideNumber;
 		setTimeout(function() {
 			$.ajax({
 				url: 'ajax-porfolio-parts/ajax-portfolio-part-vertical-'+slideNumber+'.html',
 				type: 'GET'
 			})
 			.done(function(html) {

 				$('.neko-Ajax-loader').append('<article class="section-fw animated fadeInUp">'+html+'</article>');
 				$('.swiper-preloader').removeClass('visible');
 				slideNumber++;
 			})
 			.fail(function() {
 				$('.swiper-preloader').html('That\'s all folks!');
 				$('.swiper-preloader').addClass('end-loading');
 				setTimeout(function() {
 					$('.swiper-preloader').removeClass('visible');
 				}, 800);
 			})
 			.always(function() {

 			});

 		}, 300);

 	}
 }
/**
 * Fulscreen fucntion
 */

 function fullscreen($obj, $realfs){
 	var $body_offset = 0;
 	if($realfs == undefined){
 		var $body_offset = parseInt($('body').css('padding-top'));
 	}

 	

 	$obj.css({height:$(window).height() - $body_offset });
 	$obj.css({width:$(window).width()});


 	$(window).on('resize', function () {
 		$obj.css({height:$(window).height() - $body_offset});
 		$obj.css({width:$(window).width()});
 	});
 }

/**
 * PRE HEADER MANAEMENT
 */
 function preHeaderManagment() {

 	if(!$('.shop-pre-header').length){

		if($('.navbar-fixed-top').length && $('.pre-header-on').length || $('.navbar-fixed-top').length && $('.pre-header-on-sm').length && 
			Modernizr.mq('only all and (min-width: 768px)') ){
			var $window = $(window),
			$offsetPreheader = ($('.pre-header-on').length)?$('#pre-header').height():80;
			/* initial state detection */
			if( $window.scrollTop() >= $offsetPreheader  ){
				$('.pre-header-on #pre-header, .pre-header-on-sm #pre-header').hide();
			}else{
				$('.pre-header-on #pre-header, .pre-header-on-sm #pre-header').show();
			}

			/* on scroll detection */
			$window.bind("scroll.preheaderscroll", function(){
				if($window.scrollTop() > 40){
					$('body.pre-header-on  #pre-header, .pre-header-on-sm #pre-header').stop(true, false).slideUp(150).end();
				}else{
					$('body.pre-header-on  #pre-header, .pre-header-on-sm #pre-header').slideDown(150).end();
				} 
			});
		}else{
			$('#pre-header').css('display', 'none');
			$(window).unbind(".preheaderscroll");
		}

 	}

}
/**
 * MAIN MENU (submenu slide and setting up of a select box on small screen)
 */

 function initializeMainMenu() {

 	"use strict";
 	var $mainMenu = jQuery('.menu-header .navbar-collapse').children('ul');


 	if(Modernizr.mq('only all and (max-width: 1024px)') || Modernizr.touch && Modernizr.mq('only all and (max-width: 1024px)')) {

 		var addActiveClass = false;

 		jQuery("li a.has-sub-menu").unbind('click');
 		$('li',$mainMenu).unbind('mouseenter mouseleave');


 		$("a.has-sub-menu").on("click", function(e) {

 			var $this = jQuery(this);	
 			e.preventDefault();

 			addActiveClass = $this.parent("li").hasClass("Nactive");

 			$this.parent().removeClass("Nactive");
 			$this.next('.sub-menu').slideUp('fast');


 			if(!addActiveClass) {
 				$this.parents("li").addClass("Nactive");
 				$this.next('.sub-menu').slideDown('fast');
 			}

 			return false;
 		});

 	}else if(  Modernizr.touch && Modernizr.mq('only all and (min-width: 1024px)') ){

 		jQuery("li", $mainMenu).removeClass("Nactive");
 		jQuery('li a', $mainMenu).unbind('click');

 		$("a.has-sub-menu").on("click", function(e) {

 			e.preventDefault();

 			var $this = jQuery(this),
 			$subMenu = $this.parent().children('.sub-menu'),
 			$header_H = $('.menu-header').outerHeight(true);



 			if($this.parent().parent().is(jQuery(':gt(1)', $mainMenu))){

 				$subMenu.stop(true, true).fadeIn(200,'easeInOutQuad'); 
 				$subMenu.css('left', $subMenu.parent().outerWidth(true));

 			}else{

 				$('.sub-menu').css('display', 'none');
 				if($subMenu.css('display') == 'none'){


 					var preheaderoffset = 0;
 					var offset = 0;
 					if($('#pre-header').css('display') == 'block'){
 						preheaderoffset = $('#pre-header').outerHeight(true);
 					}

 					if($('.header-6').length || $('.header-7').length){
 						var $displayState = ($subMenu.hasClass('neko-mega-menu'))?'table':'block';
 						$subMenu.css('top', ($header_H - preheaderoffset ) + offset);

 					}else{
 						if($('.header-1').length && !$('.scroll-header').length){
 							offset = - parseInt($('.menu-header').css('padding-bottom'));
 						}

 						$subMenu.css('top', ($header_H - preheaderoffset) + offset); 
 					}
 					$subMenu.stop(true, true).delay( 300 ).fadeIn(200,'easeInOutQuad', function(){});
 				}
 			}
 		});
	}else{

		jQuery("li", $mainMenu).removeClass("Nactive");
		jQuery('li a', $mainMenu).unbind('click');

		$('li',$mainMenu).hover(

			function() {

				var $this = jQuery(this),
				$subMenu = $this.children('.sub-menu'),
				$header_H = $('.menu-header').outerHeight(true);


				if($this.parent().is(jQuery(':gt(1)', $mainMenu))){
					$subMenu.stop(true, true).fadeIn(200,'easeInOutQuad'); 
					$subMenu.css('left', $subMenu.parent().outerWidth(true));
				}else{

					var preheaderoffset = 0;
					var offset = 0;
 					if($('#pre-header').css('display') == 'block'){
 						preheaderoffset = $('#pre-header').outerHeight(true);
 					}


					if($('.header-6').length || $('.header-7').length){
						var $displayState = ($subMenu.hasClass('neko-mega-menu'))?'table':'block';

						$subMenu.css('top', ($header_H - preheaderoffset ) + offset); 

					}else{

						if($('.header-1').length && !$('.scroll-header').length){
							offset = - parseInt($('.menu-header>.container').css('padding-bottom'));
						}else if($('.header-4').length ){
							offset = 2;
						}
		
 						$subMenu.css('top', ($header_H - preheaderoffset) + offset); 

					}
					$subMenu.stop(true, true).delay( 300 ).fadeIn(200,'easeInOutQuad', function(){});
				}

			}, function() {

				var $this = jQuery(this),
				$subMenu = $this.children('ul, div');

				if($this.parent().is(jQuery(':gt(1)', $mainMenu))){
					$this.children('ul').hide();


				}else{

					$subMenu.stop(true, false).delay( 300 ).fadeOut(0);
					if( $subMenu.length ){$this.removeClass('hover');}

				}

			});
	}
}


/**
 * Counter Increment
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
 function increment(obj){
 	$({increment: 0}).animate({increment: obj.data('counterend')}, {
 		duration: (obj.data('counterduration'))?obj.data('counterduration'):3000,
 		easing:'swing',
 		step: function() {
 			if(obj.data('countertype') === 'float'){
 				obj.html(Math.abs(this.increment).toFixed(1));
 			}else{
 				obj.html(Math.ceil(this.increment));	
 			}

 		}
 	});
 }


/**
 * Appear function
 * @return {[type]} [description]
 */
 function nekoAnimAppear(){
 	$("[data-nekoanim]").each(function() {

 		var $this = $(this);

 		$this.addClass("animated-invisible");

 		if($(window).width() > 1024 && Modernizr.csstransitions) {

 			$this.appear(function() {

 				var delay = ($this.data("nekodelay") ? $this.data("nekodelay") : 1);
 				if(delay > 1) $this.css("animation-delay", delay + "ms");

 				$this.addClass("animated");
 				$this.addClass($this.data("nekoanim"));

 				setTimeout(function() {
 					$this.addClass("animated-visible");
 				}, delay);

 			}, {accX: 0, accY: -200});

 		} else {
 			$this.css('opacity', 1);
 		}
 	});
 }


/**
 * CONTACT FROM
 * @return {[type]} [description]
 */
 $(function() {
 	"use strict";
 	if( $("#contactfrm").length ){

 		$.validator.setDefaults({
 			highlight: function(element) {
 				$(element).closest('.form-group').addClass('has-error');
 				if(!$(element).closest('.form-group').find('.form-control-feedback').length){
 					$(element).closest('.form-group').append('<span class="icon-glyph-146 form-control-feedback"></span>');
 				}

 			},
 			unhighlight: function(element) {
 				$(element).closest('.form-group').removeClass('has-error');
 				$(element).closest('.form-group').find('.form-control-feedback').remove();
 			},
 			errorElement: 'span',
 			errorClass: 'help-block',
 			errorPlacement: function(error, element) {
 				if(element.parent('.input-group').length) {
 					error.insertAfter(element.parent());
 				} else {
 					error.insertAfter(element);
 				}
 			}
 		});


 		$("#contactfrm").validate({
 			/* debug: true, */
 			submitHandler: function(form) {

 				$(form).ajaxSubmit({
 					target: ".result",
 					success: function(){
 						if($('.result .alert-success').length){
 							$("#contactfrm").trigger('reset');

 						}
 					}
 				});
 			},
 			onkeyup: false,
 			onclick: false,
 			rules: {
 				name: {
 					required: true,
 					minlength: 3
 				},
 				email: {
 					required: true,
 					email: true
 				},
 				phone: {
 					required: true,
 					minlength: 10,
 					digits:true
 				},
 				comment: {
 					required: true,
 					minlength: 10,
 					maxlength: 350
 				}
 			}
 		});
 	}

 });






/**
 * G.MAPS 
 */

 function appendGmapApi() {
 	"use strict";
 	if($('#map-wrapper').length){

 		var script = document.createElement("script");
 		script.type = "text/javascript";
 		script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
 		document.body.appendChild(script);

 		/* Map Type */
 		if($('.satellite').length){ $mapType = 'SATELLITE';}
 		else if($('.hybrid').length){ $mapType = 'HYBRID';}
 		else if($('.terrain').length){ $mapType = 'TERRAIN';}
 		else{ $mapType = 'ROADMAP';}

 		/* Map Style */
 		if($('.light').length){ $mapStyle = 'light';}
 		else if($('.dark').length){ $mapStyle = 'dark';}
 		else if($('.gray').length){ $mapStyle = 'gray';}
 		else{ $mapStyle = 'DEFAULT';}

 	}
 }    









/**
 * To top button
 */
 function toTop(mobile){

 	if(mobile == false){

 		if(!$('#nekoToTop').length)
 			$('body').append('<a href="#" id="neko-to-top"><i class="icon-to-top"></i></a>');

 		$(window).scroll(function () {
 			if ($(this).scrollTop() > 100) {
 				$('#neko-to-top').slideDown('fast');
 			} else {
 				$('#neko-to-top').slideUp('fast');
 			}
 		});

 		$('#neko-to-top').click(function (e) {
 			e.preventDefault();
 			$("html, body").animate({
 				scrollTop: 0
 			}, 800, 'easeInOutCirc');

 		});
 	}else{

 		if($('#neko-to-top').length)
 			$('#neko-to-top').remove();

 	}

 }


/**
 * Animated header
 */

 (function() {
 	var lastTime = 0;
 	var vendors = ['ms', 'moz', 'webkit', 'o'];

 	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
 		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
 		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
 		|| window[vendors[x]+'CancelRequestAnimationFrame'];
 	}

 	if (!window.requestAnimationFrame)
 		window.requestAnimationFrame = function(callback, element) {
 			var currTime = new Date().getTime();
 			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
 			var id = window.setTimeout(function() { callback(currTime + timeToCall); },
 				timeToCall);
 			lastTime = currTime + timeToCall;
 			return id;
 		};

 		if (!window.cancelAnimationFrame)
 			window.cancelAnimationFrame = function(id) {
 				clearTimeout(id);
 			};

 		}());


 (function() {

 	

 	var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;
 	if(document.getElementById('animated-header') != undefined){
 		/* Main */
 		initHeader();
 		addListeners();
 	}

 	function initHeader() {
 		width = window.innerWidth;
 		height = window.innerHeight;
 		target = {x: 0, y: height};

 		largeHeader = document.getElementById('animated-header');
 		largeHeader.style.height = height+'px';

 		canvas = document.getElementById('animated-bubble');
 		canvas.width = width;
 		canvas.height = height;
 		ctx = canvas.getContext('2d');

 		/* create particles */
 		circles = [];
 		for(var x = 0; x < width*0.5; x++) {
 			var c = new Circle();
 			circles.push(c);
 		}
 		animate();
 	}

 	/* Event handling */
 	function addListeners() {
 		window.addEventListener('scroll', scrollCheck);
 		window.addEventListener('resize', resize);
 	}

 	function scrollCheck() {
 		if(document.body.scrollTop > height) animateHeader = false;
 		else animateHeader = true;
 	}

 	function resize() {
 		width = window.innerWidth;
 		height = window.innerHeight;
 		largeHeader.style.height = height+'px';
 		canvas.width = width;
 		canvas.height = height;
 	}

 	function animate() {
 		if(animateHeader) {
 			ctx.clearRect(0,0,width,height);
 			for(var i in circles) {
 				circles[i].draw();
 			}
 		}
 		requestAnimationFrame(animate);
 	}

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();