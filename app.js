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

window.addEventListener(`scroll`, () => {
  let current = `hero1`;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY > sectionTop - sectionHeight / 3) {
      current = section.getAttribute(`id`);
    }
  });
  navLi.forEach((a) => {
    a.classList.remove(`active`);
    if (a.classList.contains(current)) {
      a.classList.remove(`active`);
      a.classList.add(`active`);
    }
  });
});

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

//navigation click

const aboutEl = document.querySelector(`.about`);
const aboutA = document.querySelector(`#about`);
aboutEl.addEventListener(`click`, function (e) {
  e.preventDefault();
  aboutA.scrollIntoView({ behavior: `smooth` });
});

const heroEl = document.querySelector(`.hero1`);
const heroA = document.querySelector(`#hero1`);
heroEl.addEventListener(`click`, function (e) {
  e.preventDefault();
  heroA.scrollIntoView({ behavior: `smooth` });
});

const ilEl = document.querySelector(`.il`);
const ilA = document.querySelector(`#illustrations`);
ilEl.addEventListener(`click`, function (e) {
  e.preventDefault();
  ilA.scrollIntoView({ behavior: `auto` });
});

const dsEl = document.querySelector(`.ds`);
const dsA = document.querySelector(`#design`);
dsEl.addEventListener(`click`, function (e) {
  e.preventDefault();
  dsA.scrollIntoView({ behavior: `auto` });
});

const polEl = document.querySelector(`.pol`);
const polA = document.querySelector(`#pol`);
polEl.addEventListener(`click`, function (e) {
  e.preventDefault();
  polA.scrollIntoView({ behavior: `auto` });
});

const nfEl = document.querySelector(`.nf`);
const nftA = document.querySelector(`#nft`);
nfEl.addEventListener(`click`, function (e) {
  e.preventDefault();
  nftA.scrollIntoView({ behavior: `smooth` });
});

const ctnEl = document.querySelector(`.ctn`);
const contactsA = document.querySelector(`#contacts`);
ctnEl.addEventListener(`click`, function (e) {
  e.preventDefault();
  contactsA.scrollIntoView({ behavior: `smooth` });
});
