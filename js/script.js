$(document).ready(function () {
  //toggler btn
  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change');
  });

  //sticky navbar
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 10) {
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background'); 
      $('.navbar').removeClass('fixed-top');
    }
  });

  //smooth scroll
  $('.header-link').click(function (link) {
    link.preventDefault();
    let target = $(this).attr('href');

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 110,
        },
        3000
      );
  });

  //ripples
  /*$("header, .info").ripples({
      dropRadius: 25,
      perturbance: 0.6,
    });*/
});
