!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequireda87;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequireda87=r);var i=r("bpxeT"),s=r("2TvXO"),o=r("i24Cx"),c=r("aDyNI"),l=r("7rHhr");r("l1Gdk");var d=r("jS61W"),u=0,p=0;function h(){return(h=e(i)(e(s).mark((function t(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.innerWidth<768&&(u=4,p=-1),window.innerWidth>=768&&window.innerWidth<1280&&(u=7,p=0),window.innerWidth>=1280&&(u=8,p=1),e.next=5,o.getPopularArticle();case 5:return n=e.sent,e.next=8,c.getPopularMarkup(n,u);case 8:_(e.sent);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _(e){return w.apply(this,arguments)}function w(){return(w=e(i)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.newsList.innerHTML=n,v();case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(){var e="",t="";p>=0?(e=document.querySelector(".list-news").children[p],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n  <div class="weather__info">\n    <span class="weather__deg"></span>\n    <div class="weather__geo">\n      <span class="weather__value"></span>\n      <p class="weather__location">\n        <svg  viewBox="0 0 37 32">\n          <path\n                d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n            </path>\n        </svg>\n        <span class="weather__city"></span>\n      </p>\n    </div>\n  </div>\n  <img class="weather__img" />\n  <div class="weather__date">\n    <p class="weather__day"></p>\n    <p class="weather__year"></p>\n  </div>\n  <a\n    href="https://sinoptik.ua/"\n    class="weather__link"\n    target="_blank"\n    rel="noreferrer noopener"\n    >weather for week</a\n  >\n</div>',e.after(t)):(e=document.querySelector(".list-news").children[0],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n  <div class="weather__info">\n    <span class="weather__deg"></span>\n    <div class="weather__geo">\n      <span class="weather__value"></span>\n      <p class="weather__location">\n        <svg  viewBox="0 0 37 32">\n          <path\n                d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n            </path>\n        </svg>\n        <span class="weather__city"></span>\n      </p>\n    </div>\n  </div>\n  <img class="weather__img" />\n  <div class="weather__date">\n    <p class="weather__day"></p>\n    <p class="weather__year"></p>\n  </div>\n  <a\n    href="https://sinoptik.ua/"\n    class="weather__link"\n    target="_blank"\n    rel="noreferrer noopener"\n    >weather for week</a\n  >\n</div>',e.before(t)),(0,d.getWeatherRefs)()}!function(){h.apply(this,arguments)}();i=r("bpxeT"),s=r("2TvXO"),o=r("i24Cx");r("l1Gdk");i=r("bpxeT"),s=r("2TvXO"),o=r("i24Cx"),c=r("aDyNI"),d=r("jS61W");var g,f={listNewsEl:document.querySelector("ul.list-news"),weather:document.querySelector(".weather"),errorMarkup:document.querySelector(".underfined"),pagination:document.querySelector(".pagination"),newsList:document.querySelector(".list-news")};function m(e){return y.apply(this,arguments)}function y(){return(y=e(i)(e(s).mark((function t(n){var a,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.innerWidth<768&&(4,g=-1),window.innerWidth>=768&&window.innerWidth<1280&&(7,g=0),window.innerWidth>=1280&&(8,g=1),n){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,f.pagination.classList.contains("pagination-hidden")&&(f.pagination.classList.remove("pagination-hidden"),f.errorMarkup.classList.add("underfined-hidden")),e.next=9,(0,o.getArticleByCategory)(n.replace(" ","_"));case 9:a=e.sent,r=a.map((function(e){var t="",n=JSON.parse(localStorage.getItem("readMoreLocal"));return!0===(0,c.checkLokalStorage)(e,n)&&(t="opacity"),L(e,t)})).join(""),f.listNewsEl.innerHTML=r,k(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(5),f.newsList.innerHTML="",f.pagination.classList.add("pagination-hidden"),f.errorMarkup.classList.remove("underfined-hidden");case 20:case"end":return e.stop()}}),t,null,[[5,15]])})))).apply(this,arguments)}function L(e,t){var n=e.section,a=e.multimedia,r=e.title,i=e.first_published_date,s=e.abstract;return'<li class="list-news__item '.concat(t,'">\n    <article class="item-news__article">\n         <div class="item-news__wrapper-img">\n              <img class="item-news__img"\n                    src="').concat(a[2].url,'"\n                    alt="">\n              <p class="item-news__category">').concat(n,'</p>\n              <button type="button" class="item-news__add-to-favorite">\n                  <span class="item-news__add-to-favorite-btn">Add to favorite\n                     <svg class="item-news__block-icon active-news-icon"\n                                width="16"\n                                height="16"\n                                viewBox="0 0 37 32"\n                                >\n                        <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                        </svg></span>\n                  <span class="item-news__remove-to-favorite-btn ">Remove from favorite\n                     <svg class="item-news__block-icon active-news-icon"\n                                width="16"\n                                height="16"\n                                viewBox="0 0 37 32"\n                                >\n                            <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>\n                            </svg></span>\n      </button>\n         </div>\n         <div class="item-news__wrapper-text">\n         <h2 class="item-news__title">\n              ').concat(r,'\n         </h2>\n         <p class="item-news__description">\n              ').concat(s,'</p>\n         </div>\n         <div class="item-news__info">\n              <span class="item-news__info-date">\n                    ').concat(i.replaceAll("T"," ").slice(0,19),'\n              </span>\n              <a target="_blank" class="item-news__info-link" href="',"elem.web_url","\">Read more</a>\n      <p class='is-hidden'>","elem.uri","</p>\n         </div>\n    </article>\n</li>")}function k(){var e="",t="";g>=0?(e=document.querySelector(".list-news").children[g],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n      <div class="weather__info">\n        <span class="weather__deg"></span>\n        <div class="weather__geo">\n           <span class="weather__value"></span>\n           <p class="weather__location">\n              <svg  viewBox="0 0 37 32">\n                <path\n                        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n                   </path>\n              </svg>\n              <span class="weather__city"></span>\n           </p>\n        </div>\n      </div>\n      <img class="weather__img" />\n      <div class="weather__date">\n        <p class="weather__day"></p>\n        <p class="weather__year"></p>\n      </div>\n      <a\n        href="https://sinoptik.ua/"\n        class="weather__link"\n        target="_blank"\n        rel="noreferrer noopener"\n        >weather for week</a\n      >\n   </div>',e.after(t)):(e=document.querySelector(".list-news").children[0],(t=document.createElement("li")).classList.add("list-news__item"),t.innerHTML='<div class="weather">\n      <div class="weather__info">\n        <span class="weather__deg"></span>\n        <div class="weather__geo">\n           <span class="weather__value"></span>\n           <p class="weather__location">\n              <svg  viewBox="0 0 37 32">\n                <path\n                        d="M12.164 0.881c-6.557 0.008-11.871 5.321-11.88 11.878v0.001c0 0.005 0 0.012 0 0.018 0 2.685 0.9 5.16 2.414 7.14l-0.021-0.028s0.324 0.426 0.376 0.486l9.11 10.747 9.114-10.749c0.047-0.058 0.372-0.483 0.372-0.483l0.001-0.004c1.494-1.951 2.394-4.425 2.394-7.11 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.559-5.322-11.874-11.88-11.881h-0.001zM12.164 17.080c-2.386 0-4.321-1.934-4.321-4.321s1.934-4.321 4.321-4.321v0c2.386 0 4.32 1.934 4.32 4.32s-1.934 4.32-4.32 4.32v0z">\n                   </path>\n              </svg>\n              <span class="weather__city"></span>\n           </p>\n        </div>\n      </div>\n      <img class="weather__img" />\n      <div class="weather__date">\n        <p class="weather__day"></p>\n        <p class="weather__year"></p>\n      </div>\n      <a\n        href="https://sinoptik.ua/"\n        class="weather__link"\n        target="_blank"\n        rel="noreferrer noopener"\n        >weather for week</a\n      >\n   </div>',e.before(t)),(0,d.getWeatherRefs)()}var S,x={categoryContainerEl:document.querySelector(".filter-category__container"),otherList:document.querySelector(".filter-category__others-container"),othersBtEl:document.querySelector(".filter-category__others-button > span"),listButtons:document.querySelector(".filter-category__list-bt")},N=0,b=0;function E(){return(E=e(i)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.innerWidth<768&&(N=13,x.othersBtEl.textContent="Categories",(0,o.getCategoryList)().then((function(e){q(e,N,b),x.listButtons.addEventListener("click",M),document.querySelector(".filter-category__list").addEventListener("click",M)}))),window.innerWidth>=768&&window.innerWidth<1280&&(N=17,b=4,x.othersBtEl.textContent="Others",(0,o.getCategoryList)().then((function(e){q(e,N,b),x.listButtons.addEventListener("click",M),document.querySelector(".filter-category__list").addEventListener("click",M)}))),window.innerWidth>=1280&&(N=19,b=6,x.othersBtEl.textContent="Others",(0,o.getCategoryList)().then((function(e){q(e,N,b),x.listButtons.addEventListener("click",M),document.querySelector(".filter-category__list").addEventListener("click",M)})));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function M(e){!function(e){S&&S.classList.remove("isActive-outsideBt"),S=e.target,e.target.classList.add("isActive-outsideBt")}(e),m(e.target.textContent.toLowerCase())}function q(e,t,n){var a=e.slice(0,t),r=a.slice(n),i=a.slice(0,n),s=document.createElement("ul");s.classList.add("filter-category__list"),i.map((function(e,t){return function(e,t){document.querySelector(".filter-category__item-bt:nth-child(".concat(t+1,")")).textContent=e}(e.display_name,t)})),r.map((function(e){return function(e,t){var n=document.createElement("li");n.classList.add("filter-category__item");var a=document.createElement("button");a.classList.add("filter-category__button"),a.textContent=e,n.append(a),t.append(n)}(e.display_name,s)})),x.categoryContainerEl.append(s)}!function(){E.apply(this,arguments)}(),x.otherList.addEventListener("click",(function(e){e.currentTarget.classList.toggle("is-open")})),r("iryiF"),r("jS61W"),(l=r("7rHhr")).newsList.addEventListener("click",(function(e){var t=e.target.closest(".item-news__add-to-favorite");if(!t)return;T();var n=t.parentNode.nextElementSibling.nextElementSibling.lastElementChild.textContent;if(!t.classList.contains("hidden-span"))return t.classList.add("hidden-span"),void function(e){for(var t={id:e.parentNode.parentNode.id,img:e.parentNode.childNodes[1].attributes.src.nodeValue,category:e.parentNode.childNodes[3].innerText,title:e.parentNode.parentNode.childNodes[3].children[0].innerText,description:e.parentNode.parentNode.childNodes[3].children[1].innerText,date:e.parentNode.parentNode.lastElementChild.children[0].innerText,link:e.parentNode.parentNode.lastElementChild.children[1].attributes[2].value,favorite:"true",uri:e.parentNode.nextElementSibling.nextElementSibling.lastElementChild.textContent},n=0;n<C.length;n+=1)if(C[n].uri===t.uri)return;C.push(t),localStorage.setItem("newsSection",JSON.stringify(C))}(t);t.classList.remove("hidden-span");for(var a=0;a<C.length;a+=1)C[a].uri===n&&C.splice(a,1);localStorage.setItem("newsSection",JSON.stringify(C))}));var C=[];function T(){C=null!==JSON.parse(localStorage.getItem("newsSection"))?JSON.parse(localStorage.getItem("newsSection")):[]}T(),r("21M5L"),r("458gi"),(l=r("7rHhr")).newsList.addEventListener("click",(function(e){var t=e.target.closest(".item-news__info-link");if(!t)return;t.parentNode.parentNode.parentNode.classList.add("opacity"),function(e){console.dir(e);for(var t={uri:e.nextElementSibling.textContent,date:e.parentNode.firstElementChild.innerText,img:e.parentNode.parentNode.childNodes[1].children[0].currentSrc,title:e.parentNode.parentNode.childNodes[3].children[0].innerText,description:e.parentNode.parentNode.childNodes[3].children[1].innerText,link:e.parentNode.children[1].href,category:e.parentNode.parentNode.childNodes[1].children[1].innerHTML},n=0;n<B.length;n+=1)if(B[n].uri===t.uri)return;B.push(t),localStorage.setItem("readMoreLocal",JSON.stringify(B))}(t)}));var B=[];!function(){if(null===JSON.parse(localStorage.getItem("readMoreLocal")))return;B=JSON.parse(localStorage.getItem("readMoreLocal"))}();var D=document.querySelector(".days"),O=document.querySelector(".current-date"),W=document.querySelectorAll(".calendar-icons span"),H=new Date,I=(H.getDate(),H.getMonth()),J=H.getFullYear();!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),input:document.querySelector(".calendar-input"),arrow:document.querySelector(".calendar__button-arrow"),calendar:document.querySelector(".calendar__button-calendar")};function t(){e.modal.classList.toggle("is-hidden"),e.input.classList.toggle("isActive"),e.arrow.classList.toggle("switched"),e.calendar.classList.toggle("switchedColor")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var z=["January","February","March","April","May","June","July","August","September","October","November","December"],A=function(){for(var e=new Date(J,I,1).getDay(),t=new Date(J,I+1,0).getDate(),n=new Date(J,I,t).getDay(),a=new Date(J,I,0).getDate(),r="",i=e;i>0;i--)r+='<li class="inactive">'.concat(a-i+1,"</li>");for(var s=1;s<=t;s++){var o=s===H.getDate()&&I===(new Date).getMonth()&&J===(new Date).getFullYear()?"active":"";r+='<li class="'.concat(o,'">').concat(s,"</li>")}for(var c=n;c<6;c++)r+='<li class="inactive">'.concat(c-n+1,"</li>");O.innerText="".concat(z[I]," ").concat(J),D.innerHTML=r,document.querySelector(".days").addEventListener("click",(function(e){e.preventDefault();var t=e.target.textContent;e.target.textContent.length>10||(console.log(t),document.getElementById("input-picker").value=t.padStart(2,"0")+"/"+(I+1)+"/"+J,console.dir(document.getElementById("input-picker").value))}))};A(),W.forEach((function(e){e.addEventListener("click",(function(){(I="prev"===e.id?I-1:I+1)<0||I>11?(H=new Date(J,I,(new Date).getDate()),J=H.getFullYear(),I=H.getMonth()):H=new Date,A()}))}))}();
//# sourceMappingURL=index.1d5eea3a.js.map
