
//Set default contact to be regular button
$('a#contact').removeClass('footer-contact');

//Add id class to style button when bottom of page is reached
$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	    $('a#contact').addClass('footer-contact');
	}
});

//Remove id class to re-style button when not on bottom of page
$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight > 0) {
	    $('a#contact').removeClass('footer-contact');
	}
});
