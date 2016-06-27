$(document).ready(function() {
  $('.arrow').click(function(){
    var parallaxMultiplier = 0.67;
    var fontOffsetTop      = 2;
    var fadeOutOffsetTop   = $('#fade_out').offset().top;

    var top = parallaxMultiplier * fadeOutOffsetTop - fontOffsetTop;

    $('html, body').animate({scrollTop: top});
  });
});
