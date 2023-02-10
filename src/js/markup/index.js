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
                      <button type="button" class="item-news__add-to-favorite"><span class="add-to-favorite__text">Add to favorite</span><svg class="item-news__block-icon js-news-icon"
  width="16"
  height="16"
  viewBox="0 0 37 32"
>
<path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>

</svg>
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
                          ${elem.updated}
                      </span>
                      <a target="_blank" class="item-news__info-link" href="${
                        elem.url
                      }">Read more</a>
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

function textCardFormat(element) {
  let textFormat = element.abstract;
  if (textFormat.length > 80) {
    return (textFormat = element.abstract.slice(0, 80) + '...');
  }
  return textFormat;
}
