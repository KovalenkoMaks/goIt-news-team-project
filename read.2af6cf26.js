function e(e,n,t,s){Object.defineProperty(e,n,{get:t,set:s,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=n.parcelRequireda87;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var n=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){s[e]=n},n.parcelRequireda87=i),i.register("7pY5M",(function(n,t){e(n.exports,"dateListEl",(function(){return o})),i("2CNHP"),i("1gkpc");var s=i("cEFps");const o=document.querySelector(".date-list"),r=document.querySelector(".underfined");const a=function(e=[],n){const t={};for(const s of e){const e=n(s);t[e]?t[e].push(s):t[e]=[s]}return t}(function(){const e=JSON.parse(localStorage.getItem("readMoreLocal"));if(null!==e)return e;r.classList.remove("underfined-hidden")}(),(e=>e.dayRead));var l,c;c=a,l=Object.keys(c).map((e=>`<li class="date-list__item">\n  <button class="date-list__btn"><span class="date-list__btn-text">${e}</span><span class="date-list__btn-block">\n  <svg class="date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>\n<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">\n<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>\n</symbol>\n</svg></span>\n  </button>\n  <ul class="list-news is-hidden">${(0,s.getMarkupLoadMore)(c[e])}</ul>\n</li>`)).join(""),o.innerHTML=l,o.addEventListener("click",(e=>{const n=e.target.closest(".date-list__btn");if(!n)return;const t=n.querySelector(".date-list__btn-icon");if(!n.nextElementSibling.classList.contains("is-hidden"))return n.nextElementSibling.classList.add("is-hidden"),void t.classList.remove("turn");if(!void Array.from(document.querySelectorAll(".list-news")).filter((e=>{e.classList.contains("is-hidden")}))){document.querySelectorAll(".list-news").forEach((e=>{e.classList.add("is-hidden"),t.classList.toggle("turn")}))}n.nextElementSibling.classList.toggle("is-hidden"),t.classList.toggle("turn")}))})),i.register("cEFps",(function(n,t){function s(e){return e.map((e=>`<li class="list-news__item">\n              <article class="item-news__article">\n                  <div class="item-news__wrapper-img">\n                      <img class="item-news__img"\n                          src="${e.img}"\n                          alt="">\n                      <p class="item-news__category">${e.category}</p>\n                      <button type="button" class="item-news__add-to-favorite">\n                      <span class="item-news__add-to-favorite-btn">Add to favorite\n                         <svg class="item-news__block-icon active-news-icon"\n                                width="16"\n                                height="16"\n                                viewBox="0 0 37 32"\n                                >\n                            <path style="stroke: var(--color1, #4440F7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                            </svg></span>\n                            <span class="item-news__remove-to-favorite-btn ">Remove from favorite\n                            <svg class="item-news__block-icon active-news-icon"\n                            width="16"\n                            height="16"\n                            viewBox="0 0 37 32"\n                            >\n                            <path style="stroke: var(--color1, #4440F7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                            </svg></span>\n                      </button>\n                  </div>\n                  <div class="item-news__wrapper-text">\n                  <h2 class="item-news__title">\n                      ${e.title}\n                  </h2>\n                  <p class="item-news__description">\n                      ${e.description}</p>\n                  </div>\n                  <div class="item-news__info">\n                      <span class="item-news__info-date">\n                          ${e.date}\n                      </span>\n                      <a target="_blank" class="item-news__info-link" href="${e.link}">Read more</a>\n                      <p class='is-hidden'>${e.uri}</p>\n                  </div>\n              </article>\n          </li>`)).join("")}e(n.exports,"getMarkupLoadMore",(function(){return s}))})),i("7pY5M");
//# sourceMappingURL=read.2af6cf26.js.map