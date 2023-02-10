import { getSearchArticle } from '../api';
import * as markup from '../markup';
import swal from 'sweetalert';

const refs = {
  form: document.querySelector('#form-field'),
  input: document.querySelector('#search-field__input'),
  button: document.querySelector('#form-btn'),
  newsList: document.querySelector('.list-news'),
};

refs.form.addEventListener('submit', test);

async function test(e) {
  e.preventDefault();
  const value = refs.input.value;
  const data = await getSearchArticle(value);
  const markup = render(data);
  console.log(data);
  console.log(Boolean(value));
  //   refs.newsList.innerHTML = '';
  if (value === '') {
    console.log('empte');
    swal('Good job!', 'You clicked the button!', 'info');
  } else {
    refs.newsList.innerHTML = markup;
  }
  //   if (data.length === 0) {
  //     const error = createError();
  //     refs.newsList.innerHTML = error;
  //   }
}

function render(data) {
  return data
    .map(elem => {
      const mediaElem = elem.multimedia;
      let mediaUrl = mediaElem[0].url;
      return `<li class="list-news__item">
		<article class="item-news__article">
			 <div class="item-news__wrapper-img">
				  <img class="item-news__img"
						src="https://static01.nyt.com/${mediaUrl}"
						alt="">
				  <p class="item-news__category">${elem.section_name}</p>
				  <button type="button" class="item-news__add-to-favorite">Add to favorite
					  <svg class="item-news__block-icon js-news-icon"
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
				  ${elem.headline.main}
			 </h2>
			 <p class="item-news__description">
				  ${elem.snippet}</p>
			 </div>
			 <div class="item-news__info">
				  <span class="item-news__info-date">
						${elem.pub_date}
				  </span>
				  <a class="item-news__info-link" href="${elem.web_url}">Read more</a>
			 </div>
		</article>
  </li>`;
    })
    .join('');
}

function createError() {
  return `<section class="underfined">
	<!-- <div class="container"> -->
		 <p class="underfined___title">We haven't found news from </br> this category</p>
		 <picture class="underfined___picture">
			  <source 
					srcset="./images/mobile.png 1x, ./images/mobile@2x.png 2x" 
					type="image/png" 
					media="(max-width: 479.98px)"
					width="248" 
					height="198" 
					alt="underfined-picture"/>
			  <source 
					srcset="./images/tablet.png 1x, ./images/tablet@2x.png 2x" 
					type="image/png" 
					media="(max-width:767.98px)"
					width="130" 
					height="444" 
					alt="underfined-picture"/>
			  <source 
					srcset="./images/desktop.png 1x, ./images/desktop@2x.png 2x" 
					type="image/png" 
					media="(min-width: 1279.98px)"
					width="601" 
					height="478"
					alt="underfined-picture"/>
			  <img 
					src="./images/mobile.png" 
					alt="underfined-picture" 
					width="248" 
					height="198"/>
		 </picture>
	<!-- </div> -->
</section>`;
}

// ===============
