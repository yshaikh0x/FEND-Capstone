var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n="http://api.openweathermap.org/data/2.5/weather?zip=";document.getElementById("generate"),document.getElementById("zip"),document.getElementById("feelings"),document.getElementById("date"),document.getElementById("temp"),document.getElementById("content");let o=new Date,r=o.getMonth()+1+"/"+o.getDate()+"/"+o.getFullYear();document.getElementById("generate").addEventListener("click",function(e){e.preventDefault();const t=document.getElementById("zip").value,o=document.getElementById("feelings").value;a(n,t,apiKey).then(e=>{c("/postData",{date:r,zip:t,temp:e.main.temp,content:o}).then(()=>{l()})}),console.log(`the date is: ${r}`),console.log(`your zipcode is: ${t}`),console.log(`you are feeling: ${o}`)});const a=async(e,t,n)=>{const o=await fetch(e+t+n);try{const e=await o.json();return console.log(e),e}catch(e){console.log("ERROR1",e)}},c=async(e="",t={})=>{await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},l=async()=>{const e=await fetch("/all");try{const t=await e.json();document.getElementById("date").innerHTML=`Date - ${t.Date}`,document.getElementById("temp").innerHTML=`Temp - ${t.Temperature}`,document.getElementById("content").innerHTML=`Feeling - ${t.Feeling}`}catch(e){console.log("ERROR2",e)}}}]);