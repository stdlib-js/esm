// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/pow.js";var t=a,s=r;function e(a,r){return t(a)||a<=0||t(r)||r<=0?NaN:s(1-s(2,-1/r),1/a)}var o=e;export default o;
//# sourceMappingURL=median.js.map