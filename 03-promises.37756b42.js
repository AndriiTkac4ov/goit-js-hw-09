!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),c={form:document.querySelector(".form"),btnCreatePromises:document.querySelector("button")};c.form.addEventListener("input",(function(e){a[e.target.name]=e.target.value,console.log(a)})),c.btnCreatePromises.addEventListener("click",(function(){console.log("You are on the right way;) keep going!!!"),(e=12,n=2e3,new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):t("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))).then(u).catch(l);var e,n}));var a={};function u(n){e(i).Notify.success(n)}function l(n){e(i).Notify.failure(n)}}();
//# sourceMappingURL=03-promises.37756b42.js.map
