// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/assert/is-integer.js";import s from"./../../../../math/base/special/pow.js";var t=a,e=r,m=s;function o(a,r){var s;return t(a)||t(r)||!e(a)||!e(r)||a>r?NaN:-1.2*((s=m(r-a+1,2))+1)/(s-1)}var i=o;export default i;
//# sourceMappingURL=kurtosis.js.map