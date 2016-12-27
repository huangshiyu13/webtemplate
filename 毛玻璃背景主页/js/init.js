/*
	Helios 1.5 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*********************************************************************************/
/* Settings                                                                      */
/*********************************************************************************/

	var helios_settings = {

		// Header (homepage only)
			header: {
				fullScreen: true,
				fadeIn: true,
				fadeDelay: 500
			},

		// Carousels
			carousels: {
				speed: 4,
				fadeIn: true,
				fadeDelay: 250
			},

		// Dropotron (dropdown menus)
			dropotron: {
				mode: 'fade',
				speed: 350,
				noOpenerFade: true,
				alignment: 'center',
				offsetX: -1,
				offsetY: -16
			},

		// skelJS (probably don't need to change anything here unless you know what you're doing)
			skelJS: {
				prefix: 'css/style',
				resetCSS: true,
				boxModel: 'border',
				grid: {
					gutters: 48
				},
				breakpoints: {
					'widest':	{ range: '1680-', hasStyleSheet: false, containers: 1400 },
					'wide':		{ range: '-1680', containers: 1200 },
					'normal':	{ range: '-1280', containers: 'fluid', grid: { gutters: 36 }, viewportWidth: 1140 },
					'narrow':	{ range: '-960', containers: 'fluid', grid: { gutters: 32 } },
					'narrower': 	{ range: '-840', containers: 'fluid', grid: { gutters: 32, collapse: true } },
					'mobile':	{ range: '-640', containers: 'fluid', grid: { gutters: 32, collapse: true }, lockViewport: true }
				}
			},

		// skelJS Plugins (ditto; don't change unless you know what you're doing)
			skelJSPlugins: {
				panels: {
					transformBreakpoints: 'mobile',
					panels: {
						navPanel: {
							breakpoints: 'mobile',
							position: 'top',
							size: '75%',
							html: '<div data-action="navList" data-args="nav"></div>'
						}
					},
					overlays: {
						navButton: {
							breakpoints: 'mobile',
							position: 'top-center',
							width: 100,
							height: 50,
							html: '<div class="toggle" data-action="togglePanel" data-args="navPanel"></div>'
						}
					}
				}
			}

	}

/*********************************************************************************/
/* Don't modify beyond this point unless you know what you're doing!             */
/*********************************************************************************/

// Initialize skelJS
	skel.init(helios_settings.skelJS, helios_settings.skelJSPlugins);

// jQuery functions

	// scrolly
		jQuery.fn.n33_scrolly = function() {				
			jQuery(this).click(function(e) {
				var h = jQuery(this).attr('href'), target;

				if (h.charAt(0) == '#' && h.length > 1 && (target = jQuery(h)).length > 0)
				{
					var pos = Math.max(target.offset().top, 0);
					e.preventDefault();
					jQuery('body,html').animate({ scrollTop: pos }, 'slow', 'swing');
				}
			});
		};

	// preloadImage
		jQuery.n33_preloadImage = function(url, onload) {
			var	$img = $('<img />'),
				_IEVersion = (navigator.userAgent.match(/MSIE ([0-9]+)\./) ? parseInt(RegExp.$1) : 99);
			
			$img.attr('src', url);
			
			if ($img.get(0).complete
			||	_IEVersion < 9)
				(onload)();
			else
				$img.load(onload);
		};

	// formerize
		jQuery.fn.n33_formerize=function(){var _fakes=new Array(),_form = jQuery(this);_form.find('input[type=text],textarea').each(function() { var e = jQuery(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = jQuery(this); var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = jQuery(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = jQuery(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { jQuery(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); jQuery(this).find('select').val(jQuery('option:first').val()); jQuery(this).find('input,textarea').each(function() { var e = jQuery(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };

	// onVisible
		(function() {
		
			// Vars
				var $window = jQuery(window),
					elements = [],
					delay = 10,
					pad = 0,
					timerId,
					poll = function() {
						var l = elements.length,
							x = $window.scrollTop() + $window.height(),
							i, e;
					
						for (i=0; i < l; i++)
						{
							e = elements[i];

							if (!e.state && x - e.pad > e.o.offset().top)
							{
								e.state = true;
								(e.fn)();
							}
						}
					};

			// Event bindings
				$window.load(function() {

					$window.on('scroll resize', function() {

						// Clear existing timeout (if one exists)
							window.clearTimeout(timerId);

						// Set our poll function to run after (delay)ms (prevents it from running until the user's done scrolling/resizing)
							timerId = window.setTimeout(function() { (poll)(); }, delay);

					}).trigger('resize');

				});

			// onVisible jQuery function (pretty much just adds the element to our list of elements to poll)
				jQuery.fn.n33_onVisible = function(fn, p) {
					elements.push({ o: jQuery(this), fn: fn, pad: (p ? p : pad), state: false });
				};

		})();

// Ready stuff
	jQuery(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			_IEVersion = (navigator.userAgent.match(/MSIE ([0-9]+)\./) ? parseInt(RegExp.$1) : 99),
			_isTouch = !!('ontouchstart' in window),
			_isMobile = !!(navigator.userAgent.match(/(iPod|iPhone|iPad|Android|IEMobile)/));

		// Pause CSS transitions until the page has loaded (prevents "flickering")
			$body.addClass('paused');
			$window.load(function() {
				$body.removeClass('paused');
			});

		// Add input "placeholder" support to IE <= 9
			if (_IEVersion < 10)
				$('form').n33_formerize();

		// Initialize scrolly links
			$('.scrolly').n33_scrolly();

		// Initialize dropotron
			$('#nav > ul').dropotron(helios_settings.dropotron);

		// Initialize carousels
			$('.carousel').each(function() {
				
				var	$t = $(this),
					$forward = $('<span class="forward"></span>'),
					$backward = $('<span class="backward"></span>'),
					$reel = $t.children('.reel'),
					$items = $reel.children('article');
				
				var	pos = 0,
					leftLimit,
					rightLimit,
					itemWidth,
					reelWidth,
					timerId;

				// Items
					if (helios_settings.carousels.fadeIn)
					{
						$items.addClass('loading');

						$t.n33_onVisible(function() {
							var	timerId,
								limit = $items.length - Math.ceil($window.width() / itemWidth);
							
							timerId = window.setInterval(function() {
								var x = $items.filter('.loading'), xf = x.first();
								
								if (x.length <= limit)
								{
									window.clearInterval(timerId);
									$items.removeClass('loading');
									return;
								}
								
								if (_IEVersion < 10)
								{
									xf.fadeTo(750, 1.0);
									window.setTimeout(function() {
										xf.removeClass('loading');
									}, 50);
								}
								else
									xf.removeClass('loading');
								
							}, helios_settings.carousels.fadeDelay);
						}, 50);
					}
				
				// Main
					$t._update = function() {
						pos = 0;
						rightLimit = (-1 * reelWidth) + $window.width();
						leftLimit = 0;
						$t._updatePos();
					};
				
					if (_IEVersion < 9)
						$t._updatePos = function() { $reel.css('left', pos); };
					else
						$t._updatePos = function() { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };
					
				// Forward
					$forward
						.appendTo($t)
						.hide()
						.mouseenter(function(e) {
							timerId = window.setInterval(function() {
								pos -= helios_settings.carousels.speed;

								if (pos <= rightLimit)
								{
									window.clearInterval(timerId);
									pos = rightLimit;
								}
								
								$t._updatePos();
							}, 10);
						})
						.mouseleave(function(e) {
							window.clearInterval(timerId);
						});
				
				// Backward	
					$backward
						.appendTo($t)
						.hide()
						.mouseenter(function(e) {
							timerId = window.setInterval(function() {
								pos += helios_settings.carousels.speed;

								if (pos >= leftLimit)
								{
									window.clearInterval(timerId);
									pos = leftLimit;
								}
								
								$t._updatePos();
							}, 10);
						})
						.mouseleave(function(e) {
							window.clearInterval(timerId);
						});
						
				// Init
					$window.load(function() {

						reelWidth = $reel[0].scrollWidth;

						skel.onStateChange(function() {
				
							if (_isTouch)
							{
								$reel
									.css('overflow-y', 'hidden')
									.css('overflow-x', 'scroll')
									.scrollLeft(0);
								$forward.hide();
								$backward.hide();
							}
							else
							{
								$reel
									.css('overflow', 'visible')
									.scrollLeft(0);
								$forward.show();
								$backward.show();
							}

							$t._update();
						});

						$window.resize(function() {
							reelWidth = $reel[0].scrollWidth;
							$t._update();
						}).trigger('resize');

					});
				
			});

		// Initialize header

			// Mobile devices don't do so well with fixed backgrounds and the fullscreen header :/
				if (_isMobile)
				{
					$header.css('background-attachment', 'scroll');
					helios_settings.header.fullScreen = false;
				}

			// Homepage header
				if ($body.hasClass('homepage'))
				{
					if (helios_settings.header.fullScreen)
					{
						$window.bind('resize.helios', function() {
							window.setTimeout(function() {
								var s = $header.children('.inner');
								var sh = s.outerHeight(), hh = $window.height(), h = Math.ceil((hh - sh) / 2) + 1;

								$header
									.css('padding-top', h)
									.css('padding-bottom', h);
							}, 0);
						}).trigger('resize');
					}

					if (helios_settings.header.fadeIn)
					{
						$('<div class="overlay" />').appendTo($header);
						
						$window
							.load(function() {
								var imageURL = $header.css('background-image').replace(/"/g,"").replace(/url\(|\)$/ig, "");

								$.n33_preloadImage(imageURL, function() {
									
									if (_IEVersion < 10)
										$header.children('.overlay').fadeOut(2000);
									else
										window.setTimeout(function() {
											$header.addClass('ready');
										}, helios_settings.header.fadeDelay);
								
								});
							});
					}

				}

	});