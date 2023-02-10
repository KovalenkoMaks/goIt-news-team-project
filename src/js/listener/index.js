import { newsList } from '../refs';

newsList.addEventListener('click', btnAddToFavorite);
newsList.addEventListener('click', linkReadMore);

function btnAddToFavorite(event) {
  const btn = event.target.closest(`.item-news__add-to-favorite`);
  if (!btn) return;
  btn.classList.toggle('hidden-span');
}

function linkReadMore(event) {
  const readMore = event.target.closest(`.item-news__info-link`);
  if (!readMore) return;
  readMore.parentNode.parentNode.classList.add('opacity');
  //   const btn = readMore.parentNode.parentNode.firstElementChild.lastElementChild;
  //   console.log(btn);
  //   btn.classList.add('no-opacity');
}
