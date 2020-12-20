// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./expm1.js";import o from"./log1p.js";import m from"./abs.js";import t from"./../assert/is-nan.js";var a=r,s=o,p=m,e=t;function f(r,o){var m;return e(r)||e(o)?NaN:0===o?a(r):p(m=o*r)<1e-154?r:a(s(m)/o)}var i=f;export default i;
//# sourceMappingURL=boxcox1pinv.js.map