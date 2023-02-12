import { newsList } from '../refs';

newsList.addEventListener('click', linkReadMore);

// checkLokalStorage();

let readMoreId = [];

function linkReadMore(event) {
  const readMore = event.target.closest(`.item-news__info-link`);
  if (!readMore) return;
  readMore.parentNode.parentNode.parentNode.classList.add('opacity');
  addReadMore(readMore);
}

function addReadMore(readMore) {
  console.dir(readMore);
  const read = {
    uri: readMore.nextElementSibling.textContent,
    date: readMore.parentNode.firstElementChild.innerText,
    img: readMore.parentNode.parentNode.childNodes[1].children[0].currentSrc,
    title: readMore.parentNode.parentNode.childNodes[3].children[0].innerText,
    description:
      readMore.parentNode.parentNode.childNodes[3].children[1].innerText,
    link: readMore.parentNode.children[1].href,
    category:
      readMore.parentNode.parentNode.childNodes[1].children[1].innerHTML,
  };
  // console.log(read.uri);
  for (let i = 0; i < readMoreId.length; i += 1) {
    // console.log(readMoreId[i].uri);
    if (readMoreId[i].uri === read.uri) {
      // console.log(readMore.parentNode.parentNode);
      // readMore.parentNode.parentNode.classList.add('opacity');
      return;
    }
  }
  readMoreId.push(read);
  localStorage.setItem(`readMoreLocal`, JSON.stringify(readMoreId));
}

// export {checkLokalStorage}
