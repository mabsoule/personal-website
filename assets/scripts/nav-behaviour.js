
//Varibles
var didScroll; //Boolean for checking if scolling occured during interval
var delta = 5; //Delta provides a minimum scroll length for action to occur
var scrollPosition = 0; //Var to hold scroll position from the top of the page
var lastScrollPosition = 0; //Var to store previous position from the top of the page
var navbarHeight = $('header').height(); //Height of navbar including margin (not working properly)
navbarHeight = 0; //Want it to disapear slightly before full height is scrolled
var interval = 250; //Interval to check location in milliseconds

//Default to displaying navbar
$(document).ready(function(){
  $('a').removeClass('nav-up');
  $('header').removeClass('nav-up');
});

//To avoid to heavy a script, lets check every 250ms if the user has scrolled;

//on scroll, let the interval funtion know the user has scrolled so it can update it's position
$(window).scroll(function(event){
    didScroll = true;
});

//check if didScroll has been changed to true every 250ms meaning user has scrolled
setInterval(function() {
  if (didScroll) {
    hasScrolled(); //call function to check position
    didScroll = false; //reset didScroll
  }
}, interval)

function hasScrolled() {
  scrollPosition = $(this).scrollTop();

  //Check if scrolling less than delta has occured and halt execution
  if (Math.abs(lastScrollPosition - scrollPosition) <= delta)
    return;

  // If scrolled down (current position > last position) and scrolled past navbar height than remove navbar
  if (scrollPosition > lastScrollPosition && scrollPosition > navbarHeight){
  //if (scrollPosition > lastScrollPosition){
    //Remove navbar
    //$('a').addClass('nav-up');
    $('header').addClass('nav-up');
  }
  else {
    //Add navbar as scroll up occured, unless scroll past the document occured (on mac)
    if(scrollPosition + $(window).height() < $(document).height()) {
      //$('a').removeClass('nav-up');
      $('header').removeClass('nav-up');
    }
  }
  //Set lastScrollPosition to the current position to measure future changes
  lastScrollPosition = scrollPosition
}
