import * as api from '../api';
import * as markup from '../markup';
import * as refs from '../refs';
import debounce from 'lodash.debounce';
import { getWeatherRefs } from '../weather';

let windowWidth = 0;
let wetherPosition = 0;
// console.log(window.innerWidth);
window.addEventListener(
  'resize',
  debounce(e => {
    getPopularRender();
  }, 1000)
);

document
  .querySelector('.page-container-cat')
  .classList.add('pagination-cat-hidden');

async function getPopularRender() {
  if (window.innerWidth < 768) {
    windowWidth = 4;
    wetherPosition = -1;
  }

  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    windowWidth = 7;
    wetherPosition = 0;
  }
  if (window.innerWidth >= 1280) {
    windowWidth = 8;
    wetherPosition = 1;
  }
  const popularArticle = await api.getPopularArticle();
  // console.log(popularArticle);
  let markupArr = await markup.getPopularMarkup(popularArticle, windowWidth);
  refs.loader.classList.add('is-hidden');
  getRender(markupArr);
}
getPopularRender();

async function getRender(value) {
  refs.newsList.innerHTML = value;
  getWetherPosition();
  // return aaa;
}

function getWetherPosition() {
  let wetherPlaceDesk = '';
  let secondElInList = '';

  if (wetherPosition >= 0) {
    wetherPlaceDesk =
      document.querySelector('.list-news').children[wetherPosition];
    secondElInList = document.createElement('li');
    secondElInList.classList.add('list-news__item');
    secondElInList.innerHTML = `<div class="weather">
  <div class="weather__info">
    <span class="weather__deg"></span>
    <div class="weather__geo">
      <span class="weather__value"></span>
      <p class="weather__location">
        <svg  viewBox="0 0 37 32">
          <path
                d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">
            </path>
        </svg>
        <span class="weather__city"></span>
      </p>
    </div>
  </div>
  <img class="weather__img" />
  <div class="weather__date">
    <p class="weather__day"></p>
    <p class="weather__year"></p>
  </div>
  <a
    href="https://sinoptik.ua/"
    class="weather__link"
    target="_blank"
    rel="noreferrer noopener"
    >weather for week</a
  >
</div>`;
    wetherPlaceDesk.after(secondElInList);
  } else {
    wetherPlaceDesk = document.querySelector('.list-news').children[0];
    //  console.log(wetherPlaceDesk);
    secondElInList = document.createElement('li');
    secondElInList.classList.add('list-news__item');
    secondElInList.innerHTML = `<div class="weather">
  <div class="weather__info">
    <span class="weather__deg"></span>
    <div class="weather__geo">
      <span class="weather__value"></span>
      <p class="weather__location">
        <svg  viewBox="0 0 37 32">
          <path
                d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">
            </path>
        </svg>
        <span class="weather__city"></span>
      </p>
    </div>
  </div>
  <img class="weather__img" />
  <div class="weather__date">
    <p class="weather__day"></p>
    <p class="weather__year"></p>
  </div>
  <a
    href="https://sinoptik.ua/"
    class="weather__link"
    target="_blank"
    rel="noreferrer noopener"
    >weather for week</a
  >
</div>`;
    wetherPlaceDesk.before(secondElInList);
  }

  // console.log(secondElInList);
  getWeatherRefs();
  // return secondElInList;
}

export { getWetherPosition, getRender, getPopularRender };
