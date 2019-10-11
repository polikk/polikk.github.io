"use strict";

$('#burger').on("click", function (e) {
  e.preventDefault();
  $('#burger').toggleClass('change');
  $('#menu').toggleClass('newmenu');
});
$('.menu_link').on("click", function () {
  $('#menu').toggleClass('newmenu');
});