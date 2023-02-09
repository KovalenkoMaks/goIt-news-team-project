import * as api from '../api';
import * as markup from '../markup';
import * as refs from '../refs';

async function getPopularRender() {
  const popularArticle = await api.getPopularArticle();
  let markupArr = await markup.getPopularMarkup(popularArticle);
  getRender(markupArr);
}
getPopularRender();

async function getRender(value) {
  refs.newsList.innerHTML = value;
}
