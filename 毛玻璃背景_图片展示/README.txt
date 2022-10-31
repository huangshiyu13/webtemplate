Parallelism 1.1 by HTML5 UP
html5up.net | @n33co
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


It's done! Parallelism was an idea I mocked up a few months ago but, due to other
committments, didn't get around to putting to code until recently. Different to
my more general-purpose freebies, this one's specifically built for portfolio use
but still delivers quite a bit of customizability (via CSS and a number of settings).
For more on how it works and how to make the most of it, jump on down to the 
"Instructions" section.

Demo images* are courtesy of the supremely talented photographer Felicia Simion.
If you like photography or just enjoy being blown away by awesome stuff, check
out her portfolio for more stunning images:

http://ineedchemicalx.deviantart.com/

* Not included with this download (replaced with generic placeholders). Note that I only
have permission to use her images in my on-site demos, so do NOT download and use any of
Felicia's work without her explicit permission.

As usual, feedback, bug reports, and comments are not only welcome, but strongly
encouraged :)


AJ
n33.co @n33co dribbble.com/n33



Instructions
============
	

	Terminology
	-----------
	
		- Item: A generic container of stuff. Said stuff can be a thumbnail, the actual
		  page header, or whatever else you deem item worthy. Items can vary in width but
		  are all the same height (230px by default, but you can change this with a setting).
		  
		- Thumb: A special type of item that contains a thumbnail image and a title. Short
		  for thumbnail. No relation to actual nails.
		  
		- Reel: A whole bunch of items strung together, and the main point of interaction
		  for users.
	

	How it Works
	------------
	
		1. You (the user) add a bunch of items to the reel. Items must be assigned a width
		   (in pixels) using the "data-width" attribute. A few examples:

				Generic
				-------

					<div class="item" data-width="300">
						This is a generic item. Put whatever you want here.
					</div>
					
					(width = whatever you want)
					
				Thumbnail
				---------
				
					<article class="item thumb" data-width="275">
						<h2>Image Title</h2>
						<a href="path/to/fullsize.jpg"><img src="path/to/thumbnail.jpg" alt=""></a>
					</article>
				
					(width = width of the thumbnail image)
				
				Page Header (which, by the way, is entirely optional)
				-----------------------------------------------------

					<div id="header" class="item" data-width="400">
						<h1>Parallelism</h1>
						<p>A responsive portfolio site<br />
						template by HTML5 UP</p>
					</div>
					
					(width = whatever you want)

		   Congratulations. You now have a reel full of items.

		2. Parallelism looks at the window, figures out how many rows it can fit in the
		   available (vertical) space, then breaks up the reel into that many rows.
		 
		3. With the reel broken up, Parallelism goes through and does a bit of scaling
		   on each item to ensure the widths of each row are identical.
		   
		4. Profit !@#!#%$(!$%(*

		So yeah, pretty simple. Also, tons of settings to mess with if you're into that
		sort of thing (below).


	Notes
	-----
	
		- Scrolling is handled in 3 ways:
		
			1. Scrolling up/down using the mouse wheel (down = scroll right, up = scroll left)
			2. Using the left/right arrow keys ("Scroll Keys")
			3. Moving the mouse cursor to the far left or far right of the screen ("Scroll Zones")
	
			Methods #2 and #3 can be disabled and customized using settings (below). Method #1
			is always enabled.
	
		- If you don't have enough items to require scrolling, the reel will just be centered on
		  the screen.
		
		- Rows will automatically factor when the viewport is resized.

		- All modern desktop/mobile browsers are supported (as well as IE as far back as 8, though
		  7 is still pretty usable).
	

	Settings
	--------

		Put these at the top of js/config.js to override the defaults.

		popupOverlayColor
			Popup overlay color (default: '#1a1f2c')
		
		popupOverlayOpacity
			Popup overlay opacity (default: 0.75)

		autoStyleMobile
			If true, mobile mode will get some automatic styling (default: true)
		
		centerVertically
			If true, reel will be vertically centered (default: true)

		introDelay
			Delay (in ms) before showing the reel (default: 600)
			
		introSpeed
			Speed (in ms) at which to fade in reel (default: 750)
			
		itemHeight
			Height (in px) of items (default: 230)
		
		itemWidth
			Default width (in px) of width (default: 300)
			
		marginBottom	
			Margin (in px) to preserve at the bottom of the viewport (default: 40)
			
		marginTop
			Margin (in px) to preserve at the top of the viewport (default: 0)
			
		maxRows
			Maximum number of rows (default: 3)
		
		minRows
			Minimum number of rows (default: 1)
		
		padding
			Padding (in px) between items (0 = no padding) (default: 10)
		
		paddingColor
			Padding color (default: '#fff')
		
		resetScroll
			If true, reel scroll will reset on page refresh (default: true)
		
		scrollFactor
			Scales the scroll delta (1 = normal, 2 = double, 0.5 = half, etc.) (default: 1)
		
		useScrollKeys
			If true, the left/right arrow keys will scroll the reel (default: true)
		
		scrollKeyAmount
			Scroll amount when using keys (default: 50)

		scrollWheelTarget
			Determines where scrollwheel events should be captured ('window' or 'reel') (default: 'window')
		
		useScrollZones
			If true, moving the cursor to the leftmost/rightmost edges of the reel will scroll it (default: true)
		
		scrollZoneAmount
			Scroll amount when using scroll zones (default: 10)
		
		scrollZoneDelay
			Time (in ms) to wait between scrolls when the cursor is in a scroll zone (default: 20)
		
		scrollZoneWidth
			Width of scroll zones (default: 40)
		
		thumbDelay
			Delay (in ms) before showing thumbnails (default: 1200)
		
		thumbDelaySpread
			Spread (in ms) to randomly stagger thumbnails (0 = don't stagger) (default: 1500)
		
		thumbSpeed
			Speed (in ms) at which to fade in thumbnails (default: 750)
		
		useBlurFilter
			If true, page will blur slightly when the popup is displayed (webkit only) (default: true)



Credits
=======


	Images (Demo Only)
		Felicia Simion (http://ineedchemicalx.deviantart.com/)
		- Pasadena (http://ineedchemicalx.deviantart.com/art/Pasadena-357650036)
		- Your really got me (http://ineedchemicalx.deviantart.com/art/You-really-got-me-345249340)
		- Ad Infinitum (http://ineedchemicalx.deviantart.com/art/Ad-infinitum-354203162)
		- Different. (http://ineedchemicalx.deviantart.com/art/Different-353708988)
		- Elysium (http://ineedchemicalx.deviantart.com/art/Elysium-355393900)
		- Kingdom of the Wind (http://ineedchemicalx.deviantart.com/art/Kingdom-of-the-Wind-348268044)
		- The Pursuit (http://ineedchemicalx.deviantart.com/art/The-Pursuit-355003425)
		- Boundless (http://ineedchemicalx.deviantart.com/art/Boundless-291831118)
		- The Spectators (http://ineedchemicalx.deviantart.com/art/The-Spectators-342155982)
		
	Icons
		Font Awesome (http://fortawesome.github.com/Font-Awesome/)

	Other
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		jquery.poptrox (n33.co)
		skelJS (skeljs.org)