var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");const l={delay:document.forms[0].delay,step:document.forms[0].step,amount:document.forms[0].amount,submit:document.querySelector("button[type=submit]")};function u(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}l.submit.addEventListener("click",(function(e){e.preventDefault();const t=[];let o=l.delay.value;const n=l.step.value,r=l.amount.value;l.delay.value=l.step.value=l.amount.value="";for(let e=0;e<r;e+=1){let l=e+1;o=+o+e*n,t.push(u(l,o).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})))}}));
//# sourceMappingURL=03-promises.540aac6d.js.map
