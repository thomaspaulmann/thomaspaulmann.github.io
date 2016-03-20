
(function($){
  $.fn.parallax = function(){
    var $$ = $(this);
    offset = $$.offset();

    // Options
    var opts = {
      "start": 0,
      "coeff": -0.5,
      "limit": -$('.landing').height(),
      "offset": 0
    };

    return this.each(function(){
      $(window).bind('scroll', function() {
          windowTop = $(window).scrollTop();
          if((windowTop >= opts.start)) {
            // Calc new coordinates
            newCoord = (windowTop * opts.coeff) - opts.offset;

            // Limit
            if (newCoord < opts.limit) newCoord = opts.limit;

            // Foreground
            $$.css({
              "margin-top": newCoord + "px"
            });

            // Background
            //$('.landing').css({
              //"margin-top": (windowTop/30) + "em"

              //"background-position-y": (windowTop/30) + "em",
              // "background-size": (1000 - windowTop/2) + "px"
            //});
          }
      });
    });
  };
})(jQuery);

$(document).ready(function() {
  $('.content').parallax();
});
