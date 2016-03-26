$(document).ready(function() {
  $('.arrow').click(function(){

    var topOffset = 0.67 * $('.content_container').offset().top;

    $('html,body').animate({
       scrollTop: topOffset
    });

    });
});
