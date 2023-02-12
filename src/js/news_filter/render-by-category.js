import { getArticleByCategory } from '../api/index';
import { checkLokalStorage } from '../markup';

const refs = {
    listNewsEl: document.querySelector('ul.list-news'),
}

async function renderByCategory(selectedCategory) {
    console.log(selectedCategory);
    try {
        if (!selectedCategory) {
            return
        }
        const dataNewsArray = await getArticleByCategory(selectedCategory);
        const markup = dataNewsArray.map(data => {
            let opacity = '';
            let localArr = JSON.parse(localStorage.getItem('readMoreLocal'));
            let check = checkLokalStorage(data, localArr);
            if (check === true) {
                opacity = 'opacity';
            }
            console.log(data);
            return createMarkup(data, opacity);
        }).join('');
        refs.listNewsEl.innerHTML = markup;
    } catch {
        // если не удалось найти по категории
        console.log('oops');
        refs.listNewsEl.innerHTML = '';
    }
}
function createMarkup({section, multimedia, title, first_published_date, abstract}, opacity) {
    return `<li class="list-news__item ${opacity}">
    <article class="item-news__article">
         <div class="item-news__wrapper-img">
              <img class="item-news__img"
                    src="${multimedia[2].url}"
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
                    ${first_published_date}
              </span>
              <a target="_blank" class="item-news__info-link" href="${'elem.web_url'}">Read more</a>
      <p class='is-hidden'>${'elem.uri'}</p>
         </div>
    </article>
</li>`
};
export {renderByCategory};