const e=document.querySelector(".list-news");!async function(){const n=await async function(){const e=await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV"),n=await e.json();let{results:s}=n;return s}();!async function(n){e.innerHTML=n}(await async function(e){return e.filter((e=>1===e.media.length)).slice(0,8).map((e=>{let n=e.media;if(1===n.length)return`<li class="list-news__item">\n              <article class="item-news__article">\n                  <div class="item-news__wrapper-img">\n                      <img class="item-news__img"\n                          src="${n[0]["media-metadata"][2].url}"\n                          alt="">\n                      <p class="item-news__category">${e.section}</p>\n                      <p class="item-news__add-to-favorite">Add to favorite\n                          <use class="item-news__block-icon"><svg href="../images/sprite.svg#heart" class="item-news__icon" width="16" height="14"></svg>\n                          </use>\n                      </p>\n                  </div>\n                  <div class="item-news__wrapper-text">\n                  <h2 class="item-news__title">\n                      ${e.title}\n                  </h2>\n                  <p class="item-news__description">\n                      ${e.abstract}</p>\n                  </div>\n                  <div class="item-news__info">\n                      <span class="item-news__info-date">\n                          ${e.updated}\n                      </span>\n                      <a class="item-news__info-link" href="${e.url}">Read more</a>\n                  </div>\n              </article>\n          </li>`})).join("")}(n))}(),async function(){const e=await fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=car&api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV"),n=await e.json();let{response:s}=n,{docs:t}=s;console.log(t)}();
//# sourceMappingURL=favorite.04e46246.js.map
