!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("h6c0i"),a={delay:document.forms[0].delay,step:document.forms[0].step,amount:document.forms[0].amount,submit:document.querySelector("button[type=submit]")};function r(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}a.submit.addEventListener("click",(function(e){e.preventDefault();var t=[],n=a.delay.value,o=a.step.value,u=a.amount.value;a.delay.value=a.step.value=a.amount.value="";for(var l=0;l<u;l+=1){var c=l+1;n=+n+l*o,t.push(r(c,n).then((function(e){var t=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})))}}))}();
//# sourceMappingURL=03-promises.ecf27f73.js.map
