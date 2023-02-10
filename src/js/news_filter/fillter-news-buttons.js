import { getCategoryList } from '../api/index';

const refs = {
    categoryContainerEl: document.querySelector('.filter-category__container'),
}

getCategoryList().then(categoryList => renderMarkupCategory(categoryList))

function renderMarkupCategory(categoryList) {
    const listEl = document.createElement('ul');
    listEl.classList.add('filter-category__list');
    // Разметка:
    /* <ul class="filter-category__list"></ul> */
    categoryList.map(({ display_name }) => createMarkupCategory(display_name, listEl));
    refs.categoryContainerEl.append(listEl);
}
function createMarkupCategory (category, listEl) {
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