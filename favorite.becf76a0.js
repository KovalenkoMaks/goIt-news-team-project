function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".list-news");var i,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,u=f||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,m=Math.min,w=function(){return u.Date.now()};function v(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function _(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(v(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=v(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var t=s.test(e);return t||a.test(e)?c(e.slice(2),t?2:8):o.test(e)?NaN:+e}i=function(e,n,t){var i,r,o,s,a,c,f=0,l=!1,u=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(n){var t=i,o=r;return i=r=void 0,f=n,s=e.apply(o,t)}function h(e){return f=e,a=setTimeout(b,n),l?y(e):s}function g(e){var t=e-c;return void 0===c||t>=n||t<0||u&&e-f>=o}function b(){var e=w();if(g(e))return j(e);a=setTimeout(b,function(e){var t=n-(e-c);return u?m(t,o-(e-f)):t}(e))}function j(e){return a=void 0,d&&i?y(e):(i=r=void 0,s)}function T(){var e=w(),t=g(e);if(i=arguments,r=this,c=e,t){if(void 0===a)return h(c);if(u)return a=setTimeout(b,n),y(c)}return void 0===a&&(a=setTimeout(b,n)),s}return n=_(n)||0,v(t)&&(l=!!t.leading,o=(u="maxWait"in t)?p(_(t.maxWait)||0,n):o,d="trailing"in t?!!t.trailing:d),T.cancel=function(){void 0!==a&&clearTimeout(a),f=0,i=c=r=a=void 0},T.flush=function(){return void 0===a?s:j(w())},T};let y=0;async function h(){window.innerWidth<768&&(y=4),window.innerWidth>768&&window.innerWidth<1280&&(y=6),window.innerWidth>=1280&&(y=8);const e=await async function(){const e=await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV"),n=await e.json();let{results:t}=n;return console.log(t),t}();!async function(e){t.innerHTML=e}(await async function(e,n){let t=function(e,n){return e.filter((e=>1===e.media.length)).slice(0,n)}(e,n);return t.map((e=>{let n=e.media;if(1===n.length)return`<li class="list-news__item">\n              <article class="item-news__article">\n                  <div class="item-news__wrapper-img">\n                      <img class="item-news__img"\n                          src="${n[0]["media-metadata"][2].url}"\n                          alt="">\n                      <p class="item-news__category">${e.section}</p>\n                      <p class="item-news__add-to-favorite">Add to favorite\n                          <svg class="item-news__block-icon" width="16" height="14" ><use href="../images/sprite.svg#heart" class="item-news__icon" ></use></svg>\n                      </p>\n                  </div>\n                  <div class="item-news__wrapper-text">\n                  <h2 class="item-news__title">\n                      ${e.title}\n                  </h2>\n                  <p class="item-news__description">\n                      ${e.abstract}</p>\n                  </div>\n                  <div class="item-news__info">\n                      <span class="item-news__info-date">\n                          ${e.updated}\n                      </span>\n                      <a class="item-news__info-link" href="${e.url}">Read more</a>\n                  </div>\n              </article>\n          </li>`})).join("")}(e,y))}window.addEventListener("resize",e(i)((e=>{h()}),1e3)),h(),async function(){const e=await fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=car&api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV"),n=await e.json();let{response:t}=n,{docs:i}=t}();
//# sourceMappingURL=favorite.becf76a0.js.map
