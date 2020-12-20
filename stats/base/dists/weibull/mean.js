// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/gamma.js";var t=a,m=r;function s(a,r){return t(a)||t(r)||a<=0||r<=0?NaN:r*m(1+1/a)}var e=s;export default e;
//# sourceMappingURL=mean.js.map