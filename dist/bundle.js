(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]),i.push([e.id,'* {\n    margin: 0px;\n    padding: 0px;\n    font-family: "Roboto", sans-serif;\n  }\n\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100vh;\n}\nform {\n    padding: 20px;\n    font-family: inherit;\n    display: flex;\n  }\n\n  input{\n    font-family: inherit;\n    padding: 10px;\n    width: 90%;\n    border-color: black;\n    border-radius: 5px;\n    display: flex;\n  }\n\n  button {\n    cursor: pointer;\n    border: none;\n    padding: 0 0.4rem;\n    font-weight: 100;\n    background-color: black;\n    color: white;\n    border-radius: 5px;\n    text-align: center;\n  }\n\n  ul {\n    list-style: none;\n    display: flex;\n    gap: 1rem;\n  }\n\n  li {\n\n  }',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var f=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=r(p,o);o.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var u=t(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),u=t.n(d),l=t(589),f=t.n(l),p=t(426),m={};async function y(e){try{const n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6c6dcb07e838483dad800431232211&q=${e}&days=3&aqi=no&alerts=no`,{mode:"cors"});!function(e){const n={location:e.location.name,condition:e.current.condition.text,weather:{temp:e.current.temp_c,"feels like":e.current.feelslike_c,wind:e.current.wind_mph,humidity:e.current.humidity}},t=[{date:e.forecast.forecastday[0].date,avgTemp:e.forecast.forecastday[0].day.avgtemp_c,condition:e.forecast.forecastday[0].day.condition.text},{date:e.forecast.forecastday[1].date,avgTemp:e.forecast.forecastday[1].day.avgtemp_c,condition:e.forecast.forecastday[1].day.condition.text},{date:e.forecast.forecastday[1].date,avgTemp:e.forecast.forecastday[2].day.avgtemp_c,condition:e.forecast.forecastday[2].day.condition.text}];(function(e){document.getElementById("condition").innerHTML=e.condition;document.getElementById("location").innerHTML=e.location;const n=document.getElementById("weather");n.innerHTML="";const t=e.weather;for(const[e,o]of Object.entries(t))if("temp"==e||"feels like"==e){const t=`<li>${e}: ${o}°C</li>`;n.insertAdjacentHTML("beforeend",t)}else{const t=`<li>${e}: ${o}</li>`;n.insertAdjacentHTML("beforeend",t)}})(n),function(e){const n=document.getElementById("forecast");n.innerHTML="",e.forEach((function(e){const t=`<li>${e.date}${e.condition}</li>`;n.insertAdjacentHTML("beforeend",t)}))}(t)}(await n.json())}catch(e){console.log(e)}}m.styleTagTransform=f(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,document.addEventListener("DOMContentLoaded",y("vancouver")),document.querySelector("form").addEventListener("submit",(e=>{y(search.value),e.preventDefault()}))})()})();