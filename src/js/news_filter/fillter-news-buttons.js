import { getCategoryList } from '../api/index';
import debounce from 'lodash.debounce';
import { renderByCategory } from './render-by-category';

const refs = {
  categoryContainerEl: document.querySelector('.filter-category__container'),
  otherList: document.querySelector('.filter-category__others-container'),
  othersBtEl: document.querySelector('.filter-category__others-button > span'),
  listButtons: document.querySelector('.filter-category__list-bt'),
  loader: document.querySelector('.news-loader__container.container'),
  pagination: document.querySelector('.pagination_search'),
  listNews: document.querySelector('ul.list-news'),
};

refs.listButtons.addEventListener('click', () => {
  document
    .querySelector('.page-container-cat')
    .classList.add('pagination-cat-hidden');
});

let selectedCategory;
let selectedCategoryEl;

let currentNumberCategories = 0;
let outsideCategories = 0;

getCategoryRender();

refs.otherList.addEventListener('click', onClickOther);

async function getCategoryRender() {
  // mobile
  if (window.innerWidth < 768) {
    currentNumberCategories = 13;
    refs.othersBtEl.textContent = 'Categories';

    getCategoryList().then(categoryList => {
      renderMarkupCategory(
        categoryList,
        currentNumberCategories,
        outsideCategories
      );
      refs.listButtons.addEventListener('click', evt => {
        onClickCategory(evt);

        refs.othersBtEl.textContent = 'Categories';
        refs.pagination.classList.add('.pagination-search-hidden');
      });
      document
        .querySelector('.filter-category__list')
        .addEventListener('click', evt => {
          onClickCategory(evt);
          if (selectedCategory !== undefined) {
            changeButtonName();
          }
        });
      refs.listNews.addEventListener('click', onClickListNews);
    });
  }
  // tablet
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    currentNumberCategories = 17;
    outsideCategories = 4;
    refs.othersBtEl.textContent = 'Others';

    getCategoryList().then(categoryList => {
      renderMarkupCategory(
        categoryList,
        currentNumberCategories,
        outsideCategories
      );
      refs.listButtons.addEventListener('click', evt => {
        onClickCategory(evt);
        refs.othersBtEl.textContent = 'Others';
      });
      document
        .querySelector('.filter-category__list')
        .addEventListener('click', evt => {
          onClickCategory(evt);
          if (selectedCategory !== undefined) {
            changeButtonName();
          }
        });
      refs.listNews.addEventListener('click', onClickListNews);
    });
  }
  // desktop
  if (window.innerWidth >= 1280) {
    currentNumberCategories = 19;
    outsideCategories = 6;
    refs.othersBtEl.textContent = 'Others';

    getCategoryList().then(categoryList => {
      renderMarkupCategory(
        categoryList,
        currentNumberCategories,
        outsideCategories
      );
      refs.listButtons.addEventListener('click', evt => {
        onClickCategory(evt);
        refs.othersBtEl.textContent = 'Others';
      });
      document
        .querySelector('.filter-category__list')
        .addEventListener('click', evt => {
          onClickCategory(evt);
          if (selectedCategory !== undefined) {
            changeButtonName();
          }
        });
      refs.listNews.addEventListener('click', onClickListNews);
    });
  }
}
function addActiveClass(evt) {
  if (selectedCategoryEl) {
    selectedCategoryEl.classList.remove('isActive-outsideBt');
  }
  selectedCategoryEl = evt.target;
  evt.target.classList.add('isActive-outsideBt');
}
function onClickCategory(evt) {
  addActiveClass(evt);
  if (evt.target.textContent.length > 20) {
    console.log(selectedCategory);
    return;
  }
  selectedCategory = evt.target.textContent;
  refs.loader.classList.remove('is-hidden');
  renderByCategory(selectedCategory.toLowerCase());
  refs.pagination.classList.add('pagination-search-hidden');
  document.querySelector('.page-container').classList.add('pagination-hidden');
  document
    .querySelector('.page-container-cat')
    .classList.remove('pagination-cat-hidden');
  //   document
  //     .querySelector('.paginator_search')
  //     .classList.add('pagination-search-hidden');
}
function renderMarkupCategory(
  categoryList,
  currentNumberCategories,
  outsideCategories
) {
  const catigorysArray = categoryList.slice(0, currentNumberCategories);
  const catigorysOtherArray = catigorysArray.slice(outsideCategories);
  const catigorysOutsideArray = catigorysArray.slice(0, outsideCategories);

  const listEl = document.createElement('ul');
  listEl.classList.add('filter-category__list');
  // Разметка:
  /* <ul class="filter-category__list"></ul> */
  catigorysOutsideArray.map(({ display_name }, index) =>
    changeCategoryName(display_name, index)
  );
  catigorysOtherArray.map(({ display_name }) =>
    createMarkupOtherCategory(display_name, listEl)
  );
  refs.categoryContainerEl.append(listEl);
}
function changeCategoryName(categoryName, index) {
  const itemToChange = document.querySelector(
    `.filter-category__item-bt:nth-child(${index + 1})`
  );
  itemToChange.textContent = categoryName;
}
function createMarkupOtherCategory(category, listEl) {
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
function onClickOther(evt) {
  evt.currentTarget.classList.toggle('is-open');
}

function changeButtonName() {
  refs.othersBtEl.textContent = selectedCategory;
}
function onClickListNews(evt) {
  const isCategory = evt.target.classList.contains('item-news__category');
  if (!isCategory) {
    return;
  }
  selectedCategory = evt.target.textContent;
  refs.loader.classList.remove('is-hidden');
  renderByCategory(selectedCategory.toLowerCase());
  document
    .querySelector('.page-container-cat')
    .classList.remove('pagination-cat-hidden');
}

// ===========================================================================

const pg = document.getElementById('pagination-cat');
const btnNextPg = document.querySelector('button.next-page-cat');
const btnPrevPg = document.querySelector('button.prev-page-cat');
// const btnFirstPg = document.querySelector('button.first-page');
// const btnLastPg = document.querySelector('button.last-page');

const valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 10,
};

pagination();

pg.addEventListener('click', e => {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);

    valuePage.curPage = pageNumber;
    pagination(valuePage);
    console.log(valuePage);
    handleButtonLeft();
    handleButtonRight();
  }
});

// DYNAMIC PAGINATION
function pagination() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePage;

  const range = delta + 4; // use for handle visible number of links left side

  let render = '';
  let renderTwoSide = '';
  let dot = `<li class="pg-item-cat"><a class="pg-link-cat">...</a></li>`;
  let countTruncate = 0; // use for ellipsis - truncate left side or right side

  // use for truncate two side
  const numberTruncateLeft = curPage - delta;
  const numberTruncateRight = curPage + delta;

  let active = '';
  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos === curPage ? 'active' : '';

    // truncate
    if (totalPages >= 2 * range - 1) {
      if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {
        // truncate 2 side
        if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
          renderTwoSide += renderPage(pos, active);
        }
      } else {
        // truncate left side or right side
        if (
          (curPage < range && pos <= range) ||
          (curPage > totalPages - range && pos >= totalPages - range + 1) ||
          pos === totalPages ||
          pos === 1
        ) {
          render += renderPage(pos, active);
        } else {
          countTruncate++;
          if (countTruncate === 1) render += dot;
        }
      }
    } else {
      // not truncate
      render += renderPage(pos, active);
    }
  }

  if (renderTwoSide) {
    renderTwoSide =
      renderPage(1) + dot + renderTwoSide + dot + renderPage(totalPages);
    pg.innerHTML = renderTwoSide;
  } else {
    pg.innerHTML = render;
  }
}

function renderPage(index, active = '') {
  return ` <li class="pg-item-cat ${active}" data-page="${index}">
        <a class="pg-link-cat" href="#">${index}</a>
    </li>`;
}

document
  .querySelector('.page-container-cat')
  .addEventListener('click', function (e) {
    handleButton(e.target);
  });

function handleButton(element) {
  if (element.classList.contains('prev-page-cat')) {
    valuePage.curPage--;
    handleButtonLeft();
    btnNextPg.disabled = false;
    //  btnLastPg.disabled = false;
  } else if (element.classList.contains('next-page-cat')) {
    valuePage.curPage++;
    handleButtonRight();
    btnPrevPg.disabled = false;
    //  btnFirstPg.disabled = false;
  }
  pagination();
}
function handleButtonLeft() {
  if (valuePage.curPage === 1) {
    btnPrevPg.disabled = true;
    //  btnFirstPg.disabled = true;
  } else {
    btnPrevPg.disabled = false;
    //  btnFirstPg.disabled = false;
  }
}
function handleButtonRight() {
  if (valuePage.curPage === valuePage.totalPages) {
    console.log(valuePage.curPage);
    btnNextPg.disabled = true;
    //  btnLastPg.disabled = true;
  } else {
    btnNextPg.disabled = false;
    //  btnLastPg.disabled = false;
  }
}
