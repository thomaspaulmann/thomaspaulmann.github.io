$(document).ready(function() {
  $('.arrow').click(function(){
    var top = $('.content_container').offset().top;

    $('html, body').animate({scrollTop: top});
  });
});
