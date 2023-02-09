function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const e=document.querySelector(".list-news");var i,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,f=u||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,m=Math.min,w=function(){return f.Date.now()};function v(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(v(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=v(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=s.test(t);return e||a.test(t)?c(t.slice(2),e?2:8):r.test(t)?NaN:+t}i=function(t,n,e){var i,o,r,s,a,c,u=0,l=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var e=i,r=o;return i=o=void 0,u=n,s=t.apply(r,e)}function _(t){return u=t,a=setTimeout(g,n),l?h(t):s}function b(t){var e=t-c;return void 0===c||e>=n||e<0||f&&t-u>=r}function g(){var t=w();if(b(t))return j(t);a=setTimeout(g,function(t){var e=n-(t-c);return f?m(e,r-(t-u)):e}(t))}function j(t){return a=void 0,d&&i?h(t):(i=o=void 0,s)}function T(){var t=w(),e=b(t);if(i=arguments,o=this,c=t,e){if(void 0===a)return _(c);if(f)return a=setTimeout(g,n),h(c)}return void 0===a&&(a=setTimeout(g,n)),s}return n=y(n)||0,v(e)&&(l=!!e.leading,r=(f="maxWait"in e)?p(y(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),T.cancel=function(){void 0!==a&&clearTimeout(a),u=0,i=c=o=a=void 0},T.flush=function(){return void 0===a?s:j(w())},T};let h=0;async function _(){window.innerWidth<768&&(h=4),window.innerWidth>768&&window.innerWidth<1280&&(h=6),window.innerWidth>=1280&&(h=8);const t=await async function(){const t=await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV"),n=await t.json();let{results:e}=n;return console.log(e),e}();!async function(t){e.innerHTML=t}(await async function(t,n){let e=function(t,n){return t.filter((t=>1===t.media.length)).slice(0,n)}(t,n);return e.map((t=>{let n=t.media;if(1===n.length)return`<li class="list-news__item">\n              <article class="item-news__article">\n                  <div class="item-news__wrapper-img">\n                      <img class="item-news__img"\n                          src="${n[0]["media-metadata"][2].url}"\n                          alt="">\n                      <p class="item-news__category">${t.section}</p>\n                      <button type="button" class="item-news__add-to-favorite">Add to favorite\n                         <svg\n  width="16"\n  height="16"\n  viewBox="0 0 37 32"\n>\n<path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n\n</svg>\n                      </button>\n                  </div>\n                  <div class="item-news__wrapper-text">\n                  <h2 class="item-news__title">\n                      ${t.title}\n                  </h2>\n                  <p class="item-news__description">\n                      ${t.abstract}</p>\n                  </div>\n                  <div class="item-news__info">\n                      <span class="item-news__info-date">\n                          ${t.updated}\n                      </span>\n                      <a class="item-news__info-link" href="${t.url}">Read more</a>\n                  </div>\n              </article>\n          </li>`})).join("")}(t,h))}window.addEventListener("resize",t(i)((t=>{_()}),1e3)),_(),async function(){const t=await fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=car&api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV"),n=await t.json();let{response:e}=n,{docs:i}=e}();
//# sourceMappingURL=favorite.023e30c3.js.map
