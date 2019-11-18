"use strict";

//var slick = require("slick-carousel/slick/slick");
$('.hero_slider').slick({
  arrows: false,
  dots: true,
  dotsClass: "my-dots"
});
$('.buttons__left').click(function () {
  $('.hero_slider').slick('slickPrev');
});
$('.buttons__right').click(function () {
  $('.hero_slider').slick('slickNext');
});
$('.store_slider').slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 980,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 730,
    settings: {
      slidesToShow: 2,
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
$('.button__left').click(function () {
  $('.store_slider').slick('slickPrev');
});
$('.button__right').click(function () {
  $('.store_slider').slick('slickNext');
});
$('.feature_store').slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 980,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 730,
    settings: {
      slidesToShow: 2,
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
$('.feature__left').click(function () {
  $('.feature_store').slick('slickPrev');
});
$('.feature__right').click(function () {
  $('.feature_store').slick('slickNext');
});
$("input[name='euro']").change(function () {
  if ($("input[value='1']").prop("checked")) {
    document.getElementById('vaal').innerHTML = '$';
    document.getElementById('in').innerHTML = '$';
  } else if ($("input[value='2']").prop("checked")) {
    document.getElementById('vaal').innerHTML = '€ ';
    document.getElementById('in').innerHTML = '€';
  } else {
    document.getElementById('vaal').innerHTML = '£';
    document.getElementById('in').innerHTML = '£';
  }
});
var btns = document.getElementsByClassName('button_active');
var par = document.getElementsByClassName('pop');

btns[0].onclick = function someFunc() {
  par[0].classList.add("active");
};

var bts = document.getElementsByClassName('button_sing');

bts[0].onclick = function some() {
  par[0].classList.add("active");
};

var close = document.getElementsByClassName('button_close');

close[0].onclick = function Close() {
  par[0].classList.remove("active");
};