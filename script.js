"use strict";

const closeButton = document.querySelector(".close-nav");
const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");

openButton.addEventListener("click", function (e) {
  nav.classList.toggle("navigation-open");
});

closeButton.addEventListener("click", function (e) {
  nav.classList.toggle("navigation-open");
});
