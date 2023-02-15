import './js/mobile_menu';
// import './js/search';
import './js/dark_mode';
import { getMarkupLoadMore } from './js/read_more_date';
export const dateListEl = document.querySelector('.date-list');
const undefinedReadeMore = document.querySelector('.underfined');
function arrLocal() {
  const local = JSON.parse(localStorage.getItem('readMoreLocal'));
  if (local === null) {
    undefinedReadeMore.classList.remove('underfined-hidden');
    return;
  }
  return local;
}

function sortDateReadMore(array = [], callback) {
  const groupByDate = {};
  for (const objectEl of array) {
    const key = callback(objectEl);
    if (groupByDate[key]) {
      groupByDate[key].push(objectEl);
    } else {
      groupByDate[key] = [objectEl];
    }
  }
  return groupByDate;
}

const sortDate = sortDateReadMore(arrLocal(), objectEl => objectEl.dayRead);
markupDateRead(sortDate);
function markupDateRead(date) {
  const markupBlockDate = Object.keys(date)
    .map(key => {
      return `<li class="date-list__item">
  <button class="date-list__btn"><span class="date-list__btn-text">${key}</span><span class="date-list__btn-block">
  <svg class="date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>
<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">
<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>
</symbol>
</svg></span>
  </button>
  <ul class="list-news is-hidden">${getMarkupLoadMore(date[key])}</ul>
</li>`;
    })
    .join('');
  createMarkupLoadMore(markupBlockDate);
}

dateListEl.addEventListener('click', event => {
  const btn = event.target.closest(`.date-list__btn`);
  if (!btn) return;
  const iconDate = btn.querySelector('.date-list__btn-icon');

  if (!btn.nextElementSibling.classList.contains('is-hidden')) {
    btn.nextElementSibling.classList.add('is-hidden');
    iconDate.classList.remove('turn');
    return;
  }

  function isHiddenItem(arr) {
    arr.filter(list => {
      list.classList.contains('is-hidden');
    });
  }

  if (!isHiddenItem(Array.from(document.querySelectorAll('.list-news')))) {
    const item = document.querySelectorAll('.list-news');
    item.forEach(elem => {
      elem.classList.add('is-hidden');
      iconDate.classList.toggle('turn');
    });
  }

  btn.nextElementSibling.classList.toggle('is-hidden');
  iconDate.classList.toggle('turn');

  return;
});

function createMarkupLoadMore(markupBlockDate) {
  dateListEl.innerHTML = markupBlockDate;
}
