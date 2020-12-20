// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/pow.js";var t=a,s=r;function e(a,r){var e;return t(a)||a<=4||t(r)||r<=0?NaN:(e=6*(s(a,3)+s(a,2)-6*a-2),e/=a*(a-3)*(a-4))}var o=e;export default o;
//# sourceMappingURL=kurtosis.js.map