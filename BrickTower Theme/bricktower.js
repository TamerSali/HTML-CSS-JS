/* Tamer Sali*/

      $(document).ready(function() {
        $(window).scroll(function(event) {
          let scroll = $(this).scrollTop();
          let opacity = 1 - scroll / 10000;
          if (opacity >= 0) {
            $(".navigation").css("opacity", opacity);
          }
        });
      });
/*-----------------------------------------------------------------*/
    $('ul.navbar-nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
