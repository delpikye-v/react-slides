!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@delpi/common"),require("swiper/react"),require("swiper")):"function"==typeof define&&define.amd?define(["exports","react","@delpi/common","swiper/react","swiper"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactSlides={},e.React,e.common,e.react,e.SwiperCore)}(this,(function(e,t,i,r,l){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(t),o=function(){return o=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var l in t=arguments[i])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},o.apply(this,arguments)};function s(e,t,i){if(i||2===arguments.length)for(var r,l=0,a=t.length;l<a;l++)!r&&l in t||(r||(r=Array.prototype.slice.call(t,0,l)),r[l]=t[l]);return e.concat(r||Array.prototype.slice.call(t))}a(l).default.use([l.Navigation,l.Pagination,l.Autoplay,l.Virtual]);var c=function(e){e.children;var l=e.className,a=e.listItems,c=void 0===a?[]:a,d=e.currentValue,u=void 0===d?0:d,f=e.showCutomForwardBack,p=void 0===f||f,m=e.showCutomPaging,v=void 0===m||m,w=e.customLabelBack,y=void 0===w?"<":w,b=e.customLabelForward,g=void 0===b?">":b,h=e.onSelectedValue,S=void 0===h?function(){}:h,j=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(i[r[l]]=e[r[l]])}return i}(e,["children","className","listItems","currentValue","showCutomForwardBack","showCutomPaging","customLabelBack","customLabelForward","onSelectedValue"]),C=t.useState(null),O=C[0],E=C[1],x=t.useState(u),N=x[0],P=x[1];t.useEffect((function(){O&&O.slideTo(u)}),[u]);var k=c.length,F=0===N,V=N===k-1;return n.default.createElement("div",{className:i.HtmlUtils.joinClass("slide-container",l)},n.default.createElement(r.Swiper,o({},j,{virtual:!0,initialSlide:0,onSlideChange:function(e){P(e.activeIndex),S(e.activeIndex)},onSwiper:E,slidesPerView:1,spaceBetween:10}),s([],Array(k),!0).map((function(e,t){return n.default.createElement(r.SwiperSlide,{key:"slide-item-".concat(t),className:i.HtmlUtils.joinClass(t===N-1&&"slide-swiper-previous",t===N+1&&"slide-swiper-forward",t===N&&"slide-swiper-current",t===N&&(F||V)&&"slide-fl")},n.default.createElement("div",{className:"slide-swiper-item"},c[t]))}))),n.default.createElement("div",{className:i.HtmlUtils.joinClass("slide-nav-container","slide-flex-center")},p&&n.default.createElement(A,{disabled:F}),v&&n.default.createElement("div",{className:"slide-flex-center"},s([],Array(k),!0).map((function(e,t){return n.default.createElement("div",{key:t,className:i.HtmlUtils.joinClass("slide-target-point",N===t&&"slide-target-point-active"),onClick:function(){P(t),O.slideTo(t)}})}))),p&&n.default.createElement(A,{disabled:V,isForward:!0})));function A(e){var t=e.disabled,r=e.isForward;return n.default.createElement("div",{className:i.HtmlUtils.joinClass("slide-bf","slide-flex-center",t&&"disabled",!t&&"activated"),onClick:function(){t||(P((function(e){return e+(r?1:-1)})),r?O.slideNext():O.slidePrev())}},r?g:y)}};e.ReactSlides=c,e.SlidesSwiper=c,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})}));
