
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom; //If any part of the video is in the viewport, play
};

$(window).on('resize scroll', function() {
    var video = document.getElementById("video-1");
    if ($(video).isInViewport()) {
      video.play();
    } else {
      video.pause();
    }
  });
});
