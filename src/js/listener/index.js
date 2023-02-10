import { newsList } from '../refs';

newsList.addEventListener('click', btnAddToFavorite);

function btnAddToFavorite(event) {
  const btn = event.target.closest(`.item-news__add-to-favorite`);
  if (!btn) return;
  btn.classList.toggle('hidden-span');
}
