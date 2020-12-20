// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/beta.js";var t=a,e=r;function s(a,r){return t(a)||a<=0||t(r)||r<=0?NaN:r*e(1+1/a,r)}var m=s;export default m;
//# sourceMappingURL=mean.js.map