
(function($){

	$.fn.hover3d = function(options){

		var settings = $.extend({
			selector      : ".parallax_image",
			perspective   : 1000,
			sensitivity   : 30,
			invert        : false,
			shine         : false,
			hoverInClass  : "hover-in",
			hoverOutClass : "hover-out",
			hoverClass    : "hover-3d"
		}, options);

		return this.each(function(){

			var $this = $(this),
				$image = $this.find(settings.selector);
				currentX = 0;
				currentY = 0;

			// Set perspective and transformStyle value for element and 3d object
			$this.css({
				perspective: settings.perspective+"px",
				transformStyle: "preserve-3d"
			});

			$image.css({
				perspective: settings.perspective+"px",
				transformStyle: "preserve-3d",
			});

			// Mouse Enter function, this will add hover-in class so when mouse over it will add transition based on hover-in class
			function enter(event){

				//Change text color around image
				$(document).ready(function(){
				  $('a').addClass('change_color h2');
				  $('a').addClass('change_color h3');
					$('a').addClass('change_color h4');
				});

				$image.addClass(settings.hoverInClass+" "+settings.hoverClass);
				currentX = currentY = 0;
				setTimeout(function(){
					$image.removeClass(settings.hoverInClass);
				}, 1000);
			}

			// Mouse movement Parallax effect
			function move(event){
					var w      = $image.innerWidth(),
						h      = $image.innerHeight(),
						currentX = Math.round(event.pageX - $image.offset().left),
						currentY = Math.round(event.pageY - $image.offset().top),
						ax 	   = settings.invert ?  ( w / 2 - currentX)/settings.sensitivity : -( w / 2 - currentX)/settings.sensitivity,
						ay     = settings.invert ? -( h / 2 - currentY)/settings.sensitivity :  ( h / 2 - currentY)/settings.sensitivity,
						dx     = currentX - w / 2,
						dy     = currentY - h / 2,
						theta  = Math.atan2(dy, dx),
						angle  = theta * 180 / Math.PI - 90;


					if (angle < 0) {
						angle  = angle + 360;
					}

					$image.css({
						perspective    : settings.perspective+"px",
						transformStyle : "preserve-3d",
						transform      : "rotateY("+ax+"deg) rotateX("+ay+"deg)"
					});
			}

			// Mouse leave function, will set the transform property to 0, and add transition class for exit animation
      function leave(){

				//Change text color back after leaving
				$(document).ready(function(){
				  $('a').removeClass('change_color h2');
				  $('a').removeClass('change_color h3');
					$('a').removeClass('change_color h4');
				});

				$image.addClass(settings.hoverOutClass+" "+settings.hoverClass);
        $image.css({
					perspective    : settings.perspective+"px",
					transformStyle : "preserve-3d",
					transform      : "rotateX(0) rotateY(0)"
				});
				setTimeout( function(){
					$image.removeClass(settings.hoverOutClass+" "+settings.hoverClass);
					currentX = currentY = 0;
				}, 1000);
			}

			// Mouseenter event
			$this.on( "mouseenter", function(){
				return enter();
			});

			// Mousemove event
			$this.on( "mousemove", function(event){
				return move(event);
			});

			// Mouseleave event
			$this.on( "mouseleave", function(){
				return leave();
			});

		});
	};
}(jQuery));



//Set default text color for image not being hovered
$(document).ready(function(){
	$('a').removeClass('change_color h2');
	$('a').removeClass('change_color h3');
	$('a').removeClass('change_color h4');
});

//Call function to run script with any element containing ".class"
$(".parallax__frame").hover3d({});
