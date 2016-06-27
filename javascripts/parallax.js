
(function($){
  $.fn.parallax = function(options){
    var $$ = $(this);
    offset = $$.offset();

    // Defaults
    var defaults = {
      "start": 0,
      "coeffParallax": 0.5,
      "coeffOpacity":  1.5,
      "limit": 0,
      "offset": 0
    };

    // Extend Defaults with optional Options
    var opts = $.extend(defaults, options);

    return this.each(function(){
      $(window).bind('scroll', function() {
          windowTop = $(window).scrollTop();
          if((windowTop >= opts.start)) {
            // Calc new margin top
            var marginTop = (windowTop * -opts.coeffParallax) - opts.offset;

            // Limit margin top
            if (marginTop < opts.limit) marginTop = opts.limit;

            // Update Foreground
            $$.css({
              "margin-top": marginTop + "px"
            });

            // Calc new opacity based on scrolling position
            var opacity = 1 + opts.coeffOpacity * (windowTop / opts.limit);

            // Limit opacity
            if (opacity > 1) opacity = 1;
            if (opacity < 0) opacity = 0;

            // Update Background
            $('.landing_container').css({
              "opacity": opacity
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
