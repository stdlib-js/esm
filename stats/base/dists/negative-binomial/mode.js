// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/floor.js";var t=a,o=r;function s(a,r){return t(a)||t(r)||a<=0||r<0||r>1?NaN:o((1-r)*(a-1)/r)}var e=s;export default e;
//# sourceMappingURL=mode.js.map