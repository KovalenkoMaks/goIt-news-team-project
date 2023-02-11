import { newsList } from '../refs';

newsList.addEventListener('click', btnAddToFavorite);
newsList.addEventListener('click', linkReadMore);

const newlocalStorage = [];

function btnAddToFavorite(event) {
  const btn = event.target.closest(`.item-news__add-to-favorite`);
  let btnLink =
    btn.parentNode.parentNode.lastElementChild.children[1].attributes[2].value;
  if (!btn) return;
  btn.classList.toggle('hidden-span');
  if (!btn.classList.contains('hidden-span')) {
    for (let i = 0; i < newlocalStorage.length; i += 1) {
      if (newlocalStorage[i].link === btnLink) {
        newlocalStorage.splice(newlocalStorage[i], 1);
        localStorage.setItem(`newsSection`, JSON.stringify(newlocalStorage));
        return;
      }
    }
  }

  addToFavoriteLocal(btn);
  console.log(newlocalStorage);
}

function linkReadMore(event) {
  const readMore = event.target.closest(`.item-news__info-link`);
  if (!readMore) return;
  readMore.parentNode.parentNode.classList.add('opacity');
}

function addToFavoriteLocal(btn) {
  const newsSection = {
    img: btn.parentNode.childNodes[1].attributes.src.nodeValue,
    category: btn.parentNode.childNodes[3].innerText,
    title: btn.parentNode.parentNode.childNodes[3].children[0].innerText,
    description: btn.parentNode.parentNode.childNodes[3].children[1].innerText,
    date: btn.parentNode.parentNode.lastElementChild.children[0].innerText,
    link: btn.parentNode.parentNode.lastElementChild.children[1].attributes[2]
      .value,
  };
  for (let i = 0; i < newlocalStorage.length; i += 1) {
    if (newlocalStorage[i].link === newsSection.link) return;
  }

  newlocalStorage.push(newsSection);
  localStorage.setItem(`newsSection`, JSON.stringify(newlocalStorage));
}
