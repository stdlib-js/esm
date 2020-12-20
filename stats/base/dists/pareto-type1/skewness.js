// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/sqrt.js";var t=a,s=r;function e(a,r){return t(a)||a<=3||t(r)||r<=0?NaN:2*(1+a)/(a-3)*s((a-2)/a)}var m=e;export default m;
//# sourceMappingURL=skewness.js.map