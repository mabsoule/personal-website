
//Get time zone hours to determine if it's morning, afternoon or evening
var currentTime = new Date();
var hours = currentTime.getHours();
var text = 'Hello';

if (hours >= 0 && hours < 12) {
  // document.getElementById("intro-greeting").innerHTML = 'Good Morning';
  text ='Good Morning';
  $('span.welcome').addClass('morning');
  $('span.welcome').removeClass('afternoon');
  $('span.welcome').removeClass('evening');
  $('a.currentPage').addClass('background-morning');
  $('a.currentPage').removeClass('background-afternoon');
  $('a.currentPage').removeClass('background-evening');
  $('a.work').addClass('morning');
  $('a.work').removeClass('afternoon');
  $('a.work').removeClass('evening');
  $('a.quotes-button').addClass('button-morning');
  $('a.quotes-button').removeClass('button-afternoon');
  $('a.quotes-button').removeClass('button-evening');
}

if (hours >= 12 && hours < 17) {
  // document.getElementById("intro-greeting").innerHTML = "Good Afternoon";
  text ='Good Afternoon';
  $('span.welcome').removeClass('morning');
  $('span.welcome').addClass('afternoon');
  $('span.welcome').removeClass('evening');
  $('a.currentPage').addClass('background-afternoon');
  $('a.currentPage').removeClass('background-morning');
  $('a.currentPage').removeClass('background-evening');
  $('a.work').addClass('afternoon');
  $('a.work').removeClass('morning');
  $('a.work').removeClass('evening');
  $('a.quotes-button').addClass('button-afternoon');
  $('a.quotes-button').removeClass('button-morning');
  $('a.quotes-button').removeClass('button-evening');
}

if (hours >= 17 && hours <= 24) {
  // document.getElementById("intro-greeting").innerHTML = "Good Evening";
  text ='Good Evening';
  $('span.welcome').removeClass('morning');
  $('span.welcome').removeClass('afternoon');
  $('span.welcome').addClass('evening');
  $('a.currentPage').addClass('background-evening');
  $('a.currentPage').removeClass('background-afternoon');
  $('a.currentPage').removeClass('background-morning');
  $('a.work').addClass('evening');
  $('a.work').removeClass('morning');
  $('a.work').removeClass('afternoon');
  $('a.quotes-button').addClass('button-evening');
  $('a.quotes-button').removeClass('button-afternoon');
  $('a.quotes-button').removeClass('button-morning');
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
