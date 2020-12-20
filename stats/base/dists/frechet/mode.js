// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/pow.js";var t=a,s=r;function e(a,r,e){var o;return t(a)||t(r)||t(e)||a<=0||r<=0?NaN:e+r*s(1+(o=1/a),-o)}var o=e;export default o;
//# sourceMappingURL=mode.js.map