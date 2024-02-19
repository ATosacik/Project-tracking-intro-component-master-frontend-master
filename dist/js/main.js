const nav = document.querySelector('.navigation');
const navListBox = nav.querySelector('.nav__list-box');
const navToggle = nav.querySelector('.nav__toggle');
const navToggleImg = navToggle.querySelector('img');

let isNavOpened = JSON.parse(nav.getAttribute('data-visible'));

const changeNav = () => {
  navToggleImg.src = isNavOpened ? './images/icon-close.svg' : './images/icon-hamburger.svg';

  navListBox.setAttribute('data-visible', isNavOpened);
  navToggle.setAttribute('aria-expanded', isNavOpened);
}

navToggle.addEventListener('click', () => {
  isNavOpened = !isNavOpened;

  changeNav();
});

function toggleVisibility(mediaQuery) {
  if (mediaQuery.matches && navListBox.getAttribute('data-visible') === "true") {
    isNavOpened = false;

    changeNav();
  }
}

const mediaQuery = window.matchMedia("(min-width: 48em)");
toggleVisibility(mediaQuery);

mediaQuery.addListener(toggleVisibility);