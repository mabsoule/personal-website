
//Get time zone hours to determine if it's morning, afternoon or evening
var currentTime = new Date();
var hours = currentTime.getHours();
var text = 'Hello';

if (hours >= 0 && hours < 12) {
  // document.getElementById("intro-greeting").innerHTML = 'Good Morning';
  text ='Good Morning';
  $('u').addClass('morning');
  $('u').removeClass('afternoon');
  $('u').removeClass('evening');
  $('a.portfolio-embeded-link').addClass('morning');
  $('a.portfolio-embeded-link').removeClass('afternoon');
  $('a.portfolio-embeded-link').removeClass('evening');
}

if (hours >= 12 && hours < 17) {
  // document.getElementById("intro-greeting").innerHTML = "Good Afternoon";
  text ='Good Afternoon';
  $('u#intro-greeting').removeClass('morning');
  $('u#intro-greeting').addClass('afternoon');
  $('u#intro-greeting').removeClass('evening');
  $('a.portfolio-embeded-link').removeClass('morning');
  $('a.portfolio-embeded-link').addClass('afternoon');
  $('a.portfolio-embeded-link').removeClass('evening');
}

if (hours >= 17 && hours <= 24) {
  // document.getElementById("intro-greeting").innerHTML = "Good Evening";
  text ='Good Evening';
  $('u').removeClass('morning');
  $('u').removeClass('afternoon');
  $('u').addClass('evening');
  $('a.portfolio-embeded-link').removeClass('morning');
  $('a.portfolio-embeded-link').removeClass('afternoon');
  $('a.portfolio-embeded-link').addClass('evening');
}

document.addEventListener('DOMContentLoaded', startAnimation(event));

function startAnimation(event){
  // array with texts to type in typewriter
  var dataText = [text];
  setTimeout(function () {typeWriter(dataText[0], 0)}, 1000);
};

setTimeout(function () {$("header").removeClass("onload")}, 25);



function typeWriter(text, i) { // type one letter/symbol and continue calling itself until the text is finished
   // check if any letters are left
   if (i < (text.length)) {
      // add next character to h1
      document.getElementById("intro-greeting").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1)
      }, 100);
   }
}
