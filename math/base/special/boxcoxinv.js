// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./exp.js";import o from"./log1p.js";import t from"./../assert/is-nan.js";var a=r,m=o,p=t;function s(r,o){return p(r)||p(o)?NaN:a(0===o?r:m(o*r)/o)}var e=s;export default e;
//# sourceMappingURL=boxcoxinv.js.map