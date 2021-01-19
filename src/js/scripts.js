/* обработка формы ajax */
$('#offer-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data: $(this).serialize(),
      success:  function(data) {
          $('.success').html(data + ', ваша форма отправлена.')
      }, 
      error: function(jqXHR, textStatus) {
          console.log (jqXHR + ': '+ textStatus);
          
      }
        });
});


 
 $(document).ready(function(){
   /* валидация brif-form */
   $('#brif-form').validate({
      rules: {
        username: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        phone: {
          required: true
        },
        email:{
          required: true,
          email: true,
        }
      },
      messages: {
        username: {
        required: "Укажите имя",
        minlength: jQuery.validator.format("Осталось символов: {0}!"),
        maxlength: jQuery.validator.format("Имя должно быть не больше {0}!")
      },
        email: {
            required: "Нам нужен Ваш Email",
            email: "Введите корректный email"
          },
        phone: {
          required: "Укажите Ваш телефон"
      }
    }
   });
   /* валидация brif-form */
   $('#offer-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true
      },
    },
    messages: {
      username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Осталось символов: {0}!"),
      maxlength: jQuery.validator.format("Имя должно быть не больше {0}!")
    },
      phone: {
        required: "Укажите Ваш телефон"
    }
  }
 });
   /* Маска для телефона */
   $('.phone').mask('+7 (999) 999-99-99');
/*Слайдер */
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
