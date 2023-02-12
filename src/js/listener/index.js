import { newsList } from '../refs';

newsList.addEventListener('click', btnAddToFavorite);

let newLocalStorage = [];

function btnAddToFavorite(event) {
  const btn = event.target.closest(`.item-news__add-to-favorite`);
  if (!btn) return;
  let articleId = +btn.parentNode.parentNode.id;
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
