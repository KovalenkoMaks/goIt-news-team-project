!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequireda87;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequireda87=r),r.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return a.default(e)};var n,a=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}})),r.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return a.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a.default(e,t)};var n,a=(n=r("8NIkP"))&&n.__esModule?n:{default:n}}));var i=r("bpxeT"),s=r("2TvXO"),o=r("i24Cx"),c=r("aDyNI"),l=r("7rHhr"),d=r("l1Gdk"),u=r("jS61W"),p=0,h=0;function f(){return g.apply(this,arguments)}function g(){return(g=e(i)(e(s).mark((function t(){var n,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.innerWidth<768&&(p=4,h=-1),window.innerWidth>=768&&window.innerWidth<1280&&(p=7,h=0),window.innerWidth>=1280&&(p=8,h=1),e.next=5,o.getPopularArticle();case 5:return n=e.sent,e.next=8,c.getPopularMarkup(n,p);case 8:a=e.sent,l.loader.classList.add("is-hidden"),v(a);case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return(w=e(i)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.newsList.innerHTML=n,m();case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(){var e="",t="";h>=0?(e=document.querySelector(".list-news").children[h],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n  <div class="weather__info">\n    <span class="weather__deg"></span>\n    <div class="weather__geo">\n      <span class="weather__value"></span>\n      <p class="weather__location">\n        <svg  viewBox="0 0 37 32">\n          <path\n                d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n            </path>\n        </svg>\n        <span class="weather__city"></span>\n      </p>\n    </div>\n  </div>\n  <img class="weather__img" />\n  <div class="weather__date">\n    <p class="weather__day"></p>\n    <p class="weather__year"></p>\n  </div>\n  <a\n    href="https://sinoptik.ua/"\n    class="weather__link"\n    target="_blank"\n    rel="noreferrer noopener"\n    >weather for week</a\n  >\n</div>',e.after(t)):(e=document.querySelector(".list-news").children[0],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n  <div class="weather__info">\n    <span class="weather__deg"></span>\n    <div class="weather__geo">\n      <span class="weather__value"></span>\n      <p class="weather__location">\n        <svg  viewBox="0 0 37 32">\n          <path\n                d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n            </path>\n        </svg>\n        <span class="weather__city"></span>\n      </p>\n    </div>\n  </div>\n  <img class="weather__img" />\n  <div class="weather__date">\n    <p class="weather__day"></p>\n    <p class="weather__year"></p>\n  </div>\n  <a\n    href="https://sinoptik.ua/"\n    class="weather__link"\n    target="_blank"\n    rel="noreferrer noopener"\n    >weather for week</a\n  >\n</div>',e.before(t)),(0,u.getWeatherRefs)()}console.log(window.innerWidth),window.addEventListener("resize",e(d)((function(e){f()}),1e3)),f();i=r("bpxeT"),s=r("2TvXO"),o=r("i24Cx");r("l1Gdk");i=r("bpxeT"),s=r("2TvXO"),o=r("i24Cx"),c=r("aDyNI"),u=r("jS61W");var _,y,L={listNewsEl:document.querySelector("ul.list-news"),weather:document.querySelector(".weather"),errorMarkup:document.querySelector(".underfined"),pagination:document.querySelector(".pagination"),newsList:document.querySelector(".list-news"),loader:document.querySelector(".news-loader__container.container")};function k(e){return S.apply(this,arguments)}function S(){return(S=e(i)(e(s).mark((function t(n){var a,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.innerWidth<768&&(_=4,y=-1),window.innerWidth>=768&&window.innerWidth<1280&&(_=7,y=0),window.innerWidth>=1280&&(_=8,y=1),n){e.next=5;break}return e.abrupt("return");case 5:return L.pagination.classList.contains("pagination-hidden")&&(L.pagination.classList.remove("pagination-hidden"),L.errorMarkup.classList.add("underfined-hidden")),e.prev=6,e.next=9,(0,o.getArticleByCategory)(n);case 9:a=e.sent,r=E(a,_).map((function(e){var t="",n=JSON.parse(localStorage.getItem("readMoreLocal"));return!0===(0,c.checkLokalStorage)(e,n)&&(t="opacity"),b(e,t)})).join(""),L.listNewsEl.innerHTML=r,L.loader.classList.add("is-hidden"),x(),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(6),L.loader.classList.add("is-hidden"),L.newsList.innerHTML="",L.pagination.classList.add("pagination-hidden"),L.errorMarkup.classList.remove("underfined-hidden");case 22:case"end":return e.stop()}}),t,null,[[6,16]])})))).apply(this,arguments)}function b(e,t){var n=e.section,a=e.multimedia,r=e.title,i=e.first_published_date,s=e.abstract,o=e.url,c=e.uri;n||(n="");var l,d,u="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";return null!==a&&(u=a[2].url),r||(r=""),s||(s=" <br> <br>"),'<li class="list-news__item '.concat(t,'">\n    <article class="item-news__article">\n         <div class="item-news__wrapper-img">\n              <img class="item-news__img"\n                    src="').concat(u,'"\n                    alt="">\n              <p class="item-news__category">').concat(n,'</p>\n              <button type="button" class="item-news__add-to-favorite">\n                  <span class="item-news__add-to-favorite-btn">Add to favorite\n                     <svg class="item-news__block-icon active-news-icon"\n                                width="16"\n                                height="16"\n                                viewBox="0 0 37 32"\n                                >\n                        <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                        </svg></span>\n                  <span class="item-news__remove-to-favorite-btn ">Remove from favorite\n                     <svg class="item-news__block-icon active-news-icon"\n                                width="16"\n                                height="16"\n                                viewBox="0 0 37 32"\n                                >\n                            <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                            </svg></span>\n      </button>\n         </div>\n         <div class="item-news__wrapper-text">\n         <h2 class="item-news__title">\n              ').concat(r,'\n         </h2>\n         <p class="item-news__description">\n              ').concat((l=s,d=l,d.length>80&&(d=l.slice(0,80)+"..."),d),'</p>\n         </div>\n         <div class="item-news__info">\n              <span class="item-news__info-date">\n              ').concat(i.split("").splice(0,10).join("").replaceAll("-","/"),'\n              </span>\n              <a target="_blank" class="item-news__info-link" href="').concat(o,"\">Read more</a>\n      <p class='is-hidden'>").concat(c,"</p>\n         </div>\n    </article>\n</li>")}function x(){var e="",t="";y>=0?(e=document.querySelector(".list-news").children[y],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n      <div class="weather__info">\n        <span class="weather__deg"></span>\n        <div class="weather__geo">\n           <span class="weather__value"></span>\n           <p class="weather__location">\n              <svg  viewBox="0 0 37 32">\n                <path\n                        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n                   </path>\n              </svg>\n              <span class="weather__city"></span>\n           </p>\n        </div>\n      </div>\n      <img class="weather__img" />\n      <div class="weather__date">\n        <p class="weather__day"></p>\n        <p class="weather__year"></p>\n      </div>\n      <a\n        href="https://sinoptik.ua/"\n        class="weather__link"\n        target="_blank"\n        rel="noreferrer noopener"\n        >weather for week</a\n      >\n   </div>',e.after(t)):(e=document.querySelector(".list-news").children[0],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n      <div class="weather__info">\n        <span class="weather__deg"></span>\n        <div class="weather__geo">\n           <span class="weather__value"></span>\n           <p class="weather__location">\n              <svg  viewBox="0 0 37 32">\n                <path\n                        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n                   </path>\n              </svg>\n              <span class="weather__city"></span>\n           </p>\n        </div>\n      </div>\n      <img class="weather__img" />\n      <div class="weather__date">\n        <p class="weather__day"></p>\n        <p class="weather__year"></p>\n      </div>\n      <a\n        href="https://sinoptik.ua/"\n        class="weather__link"\n        target="_blank"\n        rel="noreferrer noopener"\n        >weather for week</a\n      >\n   </div>',e.before(t)),(0,u.getWeatherRefs)()}function E(e,t){return deleteItems=e.slice(t),firstItems=e,e.slice(0,t)}var N,M,q={categoryContainerEl:document.querySelector(".filter-category__container"),otherList:document.querySelector(".filter-category__others-container"),othersBtEl:document.querySelector(".filter-category__others-button > span"),listButtons:document.querySelector(".filter-category__list-bt"),loader:document.querySelector(".news-loader__container.container"),pagination:document.querySelector(".pagination_search"),listNews:document.querySelector("ul.list-news")},C=0,T=0;function I(){return(I=e(i)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.innerWidth<768&&(4,-1),window.innerWidth>768&&window.innerWidth<1280&&(7,0),window.innerWidth>=1280&&(8,1),window.innerWidth<768&&(C=13,q.othersBtEl.textContent="Categories",(0,o.getCategoryList)().then((function(e){O(e,C,T),q.listButtons.addEventListener("click",(function(e){B(e),q.othersBtEl.textContent="Categories",q.pagination.classList.add(".pagination-search-hidden")})),document.querySelector(".filter-category__list").addEventListener("click",(function(e){B(e),void 0!==N&&A()})),q.listNews.addEventListener("click",W)}))),window.innerWidth>=768&&window.innerWidth<1280&&(C=17,T=4,q.othersBtEl.textContent="Others",(0,o.getCategoryList)().then((function(e){O(e,C,T),q.listButtons.addEventListener("click",(function(e){B(e),q.othersBtEl.textContent="Others"})),document.querySelector(".filter-category__list").addEventListener("click",(function(e){B(e),void 0!==N&&A()})),q.listNews.addEventListener("click",W)}))),window.innerWidth>=1280&&(C=19,T=6,q.othersBtEl.textContent="Others",(0,o.getCategoryList)().then((function(e){O(e,C,T),q.listButtons.addEventListener("click",(function(e){B(e),q.othersBtEl.textContent="Others"})),document.querySelector(".filter-category__list").addEventListener("click",(function(e){B(e),void 0!==N&&A()})),q.listNews.addEventListener("click",W)})));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function B(e){!function(e){M&&M.classList.remove("isActive-outsideBt"),M=e.target,e.target.classList.add("isActive-outsideBt")}(e),e.target.textContent.length>20?console.log(N):(N=e.target.textContent,q.loader.classList.remove("is-hidden"),k(N.toLowerCase()),q.pagination.classList.add("pagination-search-hidden"),document.querySelector(".page-container").classList.add("pagination-hidden"))}function O(e,t,n){var a=e.slice(0,t),r=a.slice(n),i=a.slice(0,n),s=document.createElement("ul");s.classList.add("filter-category__list"),i.map((function(e,t){return function(e,t){document.querySelector(".filter-category__item-bt:nth-child(".concat(t+1,")")).textContent=e}(e.display_name,t)})),r.map((function(e){return function(e,t){var n=document.createElement("li");n.classList.add("filter-category__item");var a=document.createElement("button");a.classList.add("filter-category__button"),a.textContent=e,n.append(a),t.append(n)}(e.display_name,s)})),q.categoryContainerEl.append(s)}function A(){q.othersBtEl.textContent=N}function W(e){e.target.classList.contains("item-news__category")&&(N=e.target.textContent,q.loader.classList.remove("is-hidden"),k(N.toLowerCase()))}!function(){I.apply(this,arguments)}(),q.otherList.addEventListener("click",(function(e){e.currentTarget.classList.toggle("is-open")})),r("iryiF"),r("jS61W"),(l=r("7rHhr")).newsList.addEventListener("click",(function(e){var t=e.target.closest(".item-news__add-to-favorite");if(!t)return;j();var n=t.parentNode.nextElementSibling.nextElementSibling.lastElementChild.textContent;if(!t.classList.contains("hidden-span"))return t.classList.add("hidden-span"),void function(e){for(var t={id:e.parentNode.parentNode.id,img:e.parentNode.childNodes[1].attributes.src.nodeValue,category:e.parentNode.childNodes[3].innerText,title:e.parentNode.parentNode.childNodes[3].children[0].innerText,description:e.parentNode.parentNode.childNodes[3].children[1].innerText,date:e.parentNode.parentNode.lastElementChild.children[0].innerText,link:e.parentNode.parentNode.lastElementChild.children[1].attributes[2].value,favorite:"true",uri:e.parentNode.nextElementSibling.nextElementSibling.lastElementChild.textContent},n=0;n<D.length;n+=1)if(D[n].uri===t.uri)return;D.push(t),localStorage.setItem("newsSection",JSON.stringify(D))}(t);t.classList.remove("hidden-span");for(var a=0;a<D.length;a+=1)D[a].uri===n&&D.splice(a,1);localStorage.setItem("newsSection",JSON.stringify(D))}));var D=[];function j(){D=null!==JSON.parse(localStorage.getItem("newsSection"))?JSON.parse(localStorage.getItem("newsSection")):[]}j(),r("21M5L"),r("458gi"),(l=r("7rHhr")).newsList.addEventListener("click",(function(e){var t=e.target.closest(".item-news__info-link");if(!t)return;t.parentNode.parentNode.parentNode.classList.add("opacity"),function(e){for(var t=new Date,n={year:"numeric",month:"numeric",day:"numeric"},a=t.toLocaleDateString([],n).replaceAll(".","/"),r={uri:e.nextElementSibling.textContent,date:e.parentNode.firstElementChild.innerText,img:e.parentNode.parentNode.childNodes[1].children[0].currentSrc,title:e.parentNode.parentNode.childNodes[3].children[0].innerText,description:e.parentNode.parentNode.childNodes[3].children[1].innerText,link:e.parentNode.children[1].href,category:e.parentNode.parentNode.childNodes[1].children[1].innerHTML,dayRead:a},i=0;i<P.length;i+=1)if(P[i].uri===r.uri)return;P.push(r),localStorage.setItem("readMoreLocal",JSON.stringify(P))}(t)}));var P=[];!function(){if(null===JSON.parse(localStorage.getItem("readMoreLocal")))return;P=JSON.parse(localStorage.getItem("readMoreLocal"))}();var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.default=function(e){return H.default(e)||z.default(e)||U.default(e)||R.default()};var H=F(r("kMC0W")),z=F(r("7AJDX")),R=F(r("8CtQK")),U=F(r("auk6i"));function F(e){return e&&e.__esModule?e:{default:e}}var V,X=document.querySelector(".days"),Y=document.querySelector(".current-date"),G=document.querySelectorAll(".calendar-icons span"),K=new Date,Q=(K.getDate(),K.getMonth()),$=K.getFullYear();(V={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")}).openModalBtn.addEventListener("click",(function(){V.modal.classList.toggle("is-hidden"),V.input.classList.toggle("isActive"),V.arrow.classList.toggle("switched"),V.calendarBtn.classList.toggle("switchedColor")})),document.addEventListener("click",(function(e){document.getElementById("input-picker").value,e.target.closest(".calendar-form")||V.input.classList.contains("isActive")&&(V.modal.classList.add("is-hidden"),V.input.classList.remove("isActive"),V.arrow.classList.remove("switched"),V.calendarBtn.classList.remove("switchedColor"),document.getElementById("input-picker").value="",localStorage.removeItem("VALUE"),localStorage.removeItem("date"))}));var Z=["January","February","March","April","May","June","July","August","September","October","November","December"],ee=function(t){for(var n=new Date($,Q,1).getDay(),a=new Date($,Q+1,0).getDate(),r=new Date($,Q,a).getDay(),i=new Date($,Q,0).getDate(),s="",o=n;o>0;o--)s+='<li class="inactive">'.concat(i-o+1,"</li>");for(var c=1;c<=a;c++){var l=c===K.getDate()&&Q===(new Date).getMonth()&&$===(new Date).getFullYear();s+='<li class="'.concat(l,'">').concat(c,"</li>")}for(var d=r;d<6;d++)s+='<li class="inactive">'.concat(d-r+1,"</li>");Y.innerText="".concat(Z[Q]," ").concat($),X.innerHTML=s,document.querySelector(".days").addEventListener("click",(function(t){e(J)(t.currentTarget.children).forEach((function(e){e.classList.remove("active")})),t.target.classList.add("active");var n=t.target.textContent;if(!(t.target.textContent.length>10)){var a=(Q+1).toString();document.getElementById("input-picker").value=$+"/"+a.padStart(2,"0")+"/"+n.padStart(2,"0"),localStorage.setItem("VALUE",JSON.stringify(n));var r=document.querySelector(".calendar-input").value;console.log(r),localStorage.setItem("date",JSON.stringify(r)),document.querySelector("[data-modal]").classList.add("is-hidden"),document.querySelector(".calendar-input").classList.remove("isActive"),document.querySelector(".calendar__button-arrow").classList.remove("switched"),document.querySelector(".calendar__button-calendar").classList.remove("switchedColor")}}))};ee();document.querySelector(".days");G.forEach((function(e){e.addEventListener("click",(function(){(Q="prev"===e.id?Q-1:Q+1)<0||Q>11?(K=new Date($,Q,(new Date).getDate()),$=K.getFullYear(),Q=K.getMonth()):K=new Date,ee();var t=JSON.parse(localStorage.getItem("VALUE"));X.childNodes.forEach((function(e){e.textContent===t&&e.classList.add("active")}))}))})),localStorage.removeItem("VALUE");c=r("aDyNI");r("jS61W");var te,ne,ae=document.getElementById("pagination"),re=document.querySelector("button.next-page"),ie=document.querySelector("button.prev-page"),se=document.querySelector(".list-news"),oe=0;function ce(e,t){console.log(e),console.log(t);var n=function(e,t){return e.slice(0,t)}(e,t);return n.map((function(e){var t="",n=JSON.parse(localStorage.getItem("readMoreLocal"));!0===(0,c.checkLokalStorage)(e,n)&&(t="opacity");var a,r,i=e.media,s="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";return 0!==i.length&&(s=i[0]["media-metadata"][2].url),'<li class="list-news__item '.concat(t,'">\n\t\t\t  <article class="item-news__article " id="').concat(e.id,'">\n\t\t\t\t\t<div class="item-news__wrapper-img">\n\t\t\t\t\t\t <img class="item-news__img"\n\t\t\t\t\t\t\t  src="').concat(s,'"\n\t\t\t\t\t\t\t  alt="">\n\t\t\t\t\t\t <p class="item-news__category">').concat(e.section,'</p>\n\t\t\t\t\t\t <button type="button" class="item-news__add-to-favorite">\n\t\t\t\t\t\t <span class="item-news__add-to-favorite-btn">Add to favorite\n\t\t\t\t\t\t\t <svg class="item-news__block-icon active-news-icon"\n\t\t\t\t\t\t\t\twidth="16"\n\t\t\t\t\t\t\t\theight="16"\n\t\t\t\t\t\t\t\tviewBox="0 0 37 32"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n\t\t\t\t\t\t\t</svg></span>\n\t\t\t\t\t\t\t<span class="item-news__remove-to-favorite-btn ">Remove from favorite\n\t\t\t\t\t\t\t<svg class="item-news__block-icon active-news-icon"\n\t\t\t\t\t\t\twidth="16"\n\t\t\t\t\t\t\theight="16"\n\t\t\t\t\t\t\tviewBox="0 0 37 32"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n\t\t\t\t\t\t\t</svg></span>\n\t\t\t\t\t\t </button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="item-news__wrapper-text">\n\t\t\t\t\t<h2 class="item-news__title">\n\t\t\t\t\t\t ').concat(e.title,'\n\t\t\t\t\t</h2>\n\t\t\t\t\t<p class="item-news__description">\n\t\t\t\t\t\t ').concat((a=e,r=a.abstract,r.length>80?r=a.abstract.slice(0,80)+"...":r),'</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="item-news__info">\n\t\t\t\t\t\t <span class="item-news__info-date">\n\t\t\t\t\t\t\t  ').concat(function(e){return e.split("").splice(0,10).join("").replaceAll("-","/")}(e.updated),'\n\t\t\t\t\t\t </span>\n\t\t\t\t\t\t <a target="_blank" class="item-news__info-link" href="').concat(e.url,"\">Read more</a>\n\t\t\t\t\t\t <p class='is-hidden'>").concat(e.uri,"</p>\n\t\t\t\t\t</div>\n\t\t\t  </article>\n\t\t </li>")})).join("")}setTimeout((function(){te=c.deleteItems.slice(8)}),1e3),{pagination:document.querySelector(".pagin")}.pagination.addEventListener("click",(function(e){var t=le.curPage;switch(e.target.classList.contains("next-page")&&(t+=1),e.target.classList.contains("prev-page")&&(t-=1),ne=null,window.innerWidth<768&&(oe=4,-1),window.innerWidth>768&&window.innerWidth<1280&&(oe=7,0),window.innerWidth>=1280&&(oe=8,1),t){case 1:f();break;case 2:ne=c.deleteItems.slice(0,8),te=c.deleteItems.slice(8),console.log(ne);var n=ce(ne,oe);se.innerHTML=n,m();break;case 3:var a=ce(te,oe);se.innerHTML=a,m()}window.scrollTo(0,0)}));var le={curPage:1,numLinksTwoSide:1,totalPages:3};function de(){for(var e=le.totalPages,t=le.curPage,n=le.numLinksTwoSide,a=n+4,r="",i="",s='<li class="pg-item"><a class="pg-link">...</a></li>',o=0,c=t-n,l=t+n,d="",u=1;u<=e;u++)d=u===t?"active":"",e>=2*a-1?c>3&&l<e-3+1?u>=c&&u<=l&&(i+=ue(u,d)):t<a&&u<=a||t>e-a&&u>=e-a+1||u===e||1===u?r+=ue(u,d):1===++o&&(r+=s):r+=ue(u,d);i?(i=ue(1)+s+i+s+ue(e),ae.innerHTML=i):ae.innerHTML=r}function ue(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return' <li class="pg-item '.concat(t,'" data-page="').concat(e,'">\n        <a class="pg-link" href="#">').concat(e,"</a>\n    </li>")}function pe(){1===le.curPage?ie.disabled=!0:ie.disabled=!1}function he(){le.curPage===le.totalPages?re.disabled=!0:re.disabled=!1}de(),ae.addEventListener("click",(function(e){if(e.target.dataset.page){var t=parseInt(e.target.dataset.page,10);le.curPage=t,de(),pe(),he()}})),document.querySelector(".page-container").addEventListener("click",(function(e){!function(e){e.classList.contains("prev-page")?(le.curPage--,pe(),re.disabled=!1):e.classList.contains("next-page")&&(le.curPage++,he(),ie.disabled=!1);de()}(e.target)}))}();
//# sourceMappingURL=index.b5bb3f59.js.map
