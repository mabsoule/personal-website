
//When loaded remove class obstructing transitions
$(window).on('load', function () {
    //On load still allowed the transition to carry out... add a timeout function to ensure no transition
    setTimeout(function () {$("header").removeClass("onload")}, 25);
    setTimeout(function () {$("body").removeClass("onload")}, 25);
 });
