const t=document.querySelector(".list-news");!function(){const n=JSON.parse(localStorage.getItem("readMoreLocal"));!function(n){t.innerHTML=n}(n.map((t=>`<li class="list-news__item">\n              <article class="item-news__article">\n                  <div class="item-news__wrapper-img">\n                      <img class="item-news__img"\n                          src="${t.img}"\n                          alt="">\n                      <p class="item-news__category">${t.category}</p>\n                      <button type="button" class="item-news__add-to-favorite">\n                      <span class="item-news__add-to-favorite-btn">Add to favorite\n                         <svg class="item-news__block-icon active-news-icon"\n  \t\t\t\t\t\t\t\twidth="16"\n  \t\t\t\t\t\t\t\theight="16"\n  \t\t\t\t\t\t\t\tviewBox="0 0 37 32"\n  \t\t\t\t\t\t\t\t>\n  \t\t\t\t\t\t\t<path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n  \t\t\t\t\t\t\t</svg></span>\n  \t\t\t\t\t\t\t<span class="item-news__remove-to-favorite-btn ">Remove from favorite\n  \t\t\t\t\t\t\t<svg class="item-news__block-icon active-news-icon"\n  \t\t\t\t\t\t\twidth="16"\n  \t\t\t\t\t\t\theight="16"\n  \t\t\t\t\t\t\tviewBox="0 0 37 32"\n  \t\t\t\t\t\t\t>\n  \t\t\t\t\t\t\t<path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n  \t\t\t\t\t\t\t</svg></span>\n                      </button>\n                  </div>\n                  <div class="item-news__wrapper-text">\n                  <h2 class="item-news__title">\n                      ${t.title}\n                  </h2>\n                  <p class="item-news__description">\n                      ${t.description}</p>\n                  </div>\n                  <div class="item-news__info">\n                      <span class="item-news__info-date">\n                          ${t.date}\n                      </span>\n                      <a target="_blank" class="item-news__info-link" href="${t.link}">Read more</a>\n                      <p class='is-hidden'>${t.uri}</p>\n                  </div>\n              </article>\n          </li>`)).join(""))}();
//# sourceMappingURL=read.f4ef6e78.js.map
