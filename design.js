`use strict`;

//Preloader
window.onload = setTimeout(function () {
  const preloaderEl = document.querySelector(`.preloader`);
  const mainEl = document.querySelector(`main`);
  mainEl.style.display = `flex`;
  preloaderEl.style.display = `none`;
}, 2000);

// menu scroll
const header = document.querySelector(`.first-container`);

window.addEventListener(`scroll`, function () {
  header.classList.toggle(`sticky`, window.scrollY > 0);
});

// menu
const sections = document.querySelectorAll(`header`);
const navLi = document.querySelectorAll(`.hero li a`);

//hamburger
const hamburger = document.querySelector(`.hamburger`);
const navMenu = document.querySelector(`nav ul`);
hamburger.addEventListener(`click`, () => {
  hamburger.classList.toggle(`active1`);
  navMenu.classList.toggle(`active1`);
});

document.querySelectorAll(`.li`).forEach((li) =>
  li.addEventListener(`click`, () => {
    hamburger.classList.remove(`active1`);
    navMenu.classList.remove(`active1`);
  })
);