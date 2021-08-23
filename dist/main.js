var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(e){document.getElementById("generate"),document.getElementById("date");const t=document.getElementById("destinationCity").value,n=(document.getElementById("departureDate"),document.getElementById("departureDate").value),o=(document.getElementById("temp"),document.getElementById("description"));e.env.PIXABAY_KEY,e.env.PIXABAY_KEY;document.getElementById("generate").addEventListener("click",async function(e){e.preventDefault();r(n);console.log(t),console.log(n),c(t).then(async e=>{await a("/postData",{longitude:e.lng,latitude:e.lat,city:t});i().then(e=>{a("/postData",{temperature:e.temp,description:e.description})}).then(()=>{l()})})});const r=async e=>{const t=new Date(e);new Date;let n=new Date;const o=t-(n=new Date(n));let r=Math.ceil(o/864e5);Math.ceil(o%864e5/36e5),Math.ceil(o%36e5/6e4),Math.ceil(o%6e4/1e3);console.log("You are leaving in "+r+" days! ")},c=async e=>{const t=await fetch(`http://api.geonames.org/searchJSON?q=${e}&maxRows=1&username=yshaikh`);try{const e=await t.json();console.log(e),console.log("Longitude: "+e.geonames[0].lng),console.log("Latitude: "+e.geonames[0].lat);let n=e.geonames[0].lat,o=e.geonames[0].lng;return i(n,o),{lat:n,lng:o}}catch(e){console.log("GEO ERROR",e)}},i=async(e,t)=>{const n=await fetch(`https://api.weatherbit.io/v2.0/current?lat=${e}&lon=${t}&key=d50c5f4915224a418089dd6bd26bf43b`);try{const e=await n.json();return console.log(e),console.log("Temp: "+e.temp),console.log("Description: "+e.description),{temp:temp,description:o}}catch(e){console.log("WEATHERBIT ERROR",e)}},a=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log(e),e}catch(e){console.log("POST Error",e)}},l=async()=>{const e=await fetch("/all");try{const t=await e.json();console.log(t),document.getElementById("city").innerHTML=`City: ${data.projectData[0].destinationCity}`,document.getElementById("temp").innerHTML=`Temperature: ${data.projectData[0].temperature}`,document.getElementById("description").innerHTML=`Description: ${data.projectData[0].description}`,document.getElementById("countdown").innerHTML=`"Countdown:" ${r.days}`}catch(e){console.log("UI Error",e)}}}).call(this,n(1))},function(e,t){var n,o,r=e.exports={};function c(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===c||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:c}catch(e){n=c}try{o="function"==typeof clearTimeout?clearTimeout:i}catch(e){o=i}}();var l,u=[],s=!1,d=-1;function f(){s&&l&&(s=!1,l.length?u=l.concat(u):d=-1,u.length&&m())}function m(){if(!s){var e=a(f);s=!0;for(var t=u.length;t;){for(l=u,u=[];++d<t;)l&&l[d].run();d=-1,t=u.length}l=null,s=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||s||a(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);n(0)}]);