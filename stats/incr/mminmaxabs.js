// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-positive-integer.js";import e from"./../../assert/is-array-like-object.js";import i from"./mminmax.js";import t from"./../../math/base/special/abs.js";var a=r.isPrimitive,n=e,o=i,s=t;function m(r,e){var i,t,m;if(1===arguments.length)t=[0,0],m=r;else{if(!n(r))throw new TypeError("invalid argument. Output argument must be an array-like object. Value: `"+r+"`.");t=r,m=e}if(!a(m))throw new TypeError("invalid argument. Window size must be a positive integer. Value: `"+m+"`.");return i=o(t,m),u;function u(r){return 0===arguments.length?i():i(s(r))}}var u=m;export default u;
//# sourceMappingURL=mminmaxabs.js.map