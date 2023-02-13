import { getArticleByCategory } from '../api/index';
import { checkLokalStorage } from '../markup';
import { getWeatherRefs } from '../weather';

const refs = {
  listNewsEl: document.querySelector('ul.list-news'),
  weather: document.querySelector('.weather'),
  errorMarkup: document.querySelector('.underfined'),
  pagination: document.querySelector('.pagination'),
  newsList: document.querySelector('.list-news'),
};
let windowWidth;
let wetherPosition;

async function renderByCategory(selectedCategory) {
  // console.log(selectedCategory.replaceAll(' ', '-'));
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

  if (!selectedCategory) {
    return;
  }

  try {
    if (refs.pagination.classList.contains('pagination-hidden')) {
      refs.pagination.classList.remove('pagination-hidden');
      refs.errorMarkup.classList.add('underfined-hidden');
    }

    const dataNewsArray = await getArticleByCategory(selectedCategory);
    const markup = dataNewsArray
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
  } catch {
    // если не удалось найти по категории

    refs.newsList.innerHTML = '';
    refs.pagination.classList.add('pagination-hidden');
    //  refs.weather.classList.add('weather-hidden');
    refs.errorMarkup.classList.remove('underfined-hidden');
  }
}

function createMarkup(
  { section, multimedia, title, first_published_date, abstract, uri, url },
  opacity
) {
  if (!section) {
    section = '';
  }
  const mediaElem = multimedia;
  let mediaUrl =
    'https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c';
  if (mediaElem !== null) {
    mediaUrl = multimedia[2].url;
  }
  if (!title) {
    title = '';
  }
  if (!abstract) {
    abstract = '';
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
              ${abstract}</p>
         </div>
         <div class="item-news__info">
              <span class="item-news__info-date">
                    ${first_published_date.replaceAll('T', ' ').slice(0, 19)}
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
    //  console.log(wetherPlaceDesk);
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

  // console.log(secondElInList);
  getWeatherRefs();
  // return secondElInList;
}
export { renderByCategory };
