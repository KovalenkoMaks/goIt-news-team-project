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
    //   /class="underfined underfined-hidden"
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
    // console.log(elem);
    if (
      elem.title.toLowerCase().includes(value) ||
      elem.description.toLowerCase().includes(value) ||
      elem.category.toLowerCase().includes(value)
    ) {
      hits.push(elem);
    }
    // console.log(hits);
    return hits;
  }, []);
}
// import { getMarkupLoadMore } from '../read_more_date';
// import { dateListEl } from '../../read';
// const readFormEl = document.querySelector('#form-field');
// const readInputEl = document.querySelector('#search-field__input');
// const readBtnEl = document.querySelector('#form-btn');
// const localData = JSON.parse(localStorage.getItem('readMoreLocal'));
// readFormEl.addEventListener('submit', form);
// // readBtnEl.addEventListener('click', btnEvent);
// // function btnEvent(event) {
// //   dateListEl.innerHTML = '';
// // }
// const newArrForMarkupSearch = [];
// function form(event) {
//   event.preventDefault();
//   //   console.dir(event.target[0] === readBtnEl);
//   if (readInputEl.value.trim() === '') {
//     return;
//   }
//   const inputValue = readInputEl.value.toLowerCase();
//   for (let i = 0; i < localData.length; i += 1) {
//     let iteration = localData[i];
//     if (
//       iteration.description.toLowerCase().includes(inputValue) ||
//       iteration.title.toLowerCase().includes(inputValue) ||
//       iteration.category.toLowerCase().includes(inputValue) ||
//       iteration.category.toLowerCase() === inputValue
//     ) {
//       newArrForMarkupSearch.push(iteration);
//     }
//   }
//   if (newArrForMarkupSearch.length === 0) {
//     dateListEl.classList.add('underfined-hidden');
//     document.querySelector('.underfined').classList.remove('underfined-hidden');
//     return;
//   }
//   //   else if (newArrForMarkupSearch.length !== 0) {
//   //     dateListEl.classList.remove('underfined-hidden');
//   //     document.querySelector('.underfined').classList.add('underfined-hidden');
//   //   }
//   // dateListId;
//   dateListEl.innerHTML = '____';
//   document.querySelector('#dateListId').innerHTML = '';
//   const markupBlockReadSearch = getMarkupLoadMore(newArrForMarkupSearch);
//   createMarkupLoadMore(markupBlockReadSearch);
// }
// function createMarkupLoadMore(markupBlockDate) {
//   dateListEl.innerHTML = '';
//   dateListEl.innerHTML = markupBlockDate;
// }

// import { getMarkupLoadMore } from '../read_more_date';
// import { dateListEl } from '../../read';
// const readFormEl = document.querySelector('#form-field');
// const readInputEl = document.querySelector('#search-field__input');
// const readBtnEl = document.querySelector('#form-btn');
// const localData = JSON.parse(localStorage.getItem('readMoreLocal'));
// readFormEl.addEventListener('submit', form);
// // readBtnEl.addEventListener('click', btnEvent);
// // function btnEvent(event) {
// //   dateListEl.innerHTML = '';
// // }
// const newArrForMarkupSearch = [];
// function form(event) {
//   event.preventDefault();
//   //   console.dir(event.target[0] === readBtnEl);
//   if (readInputEl.value.trim() === '') {
//     return;
//   }
//   const inputValue = readInputEl.value.toLowerCase();
//   for (let i = 0; i < localData.length; i += 1) {
//     let iteration = localData[i];
//     if (
//       iteration.description.toLowerCase().includes(inputValue) ||
//       iteration.title.toLowerCase().includes(inputValue) ||
//       iteration.category.toLowerCase().includes(inputValue) ||
//       iteration.category.toLowerCase() === inputValue
//     ) {
//       newArrForMarkupSearch.push(iteration);
//     }
//   }
//   if (newArrForMarkupSearch.length === 0) {
//     dateListEl.classList.add('underfined-hidden');
//     document.querySelector('.underfined').classList.remove('underfined-hidden');
//     return;
//   }
//   //   else if (newArrForMarkupSearch.length !== 0) {
//   //     dateListEl.classList.remove('underfined-hidden');
//   //     document.querySelector('.underfined').classList.add('underfined-hidden');
//   //   }
//   // dateListId;
//   dateListEl.innerHTML = '____';
//   document.querySelector('#dateListId').innerHTML = '';
//   const markupBlockReadSearch = getMarkupLoadMore(newArrForMarkupSearch);
//   createMarkupLoadMore(markupBlockReadSearch);
// }
// function createMarkupLoadMore(markupBlockDate) {
//   dateListEl.innerHTML = '';
//   dateListEl.innerHTML = markupBlockDate;
// }
