// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-positive-integer.js";import e from"./../../math/base/special/abs.js";import i from"./mmean.js";var t=r.isPrimitive,a=e,n=i;function o(r){var e;if(!t(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=n(r),function(r,i){if(0===arguments.length)return e();return e(a(i-r))}}var s=o;export default s;
//# sourceMappingURL=mmae.js.map