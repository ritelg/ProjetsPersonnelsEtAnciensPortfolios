!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/build/",n(n.s="./assets/meteo/js/app.js")}({"./assets/meteo/js/app.js":function(n,t,o){var r=o("./node_modules/promised-location/dist/index.js");document.addEventListener("DOMContentLoaded",function(){var n=document.querySelector("p#ville"),t=document.querySelector("p#temperature"),o=document.querySelector("p#temps"),i=document.querySelector("p#icon"),a=document.body,c=void 0,u=function(e){return new Promise(function(n,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="json",o.onreadystatechange=function(e){4===o.readyState&&(200===o.status?n(o.response):t(o))},o.send(null)})},s=function(e){switch(a.className="",n.innerHTML=e.name,t.innerHTML=e.main.temp+" °C",o.innerHTML=e.weather[0].main,i.innerHTML="<img src="+e.weather[0].icon+" alt="+e.weather[0].icon+">",console.log(e),e.weather[0].main.toLowerCase()){case"drizzle":case"rain":a.className="rainy";break;case"clouds":a.className="cloudy"}c=e.main.temp};new r({enableHighAccuracy:!0,timeout:1e4,maximumAge:6e4}).then(function(e){var n=e.coords.latitude,t=e.coords.longitude;return u("https://fcc-weather-api.glitch.me/api/current?lat="+n+"&lon="+t)}).then(function(e){s(e)}).catch(function(e){console.error("Erreur dans la requete ",e.toString())}),t.addEventListener("click",function(e,n){e.preventDefault(),-1!==n.search(/[C]/gi)&&(c=Math.round(9*c/5+32),t.innerText=c+" °F"),-1!==n.search(/[F]/gi)&&(c=Math.round(5*(c-32)/9),t.innerText=c+" °C")}(e,t.innerText))})},"./node_modules/promised-location/dist/index.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={enableHighAccuracy:!1,timeout:1/0,maximumAge:0},r=function(){var e=arguments.length<=0||void 0===arguments[0]?o:arguments[0],n=arguments.length<=1||void 0===arguments[1]?Promise:arguments[1],t=arguments.length<=2||void 0===arguments[2]?navigator:arguments[2];return new n(function(n,o){if(!t.geolocation||!t.geolocation.getCurrentPosition)return o(new Error("Geolocation not supported!"));t.geolocation.getCurrentPosition(n,o,e)})};n.default=r,e.exports=n.default}});