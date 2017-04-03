$(function() {
  $(window).load(function() {
    setTimeout(function() {
      $('#preloader').fadeOut('slow', function() {});
    }, 2000);
  });

  $("button, a").hover(function() {
    $(this).css("opacity", "0.6");
    }, function() {
    $(this).css("opacity", "1");
  });
});