"use strict";

$(".burger_btn").click(function (e) {
  e.preventDefault();
  $(".burger_btn").not(this).removeClass("active");
  $(this).toggleClass('active');

  if ($(".burger_btn").hasClass("active")) {
    $(".header_nav").toggleClass("show");
  } else {
    $(".header_nav").removeClass("show");
  }
});
$(".buton_to-pop").click(function (e) {
  e.preventDefault();
  $(".buton_to-pop").not(this).removeClass("hover");
  $(this).toggleClass('hover');

  if ($(".buton_to-pop").hasClass("hover")) {
    $(".pop-ap").toggleClass("activiti");
    document.getElementById("video").src = "https://www.youtube.com/embed/nA9M7H7DDCk";
  } else {
    document.getElementById("video").src = "";
  }
});
$(".close").click(function (e) {
  e.preventDefault();
  $(".close").not(this).removeClass("active_btn");
  $(this).toggleClass('active_btn');

  if ($(".close").hasClass("active_btn")) {
    $(".pop-ap").toggleClass("activiti");
    document.getElementById("video").src = "https://www.youtube.com/embed/nA9M7H7DDCk";
  } else {
    document.getElementById("video").src = "";
    $(".pop-ap").removeClass("activiti");
  }
});
$(".header__link").click("a", function (e) {
  $(".burger_btn").removeClass("active");
  $(".header_nav").removeClass("show");
  e.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 1500);
});
$('.header__button').click(function (e) {
  e.preventDefault();
  $('.pop-list').toggleClass("visibl");
  $('.pop-list__close').click(function (e) {
    e.preventDefault();
    $('.pop-list').removeClass('visibl');
  });
});