// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../math/base/assert/is-nonnegative-integer.js";import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../constants/math/float64-pinf.js";var s=t,n=a,e=r;function o(t,a){var r;return n(t)||n(a)||a<0||a>1||!s(t)||t===e?NaN:(1-6*(r=a*(1-a)))/(t*r)}var i=o;export default i;
//# sourceMappingURL=kurtosis.js.map