// JavaScript Document

//prepare variables
var degree = 0;

var maxtalk = 0;
var talkbubble = 1;


$(document).ready(function () {

    //clear input text when clicked
    inputTextFix();

    //count talk bubbles
    $("div.bubble-options p.dog-bubble").each(function () {
        maxtalk++;
    });

});

//function that implements a input text hotfix; remove if you don't like it
function inputTextFix() {

    $("input[type='text'], input[type='password']").each(function () {

        //each time a user clicks on a input field
        $(this).click(function () {

            //save the current value, if any
            if ($(this).attr("value") != "") {

                $(this).attr("previous_value", $(this).attr("value"));
                $(this).attr("value", "");

            }

        });

        //on blur, if left empty, restore the saved value, if any
        $(this).blur(function () {

            if ($(this).attr("value") == "")
                $(this).attr("value", $(this).attr("previous_value"));

        });

    });

}

//function that handles the universal preloader positioning and alignment
function universalPreloader() {

    var pre = $("#universal-preloader>div");

    //centering function
    jQuery.fn.center = function () {
        this.css("position", "absolute");
        this.css("top", (($(window).height() - this.outerHeight()) / 2) + "px");
        this.css("left", (($(window).width() - this.outerWidth()) / 2) + "px");
        return this;
    }

    //center to the screen
    pre.center();

    //run each time user resizes window
    $(window).resize(function () {

        pre.center();

    });

}

//function that disposes the universal preloader when everything is loaded; called on window.load event
function universalPreloaderRemove() {

    var parentD = $("#universal-preloader");
    var pre = $("#universal-preloader>div");

    var logo = $("#universal-preloader .universal-preloader-logo");
    var loader = $("#universal-preloader .universal-preloader-preloader");

    //when the logo and ajax-loader fades out, fade out the curtain; when that completes, remove the universal preloader from the DOM
    pre.delay(0).animate({opacity: '0'}, {
        duration: 400, complete: function () {

            parentD.animate({opacity: '0'}, {
                duration: 400, complete: function () {

                    parentD.remove();

                }
            });

        }
    });


}


//function that handles the planet animation
function rotate() {

    $planet = $("div.planet");

    //CSS3
    $planet.css({'transform': 'rotate(' + degree + 'deg)'});
    // For webkit browsers: e.g. Chrome
    $planet.css({WebkitTransform: 'rotate(' + degree * 2 + 'deg)'});
    // For Mozilla browser: e.g. Firefox
    $planet.css({'-moz-transform': 'rotate(' + degree + 'deg)'});
    //IE9
    $planet.css({'-ms-transform': 'rotate(' + degree + 'deg)'});
    //Opera
    $planet.css({'-o-transform': 'rotate(' + degree + 'deg)'});

    // Animate rotation with a recursive call
    var timer = setTimeout(function () {
        degree -= 0.1;
        rotate();
    }, 1);

}

//function that handles dog movement animation
function dogRun() {

    var dog = $("div.dog");

    var timer2 = setTimeout(function () {

        if (dog.css("background-position") == "0px 0px")
            dog.css({"background-position": "-80px -2px"});
        else
            dog.css({"background-position": "0px 0px"});

        dogRun();

    }, 50);

}