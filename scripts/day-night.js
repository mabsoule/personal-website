
//Get time zone hours to determine if it's morning, afternoon or evening
var currentTime = new Date();
var hours = currentTime.getHours();

if (hours >= 0 && hours < 12) {
  document.getElementById("intro-greeting").innerHTML = "&#x1F305 Good Morning";
  $('u').addClass('morning');
  $('u').removeClass('afternoon');
  $('u').removeClass('evening');
  $('a.portfolio-embeded-link').addClass('morning');
  $('a.portfolio-embeded-link').removeClass('afternoon');
  $('a.portfolio-embeded-link').removeClass('evening');
}

if (hours >= 12 && hours < 17) {
  document.getElementById("intro-greeting").innerHTML = "Good Afternoon";
  $('u#intro-greeting').removeClass('morning');
  $('u#intro-greeting').addClass('afternoon');
  $('u#intro-greeting').removeClass('evening');
  $('a.portfolio-embeded-link').removeClass('morning');
  $('a.portfolio-embeded-link').addClass('afternoon');
  $('a.portfolio-embeded-link').removeClass('evening');
}

if (hours >= 17 && hours <= 24) {
  document.getElementById("intro-greeting").innerHTML = "Good Evening";
  $('u').removeClass('morning');
  $('u').removeClass('afternoon');
  $('u').addClass('evening');
  $('a.portfolio-embeded-link').removeClass('morning');
  $('a.portfolio-embeded-link').removeClass('afternoon');
  $('a.portfolio-embeded-link').addClass('evening');
}
