/*********************************************************************************/
/* Settings                                                                      */
/*********************************************************************************/

	var _settings = {

		// Fullscreen
			useFullScreen: true,
			
		// Section Transitions
			useSectionTransitions: true,

		// Fade in speed (in ms)
			fadeInSpeed: 1000,

		// skel
			skel: {
				reset: 'full',
				breakpoints: {
					'max': { range: '*', href: 'css/style.css', containers: 1440 },
					'wide': { range: '-1920', href: 'css/style-wide.css', containers: 1360 },
					'normal': { range: '-1680', href: 'css/style-normal.css', containers: 1200 },
					'narrow': { range: '-1280', href: 'css/style-narrow.css', containers: 960 },
					'narrower': { range: '-1000', href: 'css/style-narrower.css', containers: '95%', lockViewport: true },
					'mobile': { range: '-640', href: 'css/style-mobile.css', grid: { gutters: 20 } },
					'mobile-narrow': { range: '-480', containers: '95%', grid: { collapse: true, gutters: 10 } }
				}
			},

		// poptrox
			poptrox: {
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			}

	};

/*********************************************************************************/
/* jQuery Plugins                                                                */
/*********************************************************************************/

	// formerize | (c) n33.co | MIT
		jQuery.fn.formerize=function(){var _fakes=new Array(),_form = jQuery(this);_form.find('input[type=text],textarea').each(function() { var e = jQuery(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = jQuery(this); var x = jQuery(jQuery('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = jQuery(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = jQuery(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { jQuery(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = jQuery(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); jQuery(this).find('select').val(jQuery('option:first').val()); jQuery(this).find('input,textarea').each(function() { var e = jQuery(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };

	// scrolly | (c) n33.co | MIT
		jQuery.fn.scrolly=function(d,b){d||(d=1E3);b||(b=0);jQuery(this).off("click.scrolly").on("click.scrolly",function(f){var a=jQuery(this),c=a.attr("href"),e;"#"==c.charAt(0)&&(1<c.length&&0<(e=jQuery(c)).length)&&(c=e.offset().top,a.hasClass("scrolly-centered")?a=c-($(window).height()-e.outerHeight())/2:(a=Math.max(c,0),b&&(a="function"==typeof b?a-b():a-b)),f.preventDefault(),jQuery("body,html").stop().animate({scrollTop:a},d,"swing"))})};

	// scrollgress | (c) n33.co | MIT
		(function(){var e="scrollwatch",t="length",n=null,r="top",i="rangeMin",s="rangeMax",o="scrollgress",u="data",a="scrollwatch-state",f=!1,l="anchor",c="unscrollwatch",h="unscrollgress",p="removeData",d="element",v="-id",m="scroll.",g="height",y="scrollTop",b="center",w="bottom",E=$(window),S=$(document),x=1e3;jQuery.fn[e]=function(c){var h,p,d,v;if(this[t]>1){for(h=0;h<this[t];h++)$(this[h])[e](c);return this}return p=jQuery.extend({range:.5,rangeMin:n,rangeMax:n,anchor:r,init:n,on:n,off:n,delay:0},c),p[i]===n&&(p[i]=-1*p.range),p[s]===n&&(p[s]=p.range),d=$(this),p.init&&p.init(d),d[u](a,-1)[o](function(e){window.clearTimeout(v),v=window.setTimeout(function(){var t,n,r=parseInt(d[u](a));if(r==0||r==-1){t=p[i]===f||e>=p[i],n=p[s]===f||e<=p[s];if(t&&n){d[u](a,1),p.on&&p.on(d);return}}if(r==1||r==-1){t=p[i]!==f&&e<p[i],n=p[s]!==f&&e>p[s];if(t||n){d[u](a,0),p.off&&p.off(d);return}}},p.delay)},{anchor:p[l]},e),d},jQuery.fn[c]=function(){var n,r;if(this[t]>1){for(n=0;n<this[t];n++)$(this[n])[c]();return this}return r=$(this),r[p](a,0)[h](e),r},jQuery.fn[o]=function(e,n,i){var s,a,f,c,h;if(this[t]==0)return $(this);if(this[t]>1){for(s=0;s<this[t];s++)$(this[s])[o](e,n,i);return $(this)}return i||(i=o),a=jQuery.extend({anchor:r,direction:"both",scope:d,easing:0},n),f=$(this),f[u](i+v)||f[u](i+v,x++),c=f[u](i+v),h=m+i+"-"+c,E.off(h).on(h,function(){var t,n=f.offset()[r],i=f.outerHeight(),s=S[g]();switch(a.scope){default:case d:switch(a[l]){default:case r:t=(n-E[y]())/i*-1;break;case b:t=(n-E[y]()-(E[g]()-i)/2)/i*-1;break;case w:t=(n-E[y]()-(E[g]()-i))/i*-1}break;case"window":switch(a[l]){default:case r:t=(n-E[y]())/E[g]()*-1;break;case b:t=(n-E[y]()-(E[g]()-i)/2)/E[g]()*-1;break;case w:t=(n-E[y]()-(E[g]()-i))/E[g]()*-1}}a.direction=="forwards"?t=Math.max(0,t):a.direction=="backwards"&&(t=Math.min(0,t)),t>0?t=Math.max(0,t-a.easing/100):t<0&&(t=Math.min(0,t+a.easing/100)),e(t,f)}).trigger("scroll"),f},jQuery.fn[h]=function(e){var n,r,i,s;if(this[t]==0)return $(this);if(this[t]>1){for(n=0;n<this[t];n++)$(this[n])[h](e);return $(this)}return e||(e=o),r=$(this),r[u](e+v)?(i=r[u](e+v),s=m+e+"-"+i,E.off(s),r[p](e+v),r):r}})();

/*********************************************************************************/
/* Initialize                                                                    */
/*********************************************************************************/

	// skel
		skel.init(_settings.skel);

	// jQuery
		jQuery(function() {

			var $window = $(window),
				$body = $('body'),
				$header = $('#header'),
				$all = $body.add($header),
				sectionTransitionState = false;

			// Disable animations/transitions until everything's loaded
				$all
					.addClass('loading')
					.fadeTo(0, 0.0001);
				
				$window.load(function() {
					window.setTimeout(function() {
						$all
							.fadeTo(_settings.fadeInSpeed, 1, function() {
								$body.removeClass('loading');
								$all.fadeTo(0, 1);
							});
					}, _settings.fadeInSpeed);
				});
				
			// Settings overrides
			
				// IE <= 9?
					if (skel.vars.IEVersion <= 9)
						_settings.useSectionTransitions = false;
			
				// Touch?
					if (skel.vars.isTouch) {
					
						// Disable section transitions
							_settings.useSectionTransitions = false;
							
						// Turn on touch mode
							$body.addClass('touch');
					
					}
					
				// Mobile?
					if (skel.isActive('mobile')) {
					
						// Reduce poptrox windowMargin
							_settings.poptrox.windowMargin = 5;
					
					}

			// Forms
				if (skel.vars.IEVersion < 10)
					$('form').formerize();

			// Gallery
				$('.gallery').poptrox(_settings.poptrox);

			// Events
			
				// State change (skel)
					skel.onStateChange(function() {

						// Force touch mode if we're in mobile
							if (skel.isActive('mobile'))
								$body.addClass('touch');
							else if (!skel.vars.isTouch)
								$body.removeClass('touch');
					
						// Section transitions
							if (_settings.useSectionTransitions) {
							
								if (!skel.isActive('mobile')) {
									
									if (!sectionTransitionState) {
									
										sectionTransitionState = true;
										
										// Generic sections
											$('.main.style1')
												.scrollwatch({
													delay:		50,
													range:		0.25,
													anchor:		'center',
													init:		function(t) { t.addClass('inactive'); },
													on:			function(t) { t.removeClass('inactive'); },
													off:		function(t) { t.addClass('inactive'); }
												});

											$('.main.style2')
												.scrollwatch({
													delay:		50,
													range:		0.5,
													anchor:		'center',
													init:		function(t) { t.addClass('inactive'); },
													on:			function(t) { t.removeClass('inactive'); },
													off:		function(t) { t.addClass('inactive'); }
												});
									
										// Work
											$('#work')
												.scrollwatch({
													delay:		25,
													range:		0.6,
													anchor:		'center',
													init:		function(t) { t.find('.row.images').addClass('inactive'); },
													on:			function(t) {
																	var	rows = t.find('.row.images'),
																		length = rows.length,
																		n = 0;
																	
																	rows.each(function() {
																		var row = $(this);
																		window.setTimeout(function() {
																			row.removeClass('inactive');
																		}, 100 * (length - n++));
																	});
																},
													off:		function(t) {
																	var	rows = t.find('.row.images'),
																		length = rows.length,
																		n = 0;
																	
																	rows.each(function() {
																		var row = $(this);
																		window.setTimeout(function() {
																			row.addClass('inactive');
																		}, 100 * (length - n++));
																	});
																}
												});

										// Contact
											$('#contact')
												.scrollwatch({
													delay:		25,
													range:		0.5,
													anchor:		'center',
													init:		function(t) { t.addClass('inactive'); },
													on:			function(t) { t.removeClass('inactive'); },
													off:		function(t) { t.addClass('inactive'); }
												});

										// Force scroll event
											window.setTimeout(function() {
												$window
													.trigger('resize')
													.trigger('scroll');
											}, 0);
												
									}

								}
								else {

									sectionTransitionState = false;

									// Generic sections
										$('.main.style1')
											.unscrollwatch()
											.removeClass('inactive');
										
										$('.main.style2')
											.unscrollwatch()
											.removeClass('inactive');
								
									// Work
										$('#work')
											.unscrollwatch()
											.find('.row.images').removeClass('inactive');

									// Contact
										$('#contact')
											.unscrollwatch()
											.removeClass('inactive');
								
								}

							}
						
					});

				// Resize
					$window.resize(function() {

						// Disable animations/transitions
							$body.addClass('loading');

						window.setTimeout(function() {

							// Update scrolly links
								$('a[href^=#]').scrolly(1500, $header.outerHeight() - 1);

							// Resize fullscreen elements
								if (_settings.useFullScreen
								&&	!skel.isActive('mobile')) {
									$('.fullscreen').each(function() {
									
										var $t = $(this),
											$c = $t.children('.content'),
											x = Math.max(100, Math.round(($window.height() - $c.outerHeight() - $header.outerHeight()) / 2) + 1);

										$t
											.css('padding-top', x)
											.css('padding-bottom', x);
									
									});
								}
								else
									$('.fullscreen')
										.css('padding-top', '')
										.css('padding-bottom', '');
								
								
							// Re-enable animations/transitions
								window.setTimeout(function() {
									$body.removeClass('loading');
									$window.trigger('scroll');
								}, 1000);

						}, 100);
					
					});
					
			// Trigger events on load
				$window.load(function() {
					$window
						.trigger('resize')
						.trigger('scroll');
				});

		});