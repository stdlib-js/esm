// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import o from"./log1p.js";import t from"./exp.js";var a=r,m=o,p=t;function s(r){return a(r)?NaN:r<=-37?p(r):r<=18?m(p(r)):r<=33.3?r+p(-r):r}var e=s;export default e;
//# sourceMappingURL=log1pexp.js.map