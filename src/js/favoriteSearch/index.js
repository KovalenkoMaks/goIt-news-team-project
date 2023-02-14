import { createMarkup, block } from '../../favorite';
const inputEl = document.querySelector('#search-field__input'),
  formEl = document.querySelector('#form-field');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  let value = inputEl.value.toLowerCase().trim();
  let arr = getLocalarr();
  if (arr === null) return;
  let hits = checkArr(arr, value);

  if (hits.length === 0) {
    block.innerHTML = '';
    document.querySelector('.underfined').classList.remove('underfined-hidden');
    return;
  }

  let markup = createMarkup(hits);
  block.innerHTML = markup;
  document.querySelector('.underfined').classList.add('underfined-hidden');
});

function getLocalarr() {
  return JSON.parse(localStorage.getItem('newsSection'));
}
function checkArr(arr, value) {
  return arr.reduce((hits, elem) => {
    if (
      elem.title.toLowerCase().includes(value) ||
      elem.description.toLowerCase().includes(value) ||
      elem.category.toLowerCase().includes(value)
    ) {
      hits.push(elem);
    }
    return hits;
  }, []);
}
