import { deleteItems, firstItems, checkLokalStorage } from '../markup';
import { getWeatherRefs } from '../weather';
import { getWetherPosition, getPopularRender } from '../popular_render';
const pg = document.getElementById('pagination');
const btnNextPg = document.querySelector('button.next-page');
const btnPrevPg = document.querySelector('button.prev-page');
const newsList = document.querySelector('.list-news');
// const btnFirstPg = document.querySelector('button.first-page');
// const btnLastPg = document.querySelector('button.last-page');
let windowWidth = 0;
let wetherPosition = 0;
let uptadeDeleteItems;
setTimeout(() => {
  uptadeDeleteItems = deleteItems.slice(8);
  // firstMarkup = firstItems;
}, 1500);
let sliceItems;
const refs = {
  pagination: document.querySelector('.pagin'),
};
// console.log(refs.pagination);

refs.pagination.addEventListener('click', e => {
  // let btn = valuePage.curPage;

  if (
    e.target.classList.contains('next-page') ||
    e.target.classList.contains('btn-next')
  ) {
    valuePage.curPage += 1;
  }
  if (
    e.target.classList.contains('prev-page') ||
    e.target.classList.contains('btn-prev')
  ) {
    valuePage.curPage -= 1;
  }
  sliceItems = null;
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
  switch (valuePage.curPage) {
    case 1:
      getPopularRender();
      break;
    case 2:
      sliceItems = deleteItems.slice(0, 8);
      uptadeDeleteItems = deleteItems.slice(8);
      // console.log(sliceItems);
      const markup2 = render(sliceItems, windowWidth);
      // console.log(markup2);
      newsList.innerHTML = markup2;
      getWetherPosition();
      // getRender(sliceItems);
      break;
    case 3:
      const markup3 = render(uptadeDeleteItems, windowWidth);
      newsList.innerHTML = markup3;
      getWetherPosition();
      break;
  }
  window.scrollTo(0, 0);
  //   if (btn === 3) {

  //   }
  //   classList.contains('pg-item')
  //   console.log(btn);
  //   console.log(btn.textValue);
  //   if (btn.textValue === 3) console.log('done');
});

function render(data, number) {
  // console.log(data);
  // console.log(number);
  let filtredArr = getFiltredArr(data, number);
  //   console.log(filtredArr);
  return filtredArr
    .map(elem => {
      let opacity = '';
      let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
      let check = checkLokalStorage(elem, localArr);
      if (check === true) {
        opacity = 'opacity';
      }
      let mediaElem = elem.media;
      let mediaUrl =
        'https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c';
      if (mediaElem.length !== 0) {
        mediaUrl = mediaElem[0]['media-metadata'][2].url;
      }

      return `<li class="list-news__item ${opacity}">
			  <article class="item-news__article " id="${elem.id}">
					<div class="item-news__wrapper-img">
						 <img class="item-news__img"
							  src="${mediaUrl}"
							  alt="">
						 <p class="item-news__category">${elem.section}</p>
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
						 ${elem.title}
					</h2>
					<p class="item-news__description">
						 ${textCardFormat(elem)}</p>
					</div>
					<div class="item-news__info">
						 <span class="item-news__info-date">
							  ${dateNews(elem.updated)}
						 </span>
						 <a target="_blank" class="item-news__info-link" href="${
               elem.url
             }">Read more</a>
						 <p class='is-hidden'>${elem.uri}</p>
					</div>
			  </article>
		 </li>`;
    })
    .join('');
}

function getFiltredArr(value, number) {
  // deleteItems = value.slice(number);
  return value.slice(0, number);
}

function textCardFormat(element) {
  let textFormat = element.abstract;
  if (textFormat.length > 80) {
    return (textFormat = element.abstract.slice(0, 80) + '...');
  }
  return textFormat;
}

function dateNews(data) {
  return data.split('').splice(0, 10).join('').replaceAll('-', '/');
}

const valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 3,
};

pagination();

pg.addEventListener('click', e => {
  const ele = e.target;

  if (ele.dataset.page) {
    const pageNumber = parseInt(e.target.dataset.page, 10);

    valuePage.curPage = pageNumber;
    pagination(valuePage);
    //  console.log(valuePage);
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
  let dot = `<li class="pg-item"><a class="pg-link">...</a></li>`;
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
  return ` <li class="pg-item ${active}" data-page="${index}">
        <a class="pg-link" href="#">${index}</a>
    </li>`;
}

document
  .querySelector('.page-container')
  .addEventListener('click', function (e) {
    handleButton(e.target);
  });

function handleButton(element) {
  if (element.classList.contains('prev-page')) {
    valuePage.curPage--;
    handleButtonLeft();
    btnNextPg.disabled = false;
    //  btnLastPg.disabled = false;
  } else if (element.classList.contains('next-page')) {
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
    //  console.log(valuePage.curPage);
    btnNextPg.disabled = true;
    //  btnLastPg.disabled = true;
  } else {
    btnNextPg.disabled = false;
    //  btnLastPg.disabled = false;
  }
}
