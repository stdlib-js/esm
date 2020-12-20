// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/exp.js";var t=a,e=r;function s(a,r){var s;return t(a)||t(r)||r<=0?NaN:(e(s=r*r)-1)*e(2*a+s)}var m=s;export default m;
//# sourceMappingURL=variance.js.map