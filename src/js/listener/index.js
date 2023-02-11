import { newsList } from '../refs';

newsList.addEventListener('click', btnAddToFavorite);
newsList.addEventListener('click', linkReadMore);
let number = 1;
function btnAddToFavorite(event) {
  const btn = event.target.closest(`.item-news__add-to-favorite`);
  if (!btn) return;
  btn.classList.toggle('hidden-span');
  addToFavoriteLocal(btn);
}

function linkReadMore(event) {
  const readMore = event.target.closest(`.item-news__info-link`);
  if (!readMore) return;
  readMore.parentNode.parentNode.classList.add('opacity');
}

function addToFavoriteLocal(btn) {
  number += 1;
  const newsSection = {
    img: btn.parentNode.childNodes[1].attributes.src.nodeValue,
    category: btn.parentNode.childNodes[3].innerText,
    title: btn.parentNode.parentNode.childNodes[3].children[0].innerText,
    description: btn.parentNode.parentNode.childNodes[3].children[1].innerText,
    date: btn.parentNode.parentNode.lastElementChild.children[0].innerText,
    link: btn.parentNode.parentNode.lastElementChild.children[1].attributes[2]
      .value,
  };
  localStorage.setItem(`newsSection${number}`, JSON.stringify(newsSection));
}
