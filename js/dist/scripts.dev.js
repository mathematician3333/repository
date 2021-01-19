"use strict";

/* обработка формы ajax */
$('#offer-form').on('submit', function (event) {
  event.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function success(data) {
      $('.success').html(data + ', ваша форма отправлена.');
    },
    error: function error(jqXHR, textStatus) {
      console.log(jqXHR + ': ' + textStatus);
    }
  });
});
/*Слайдер */

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.arrows__left'),
  nextArrow: $('.arrows__right'),
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});