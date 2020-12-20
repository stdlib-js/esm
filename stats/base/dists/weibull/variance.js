// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/gamma.js";import m from"./mean.js";var t=a,s=r,e=m;function o(a,r){var m;return t(a)||t(r)||a<=0||r<=0?NaN:(m=e(a,r),r*r*s(1+2/a)-m*m)}var i=o;export default i;
//# sourceMappingURL=variance.js.map