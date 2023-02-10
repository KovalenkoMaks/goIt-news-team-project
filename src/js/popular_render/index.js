import * as api from '../api';
import * as markup from '../markup';
import * as refs from '../refs';
import debounce from 'lodash.debounce';

let windowWidth = 0;
// console.log(window.innerWidth);
// window.addEventListener(
//   'resize',
//   debounce(e => {
//     getPopularRender();
//   }, 1000)
// );

async function getPopularRender() {
  if (window.innerWidth < 768) {
    windowWidth = 4;
  }
  if (window.innerWidth > 768 && window.innerWidth < 1280) {
    windowWidth = 6;
  }
  if (window.innerWidth >= 1280) {
    windowWidth = 8;
  }
  const popularArticle = await api.getPopularArticle();
  let markupArr = await markup.getPopularMarkup(popularArticle, windowWidth);
  getRender(markupArr);
}
getPopularRender();

async function getRender(value) {
  refs.newsList.innerHTML = value;
}
