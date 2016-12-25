/*
	Parallelism 1.1 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


$(function() { h5u_parallelism.init({

	/*

		Put your own settings here (they'll override the defaults). eg.

		itemHeight: 250,
		padding: 5
		
		Refer to README.txt for details.

	*/

});});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//          Don't edit anything below this line unless you know what you're doing!          //
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// skel Config
//////////////////////////////////////////////////////////////////////////////////////////////

	window._skel_config = {
		prefix: 'css/style',
		resetCSS: true,
		pollOnce: true,
		containers: 'fluid',
		grid: { gutters: 4 },
		breakpoints: {
			'desktop': '481-',
			'mobile': {
				range: '-480',
				lockViewport: true
			}
		}
	};

//////////////////////////////////////////////////////////////////////////////////////////////
// jQuery Helpers
//////////////////////////////////////////////////////////////////////////////////////////////

	// Applies browser prefixed CSS in one call
		jQuery.fn.h5u_xcss = function(k, v) { 
			return $(this)
				.css('-webkit-' + k, v)
				.css('-moz-' + k, v)
				.css('-o-' + k, v)
				.css('-ms-' + k, v)
				.css(k, v);
		};

//////////////////////////////////////////////////////////////////////////////////////////////
// Parallelism
//////////////////////////////////////////////////////////////////////////////////////////////

	var h5u_parallelism = (function($) { var _ = {

		//////////////////////////////////////////////////////////////////////////////////////
		// Properties
		//////////////////////////////////////////////////////////////////////////////////////

			// Settings
				settings: {

					//////////////////////////////////////////////////////////////////////////
					// DON'T EDIT THESE! OVERRIDE THEM AT THE TOP OF THIS FILE.
					//////////////////////////////////////////////////////////////////////////

					popupOverlayColor:		'#1a1f2c',	// Popup overlay color
					popupOverlayOpacity:	0.75,		// Popup overlay opacity

					// Mobile only
						autoStyleMobile:	true,		// If true, mobile mode will get some automatic styling
					
					// Desktop only
						centerVertically:	true,		// If true, reel will be vertically centered 
						introDelay:			600,		// Delay (in ms) before showing the reel
						introSpeed:			750,		// Speed (in ms) at which to fade in reel
						itemHeight:			230,		// Height (in px) of items
						itemWidth:			300,		// Default width (in px) of width
						marginBottom:		40,			// Margin (in px) to preserve at the bottom of the viewport
						marginTop:			0,			// Margin (in px) to preserve at the top of the viewport
						maxRows:			3,			// Maximum number of rows
						minRows:			1,			// Minimum number of rows
						padding:			10,			// Padding (in px) between items (0 = no padding)
						paddingColor:		'#fff',		// Padding color
						resetScroll:		true,		// If true, reel scroll will reset on page refresh
						scrollFactor:		1,			// Scales the scroll delta (1 = normal, 2 = double, 0.5 = half, etc.)
						scrollKeyAmount:	50,			// Scroll amount when using keys
						scrollWheelTarget:	'window',	// Determines where scrollwheel events should be captured ('window' or 'reel')
						scrollZoneAmount:	10,			// Scroll amount when using scroll zones
						scrollZoneDelay:	20,			// Time (in ms) to wait between scrolls when the cursor is in a scroll zone
						scrollZoneWidth:	40,			// Width of scroll zones
						thumbDelay:			1200,		// Delay (in ms) before showing thumbnails
						thumbDelaySpread:	1500,		// Spread (in ms) to randomly stagger thumbnails (0 = don't stagger)
						thumbSpeed:			750,		// Speed (in ms) at which to fade in thumbnails
						useBlurFilter:		true,		// If true, page will blur slightly when the popup is displayed (webkit only)
						useScrollKeys:		true,		// If true, the left/right arrow keys will scroll the reel
						useScrollZones:		true		// If true, moving the cursor to the leftmost/rightmost edges of the reel will scroll it
				},
			
			// Touch input status
				isTouch: false,
			
			// IE
				IEVersion: 10000,
			
			// Objects cache
				objects: {},

		//////////////////////////////////////////////////////////////////////////////////////
		// Methods
		//////////////////////////////////////////////////////////////////////////////////////

			// Initializes desktop mode
				initDesktop: function() {

					var $SZ = $(''), $SZLeft, $SZRight;
						
					var	windowHeight = _.objects.window.height() - _.settings.marginTop - _.settings.marginBottom,
						windowWidth = _.objects.window.width(),
						itemHeight = _.settings.itemHeight,
						itemCount = _.objects.items.length,
						itemsWidth = 0,
						rows = 0,
						rowWidth,
						SZIntervalId;
					
					// Window
						_.objects.window._parallelism_update = function() {
							var i, j, x, y, t;

							// Calculate number of rows we can fit on the screen
								rows = Math.min(Math.max(Math.floor(windowHeight / itemHeight) - 1, 1), _.settings.maxRows);

							// Reduce row count if we have more than we need
								while ( rows > _.settings.minRows && (itemsWidth / rows) < windowWidth )
									rows--;

							// Get average row width
								rowWidth = Math.ceil( (itemsWidth / rows) * 1.1 );

							// Resize items
								var w = 0, iw;
								var rowStart = 0, rowPos = 0, rowEnded = false;
								
								_.objects.items.each(function(i) {
									var $item = $(this);
									
									iw = $item.data('width');
									
									// Determine end row conditions
										// Current item would push us past the row width
											if (w + iw >= rowWidth)
											{
												rowEnded = true;
												rowEnd = i - 1;
											}
										// Current item is the last item
											else if (i + 1 >= itemCount)
											{
												w += iw;
												rowEnded = true;
												rowEnd = i;
											}
									
									// Did the row end?
										if (rowEnded)
										{
											var pt = 0;
											
											// Rescale the row's items
												_.objects.items.slice(rowStart, rowEnd + 1).each(function(j) {
													var $item = $(this);
													var p = (($item.data('width') / w) * 100.00);
													
													if (pt + p > 100.00
													||	( (rowStart + j) == rowEnd && pt + p < 100.00))
														 p = 100.00 - pt;

													$item.css('width', p + '%');
													pt += p;
													
												});
											
											w = 0;
											rowStart = i;
											rowPos++;
											rowEnded = false;
										}
									
									w += iw;
								});

							// Resize reel
								_.objects.reel
									.css('height', (itemHeight * rows) + (_.settings.padding * 2))
									.css('width', rowWidth);
							
							// Reposition main (if applicable)
								_.objects.main
									.css('height', (itemHeight * rows) + (_.settings.padding * 2));
							
								if (_.settings.centerVertically)
									_.objects.main
										.css('top', '50%')
										.css('margin-top', (-1 * (_.objects.main.outerHeight() / 2)) + _.settings.marginTop - _.settings.marginBottom);

							// Resize/reposition SZs
								window.setTimeout(function() {	
									$SZ
										.css('height', _.objects.main.outerHeight())
										.css('top', _.objects.main.offset().top);
								}, _.settings.introDelay);
						};

						_.objects.window.resize(function() {
							// Update window dimensions
								windowWidth = _.objects.window.width();
								windowHeight = _.objects.window.height() - _.settings.marginTop - _.settings.marginBottom;
						
							// Row count changed? Re-update
								if (Math.max(Math.floor(windowHeight / itemHeight) - 1, 1) != rows)
									_.objects.window._parallelism_update();

							// Update scroll zones
								$SZ._parallelism_update();
						});
						
					// Reel
						_.objects.reel
							.css('overflow-y', 'hidden')
							.css('margin', '0 auto')
							.css('border', 'solid ' + _.settings.padding + 'px ' + _.settings.paddingColor)
							.css('box-shadow', 'inset 0px 0px 0px ' + _.settings.padding + 'px ' + _.settings.paddingColor);

						if (_.IEVersion < 9)
							_.objects.reel.show();
						if (_.IEVersion < 10)
						{
							_.objects.reel.fadeTo(0,0.0001);

							window.setTimeout(function() {
								_.objects.reel.fadeTo(_.settings.introSpeed, 1);
							}, _.settings.introDelay);
						}
						else
						{
							_.objects.reel.css('opacity', 0);

							window.setTimeout(function() {
								_.objects.reel
									.h5u_xcss('transition', 'opacity ' + (_.settings.introSpeed / 1000.00) + 's ease-in-out')
									.css('opacity', 1);
							}, _.settings.introDelay);
						}

					// Items
						_.objects.items
							.css('box-shadow', '0px 0px 0px ' + _.settings.padding + 'px ' + _.settings.paddingColor)
							.css('border', 'solid ' + _.settings.padding + 'px ' + _.settings.paddingColor);
						
						_.objects.items.each(function(i) {
							var	$item = $(this), $img = $item.find('img');
							var w, h;

							w = parseInt($item.data('width'));
							
							if (!w)
								w = _.settings.itemWidth;
							
							h = _.settings.itemHeight;
						
							// Add to total width
								itemsWidth += w;

							// Item
								$item
									.css('position', 'relative')
									.css('width', w)
									.css('height', h);
							
							// Image?
								if ($img.length > 0)
								{
									var $itemInner, $h2;
									
									// img
										$img
											.css('position', 'absolute')
											.css('width', '100%')
											.css('height', 'auto')
											.css('min-height', '100%')
											.css('top', 0)
											.css('left', 0)
											.attr('title', $item.text());

									// inner (for fade effect)
										$item.wrapInner('<div class="inner" />');
										$itemInner = $item.children('.inner');
										$itemInner
											.css('position', 'relative')
											.css('display', 'block')
											.css('-webkit-backface-visibility', 'hidden')
											.css('width', '100%')
											.css('height', '100%');
											
										if (_.IEVersion < 9)
											$itemInner.show();
										else if (_.IEVersion < 10)
										{
											$itemInner.hide();
											
											$img
												.load(function() {
													window.setTimeout(function() {
														$itemInner.fadeIn(_.settings.thumbSpeed);
													}, _.settings.thumbDelay + Math.floor(Math.random() * _.settings.thumbDelaySpread));
												});
										}
										else
										{
											$itemInner.css('opacity', 0);
											
											$img
												.load(function() {
													$itemInner.h5u_xcss('transition', 'opacity ' + (_.settings.thumbSpeed / 1000.00) + 's ease-in-out');
													
													window.setTimeout(function() {
														$itemInner.css('opacity', 1);
													}, _.settings.thumbDelay + Math.floor(Math.random() * _.settings.thumbDelaySpread));
												});
										}
										
										$img.attr('src', $img.attr('src'));
								}
						});

					// Main
						if (_.isTouch)
							_.objects.main
								.css('overflow-x', 'auto')
								.css('overflow-y', 'hidden')
								.h5u_xcss('overflow-scrolling', 'touch');
						else
							_.objects.main.css('overflow', 'hidden');
					
					// Scrolling

						// Scroll Wheel

							if (_.IEVersion < 9)
								_.objects.main.css('overflow-x', 'scroll');
							else
							{
								var scrollHandler = function(e) {
									var	delta = (e.detail ? e.detail * -10 : e.wheelDelta) * _.settings.scrollFactor;
									_.objects.main.scrollLeft( _.objects.main.scrollLeft() - delta );
									$SZ._parallelism_update();
									e.preventDefault();
									e.stopPropagation();
								};

								var st;
								
								if (_.settings.scrollWheelTarget == 'reel')
									st = _.objects.main[0];
								else
									st = _.objects.window[0];
									
								st.addEventListener('DOMMouseScroll', scrollHandler, false);
								st.addEventListener('mousewheel', scrollHandler, false);
								
							}
							
							if (_.settings.resetScroll)
								window.setTimeout(function() {
									_.objects.main.scrollLeft(0);
								}, 0);

						// Scroll Zones
							if (!_.isTouch && _.settings.useScrollZones)
							{
								_.objects.body.append('<div class="SZRight" style="right: 0;" />');
								_.objects.body.append('<div class="SZLeft" style="left: 0;" />');
								
								$SZLeft = _.objects.body.children('.SZLeft');
								$SZRight = _.objects.body.children('.SZRight');
								$SZ = $SZLeft.add($SZRight);
								
								$SZ
									.css('position', 'fixed')
									.css('width', _.settings.scrollZoneWidth)
									.css('height', 100)
									.css('z-index', 100)
									.css('background', 'rgba(255,255,255,0)') // Required due to a weird IE bug (affects <=10)
									.css('top', 0);
									
								$SZ._parallelism_update = function() {
									if (_.objects.main.scrollLeft() == 0)
										$SZLeft.hide();
									else
										$SZLeft.show();
										
									if (_.objects.main.scrollLeft() + $(window).width() >= _.objects.reel.outerWidth())
										$SZRight.hide();
									else
										$SZRight.show();
								};
								
								$SZRight.bind('mouseenter', function(e) {
									SZIntervalId = window.setInterval(function() {
										_.objects.main.scrollLeft( _.objects.main.scrollLeft() + (_.settings.scrollZoneAmount * _.settings.scrollFactor) );
										$SZ._parallelism_update();
									}, _.settings.scrollZoneDelay);
									return false;
								});

								$SZLeft.bind('mouseenter', function(e) {
									SZIntervalId = window.setInterval(function() {
										_.objects.main.scrollLeft( _.objects.main.scrollLeft() - (_.settings.scrollZoneAmount * _.settings.scrollFactor) );
										$SZ._parallelism_update();
									}, _.settings.scrollZoneDelay);
									return false;
								});
								
								$SZ.bind('mouseleave', function(e) {
									window.clearInterval(SZIntervalId);
								});
							}
							else
								$SZ._parallelism_update = function() {};

						// Scroll Keys
							if (_.settings.useScrollKeys)
							{
								_.objects.window.keydown(function(e) {
									if ($('.poptrox-popup').is(':visible'))
										return;
									
									switch (e.keyCode)
									{
										case 39:
											window.clearInterval(SZIntervalId);
											_.objects.main.scrollLeft( _.objects.main.scrollLeft() + (_.settings.scrollKeyAmount * _.settings.scrollFactor) );
											$SZ._parallelism_update();
											return false;
											
										case 37:
											window.clearInterval(SZIntervalId);
											_.objects.main.scrollLeft( _.objects.main.scrollLeft() - (_.settings.scrollKeyAmount * _.settings.scrollFactor) );
											$SZ._parallelism_update();
											return false;
											
										default:
											break;
									}
								});							
							}

					// Poptrox
						_.objects.reel.poptrox({
							onPopupClose: (_.settings.useBlurFilter ? (function() { _.objects.wrapper.removeClass('overlayed'); }) : null),
							onPopupOpen: (_.settings.useBlurFilter ? (function() { _.objects.wrapper.addClass('overlayed'); }) : null),
							overlayColor: _.settings.popupOverlayColor,
							overlayOpacity: _.settings.popupOverlayOpacity,
							popupCloserText: '',
							popupLoaderText: '',
							selector: '.thumb a',
							usePopupCaption: true,
							usePopupCloser: false,
							usePopupDefaultStyling: false,
							usePopupNav: true
						});

					// Trigger resize event
						_.objects.window.trigger('resize');	
				},

			// Initializes mobile mode
				initMobile: function() {

					// Auto styling?
						if (_.settings.autoStyleMobile)
						{
							// Reel
								_.objects.reel
									.css('border', 'solid ' + Math.ceil(_.settings.padding / 2) + 'px ' + _.settings.paddingColor)
									.css('border-bottom', 0);

							// Items
								_.objects.items
									.css('border-bottom', 'solid ' + Math.ceil(_.settings.padding / 2) + 'px ' + _.settings.paddingColor);
								
								_.objects.items.filter('.thumb')
									.find('img')
										.css('width', '100%')
										.css('height', 'auto');
						}

					// Poptrox
						_.objects.reel.poptrox({
							onPopupClose: (_.settings.useBlurFilter ? (function() { _.objects.wrapper.removeClass('overlayed'); }) : null),
							onPopupOpen: (_.settings.useBlurFilter ? (function() { _.objects.wrapper.addClass('overlayed'); }) : null),
							overlayColor: _.settings.popupOverlayColor,
							overlayOpacity: _.settings.popupOverlayOpacity,
							popupSpeed: 0,
							selector: '.thumb a',
							useBodyOverflow: false,
							usePopupCaption: false,
							usePopupCloser: false,
							usePopupDefaultStyling: false,
							usePopupLoader: false,
							usePopupNav: false,
							windowMargin: 0
						});
				
				},

			// Main init method
				init: function(userSettings) {

					// Build settings
						$.extend(_.settings, userSettings);

					// Get objects
						_.objects.window = $(window),
						_.objects.wrapper = $('#wrapper'),
						_.objects.body = $('body'),
						_.objects.main = $('#main'),
						_.objects.reel = $('#reel'),
						_.objects.items = _.objects.main.find('.item');

					// Do other stuff
						_.isTouch = !!('ontouchstart' in window);
						
						if (navigator.userAgent.match(/MSIE ([0-9]+)\./))
							_.IEVersion = RegExp.$1;

					// Initialize appropriate mode
						if (skel.isActive('mobile'))
							_.initMobile();
						else
							_.initDesktop();

				}

	}; return _; })(jQuery);
