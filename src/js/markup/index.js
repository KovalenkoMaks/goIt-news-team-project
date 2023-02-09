async function getPopularMarkup(arr, number) {
  let filtredArr = getFiltredArr(arr, number);
  const markup = filtredArr
    .map(elem => {
      let mediaElem = elem.media;
      if (mediaElem.length === 1) {
        let mediaUrl = mediaElem[0]['media-metadata'][2].url;
        return `<li class="list-news__item">
              <article class="item-news__article">
                  <div class="item-news__wrapper-img">
                      <img class="item-news__img"
                          src="${mediaUrl}"
                          alt="">
                      <p class="item-news__category">${elem.section}</p>
                      <p class="item-news__add-to-favorite">Add to favorite
                          <use class="item-news__block-icon">
                              <svg class="item-news__icon" width="11" height="13"></svg>
                          </use>
                      </p>
                  </div>
                  <h2 class="item-news__title">
                      ${elem.title}
                  </h2>
                  <p class="item-news__description">
                      ${elem.abstract}</p>
                  <div class="item-news__info">
                      <span class="item-news__info-date">
                          ${elem.updated}
                      </span>
                      <a class="item-news__info-link" href="${elem.url}">Read more</a>
                  </div>
              </article>
          </li>`;
      }
    })
    .join('');
  return markup;
}

function getFiltredArr(value, number) {
  return value.filter(elem => elem.media.length === 1).slice(0, number);
}

export { getPopularMarkup };
