$(document).ready(function() {
  var parallaxMultiplier = 0.67;
  var fontOffset = 2;
  
  $('.arrow').click(function(){
    var fadeOutOffsetTop = $('#fade_out').offset().top;

    var top = parallaxMultiplier * fadeOutOffsetTop - fontOffset;

    $('html, body').animate({scrollTop: top});
  });
});
