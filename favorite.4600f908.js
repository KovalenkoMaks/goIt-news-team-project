var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequireda87;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var s={id:t,exports:{}};return e[t]=s,i.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequireda87=i),i("2CNHP"),i("3TIkN"),i("1gkpc");const s=document.querySelector(".underfined"),o=document.querySelector(".list-news"),r=document.querySelector(".list-news");document.querySelector(".news-loader__container.container").classList.add("is-hidden"),document.querySelector(".page-container").classList.add("pagination-hidden"),document.querySelector(".page-container-cat").classList.add("pagination-cat-hidden"),r.addEventListener("click",(function(t){const e=t.target.closest(".item-news__remove-to-favorite-btn");if(!e)return;if(!a)return;let n=e.parentNode.parentNode.nextElementSibling.nextElementSibling.lastElementChild.textContent;console.log(n);for(let t=0;t<a.length;t+=1)a[t].uri===n&&a.splice(t,1);localStorage.setItem("newsSection",JSON.stringify(a)),location.reload()}));const a=JSON.parse(localStorage.getItem("newsSection"));console.log(a),null===a&&s.classList.remove("underfined-hidden"),function(){if(null===localStorage.getItem("newsSection"))return;if(0===JSON.parse(localStorage.getItem("newsSection")).length)return console.log("error"),void s.classList.remove("underfined-hidden");const t=JSON.parse(localStorage.getItem("newsSection")).map((t=>`<li class="list-news__item">\n\t  <article class="item-news__article" id="${t.id}">\n\t\t\t<div class="item-news__wrapper-img">\n\t\t\t\t <img class="item-news__img"\n\t\t\t\t\t  src="${t.img}"\n\t\t\t\t\t  alt="">\n\t\t\t\t <p class="item-news__category">${t.category}</p>\n\t\t\t\t <button type="button" class="item-news__add-to-favorite hidden-span">\n              <span class="item-news__add-to-favorite-btn">Add to favorite\n                <svg class="item-news__block-icon active-news-icon"\n                  width="16"\n                  height="16"\n                  viewBox="0 0 37 32"\n                  >\n                  <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                </svg>\n              </span>\n\t\t\t\t\t\t\t<span class="item-news__remove-to-favorite-btn">Remove from favorite\n\t\t\t\t\t\t\t\t<svg class="item-news__block-icon active-news-icon"\n\t\t\t\t\t\t\t\t  width="16"\n\t\t\t\t\t\t\t\t  height="16"\n\t\t\t\t\t\t\t\t  viewBox="0 0 37 32"\n\t\t\t\t\t\t\t\t  >\n\t\t\t\t\t\t\t\t  <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n\t\t\t\t\t\t  </svg></span>\n\t\t\t\t  </button>\n\t\t\t</div>\n\t\t\t<div class="item-news__wrapper-text">\n\t\t\t<h2 class="item-news__title">\n\t\t\t\t ${t.title}\n\t\t\t</h2>\n\t\t\t<p class="item-news__description">\n\t\t\t\t ${t.description}</p>\n\t\t\t</div>\n\t\t\t<div class="item-news__info">\n\t\t\t\t <span class="item-news__info-date">\n\t\t\t\t\t  ${t.date}\n\t\t\t\t </span>\n\t\t\t\t <a target="_blank" class="item-news__info-link" href="${t.link}">Read more</a>\n\t\t\t\t <p class='is-hidden'>${t.uri}</p>\n\t\t\t</div>\n\t  </article>\n </li>`)).join("");o.insertAdjacentHTML("beforeend",t)}(),document.querySelector(".news-loader__container ").classList.add("is-hidden");
//# sourceMappingURL=favorite.4600f908.js.map
