// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-number.js";import e from"./float64.js";var t=r.isPrimitive,i=e;function m(r,e){return e&&e.type&&"Complex128"===e.type&&t(e.re)&&t(e.im)?new i(e.re,e.im):e}var o=m;export default o;
//# sourceMappingURL=reviver-float64.js.map