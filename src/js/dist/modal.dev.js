"use strict";

$(document).ready(function () {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var cardLink = $('.card_link');
  button.on('click', function () {
    modal.addClass('modal_active');
  });
  close.on('click', function () {
    modal.removeClass('modal_active');
  });
}); // прокрутка вверх

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('#scroll_top').show();
    } else {
      $('#scroll_top').hide();
    }
  });
  $('#scroll_top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});