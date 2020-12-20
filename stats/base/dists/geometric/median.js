// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/ceil.js";import s from"./../../../../math/base/special/log2.js";var t=a,e=r,m=s;function o(a){return t(a)||a<0||a>1?NaN:e(-1/m(1-a))-1}var i=o;export default i;
//# sourceMappingURL=median.js.map