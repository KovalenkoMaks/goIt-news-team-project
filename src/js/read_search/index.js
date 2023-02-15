import { getMarkupLoadMore } from '../read_more_date';
import { dateListEl } from '../../read';

const readListSearchEl = document.querySelector('.date-list-search');
const readFormEl = document.querySelector('#form-field');
const readInputEl = document.querySelector('#search-field__input');
const readBtnEl = document.querySelector('#form-btn');

const localData = JSON.parse(localStorage.getItem('readMoreLocal'));

readFormEl.addEventListener('submit', form);

let newArrForMarkupSearch = [];

function form(event) {
  event.preventDefault();

  if (readInputEl.value.trim() === '') {
    dateListEl.classList.remove('is-hidden');
    document.querySelector('.underfined').classList.add('underfined-hidden');
    readListSearchEl.classList.add('is-hidden');
    newArrForMarkupSearch = [];
    return;
  }

  const inputValue = readInputEl.value.toLowerCase();

  for (let i = 0; i < localData.length; i += 1) {
    let iteration = localData[i];
    if (
      iteration.description.toLowerCase().includes(inputValue) ||
      iteration.title.toLowerCase().includes(inputValue) ||
      iteration.category.toLowerCase().includes(inputValue) ||
      iteration.category.toLowerCase() === inputValue
    ) {
      newArrForMarkupSearch.push(iteration);
    }
  }
  if (newArrForMarkupSearch.length === 0) {
    dateListEl.classList.add('is-hidden');
    readListSearchEl.classList.add('is-hidden');
    document.querySelector('.underfined').classList.remove('underfined-hidden');
    newArrForMarkupSearch = [];
    return;
  }
  document.querySelector('.underfined').classList.add('underfined-hidden');
  dateListEl.classList.add('is-hidden');
  readListSearchEl.classList.remove('is-hidden');

  const markupBlockReadSearch = getMarkupLoadMore(newArrForMarkupSearch);

  createMarkupLoadMore(markupBlockReadSearch);
}

function createMarkupLoadMore(markupBlockDate) {
  readListSearchEl.innerHTML = markupBlockDate;
  newArrForMarkupSearch = [];
}
