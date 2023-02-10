import { getCategoryList } from '../api/index';
import debounce from 'lodash.debounce';

const refs = {
    categoryContainerEl: document.querySelector('.filter-category__container'),
    othersBtEl: document.querySelector('.filter-category__others-button > span'),
    filterElements: document.querySelector('.filter-elements'),
}

let currentNumberCategories = 0;
let outsideCategories = 0;
// console.log(window.innerWidth);
getCategoryRender();

window.addEventListener(
  'resize',
  debounce(e => {
    getCategoryRender();
  }, 1000)
);
async function getCategoryRender() {
  if (window.innerWidth < 768) {
    currentNumberCategories = 13;
    refs.othersBtEl.textContent = 'Categories';

    getCategoryList().then(categoryList => renderMarkupCategory(categoryList, currentNumberCategories, outsideCategories));
  }
  if (window.innerWidth > 768 && window.innerWidth < 1280) {
    currentNumberCategories = 17;
    outsideCategories = 4;
    refs.othersBtEl.textContent = 'Others';

    getCategoryList().then(categoryList => renderMarkupCategory(categoryList, currentNumberCategories, outsideCategories));
  }
  if (window.innerWidth >= 1280) {
    currentNumberCategories = 19;
    outsideCategories = 6;
    refs.othersBtEl.textContent = 'Others';

    getCategoryList().then(categoryList => renderMarkupCategory(categoryList, currentNumberCategories, outsideCategories));
  }
}

function renderMarkupCategory(categoryList, currentNumberCategories, outsideCategories) {

    const catigorysArray = categoryList.slice(0, currentNumberCategories);
    const catigorysOtherArray = catigorysArray.slice(outsideCategories);
    const catigorysOutsideArray = catigorysArray.slice(0, outsideCategories);

    const listEl = document.createElement('ul');
    listEl.classList.add('filter-category__list');
    // Разметка:
    /* <ul class="filter-category__list"></ul> */
    catigorysOutsideArray.map(({display_name}, index) => changeCategoryName(display_name, index));
    catigorysOtherArray.map(({ display_name }) => createMarkupOtherCategory(display_name, listEl));
    refs.categoryContainerEl.append(listEl);
}
function changeCategoryName (categoryName, index) {
    const itemToChange = document.querySelector(`.filter-category__item-bt:nth-child(${index + 1})`);
    itemToChange.textContent = categoryName;
}
function createMarkupOtherCategory (category, listEl) {
    const itemEl = document.createElement('li');
    itemEl.classList.add('filter-category__item');

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('filter-category__button');
    buttonEl.textContent = category;
    itemEl.append(buttonEl);

    listEl.append(itemEl);

    // Разметка:
    // <li class="filter-category__item">
    //     <button class="filter-category__button">{ Category name}</button>
    // </li>
 }