const dateListEl = document.querySelector('.date-list');
// const date = new Date();

const markupBlockDate = `<li class="date-list__item">
  <button class="date-list__btn"><span class="date-list__btn-text">12/02/2023</span><span class="date-list__btn-block">
  <svg class="date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>
<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">
<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>
</symbol>
</svg></span>
  </button>
  <ul class="list-news is-hidden"></ul>
</li>`;

dateListEl.innerHTML = markupBlockDate;

const btnDateList = document.querySelector('.date-list__btn');
const item = document.querySelector('.list-news');
const iconDate = document.querySelector('.date-list__btn-icon');

dateListEl.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;
  item.classList.toggle('is-hidden');
  iconDate.classList.toggle('turn');
});
