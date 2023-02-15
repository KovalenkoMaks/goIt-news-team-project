import './js/mobile_menu';
// import './js/search';
import './js/dark_mode';

const undefinedReadeMore = document.querySelector('.underfined');
const block = document.querySelector('.list-news');
const newList = document.querySelector('.list-news');

document
  .querySelector('.news-loader__container.container')
  .classList.add('is-hidden');

document.querySelector('.page-container').classList.add('pagination-hidden');
document
  .querySelector('.page-container-cat')
  .classList.add('pagination-cat-hidden');

newList.addEventListener('click', removeToFavorite);
const dataInLocal = JSON.parse(localStorage.getItem('newsSection'));

if (dataInLocal === null) {
  undefinedReadeMore.classList.remove('underfined-hidden');
}
function removeToFavorite(e) {
  const btn = e.target.closest(`.item-news__remove-to-favorite-btn`);
  if (!btn) return;
  if (!dataInLocal) {
    return;
  }
  // console.log(btn.parentNode.parentNode.parentNode.parentNode);
  let uri =
    btn.parentNode.parentNode.nextElementSibling.nextElementSibling
      .lastElementChild.textContent;

  for (let i = 0; i < dataInLocal.length; i += 1) {
    if (dataInLocal[i].uri === uri) {
      dataInLocal.splice(i, 1);
    }
  }
  localStorage.setItem(`newsSection`, JSON.stringify(dataInLocal));
  btn.parentNode.parentNode.parentNode.parentNode.remove();
  // location.reload();
}

function getLocalData() {
  if (localStorage.getItem('newsSection') === null) return;
  if (JSON.parse(localStorage.getItem('newsSection')).length === 0) {
    console.log('error');
    undefinedReadeMore.classList.remove('underfined-hidden');
    return;
  }
  const data = JSON.parse(localStorage.getItem('newsSection'));
  const markup = createMarkup(data);
  block.insertAdjacentHTML('beforeend', markup);
}

getLocalData();

function createMarkup(arr) {
  const newArr = arr
    .map(elem => {
      return `<li class="list-news__item">
	  <article class="item-news__article" id="${elem.id}">
			<div class="item-news__wrapper-img">
				 <img class="item-news__img"
					  src="${elem.img}"
					  alt="">
				 <p class="item-news__category">${elem.category}</p>
				 <button type="button" class="item-news__add-to-favorite hidden-span">
              <span class="item-news__add-to-favorite-btn">Add to favorite
                <svg class="item-news__block-icon active-news-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 37 32"
                  >
                  <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
                </svg>
              </span>
							<span class="item-news__remove-to-favorite-btn">Remove from favorite
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
				 ${elem.description}</p>
			</div>
			<div class="item-news__info">
				 <span class="item-news__info-date">
					  ${elem.date}
				 </span>
				 <a target="_blank" class="item-news__info-link" href="${elem.link}">Read more</a>
				 <p class='is-hidden'>${elem.uri}</p>
			</div>
	  </article>
 </li>`;
    })
    .join('');
  return newArr;
}
document.querySelector('.news-loader__container ').classList.add('is-hidden');

export { createMarkup, block };
