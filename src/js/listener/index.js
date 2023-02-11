import { newsList } from '../refs';

newsList.addEventListener('click', btnAddToFavorite);
newsList.addEventListener('click', linkReadMore);

let newLocalStorage = [];
let readMoreId = [];

function btnAddToFavorite(event) {
  const btn = event.target.closest(`.item-news__add-to-favorite`);
  let articleId = +btn.parentNode.parentNode.id;
  if (!btn) return;
  if (!btn.classList.contains('hidden-span')) {
    btn.classList.add('hidden-span');
    addToFavoriteLocal(btn);
    return;
  }
  btn.classList.remove('hidden-span');
  for (let i = 0; i < newLocalStorage.length; i += 1) {
    if (+newLocalStorage[i].id === articleId) {
      console.log(+newLocalStorage[i].id);
      newLocalStorage.splice(newLocalStorage[i], 1);
    }
  }
  localStorage.setItem(`newsSection`, JSON.stringify(newLocalStorage));
}

function addToFavoriteLocal(btn) {
  const newsSection = {
    id: btn.parentNode.parentNode.id,
    img: btn.parentNode.childNodes[1].attributes.src.nodeValue,
    category: btn.parentNode.childNodes[3].innerText,
    title: btn.parentNode.parentNode.childNodes[3].children[0].innerText,
    description: btn.parentNode.parentNode.childNodes[3].children[1].innerText,
    date: btn.parentNode.parentNode.lastElementChild.children[0].innerText,
    link: btn.parentNode.parentNode.lastElementChild.children[1].attributes[2]
      .value,
    favorite: 'true',
  };
  for (let i = 0; i < newLocalStorage.length; i += 1) {
    if (+newLocalStorage[i].id === +newsSection.id) return;
  }

  newLocalStorage.push(newsSection);
  localStorage.setItem(`newsSection`, JSON.stringify(newLocalStorage));
}

function linkReadMore(event) {
  const readMore = event.target.closest(`.item-news__info-link`);
  if (!readMore) return;
  readMore.parentNode.parentNode.classList.add('opacity');
  addReadMore(readMore);
}

function addReadMore(readMore) {
  const read = {
    id: readMore.parentNode.parentNode.id,
  };
  for (let i = 0; i < readMoreId.length; i += 1) {
    if (+readMoreId[i].id === +read.id) return;
  }
  readMoreId.push(read);
  localStorage.setItem(`readMoreLocal`, JSON.stringify(readMoreId));
}
