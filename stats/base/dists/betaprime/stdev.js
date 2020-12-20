// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/sqrt.js";var t=a,s=r;function e(a,r){var e;return t(a)||a<=0||t(r)||r<=2?NaN:s(a*(a+(e=r-1))/((e-1)*e*e))}var m=e;export default m;
//# sourceMappingURL=stdev.js.map