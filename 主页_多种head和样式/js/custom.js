/*************** COLORS TO BE ERASED WHEN INSTALLING THE THEME ***********/

$(document).ready(function() {  

	var $colorsHTML =
	'<div class="styleSwitcher">' +
	'<a href="#" id="showHideSwitcher"><i class="icon-glyph-15"></i></a>' +
	'<div id="switcherContent">' +
	'<h1>style switcher</h1><ul class="switcher">' +
	
	
	
	
	'<li><a href="neko-framework/css/color/neko-framework-blue.css" style="background:#136597">Dark blue</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-dodger.css" style="background:#2196f3">Dodger</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-light-blue.css" style="background:#44BCDD">Light blue</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-sea-green.css" style="background:#3CB6B6">Sea green</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-green.css" style="background:#A4C618">Green</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-yellow.css" style="background:#FFE509">Yellow</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-orange.css" style="background:#EA761E">Orange</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-red.css" style="background:#E44832">Red</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-pink.css" style="background:#e91e63">Pink</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-purple.css" style="background:#7f378a">Purple</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-marsala.css" style="background:#965251">Marsala</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-gold.css" style="background:#B39964">Pink</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-chocolate.css" style="background:#5E4D42">Coffee</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-olive.css" style="background:#848478">Olive</a></li>' +
	'<li><a href="neko-framework/css/color/neko-framework-silver.css" style="background:#A1B4B8">Silver</a></li>' +
	
	'</ul>'
	/* + 
	
    '<ul class="switcher dark">' +
    '<li><a href="css/dark-orange.css" style="background:#F86D18">Dark Orange</a></li>' +
    '<li><a href="css/dark-yellow.css" style="background:#FFCC00">Dark Yellow</a></li>' +
    '<li><a href="css/dark-sea-green.css" style="background:#3CB6B6">Dark Sea green</a></li>' +
    '<li><a href="css/dark-green.css" style="background:#A4C618">Dark Green</a></li>' +
    '<li><a href="css/dark-blue.css" style="background:#136597">Dark Dark blue</a></li>' +
    '<li><a href="css/dark-light.css" style="background:#44BCDD">Dark Light blue</a></li>' +
    '<li><a href="css/dark-pink.css" style="background:#F897F5">Dark Pink</a></li>' +
    '<li><a href="css/dark-coffee.css" style="background:#A38757">Dark Coffee</a></li>' +
    '<li><a href="css/dark-red.css" style="background:#E44832">Dark Red</a></li>' +
    '<li><a href="css/dark-dark.css" style="background:#555">Dark Black &amp; white</a></li>' +			
    '</ul></div>
    '*/;
/*
    if(!$('#onePage').length){
    	$colorsHTML +=
    	'<div class="layoutStyle">' +
    	'<a href="#" class="btnSwitcher full">Fullwidth</a>' +
    	'<a href="#" class="btnSwitcher box">Boxed</a>' +
    	'</div>';	
    }

    */
    $colorsHTML +='</div>';

    $("body").append($colorsHTML);  

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "js-plugins/jquery-cookie/jquery.cookie.js";
    $("body").append(s);  


    if($.cookie("css")) {
    	$("#color").attr("href",$.cookie("css"));
    }

    if($.cookie("bodyStyle")) {
    	$("body").attr('id', $.cookie("bodyStyle"));
    }  

    if($.cookie("header")) {
    	$("body").removeClass(function (index, css) {
    		return (css.match (/\bheader-\S+/g) || []).join(' ');
    	});
    	$("body").addClass($.cookie("header"));
    }  


    $(".switcher li a").click(function() { 
    	$("#color").attr("href",$(this).attr("href"));
    	$.cookie("css",$(this).attr("href"));
    	return false;
    });




    $('.styleSwitcher .btnSwitcher').click(function (e) {
    	var $id;
    	if($(this).hasClass('full')){
    		$id= '';
    	}else{

    		$id= 'boxedLayout';
    	}

    	$("body").attr('id', $id);

    	$.cookie("bodyStyle", $id);
    	e.preventDefault();
    });


    $(".header").change(function() { 
    	$("body").removeClass(function (index, css) {
    		return (css.match (/\bheader-\S+/g) || []).join(' ');
    	});
    	if( $(this).val() != 'noselection'){

    		$("body").addClass($(this).val());
    		$.cookie("header",$(this).val());
    	}

    });


    $('#showHideSwitcher').click(function(e) { 
    	if($('.styleSwitcher').css('left') === '-170px'){
    		$('.styleSwitcher').animate(
    			{'left':0},
    			300, 'easeOutQuart',function() {
                // stuff to do after animation is complete
            });

    	}else{
    		$('.styleSwitcher').animate(
    			{'left':-170},
    			300, 'easeInQuart',function() {
                // stuff to do after animation is complete
            });
    	}

    	e.preventDefault();
    });
});
	
	/*
	|--------------------------------------------------------------------------
	| GOOGLE ANALYTICS
	|--------------------------------------------------------------------------
	*/	
	/*************** REPLACE WITH YOUR OWN UA NUMBER ***********/
	window.onload = function () { "use strict"; gaSSDSLoad(); }; //load after page onload
	/*************** REPLACE WITH YOUR OWN UA NUMBER ***********/



	$(document).ready(function() { 
		"use strict";
		$( ".neko-mega-menu" ).wrapInner( "<div></div>");





	/*
	|--------------------------------------------------------------------------
	| Revolution slider fullscreen
	|--------------------------------------------------------------------------
	*/	

	if($('#rs-slider-fullscreen').length){
		$('.tp-banner').show().revolution(
		{
			dottedOverlay:"twoxtwo",
			delay:16000,
			startwidth:1170,
			startheight:700,
			hideThumbs:200,

			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,

			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"preview4",

			touchenabled:"on",
			onHoverStop:"off",

			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,

			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

			keyboardNavigation:"off",

			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,

			shadow:0,
			fullWidth:"off",
			fullScreen:"on",

			spinner:"spinner4",

			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,

			shuffle:"off",

			autoHeight:"off",						
			forceFullWidth:"off",						



			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,

			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,


		});

$('#rs-slider-fullscreen').css('visibility', 'visible');
}

	/*
	|--------------------------------------------------------------------------
	| Revolution slider fullwidth
	|--------------------------------------------------------------------------
	*/	

	if($('#rs-slider-fullwidth').length){
		$('.tp-banner').show().revolution(
		{
			dottedOverlay:"twoxtwo",
			delay:6000,
			startwidth:1170,
			startheight:700,
			hideThumbs:200,

			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,

			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"round",

			touchenabled:"on",
			onHoverStop:"off",

			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,


			keyboardNavigation:"on",

			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,

			shadow:0,
			fullWidth:"on",

			spinner:"spinner4",

			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,

			shuffle:"off",

			autoHeight:"off",						
			forceFullWidth:"off",						



			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,

			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,


		});
$('#rs-slider-fullwidth').css('visibility', 'visible');
}

	/*
	|--------------------------------------------------------------------------
	| Revolution slider fullwidth
	|--------------------------------------------------------------------------
	*/	

	if($('#rs-slider-elements').length){
		$('.tp-banner').show().revolution(
		{
			videoJsPath:"js-plugins/rs-plugin/videojs/",

			dottedOverlay:"none",
			delay:6000,
			startwidth:1170,
			startheight:700,
			hideThumbs:200,

			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,

			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"round",

			touchenabled:"on",
			onHoverStop:"off",

			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,


			keyboardNavigation:"on",

			navigationHAlign:"left",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,

			shadow:0,
			fullWidth:"on",

			spinner:"spinner3",

			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,

			shuffle:"off",

			autoHeight:"off",						
			forceFullWidth:"off",						



			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,

			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,


		});
$('#rs-slider-elements').css('visibility', 'visible');
}




}); //End Doc Ready


/*
|--------------------------------------------------------------------------
| Revolution slider fullwidth
|--------------------------------------------------------------------------
*/	

function gaSSDSLoad(acct) {
	"use strict";  
	var gaJsHost = (("https:" === document.location.protocol) ? "https://ssl." : "http://www."),
	pageTracker,
	s;
	s = document.createElement('script');
	s.src = gaJsHost + 'google-analytics.com/ga.js';
	s.type = 'text/javascript';
	s.onloadDone = false;
	function init () {
		pageTracker = _gat._getTracker(acct);
		pageTracker._trackPageview();
	}
	s.onload = function () {
		s.onloadDone = true;
		init();
	};
	s.onreadystatechange = function() {
		if (('loaded' === s.readyState || 'complete' === s.readyState) && !s.onloadDone) {
			s.onloadDone = true;
			init();
		}
	};
	document.getElementsByTagName('head')[0].appendChild(s);
}


/*
|--------------------------------------------------------------------------
| Google maps
|--------------------------------------------------------------------------
*/	

function initialize(id) {
	"use strict";
	var image = 'images/icon-map.png';

	var overlayTitle = 'Agencies';

	var locations = [
	/* point number 1 */
	['Madison Square Garden', '4 Pennsylvania Plaza, New York, NY'],

	/* point number 2 */
	['Best town ever', 'Santa Cruz', 36.986021, -122.02216399999998],

	/* point number 3 */
	['Midwest Agency', 'Kansas'],

	/* point number 4 */
	['I\'ll definitly be there one day', 'Chicago', 41.8781136, -87.62979819999998] 
	];

	/*** DON'T CHANGE ANYTHING PASSED THIS LINE ***/
	id = (id === undefined) ? 'map-wrapper' : id;

	var map = new google.maps.Map(document.getElementById(id), {
		scrollwheel: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		streetViewControl:true,
		scaleControl:false,
		zoom: 14
	});

	if($mapType == 'SATELLITE'){
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
	}else if($mapType == 'HYBRID'){
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	}else if($mapType == 'TERRAIN'){
		map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
	}else{
		map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
	}

	if($mapStyle == 'light' && $mapType == 'ROADMAP'){
		var $flatMap = [{"elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"administrative","stylers":[{"visibility":"on"}]},{"featureType":"transit","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"on"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"on"}]},{"featureType":"poi.school","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#71c8d4"}]},{"featureType":"landscape","stylers":[{"color":"#e5e8e7"}]},{"featureType":"poi.park","stylers":[{"color":"#8ba129"}]},{"featureType":"road","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#a0d3d3"}]},{"featureType":"poi.park","stylers":[{"color":"#91b65d"}]},{"featureType":"poi.park","stylers":[{"gamma":1.51}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"road"},{"featureType":"road"},{},{"featureType":"road.highway"}];
		var styledMap = new google.maps.StyledMapType($flatMap, {name: "light"});
	}else if($mapStyle == 'dark' && $mapType == 'ROADMAP'){
		var $darkMap = [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#4d4946"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}];
		var styledMap = new google.maps.StyledMapType($darkMap, {name: "dark"});
	}else if($mapStyle == 'gray' && $mapType == 'ROADMAP'){
		var $grayMap = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
		var styledMap = new google.maps.StyledMapType($grayMap, {name: "grey"});
	}

	if( $mapStyle != 'DEFAULT' && $mapType == 'ROADMAP'){
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	}

	var myLatlng;
	var marker, i;
	var bounds = new google.maps.LatLngBounds();
	var infowindow = new google.maps.InfoWindow({ content: "loading..." });

	for (i = 0; i < locations.length; i++) { 


		if(locations[i][2] !== undefined && locations[i][3] !== undefined){
			var content = '<div class="infoWindow"><h3>'+locations[i][0]+'</h3><p>'+locations[i][1]+'</p></div>';
			(function(content) {
				myLatlng = new google.maps.LatLng(locations[i][2], locations[i][3]);

				marker = new google.maps.Marker({
					position: myLatlng,
					icon:image,  
					title: overlayTitle,
					map: map
				});

				google.maps.event.addListener(marker, 'click', (function() {
					return function() {
						infowindow.setContent(content);
						infowindow.open(map, this);
					};

				})(this, i));

				if(locations.length > 1){
					bounds.extend(myLatlng);
					map.fitBounds(bounds);
				}else{
					map.setCenter(myLatlng);
				}

			})(content);
		}else{

			var geocoder   = new google.maps.Geocoder();
			var info   = locations[i][0];
			var addr   = locations[i][1];
			var latLng = locations[i][1];

			(function(info, addr) {

				geocoder.geocode( {

					'address': latLng

				}, function(results) {

					myLatlng = results[0].geometry.location;

					marker = new google.maps.Marker({
						position: myLatlng,
						icon:image,  
						title: overlayTitle,
						map: map
					});
					var $content = '<div class="infoWindow"><h3>'+info+'</h3><p>'+addr+'</p></div>';
					google.maps.event.addListener(marker, 'click', (function() {
						return function() {
							infowindow.setContent($content);
							infowindow.open(map, this);
						};
					})(this, i));

					if(locations.length > 1){
						bounds.extend(myLatlng);
						map.fitBounds(bounds);
					}else{
						map.setCenter(myLatlng);
					}
				});
			})(info, addr);

		}
	}
}