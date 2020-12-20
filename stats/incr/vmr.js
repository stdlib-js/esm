// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-number.js";import n from"./../../math/base/assert/is-nan.js";var t=r.isPrimitive,e=n;function i(r){var n,i,a,u;if(a=0,u=0,arguments.length){if(!t(r))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+r+"`.");return i=r,s}return i=0,o;function o(r){return 0===arguments.length?0===u?null:1===u?e(a)?NaN:0/i:a/(u-1)/i:(a+=(n=r-i)*(r-(i+=n/(u+=1))),u<2?e(a)?NaN:0/i:a/(u-1)/i)}function s(r){return 0===arguments.length?0===u?null:a/u/i:(a+=(n=r-i)*n)/(u+=1)/i}}var a=i;export default a;
//# sourceMappingURL=vmr.js.map