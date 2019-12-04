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
    document.getElementById("video").src = "https://www.youtube.com/embed/6f7pgA0riU8";
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
    document.getElementById("video").src = "https://www.youtube.com/embed/6f7pgA0riU8";
  } else {
    document.getElementById("video").src = "";
    $(".pop-ap").removeClass("activiti");
  }
});
$(".pop-ap").mouseup(function (e) {
  var div = $("#video");
  var pop = $(".pop-ap");

  if (!div.is(e.target) && div.has(e.target).length === 0) {
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