var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");const l=document.querySelector("input[name='delay']"),r=document.querySelector("input[name='step']"),u=document.querySelector(" [name='amount']");function s(e,o){return new Promise(((n,t)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}document.querySelector("button").addEventListener("click",(function(e){e.preventDefault();const o=+l.value,n=+r.value,t=+u.value;for(let e=0;e<t;e+=1){s(e+1,o+e*n).then((({position:e,delay:o})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`),console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.5512f050.js.map
