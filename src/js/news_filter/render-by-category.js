import { getArticleByCategory } from '../api/index';
import { checkLokalStorage } from '../markup';
import { getWeatherRefs } from '../weather';

const refs = {
  listNewsEl: document.querySelector('ul.list-news'),
  weather: document.querySelector('.weather'),
  errorMarkup: document.querySelector('.underfined'),
  pagination: document.querySelector('.pagination'),
  newsList: document.querySelector('.list-news'),
  loader: document.querySelector('.news-loader__container.container'),
};
let windowWidth;
let wetherPosition;

let dataForPag;

async function renderByCategory(selectedCategory) {
  if (window.innerWidth < 768) {
    windowWidth = 4;
    wetherPosition = -1;
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    windowWidth = 7;
    wetherPosition = 0;
  }
  if (window.innerWidth >= 1280) {
    windowWidth = 8;
    wetherPosition = 1;
  }

  // if (!selectedCategory) {
  //   return;
  // }

  // if (refs.pagination.classList.contains('pagination-hidden')) {
  //   refs.pagination.classList.remove('pagination-hidden');
  //   refs.errorMarkup.classList.add('underfined-hidden');
  // }
  try {
    const dataNewsArray = await getArticleByCategory(selectedCategory);
    document.querySelector('.underfined').classList.add('underfined-hidden');
    dataForPag = dataNewsArray;
    const markup = getFiltredArr(dataNewsArray, windowWidth)
      .map(data => {
        let opacity = '';
        let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
        let check = checkLokalStorage(data, localArr);
        if (check === true) {
          opacity = 'opacity';
        }

        return createMarkup(data, opacity);
      })
      .join('');

    refs.listNewsEl.innerHTML = markup;
    refs.loader.classList.add('is-hidden');

    getWetherPosition();
  } catch {
    // если не удалось найти по категории
    refs.loader.classList.add('is-hidden');
    refs.newsList.innerHTML = '';
    refs.pagination.classList.add('pagination-hidden');
    //  refs.weather.classList.add('weather-hidden');
    refs.errorMarkup.classList.remove('underfined-hidden');
  }
}

// function renderforPagination(data) {
//   return data
//     .map(data => {
//       let opacity = '';
//       let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
//       let check = checkLokalStorage(data, localArr);
//       if (check === true) {
//         opacity = 'opacity';
//       }

//       return createMarkup(data, opacity);
//     })
//     .join('');
// }

// let media;
function createMarkup(
  { section, multimedia, title, first_published_date, abstract, url, uri },
  opacity
) {
  if (!section) {
    section = '';
  }
  const mediaElem = multimedia;
  let mediaUrl =
    'https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c';
  if (mediaElem !== null && mediaElem.length >= 2) {
    mediaUrl = multimedia[2].url;
  }

  if (!title) {
    title = '';
  }
  if (!abstract) {
    abstract = `${' '}<br>${' '}<br>`;
  }
  function textCardFormat(element) {
    let textFormat = element;
    if (textFormat.length > 80) {
      textFormat = element.slice(0, 80) + '...';
    }
    return textFormat;
  }
  return `<li class="list-news__item ${opacity}">
    <article class="item-news__article">
         <div class="item-news__wrapper-img">
              <img class="item-news__img"
                    src="${mediaUrl}"
                    alt="">
              <p class="item-news__category">${section}</p>
              <button type="button" class="item-news__add-to-favorite">
                  <span class="item-news__add-to-favorite-btn">Add to favorite
                     <svg class="item-news__block-icon active-news-icon"
                                width="16"
                                height="16"
                                viewBox="0 0 37 32"
                                >
                        <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
                        </svg></span>
                  <span class="item-news__remove-to-favorite-btn ">Remove from favorite
                     <svg class="item-news__block-icon active-news-icon"
                                width="16"
                                height="16"
                                viewBox="0 0 37 32"
                                >
                            <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
                            </svg></span>
      </button>
         </div>
         <div class="item-news__wrapper-text">
         <h2 class="item-news__title">
              ${title}
         </h2>
         <p class="item-news__description">
              ${textCardFormat(abstract)}</p>
         </div>
         <div class="item-news__info">
              <span class="item-news__info-date">
              ${first_published_date
                .split('')
                .splice(0, 10)
                .join('')
                .replaceAll('-', '/')}
              </span>
              <a target="_blank" class="item-news__info-link" href="${url}">Read more</a>
      <p class='is-hidden'>${uri}</p>
         </div>
    </article>
</li>`;
}
function getWetherPosition() {
  let wetherPlaceDesk = '';
  let secondElInList = '';

  if (wetherPosition >= 0) {
    wetherPlaceDesk =
      document.querySelector('.list-news').children[wetherPosition];
    secondElInList = document.createElement('li');
    secondElInList.classList.add('list-news__item');
    secondElInList.innerHTML = `<div class="weather">
      <div class="weather__info">
        <span class="weather__deg"></span>
        <div class="weather__geo">
           <span class="weather__value"></span>
           <p class="weather__location">
              <svg  viewBox="0 0 37 32">
                <path
                        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">
                   </path>
              </svg>
              <span class="weather__city"></span>
           </p>
        </div>
      </div>
      <img class="weather__img" />
      <div class="weather__date">
        <p class="weather__day"></p>
        <p class="weather__year"></p>
      </div>
      <a
        href="https://sinoptik.ua/"
        class="weather__link"
        target="_blank"
        rel="noreferrer noopener"
        >weather for week</a
      >
   </div>`;
    wetherPlaceDesk.after(secondElInList);
  } else {
    wetherPlaceDesk = document.querySelector('.list-news').children[0];

    secondElInList = document.createElement('li');
    secondElInList.classList.add('list-news__item');
    secondElInList.innerHTML = `<div class="weather">
      <div class="weather__info">
        <span class="weather__deg"></span>
        <div class="weather__geo">
           <span class="weather__value"></span>
           <p class="weather__location">
              <svg  viewBox="0 0 37 32">
                <path
                        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">
                   </path>
              </svg>
              <span class="weather__city"></span>
           </p>
        </div>
      </div>
      <img class="weather__img" />
      <div class="weather__date">
        <p class="weather__day"></p>
        <p class="weather__year"></p>
      </div>
      <a
        href="https://sinoptik.ua/"
        class="weather__link"
        target="_blank"
        rel="noreferrer noopener"
        >weather for week</a
      >
   </div>`;
    wetherPlaceDesk.before(secondElInList);
  }

  getWeatherRefs();
  // return secondElInList;
}

const pg = document.getElementById('pagination-cat');
const btnNextPg = document.querySelector('button.next-page-cat');
const btnPrevPg = document.querySelector('button.prev-page-cat');
// const btnFirstPg = document.querySelector('button.first-page');
// const btnLastPg = document.querySelector('button.last-page');

let firstRender;
let sliceItemsAfterFirstRender;
let secondRender;
let sliceItemsAfterSecondRender;
let thirdRender;
let lastRender;

document.querySelector('.pagin-cat').addEventListener('click', onPagClick);

async function onPagClick(e) {
  let btn = valuePage.curPage;
  if (e.target.classList.contains('next-page')) {
    btn += 1;
  }
  if (e.target.classList.contains('prev-page')) {
    btn -= 1;
  }
  if (window.innerWidth < 768) {
    windowWidth = 4;
    wetherPosition = -1;
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    windowWidth = 7;
    wetherPosition = 0;
  }
  if (window.innerWidth >= 1280) {
    windowWidth = 8;
    wetherPosition = 1;
  }

  const dataNewsArray = await dataForPag;
  firstRender = await dataNewsArray.slice(0, 8);
  sliceItemsAfterFirstRender = await dataNewsArray.slice(8);
  secondRender = await sliceItemsAfterFirstRender.slice(0, 8);
  sliceItemsAfterSecondRender = await sliceItemsAfterFirstRender.slice(8);
  thirdRender = await sliceItemsAfterSecondRender.slice(0, 8);
  lastRender = await sliceItemsAfterSecondRender.slice(8);

  switch (btn) {
    case 1:
      window.scrollTo(0, 0);
      const markup = getFiltredArr(firstRender, windowWidth)
        .map(data => {
          let opacity = '';
          let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
          let check = checkLokalStorage(data, localArr);
          if (check === true) {
            opacity = 'opacity';
          }

          return createMarkup(data, opacity);
        })
        .join('');
      refs.listNewsEl.innerHTML = markup;

      getWetherPosition();

      // const markup = renderforPagination(firstRender);
      // refs.listNewsEl.innerHTML = markup;
      // refs.loader.classList.add('is-hidden');

      // getWetherPosition();
      break;
    case 2:
      window.scrollTo(0, 0);
      const markup2 = getFiltredArr(secondRender, windowWidth)
        .map(data => {
          let opacity = '';
          let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
          let check = checkLokalStorage(data, localArr);
          if (check === true) {
            opacity = 'opacity';
          }

          return createMarkup(data, opacity);
        })
        .join('');
      refs.listNewsEl.innerHTML = markup2;

      getWetherPosition();
      // const markup2 = renderforPagination(secondRender);
      // refs.listNewsEl.innerHTML = markup2;
      // refs.loader.classList.add('is-hidden');

      // getWetherPosition();
      break;
    case 3:
      window.scrollTo(0, 0);
      const markup3 = getFiltredArr(thirdRender, windowWidth)
        .map(data => {
          let opacity = '';
          let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
          let check = checkLokalStorage(data, localArr);
          if (check === true) {
            opacity = 'opacity';
          }

          return createMarkup(data, opacity);
        })
        .join('');
      refs.listNewsEl.innerHTML = markup3;

      getWetherPosition();
      break;
    case 4:
      window.scrollTo(0, 0);
      const markup4 = getFiltredArr(lastRender, windowWidth)
        .map(data => {
          let opacity = '';
          let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
          let check = checkLokalStorage(data, localArr);
          if (check === true) {
            opacity = 'opacity';
          }

          return createMarkup(data, opacity);
        })
        .join('');
      refs.listNewsEl.innerHTML = markup4;

      getWetherPosition();
      // const markup4 = renderforPagination(lastRender);
      // refs.listNewsEl.innerHTML = markup4;
      // refs.loader.classList.add('is-hidden');

      // getWetherPosition();
      break;
  }
}

// function renderforPagination(data) {
//   return data
//     .map(data => {
//       let opacity = '';
//       let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
//       let check = checkLokalStorage(data, localArr);
//       if (check === true) {
//         opacity = 'opacity';
//       }

//       return createMarkup(data, opacity);
//     })
//     .join('');
// }

const valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 4,
};

pagination();

pg.addEventListener('click', e => {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);

    valuePage.curPage = pageNumber;
    pagination(valuePage);

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
    btnNextPg.disabled = true;
    //  btnLastPg.disabled = true;
  } else {
    btnNextPg.disabled = false;
    //  btnLastPg.disabled = false;
  }
}
function getFiltredArr(array, windowWidth) {
  // deleteItems = array.slice(windowWidth);
  // firstItems = array;
  return array.slice(0, windowWidth);
}
export { renderByCategory };

