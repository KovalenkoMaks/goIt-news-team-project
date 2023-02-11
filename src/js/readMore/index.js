import { newsList } from '../refs';

newsList.addEventListener('click', linkReadMore);

let readMoreId = [];

function linkReadMore(event) {
  const readMore = event.target.closest(`.item-news__info-link`);
  if (!readMore) return;
  readMore.parentNode.parentNode.classList.add('opacity');
  addReadMore(readMore);
}

function addReadMore(readMore) {
  const read = {
    id: readMore.parentNode.parentNode.id,
    date: readMore.parentNode.firstElementChild.innerText,
    img: readMore.parentNode.parentNode.childNodes[1].children[0].currentSrc,
    title: readMore.parentNode.parentNode.childNodes[3].children[0].innerText,
    description:
      readMore.parentNode.parentNode.childNodes[3].children[1].innerText,
    link: readMore.parentNode.children[1].href,
    category:
      readMore.parentNode.parentNode.childNodes[1].children[1].innerHTML,
  };
  for (let i = 0; i < readMoreId.length; i += 1) {
    if (+readMoreId[i].id === +read.id) return;
  }
  readMoreId.push(read);
  localStorage.setItem(`readMoreLocal`, JSON.stringify(readMoreId));
}
