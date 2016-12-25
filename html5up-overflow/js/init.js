/*
	Overflow 1.1 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*********************************************************************************/
/* Settings                                                                      */
/*********************************************************************************/

	var _settings = {

		// Full screen header
			useFullScreenHeader: true,

		// Parallax Background
			useParallax: true,
			parallaxFactor: 10,	// Lower = more intense. Higher = less intense.
			parallaxLimit: 1680,	// Performance tweak: turns off parallax if the viewport width exceeds this value

		// skelJS
			skelJS: {
				prefix: 'css/style',
				resetCSS: true,
				boxModel: 'border',
				useOrientation: true,
				containers: 1140,
				grid: {
					gutters: 40
				},
				breakpoints: {
					'widest': { range: '*', containers: 1140, hasStyleSheet: false },
					'wide': { range: '-1680', containers: 960 },
					'normal': { range: '-1080', containers: '95%' },
					'narrow': { range: '-840', containers: '95%', grid: { gutters: 30 } },
					'mobile': { range: '-640', lockViewport: true, containers: '95%', grid: { collapse: true, gutters: 20 } }
				}
			},

		// poptrox
			poptrox: {
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#0a1919',
				overlayOpacity: 0.75,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 10,
				usePopupNav: true
			}

	};

/*********************************************************************************/
/* jQuery Plugins                                                                */
/*********************************************************************************/

	// formerize
		jQuery.fn.n33_formerize=function(){var _fakes=new Array(),_form = jQuery(this);_form.find('input[type=text],textarea').each(function() { var e = jQuery(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = jQuery(this); var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = jQuery(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = jQuery(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { jQuery(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); jQuery(this).find('select').val(jQuery('option:first').val()); jQuery(this).find('input,textarea').each(function() { var e = jQuery(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };

	// scrolly
		jQuery.fn.n33_scrolly = function(offset) {				
			
			jQuery(this).click(function(e) {
				var t = jQuery(this), h = t.attr('href'), target;

				if (h.charAt(0) == '#' && h.length > 1 && (target = jQuery(h)).length > 0)
				{
					var x, pos;
					
					x = target.offset().top;
					
					if (t.hasClass('scrolly-centered'))
						pos = x - (($(window).height() - target.outerHeight()) / 2);
					else
					{
						pos = Math.max(x, 0);
						
						if (offset)
						{
							if (typeof(offset) == 'function')
								pos -= (offset)();
							else
								pos -= offset;
						}
					}
					
					e.preventDefault();
					
					jQuery('body,html').animate({ scrollTop: pos }, 1000, 'swing');
				}
			});
		};

/*********************************************************************************/
/* Initialize                                                                    */
/*********************************************************************************/

	// skelJS
		skel.init(_settings.skelJS);

	// jQuery
		jQuery(function() {

			var	$window = $(window),
				$body = $('body');

			// Scrolly links
				$('.scrolly').n33_scrolly(function() {
					return (skel.isActive('mobile') ? 70 : 190);
				});

			// Forms
				if (skel.vars.IEVersion < 10)
					$('form').n33_formerize();

			// Full Screen Header
				if (_settings.useFullScreenHeader)
				{
					var $header = $('#header');
					
					if ($header.length > 0)
					{
						var $header_header = $header.find('header');
						
						$window
							.on('resize.overflow_fsh', function() {
								if (skel.isActive('mobile'))
									$header.css('padding', '');
								else
								{
									var p = Math.max(192, ($window.height() - $header_header.outerHeight()) / 2);
									$header.css('padding', p + 'px 0 ' + p + 'px 0');
								}
							})
							.trigger('resize.overflow_fsh');
							
						$window.load(function() {
							$window.trigger('resize.overflow_fsh');
						});
					}
				}
				
			// Parallax Background
				if (_settings.useParallax)
				{
					var $dummy = $(), $bg;
				
					$window
						.on('scroll.overflow_parallax', function() {
							$bg.css('background-position', 'center ' + (-1 * (parseInt($window.scrollTop()) / _settings.parallaxFactor)) + 'px');
						})
						.on('resize.overflow_parallax', function() {
							if ($window.width() > _settings.parallaxLimit
							||	skel.isActive('narrow'))
							{
								$body.css('background-position', '');
								$bg = $dummy;
							}
							else
								$bg = $body;
						})
						.trigger('resize.overflow_parallax');

					// IE's smooth scroll kind of screws this up, so we have to turn it off.
						if (skel.vars.IEVersion < 11)
							$window.unbind('scroll.overflow_parallax');
				}
				
			// Poptrox
			
				if (skel.vars.IEVersion < 9)
					_settings.poptrox.overlayOpacity = 0;
			
				$('.gallery').poptrox(_settings.poptrox);

		});