$(document).ready(function() {
  $('.collection__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
      // variableWidth: true
    });

    $('.reviews__slider').slick({
      autoplay: true
    });
  });