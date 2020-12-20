// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../math/base/assert/is-nan.js";import a from"./mean.js";import t from"./../../../../math/base/special/sqrt.js";var s=r,m=a,e=t;function o(r){var a;return s(r)||r<0?NaN:(a=m(r),e(r-a*a))}var i=o;export default i;
//# sourceMappingURL=stdev.js.map