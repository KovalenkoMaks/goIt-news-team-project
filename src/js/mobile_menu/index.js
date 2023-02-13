import {
  openMenuBtn,
  mobileMenu,
  closeMenuBtn,
  themeContainer,
  seachBtn,
} from '../refs';
const bodyScrollLock = require('body-scroll-lock');
import debounce from 'lodash.debounce';

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('open-menu');
  if (themeContainer.classList.contains('mobile')) {
    themeContainer.classList.remove('mobile');
  } else if (!themeContainer.classList.contains('mobile')) {
    const debouncedThemeContainer = debounce(() => {
      themeContainer.classList.add('mobile');
    }, 250);

    debouncedThemeContainer();
  }

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';

  bodyScrollLock[scrollLockMethod](document.body);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('open-menu');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
});

if (window.innerWidth < 768) {
  seachBtn.setAttribute('type', 'button');
}
