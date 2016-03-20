
(function($){
  $.fn.parallax = function(options){
    var $$ = $(this);
    offset = $$.offset();

    // Defaults
    var defaults = {
      "start": 0,
      "coeff": -0.5,
      "limit": 0,
      "offset": 0
    };

    // Extend Defaults with optional Options
    var opts = $.extend(defaults, options);

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
          }
      });
    });
  };
})(jQuery);

$(document).ready(function() {
  var landingContainerHeight = $('.landing_container').height();
  $('.content_container').parallax({"limit": -landingContainerHeight});
});
