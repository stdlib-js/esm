// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/sqrt.js";import s from"./../../../../math/base/special/exp.js";var t=a,e=r,m=s;function o(a,r){var s;return t(a)||t(r)||r<=0?NaN:((s=m(r*r))+2)*e(s-1)}var i=o;export default i;
//# sourceMappingURL=skewness.js.map