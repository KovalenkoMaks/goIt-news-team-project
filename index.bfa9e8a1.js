!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequireda87;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequireda87=a),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}}));var i=a("bpxeT"),s=a("2TvXO"),o=a("i24Cx"),c=a("aDyNI"),l=a("7rHhr");a("l1Gdk");var d=a("jS61W"),u=0,p=0;function h(){return(h=e(i)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.innerWidth<768&&(u=4,p=-1),window.innerWidth>=768&&window.innerWidth<1280&&(u=7,p=0),window.innerWidth>=1280&&(u=8,p=1),e.next=5,o.getPopularArticle();case 5:return n=e.sent,e.next=8,c.getPopularMarkup(n,u);case 8:f(e.sent);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function f(e){return _.apply(this,arguments)}function _(){return(_=e(i)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.newsList.innerHTML=n,v();case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(){var e="",t="";p>=0?(e=document.querySelector(".list-news").children[p],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n  <div class="weather__info">\n    <span class="weather__deg"></span>\n    <div class="weather__geo">\n      <span class="weather__value"></span>\n      <p class="weather__location">\n        <svg  viewBox="0 0 37 32">\n          <path\n                d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n            </path>\n        </svg>\n        <span class="weather__city"></span>\n      </p>\n    </div>\n  </div>\n  <img class="weather__img" />\n  <div class="weather__date">\n    <p class="weather__day"></p>\n    <p class="weather__year"></p>\n  </div>\n  <a\n    href="https://sinoptik.ua/"\n    class="weather__link"\n    target="_blank"\n    rel="noreferrer noopener"\n    >weather for week</a\n  >\n</div>',e.after(t)):(e=document.querySelector(".list-news").children[0],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n  <div class="weather__info">\n    <span class="weather__deg"></span>\n    <div class="weather__geo">\n      <span class="weather__value"></span>\n      <p class="weather__location">\n        <svg  viewBox="0 0 37 32">\n          <path\n                d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n            </path>\n        </svg>\n        <span class="weather__city"></span>\n      </p>\n    </div>\n  </div>\n  <img class="weather__img" />\n  <div class="weather__date">\n    <p class="weather__day"></p>\n    <p class="weather__year"></p>\n  </div>\n  <a\n    href="https://sinoptik.ua/"\n    class="weather__link"\n    target="_blank"\n    rel="noreferrer noopener"\n    >weather for week</a\n  >\n</div>',e.before(t)),(0,d.getWeatherRefs)()}!function(){h.apply(this,arguments)}();i=a("bpxeT"),s=a("2TvXO"),o=a("i24Cx");a("l1Gdk");i=a("bpxeT"),s=a("2TvXO"),o=a("i24Cx"),c=a("aDyNI"),d=a("jS61W");var w,g={listNewsEl:document.querySelector("ul.list-news"),weather:document.querySelector(".weather"),errorMarkup:document.querySelector(".underfined"),pagination:document.querySelector(".pagination"),newsList:document.querySelector(".list-news")};function m(e){return y.apply(this,arguments)}function y(){return(y=e(i)(e(s).mark((function t(n){var r,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.innerWidth<768&&(4,w=-1),window.innerWidth>=768&&window.innerWidth<1280&&(7,w=0),window.innerWidth>=1280&&(8,w=1),n){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,g.pagination.classList.contains("pagination-hidden")&&(g.pagination.classList.remove("pagination-hidden"),g.errorMarkup.classList.add("underfined-hidden")),e.next=9,(0,o.getArticleByCategory)(n.replace(" ","_"));case 9:r=e.sent,a=r.map((function(e){var t="",n=JSON.parse(localStorage.getItem("readMoreLocal"));return!0===(0,c.checkLokalStorage)(e,n)&&(t="opacity"),k(e,t)})).join(""),g.listNewsEl.innerHTML=a,b(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(5),g.newsList.innerHTML="",g.pagination.classList.add("pagination-hidden"),g.errorMarkup.classList.remove("underfined-hidden");case 20:case"end":return e.stop()}}),t,null,[[5,15]])})))).apply(this,arguments)}function k(e,t,n){var r=e.section,a=e.multimedia,i=e.title,s=e.first_published_date,o=e.abstract;r||(r="");var c="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-or-file-not-found-for-web-page_1150-48326.jpg?w=996&t=st=1676297842~exp=1676298442~hmac=6cad659e6a3076ffcb73bbb246c4f7e5e1bf7cee7fa095d67fcced0a51c2405c";return null!==a&&(c=a[2].url),i||(i=""),o||(o=""),'<li class="list-news__item '.concat(t,'">\n    <article class="item-news__article">\n         <div class="item-news__wrapper-img">\n              <img class="item-news__img"\n                    src="').concat(c,'"\n                    alt="">\n              <p class="item-news__category">').concat(r,'</p>\n              <button type="button" class="item-news__add-to-favorite">\n                  <span class="item-news__add-to-favorite-btn">Add to favorite\n                     <svg class="item-news__block-icon active-news-icon"\n                                width="16"\n                                height="16"\n                                viewBox="0 0 37 32"\n                                >\n                        <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                        </svg></span>\n                  <span class="item-news__remove-to-favorite-btn ">Remove from favorite\n                     <svg class="item-news__block-icon active-news-icon"\n                                width="16"\n                                height="16"\n                                viewBox="0 0 37 32"\n                                >\n                            <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                            </svg></span>\n      </button>\n         </div>\n         <div class="item-news__wrapper-text">\n         <h2 class="item-news__title">\n              ').concat(i,'\n         </h2>\n         <p class="item-news__description">\n              ').concat(o,'</p>\n         </div>\n         <div class="item-news__info">\n              <span class="item-news__info-date">\n                    ').concat(s.replaceAll("T"," ").slice(0,19),'\n              </span>\n              <a target="_blank" class="item-news__info-link" href="',"elem.web_url","\">Read more</a>\n      <p class='is-hidden'>").concat(n,"</p>\n         </div>\n    </article>\n</li>")}function b(){var e="",t="";w>=0?(e=document.querySelector(".list-news").children[w],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n      <div class="weather__info">\n        <span class="weather__deg"></span>\n        <div class="weather__geo">\n           <span class="weather__value"></span>\n           <p class="weather__location">\n              <svg  viewBox="0 0 37 32">\n                <path\n                        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n                   </path>\n              </svg>\n              <span class="weather__city"></span>\n           </p>\n        </div>\n      </div>\n      <img class="weather__img" />\n      <div class="weather__date">\n        <p class="weather__day"></p>\n        <p class="weather__year"></p>\n      </div>\n      <a\n        href="https://sinoptik.ua/"\n        class="weather__link"\n        target="_blank"\n        rel="noreferrer noopener"\n        >weather for week</a\n      >\n   </div>',e.after(t)):(e=document.querySelector(".list-news").children[0],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n      <div class="weather__info">\n        <span class="weather__deg"></span>\n        <div class="weather__geo">\n           <span class="weather__value"></span>\n           <p class="weather__location">\n              <svg  viewBox="0 0 37 32">\n                <path\n                        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n                   </path>\n              </svg>\n              <span class="weather__city"></span>\n           </p>\n        </div>\n      </div>\n      <img class="weather__img" />\n      <div class="weather__date">\n        <p class="weather__day"></p>\n        <p class="weather__year"></p>\n      </div>\n      <a\n        href="https://sinoptik.ua/"\n        class="weather__link"\n        target="_blank"\n        rel="noreferrer noopener"\n        >weather for week</a\n      >\n   </div>',e.before(t)),(0,d.getWeatherRefs)()}var L,S={categoryContainerEl:document.querySelector(".filter-category__container"),otherList:document.querySelector(".filter-category__others-container"),othersBtEl:document.querySelector(".filter-category__others-button > span"),listButtons:document.querySelector(".filter-category__list-bt")},x=0,N=0;function M(){return(M=e(i)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.innerWidth<768&&(x=13,S.othersBtEl.textContent="Categories",(0,o.getCategoryList)().then((function(e){C(e,x,N),S.listButtons.addEventListener("click",E),document.querySelector(".filter-category__list").addEventListener("click",E)}))),window.innerWidth>=768&&window.innerWidth<1280&&(x=17,N=4,S.othersBtEl.textContent="Others",(0,o.getCategoryList)().then((function(e){C(e,x,N),S.listButtons.addEventListener("click",E),document.querySelector(".filter-category__list").addEventListener("click",E)}))),window.innerWidth>=1280&&(x=19,N=6,S.othersBtEl.textContent="Others",(0,o.getCategoryList)().then((function(e){C(e,x,N),S.listButtons.addEventListener("click",E),document.querySelector(".filter-category__list").addEventListener("click",E)})));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function E(e){!function(e){L&&L.classList.remove("isActive-outsideBt"),L=e.target,e.target.classList.add("isActive-outsideBt")}(e),m(e.target.textContent.toLowerCase())}function C(e,t,n){var r=e.slice(0,t),a=r.slice(n),i=r.slice(0,n),s=document.createElement("ul");s.classList.add("filter-category__list"),i.map((function(e,t){return function(e,t){document.querySelector(".filter-category__item-bt:nth-child(".concat(t+1,")")).textContent=e}(e.display_name,t)})),a.map((function(e){return function(e,t){var n=document.createElement("li");n.classList.add("filter-category__item");var r=document.createElement("button");r.classList.add("filter-category__button"),r.textContent=e,n.append(r),t.append(n)}(e.display_name,s)})),S.categoryContainerEl.append(s)}!function(){M.apply(this,arguments)}(),S.otherList.addEventListener("click",(function(e){e.currentTarget.classList.toggle("is-open")})),a("iryiF"),a("jS61W"),(l=a("7rHhr")).newsList.addEventListener("click",(function(e){var t=e.target.closest(".item-news__add-to-favorite");if(!t)return;q();var n=t.parentNode.nextElementSibling.nextElementSibling.lastElementChild.textContent;if(!t.classList.contains("hidden-span"))return t.classList.add("hidden-span"),void function(e){for(var t={id:e.parentNode.parentNode.id,img:e.parentNode.childNodes[1].attributes.src.nodeValue,category:e.parentNode.childNodes[3].innerText,title:e.parentNode.parentNode.childNodes[3].children[0].innerText,description:e.parentNode.parentNode.childNodes[3].children[1].innerText,date:e.parentNode.parentNode.lastElementChild.children[0].innerText,link:e.parentNode.parentNode.lastElementChild.children[1].attributes[2].value,favorite:"true",uri:e.parentNode.nextElementSibling.nextElementSibling.lastElementChild.textContent},n=0;n<T.length;n+=1)if(T[n].uri===t.uri)return;T.push(t),localStorage.setItem("newsSection",JSON.stringify(T))}(t);t.classList.remove("hidden-span");for(var r=0;r<T.length;r+=1)T[r].uri===n&&T.splice(r,1);localStorage.setItem("newsSection",JSON.stringify(T))}));var T=[];function q(){T=null!==JSON.parse(localStorage.getItem("newsSection"))?JSON.parse(localStorage.getItem("newsSection")):[]}q(),a("21M5L"),a("458gi"),(l=a("7rHhr")).newsList.addEventListener("click",(function(e){var t=e.target.closest(".item-news__info-link");if(!t)return;t.parentNode.parentNode.parentNode.classList.add("opacity"),function(e){for(var t=new Date,n={year:"numeric",month:"numeric",day:"numeric"},r=t.toLocaleDateString([],n).replaceAll(".","/"),a={uri:e.nextElementSibling.textContent,date:e.parentNode.firstElementChild.innerText,img:e.parentNode.parentNode.childNodes[1].children[0].currentSrc,title:e.parentNode.parentNode.childNodes[3].children[0].innerText,description:e.parentNode.parentNode.childNodes[3].children[1].innerText,link:e.parentNode.children[1].href,category:e.parentNode.parentNode.childNodes[1].children[1].innerHTML,dayRead:r},i=0;i<D.length;i+=1)if(D[i].uri===a.uri)return;D.push(a),localStorage.setItem("readMoreLocal",JSON.stringify(D))}(t)}));var D=[];!function(){if(null===JSON.parse(localStorage.getItem("readMoreLocal")))return;D=JSON.parse(localStorage.getItem("readMoreLocal"))}();var O={};Object.defineProperty(O,"__esModule",{value:!0}),O.default=function(e){return B.default(e)||A.default(e)||I.default(e)||W.default()};var B=j(a("kMC0W")),A=j(a("7AJDX")),W=j(a("8CtQK")),I=j(a("auk6i"));function j(e){return e&&e.__esModule?e:{default:e}}var J=document.querySelector(".days"),H=document.querySelector(".current-date"),P=document.querySelectorAll(".calendar-icons span"),z=new Date,R=(z.getDate(),z.getMonth()),F=z.getFullYear();!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("body"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendarBtn:document.querySelector(".calendar__button-calendar")};function t(){e.modal.classList.toggle("is-hidden"),e.input.classList.toggle("isActive"),e.arrow.classList.toggle("switched"),e.calendarBtn.classList.toggle("switchedColor")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",(function(n){if(n.target.closest(".calendar-form"))return;e.input.classList.contains("isActive")&&t()}))}();var X=["January","February","March","April","May","June","July","August","September","October","November","December"],U=function(){for(var t=new Date(F,R,1).getDay(),n=new Date(F,R+1,0).getDate(),r=new Date(F,R,n).getDay(),a=new Date(F,R,0).getDate(),i="",s=t;s>0;s--)i+='<li class="inactive">'.concat(a-s+1,"</li>");for(var o=1;o<=n;o++){var c=o===z.getDate()&&R===(new Date).getMonth()&&F===(new Date).getFullYear();i+='<li class="'.concat(c,'">').concat(o,"</li>")}for(var l=r;l<6;l++)i+='<li class="inactive">'.concat(l-r+1,"</li>");H.innerText="".concat(X[R]," ").concat(F),J.innerHTML=i,document.querySelector(".days").addEventListener("click",(function(t){e(O)(t.currentTarget.children).forEach((function(e){e.classList.remove("active")})),t.target.classList.add("active");var n=t.target.textContent;t.target.textContent.length>10||(document.getElementById("input-picker").value=n.padStart(2,"0")+"/"+(R+1)+"/"+F)}))};U(),P.forEach((function(e){e.addEventListener("click",(function(){(R="prev"===e.id?R-1:R+1)<0||R>11?(z=new Date(F,R,(new Date).getDate()),F=z.getFullYear(),R=z.getMonth()):z=new Date,U()}))}))}();
//# sourceMappingURL=index.bfa9e8a1.js.map
