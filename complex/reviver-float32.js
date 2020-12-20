// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-number.js";import e from"./float32.js";var t=r.isPrimitive,i=e;function m(r,e){return e&&e.type&&"Complex64"===e.type&&t(e.re)&&t(e.im)?new i(e.re,e.im):e}var o=m;export default o;
//# sourceMappingURL=reviver-float32.js.map