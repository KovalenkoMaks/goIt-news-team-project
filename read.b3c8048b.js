function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequireda87;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequireda87=i),i.register("2CNHP",(function(t,n){var o=i("icTnc"),r=i("50Kfe"),c=i("jQ7WT");const u=()=>{const t="true"===o.openMenuBtn.getAttribute("aria-expanded")||!1;if(o.openMenuBtn.setAttribute("aria-expanded",!t),o.mobileMenu.classList.toggle("open-menu"),o.themeContainer.classList.contains("mobile"))o.themeContainer.classList.remove("mobile");else if(!o.themeContainer.classList.contains("mobile")){e(r)((()=>{o.themeContainer.classList.add("mobile")}),250)()}c[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.openMenuBtn.addEventListener("click",u),o.closeMenuBtn.addEventListener("click",u),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&(o.mobileMenu.classList.remove("open-menu"),o.openMenuBtn.setAttribute("aria-expanded",!1),c.enableBodyScroll(document.body))})),window.innerWidth<768&&o.seachBtn.setAttribute("type","button")})),i.register("icTnc",(function(e,n){t(e.exports,"newsList",(function(){return o})),t(e.exports,"mobileMenu",(function(){return r})),t(e.exports,"openMenuBtn",(function(){return i})),t(e.exports,"closeMenuBtn",(function(){return c})),t(e.exports,"themeContainer",(function(){return u})),t(e.exports,"seachBtn",(function(){return l})),t(e.exports,"loader",(function(){return a}));const o=document.querySelector(".list-news"),r=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),u=document.querySelector(".theme"),l=document.querySelector(".search-field__btn"),a=document.querySelector(".news-loader__container.container")})),i.register("50Kfe",(function(e,t){var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,d=l||a||Function("return this")(),s=Object.prototype.toString,f=Math.max,m=Math.min,p=function(){return d.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var o,r,i,c,u,l,a=0,d=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=o,i=r;return o=r=void 0,a=t,c=e.apply(i,n)}function b(e){return a=e,u=setTimeout(S,t),d?h(e):c}function w(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-a>=i}function S(){var e=p();if(w(e))return x(e);u=setTimeout(S,function(e){var n=t-(e-l);return s?m(n,i-(e-a)):n}(e))}function x(e){return u=void 0,g&&o?h(e):(o=r=void 0,c)}function T(){var e=p(),n=w(e);if(o=arguments,r=this,l=e,n){if(void 0===u)return b(l);if(s)return u=setTimeout(S,t),h(l)}return void 0===u&&(u=setTimeout(S,t)),c}return t=y(t)||0,v(n)&&(d=!!n.leading,i=(s="maxWait"in n)?f(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),a=0,o=l=r=u=void 0},T.flush=function(){return void 0===u?c:x(p())},T}})),i.register("jQ7WT",(function(e,n){t(e.exports,"disableBodyScroll",(function(){return y})),t(e.exports,"clearAllBodyScrollLocks",(function(){return g})),t(e.exports,"enableBodyScroll",(function(){return h}));var o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),c=[],u=!1,l=-1,a=void 0,d=void 0,s=void 0,f=function(e){return c.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},p=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},v=function(){if(void 0!==d){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=d.position,document.body.style.top=d.top,document.body.style.left=d.left,window.scrollTo(t,e),d=void 0}},y=function(e,t){if(e){if(!c.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(c),[n]),i?window.requestAnimationFrame((function(){if(void 0===d){d={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-l;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?m(e):e.stopPropagation())}(t,e)},u||(document.addEventListener("touchmove",m,o?{passive:!1}:void 0),u=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},g=function(){i&&(c.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),u&&(document.removeEventListener("touchmove",m,o?{passive:!1}:void 0),u=!1),l=-1),i?v():p(),c=[]},h=function(e){e?(c=c.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,u&&0===c.length&&(document.removeEventListener("touchmove",m,o?{passive:!1}:void 0),u=!1)),i?v():p()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),i.register("1gkpc",(function(e,t){const n=document.querySelector(".switch-checkbox"),o=document.querySelector("body"),r=document.querySelector(".theme__dark"),i=document.querySelector(".theme__light");n.addEventListener("click",(function(){o.classList.toggle("darkMode"),r.classList.toggle("opacityForDark"),i.classList.toggle("opacityForDark"),"dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")})),function(){try{"dark"===localStorage.getItem("theme")&&(o.classList.add("darkMode"),n.checked=!0)}catch(e){}}()}));
//# sourceMappingURL=read.b3c8048b.js.map
