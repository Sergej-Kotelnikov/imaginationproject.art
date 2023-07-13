//Preloader
window.onload = setTimeout(function () {
  const preloaderEl = document.querySelector(`.preloader`);
  const mainEl = document.querySelector(`main`);
  mainEl.style.display = `flex`;
  preloaderEl.style.display = `none`;
}, 2000);

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
