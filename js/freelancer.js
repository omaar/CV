/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('body').on('click', '.page-scroll a', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Floating label headings for the contact form
$(function() {
	$("body").on("input propertychange", ".floating-label-form-group", function(e) {
		$(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
	}).on("focus", ".floating-label-form-group", function() {
		$(this).addClass("floating-label-form-group-with-focus");
	}).on("blur", ".floating-label-form-group", function() {
		$(this).removeClass("floating-label-form-group-with-focus");
	});
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
	target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});


var keySequence = [
    'l',
    'u',
    // 'p',
    // 'i',
    // 't',
    // 'a'
];

var userInput = new Array( keySequence.length );

window.addEventListener( 'keydown', ( { key } ) => {
    userInput = [ ...userInput.slice( 1 ), key ];

    if ( keySequence.every( ( v, k ) => v === userInput[ k ] ) ) {
    	//Typer.stop();
    	//Typer.start();
        $(".me").toggle();
        $(".she").toggle();
        //alert( 'Yatta!' );
    }
} );

var onlongtouch;
var timer;
var touchduration = 500; //length of time we want the user to touch before we do something

function touchstart() {
	timer = setTimeout(onlongtouch, touchduration); 
}

function touchend() {

	//stops short touches from firing the event
	if (timer)
		clearTimeout(timer); // clearTimeout, not cleartimeout..
}

var onlongtouch = function() {
	//Typer.stop();
	//Typer.start();
	$(".me").toggle();
	$(".she").toggle();
};

document.getElementById("photo").addEventListener('touchstart',touchstart);
document.getElementById("photo").addEventListener('touchend',touchend);