(()=>{var e={410:()=>{window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".menu");e.addEventListener("click",(function(){e.classList.toggle("active"),document.querySelector(".sidebar-nav__container").classList.toggle("active"),document.querySelector(".sidebar").classList.toggle("active"),document.querySelector("body").classList.toggle("lock"),document.querySelector(".sidebar-search").classList.toggle("active"),document.querySelector(".header-submit").classList.toggle("active")}));var t=document.querySelectorAll(".path-target"),n=document.querySelectorAll(".content-container");t.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.dataset.path;n.forEach((function(e){e.classList.remove("active"),document.querySelector(".menu").classList.remove("active"),document.querySelector(".sidebar").classList.remove("active"),document.querySelector(".sidebar-nav__container").classList.remove("active")})),document.querySelector('[data-target="'.concat(t,'"]')).classList.add("active")}))})),t.forEach((function(e,n){e.addEventListener("click",(function(e){e.preventDefault();var o=t[n].classList;o.contains("active")?o.remove("active"):(t.forEach((function(e){return e.classList.remove("active")})),o.add("active"))}))})),document.querySelector(".sidebar-search__btn").addEventListener("click",(function(){document.querySelector(".sidebar-search__input").classList.toggle("active")}));var o=document.querySelectorAll(".services-nav__item");o.forEach((function(e,t){e.addEventListener("click",(function(e){e.preventDefault();var n=o[t].classList;n.contains("active")?n.remove("active"):(o.forEach((function(e){return e.classList.remove("active")})),n.add("active"))}))}));var i=document.querySelectorAll(".modal-link"),c=document.querySelector("body");if(i.length>0)for(var s=function(e){var t=i[e];t.addEventListener("click",(function(e){var n=t.getAttribute("href").replace("#","");!function(e){if(e){var t=document.querySelector(".open");t?l(t,!1):c.classList.add("lock"),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".modal__container")||l(e.target.closest(".modal"))}))}}(document.getElementById(n)),e.preventDefault()}))},r=0;r<i.length;r++)s(r);var a=document.querySelectorAll(".close");if(a.length>0)for(var d=function(e){var t=a[e];t.addEventListener("click",(function(e){l(t.closest(".modal")),e.preventDefault()}))},u=0;u<a.length;u++)d(u);function l(e){e.classList.remove("open"),c.classList.remove("lock")}document.addEventListener("keydown",(function(e){27===e.which&&l(document.querySelector(".open"))}));var v=document.querySelectorAll(".show-container"),m=document.querySelectorAll(".hidden-container"),f=document.querySelectorAll(".show-all"),p=document.querySelectorAll(".show-minimize"),L=document.querySelectorAll(".show-hidden");function g(){window.innerWidth<=540?L.forEach((function(e){e.classList.add("show-hidden1")})):L.forEach((function(e){e.classList.remove("show-hidden1")}))}v.forEach((function(e,t){e.addEventListener("click",(function(e){e.preventDefault();var n=m[t].classList;n.contains("active")?(n.remove("active"),f[t].classList.remove("active"),p[t].classList.remove("active")):(m.forEach((function(e){return e.classList.remove("active")})),n.add("active"),f.forEach((function(e){return e.classList.remove("active")})),p.forEach((function(e){return e.classList.remove("active")})),f[t].classList.add("active"),p[t].classList.add("active"))}))})),g(),window.addEventListener("resize",(function(){g()}));var b=document.querySelector(".services-nav"),w=document.querySelector(".brands-swiper"),h=document.querySelector(".types-swiper"),E=document.querySelector(".price-swiper"),y=function(){if(window.innerWidth<=768)new Swiper(b,{direction:"horizontal",freeMode:!0})},S=function(){if(window.innerWidth<=540)new Swiper(w,{direction:"horizontal",pagination:{el:".swiper-pagination"}})},q=function(){if(window.innerWidth<=540)new Swiper(h,{direction:"horizontal",pagination:{el:".swiper-pagination"}})},x=function(){if(window.innerWidth<=320)new Swiper(E,{direction:"horizontal",pagination:{el:".swiper-pagination"}})};y(),S(),q(),x(),window.addEventListener("resize",(function(){y(),S(),q(),x()}))}))},483:function(){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!i[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function d(n){n.metaKey||n.altKey||n.ctrlKey||(c(e.activeElement)&&r(e.activeElement),t=!0)}function u(e){t=!1}function l(e){c(e.target)&&(t||s(e.target))&&r(e.target)}function v(e){c(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),a(e.target))}function m(e){"hidden"===document.visibilityState&&(n&&(t=!0),f())}function f(){document.addEventListener("mousemove",L),document.addEventListener("mousedown",L),document.addEventListener("mouseup",L),document.addEventListener("pointermove",L),document.addEventListener("pointerdown",L),document.addEventListener("pointerup",L),document.addEventListener("touchmove",L),document.addEventListener("touchstart",L),document.addEventListener("touchend",L)}function p(){document.removeEventListener("mousemove",L),document.removeEventListener("mousedown",L),document.removeEventListener("mouseup",L),document.removeEventListener("pointermove",L),document.removeEventListener("pointerdown",L),document.removeEventListener("pointerup",L),document.removeEventListener("touchmove",L),document.removeEventListener("touchstart",L),document.removeEventListener("touchend",L)}function L(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,p())}document.addEventListener("keydown",d,!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",m,!0),f(),e.addEventListener("focus",l,!0),e.addEventListener("blur",v,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},370:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},305:(e,t,n)=>{"use strict";e.exports=n.p+"img/acer.11bfc296d185693bc12c.svg"},178:(e,t,n)=>{"use strict";e.exports=n.p+"img/apple.29b62369ef8d5fa39cae.svg"},657:(e,t,n)=>{"use strict";e.exports=n.p+"img/bosch.5addb0eb95c9d51a94c1.svg"},774:(e,t,n)=>{"use strict";e.exports=n.p+"img/call.8b349447e285843e7415.svg"},905:(e,t,n)=>{"use strict";e.exports=n.p+"img/checkstatus.dda8a0e71315315ee45a.svg"},731:(e,t,n)=>{"use strict";e.exports=n.p+"img/cps.b8a815ca7440f140c630.png"},462:(e,t,n)=>{"use strict";e.exports=n.p+"img/hp.113b7f84d3691fa81572.svg"},866:(e,t,n)=>{"use strict";e.exports=n.p+"img/lenovo.1e513a36e7cf99c71fdd.svg"},375:(e,t,n)=>{"use strict";e.exports=n.p+"img/logo.53bba9f39fc63060dd63.svg"},89:(e,t,n)=>{"use strict";e.exports=n.p+"img/message.c395bd46e20b8c3218b9.svg"},173:(e,t,n)=>{"use strict";e.exports=n.p+"img/profile.561c7f9f8305982ec294.svg"},143:(e,t,n)=>{"use strict";e.exports=n.p+"img/repair.1a391734d700e965015a.svg"},838:(e,t,n)=>{"use strict";e.exports=n.p+"img/samsung.fea0b53c03720569a9ce.svg"},979:(e,t,n)=>{"use strict";e.exports=n.p+"img/set-icon.8ec173751e19a3393fa9.svg"},431:(e,t,n)=>{"use strict";e.exports=n.p+"img/sonic.41ed4086b78d347ac47b.svg"},519:(e,t,n)=>{"use strict";e.exports=n.p+"img/sony.0101c526fb19afd25339.svg"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var c=t[o]={exports:{}};return e[o].call(c.exports,c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{"use strict";n(483),n(410);var e=n(370),t=n.n(e),o=new URL(n(774),n.b),i=new URL(n(89),n.b),c=new URL(n(143),n.b),s=new URL(n(905),n.b),r=new URL(n(375),n.b),a=new URL(n(173),n.b),d=new URL(n(979),n.b),u=new URL(n(731),n.b),l=new URL(n(866),n.b),v=new URL(n(838),n.b),m=new URL(n(178),n.b),f=new URL(n(431),n.b),p=new URL(n(657),n.b),L=new URL(n(462),n.b),g=new URL(n(305),n.b),b=new URL(n(519),n.b),w=t()(o),h=t()(i),E=t()(c),y=t()(s),S=t()(r),q=t()(a),x=t()(d),A=t()(u),U=t()(l),R=t()(v),_=t()(m),k=t()(f),N=t()(p);t()(L),t()(g),t()(b)})()})();