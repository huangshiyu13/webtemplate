/*
	Striped 2.5 by HTML5 Up!
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

skel.init(
	{
		prefix: 'css/style',
		resetCSS: true,
		useOrientation: true,
		breakpoints: {
			'mobile': {
				range: '-640',
				lockViewport: true,
				containers: 'fluid',
				grid: {
					collapse: true
				}
			},
			'desktop': {
				range: '641-',
				containers: 1200
			},
			'wide': {
				range: '1201-'
			},
			'narrow': {
				range: '641-1200',
				containers: 960
			},
			'narrower': {
				range: '641-1000'
			}
		}
	},
	{
		panels: {
			panels: {
				sidePanel: {
					breakpoints: 'mobile',
					position: 'left',
					style: 'reveal',
					size: '250px',
					html: '<div data-action="moveElement" data-args="sidebar"></div>'			
				},
				sidePanelNarrower: {
					breakpoints: 'narrower',
					position: 'left',
					style: 'reveal',
					size: '300px',
					html: '<div data-action="moveElement" data-args="sidebar"></div>'			
				}
			},
			overlays: {
				titleBar: {
					breakpoints: 'mobile',
					position: 'top-left',
					width: '100%',
					height: 44,
					html: '<div class="toggle " data-action="panelToggle" data-args="sidePanel"></div>' +
						  '<div class="title" data-action="copyHTML" data-args="logo"></div>'
				},
				titleBarNarrower: {
					breakpoints: 'narrower',
					position: 'top-left',
					width: '100%',
					height: 60,
					html: '<div class="toggle " data-action="panelToggle" data-args="sidePanelNarrower"></div>' +
						  '<div class="title" data-action="copyHTML" data-args="logo"></div>'
				}
			}
		}
	}
);

$(function() {

	var $window = $(window), $document = $(document), $sc = $('#sidebar, #content'), tid;
	
	$window.load(function() {

		$window.resize(function() {
			window.clearTimeout(tid);
			tid = window.setTimeout(function() {
				if (skel.isActive('mobile') || skel.isActive('narrower'))
					$sc.css('min-height', '0').css('height', 'auto');
				else
					$sc.css('min-height', $window.height()).css('height', $document.height());
			}, 100);
		}).trigger('resize');
		
	});

});