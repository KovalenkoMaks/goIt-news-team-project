!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},i=n.parcelRequireda87;null==i&&((i=function(n){if(n in e)return e[n].exports;if(n in t){var i=t[n];delete t[n];var s={id:n,exports:{}};return e[n]=s,i.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){t[n]=e},n.parcelRequireda87=i),i("iryiF"),i("458gi");var s=document.querySelector(".date-list"),a=document.querySelector(".underfined");var o,r,l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,t={},i=!0,s=!1,a=void 0;try{for(var o,r=n[Symbol.iterator]();!(i=(o=r.next()).done);i=!0){var l=o.value,c=e(l);t[c]?t[c].push(l):t[c]=[l]}}catch(n){s=!0,a=n}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return t}(function(){var n=JSON.parse(localStorage.getItem("readMoreLocal"));if(null!==n)return n;a.classList.remove("underfined-hidden")}(),(function(n){return n.dayRead}));r=l,o=Object.keys(r).map((function(n){return'<li class="date-list__item">\n  <button class="date-list__btn"><span class="date-list__btn-text">'.concat(n,'</span><span class="date-list__btn-block">\n  <svg class="date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>\n<symbol id="icon-Vector-2-1" viewBox="0 0 50 32">\n<path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>\n</symbol>\n</svg></span>\n  </button>\n  <ul class="list-news is-hidden">').concat(r[n].map((function(n){return'<li class="list-news__item">\n              <article class="item-news__article">\n                  <div class="item-news__wrapper-img">\n                      <img class="item-news__img"\n                          src="'.concat(n.img,'"\n                          alt="">\n                      <p class="item-news__category">').concat(n.category,'</p>\n                      <button type="button" class="item-news__add-to-favorite">\n                      <span class="item-news__add-to-favorite-btn">Add to favorite\n                         <svg class="item-news__block-icon active-news-icon"\n                                width="16"\n                                height="16"\n                                viewBox="0 0 37 32"\n                                >\n                            <path style="stroke: var(--color1, #4440F7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                            </svg></span>\n                            <span class="item-news__remove-to-favorite-btn ">Remove from favorite\n                            <svg class="item-news__block-icon active-news-icon"\n                            width="16"\n                            height="16"\n                            viewBox="0 0 37 32"\n                            >\n                            <path style="stroke: var(--color1, #4440F7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                            </svg></span>\n                      </button>\n                  </div>\n                  <div class="item-news__wrapper-text">\n                  <h2 class="item-news__title">\n                      ').concat(n.title,'\n                  </h2>\n                  <p class="item-news__description">\n                      ').concat(n.description,'</p>\n                  </div>\n                  <div class="item-news__info">\n                      <span class="item-news__info-date">\n                          ').concat(n.date,'\n                      </span>\n                      <a target="_blank" class="item-news__info-link" href="').concat(n.link,"\">Read more</a>\n                      <p class='is-hidden'>").concat(n.uri,"</p>\n                  </div>\n              </article>\n          </li>")})).join(""),"</ul>\n</li>")})).join(""),s.innerHTML=o;document.querySelector(".list-news");var c=document.querySelector(".date-list__btn-icon");s.addEventListener("click",(function(n){var e=n.target.closest(".date-list__btn");e&&(e.nextElementSibling.classList.toggle("is-hidden"),c.classList.toggle("turn"))}))}();
//# sourceMappingURL=read.18a87f63.js.map
