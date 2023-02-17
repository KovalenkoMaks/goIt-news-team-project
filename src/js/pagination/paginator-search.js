// ================================================  PAGINATION
const pg = document.getElementById('pagination-search');
const btnNextPg = document.querySelector('button.next-page-search');
const btnPrevPg = document.querySelector('button.prev-page-search');
// const btnFirstPg = document.querySelector('button.first-page');
// const btnLastPg = document.querySelector('button.last-page');
// let page = 1;
// let sumPages;
let valuePage;
let refs;
let dataSource;
let render;
let getWetherPosition;

const paginationSearch = document.querySelector('.pagin-search');
const load = document.querySelector('.news-loader__container.container');
paginationSearch.addEventListener('click', onClickPAgination);

async function onClickPAgination(e) {
  if (
    !e.target.classList.contains('pg-item-search') &&
    !e.target.classList.contains('next-page-search') &&
    !e.target.classList.contains('prev-page-search') &&
    !e.target.classList.contains('btn-prev') &&
    !e.target.classList.contains('btn-next')
  ) {
    return;
  }

  if (
    e.target.classList.contains('next-page-search') ||
    e.target.classList.contains('btn-prev')
  ) {
    if (valuePage.curPage <= 1) {
      valuePage.curPage = 1;
      return;
    }

    valuePage.curPage -= 1;
  }
  if (
    e.target.classList.contains('prev-page-search') ||
    e.target.classList.contains('btn-next')
  ) {
    if (valuePage.curPage >= valuePage.totalPages) {
      valuePage.curPage = valuePage.totalPages;
      return;
    }

    valuePage.curPage += 1;
  }
  let windowWidth = 0;
  let wetherPosition = 0;
  if (window.innerWidth < 768) {
    windowWidth = 4;
    wetherPosition = -1;
  }
  if (window.innerWidth > 768 && window.innerWidth < 1280) {
    windowWidth = 7;
    wetherPosition = 0;
  }
  if (window.innerWidth >= 1280) {
    windowWidth = 8;
    wetherPosition = 1;
  }
  const value = refs.input.value;
  load.classList.remove('is-hidden');
  refs.newsList.innerHTML = '';
  window.scrollTo(0, 0);
  const data = await dataSource(value, valuePage.curPage - 1);
  load.classList.add('is-hidden');
  const markup = render(data, windowWidth);
  refs.newsList.innerHTML = markup;
  getWetherPosition();
}

// async function fetchByPagination(value, page) {
//   const articleFetch = await fetch(
//     `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV&page=${page}`
//   );
//   const articles = await articleFetch.json();
//   let { response } = articles;
//   //   console.log(response.meta.hits);
//   let { docs } = response;
//   //   console.log(docs);

//   return docs;
// }

pg.addEventListener('click', e => {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);

    valuePage.curPage = pageNumber;
    pagination(valuePage);
    // console.log(valuePage);
    handleButtonLeft();
    handleButtonRight();
  }
});

// DYNAMIC PAGINATION
function initPagination(
  pageObj,
  refsObj,
  dataSourceFunc,
  renderFunc,
  getWetherPositionFunc
) {
  valuePage = pageObj;
  refs = refsObj;
  dataSource = dataSourceFunc;
  render = renderFunc;
  getWetherPosition = getWetherPositionFunc;
}

function pagination() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePage;

  const range = delta + 4; // use for handle visible number of links left side

  let render = '';
  let renderTwoSide = '';
  let dot = `<li class="pg-item-dot"><a class="pg-link-search">...</a></li>`;
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
  return ` <li class="pg-item-search ${active}" data-page="${index}">
        <a class="pg-link-search" href="#">${index}</a>
    </li>`;
}

document
  .querySelector('.page-container-search')
  .addEventListener('click', function (e) {
    handleButton(e.target);
  });

function handleButton(element) {
  if (element.classList.contains('prev-page-search')) {
    valuePage.curPage--;
    handleButtonLeft();
    btnNextPg.disabled = false;
    //  btnLastPg.disabled = false;
  } else if (element.classList.contains('next-page-search')) {
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
function textCardFormat(element) {
  let textFormat = element;
  if (textFormat.length > 80) {
    textFormat = element.slice(0, 80) + '...';
  }
  return textFormat;
}

export { initPagination, pagination, textCardFormat };
