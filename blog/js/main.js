"use strict";

$(document).ready(function () {
  $('.slider-wrap').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }]
  });
  $('.clik-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    responsive: [{
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }]
  });
  $('.client-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false
  });
  $('.portfolio-item').on('click', function (e) {
    e.preventDefault();
    var element = e.target;
    element.parentNode.classList.add('active');

    if ($('.portfolio-item').hasClass('active')) {
      $('.btn-close').addClass('btn-close--active');
    }

    if ($('.portfolio-wrap').hasClass('active')) {
      $('.portfolio-wrap').removeClass('active');
    }
  });
  $('.btn-close').on('click', function () {
    if ($('.portfolio-item').hasClass('active')) {
      $('.btn-close').addClass('btn-close--active');
    } else {}
  });
  $('.burger').on('click', function () {
    if ($('.nav').hasClass('nav-active')) {
      $('.nav').removeClass('nav-active');
      $('.burger').removeClass('burger-active');
    } else {
      $('.nav').addClass('nav-active');
      $('.burger').addClass('burger-active');
    }
  });
  $(document).mouseup(function (e) {
    var div = $(".portfolio__img");

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.portfolio-item').removeClass('active');
      $('.btn-close').removeClass('btn-close--active');
    }
  });
  $('.tab-card-item__text').hide();

  var acordeon = function acordeon() {
    var data = $('.tab-card').attr('data-acordeon');
    $('.tab-card-item__title').on('click', function () {
      if (data === 'close') {
        $('.tab-card-item__text').slideUp();

        if ($this.hasClass('active-tabs')) {
          $(this).toggleClass('active-tabs');
        } else {
          $('.tab-card-item__title').removeClass('active');
          $(this).toggleClass('active-tabs');
        }
      } else {
        $(this).toggleClass('active-tabs');
      }

      $(this).next('.tab-card-item__text').not(':animated').slideToggle();
    });
  };

  acordeon();
});