$(function(){
	
	$('.home .bxslider').bxSlider({
		auto: true,
		mode: 'fade'
	});
	
	/**
	 * QUICK REFERENCE
	 */
	
	// check if the window bindings should be applied (only if the element is present)
	var $reference = $('.reference-wrap');
	if($reference.length > 0){
	
		// toggle the menu
		$('.reference-wrap h3').click(function() {
			$('.reference-content').slideToggle(300);
		});
	
		// scroll to the elements
		$('.reference-content a').click(function(){
			$('.reference-content').slideToggle(300);
			var id = $(this).html();
			$('html, body').animate({
				scrollTop: $('#' + id).offset().top - 20
			}, 300);
			return false;
		});
	
		$(window).bind('scroll resize', positionQuickReference);
	}
	
	// check if .reference-wrap should be sticky
	function positionQuickReference(){
		var windowTop = $(window).scrollTop();
		if(windowTop >= 112){
			$reference.css({
				position: 'fixed',
				top: 20,
				right: $(window).width() > 700 ? $(window).width() - ($('#primary h1').offset().left + $('#primary').width()) : 20
			});
		}else{
			$reference.css({
				position: 'absolute',
				top: 0,
				right: $(window).width() > 1040 ? 0 : 20
			});
		}
	}
	
	/**
	 * SIDEBAR
	 */
	
	$('.btn-donate').click(function() {
		$('#frm-paypal').submit();
		return false;
	});
	
	$('.block-signup form').submit(function() {
		var email = $('#mce-EMAIL').val();
		if(!isValidEmailAddress(email)){
			$('.block-signup .error').show();
			return false;
		}
	});
	
});

function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	return pattern.test(emailAddress);
};

(function(){
	var bsa = document.createElement('script');
	bsa.type = 'text/javascript';
	bsa.async = true;
	bsa.src = '//s3.buysellads.com/ac/bsa.js';
	(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
})();

/**
 * Create a cookie
 */
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

/**
 * Get a cookie
 */
function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}