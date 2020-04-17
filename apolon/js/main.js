"use strict";

$('.main-info').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  adaptiveHeight: true
});
$('.comunity-part').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true
});