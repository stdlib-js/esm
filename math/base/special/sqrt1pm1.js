// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import o from"./expm1.js";import m from"./log1p.js";import t from"./sqrt.js";import s from"./abs.js";var p=r,a=o,f=m,i=t,e=s;function j(r){return p(r)?NaN:e(r)>.75?i(1+r)-1:a(f(r)/2)}var n=j;export default n;
//# sourceMappingURL=sqrt1pm1.js.map