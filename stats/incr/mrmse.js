// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-positive-integer.js";import e from"./mmean.js";import i from"./../../math/base/special/sqrt.js";var t=r.isPrimitive,n=e,a=i;function o(r){var e;if(!t(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=n(r),function(r,i){var t;if(0===arguments.length)return null===(t=e())?t:a(t);return a(e((t=i-r)*t))}}var s=o;export default s;
//# sourceMappingURL=mrmse.js.map