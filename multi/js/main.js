"use strict";

function myFunction(x) {
  x.classList.toggle("change");

  if ($(x).hasClass('change')) {
    document.getElementById('menu').setAttribute("class", "newmenu");
  } else {
    document.getElementById('menu').setAttribute("class", "menu");
  }
}