/*
	Telephasic 1.1 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

skel.init({
	/*
		Docs @ http://skeljs.org/docs
	*/
	prefix: 'css/style',
	resetCSS: true,
	useOrientation: true,
	boxModel: 'border',
	breakpoints: {
		'n1': { range: '*', containers: 1200, grid: { gutters: 50 } },
		'n2': { range: '-1280', containers: 960, grid: { gutters: 40 } },
		'n3': { range: '-1080', containers: 'fluid', grid: { gutters: 40 } },
		'n4': { range: '-820', lockViewport: true, containers: 'fluid', grid: { gutters: 30, collapse: 1 } },
		'n5': { range: '-640', lockViewport: true, containers: 'fluid', grid: { gutters: 30, collapse: 2 } },
		'n6': { range: '-568', lockViewport: true, containers: 'fluid', grid: { gutters: 15, collapse: 2 } }
	}
},{
	/*
		Docs @ http://skeljs.org/panels/docs
	*/
	panels: {
		panels: {
			navPanel: {
				breakpoints: 'n6',
				position: 'top',
				size: '75%',
				/*
					Note: Since there's no explicit "Home" link in the nav I've manually added one to the top of the navPanel.
				*/
				html: '<a href="index.html" class="link depth-0">Home</a><div data-action="navList" data-args="nav"></div>'
			}
		},
		overlays: {
			navButton: {
				breakpoints: 'n6',
				position: 'top-center',
				width: 100,
				height: 50,
				html: '<div class="toggle" data-action="togglePanel" data-args="navPanel"></div>'
			}
		}
	}
});

jQuery(function() {
	jQuery('#nav > ul').dropotron({ 
		offsetY: 0,
		mode: 'fade',
		speed: 300,
		alignment: 'center',
		noOpenerFade: true
	});
});