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
  console.log(readMore.parentNode);
  const read = {
    id: readMore.parentNode.parentNode.id,
  };
  for (let i = 0; i < readMoreId.length; i += 1) {
    if (+readMoreId[i].id === +read.id) return;
  }
  readMoreId.push(read);
  localStorage.setItem(`readMoreLocal`, JSON.stringify(readMoreId));
}
// id: btn.parentNode.parentNode.id,
// img: btn.parentNode.childNodes[1].attributes.src.nodeValue,
// category: btn.parentNode.childNodes[3].innerText,
// title: btn.parentNode.parentNode.childNodes[3].children[0].innerText,
// description: btn.parentNode.parentNode.childNodes[3].children[1].innerText,
// date: btn.parentNode.parentNode.lastElementChild.children[0].innerText,
// link: btn.parentNode.parentNode.lastElementChild.children[1].attributes[2]
//   .value,
