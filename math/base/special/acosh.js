// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import o from"./log1p.js";import t from"./sqrt.js";import m from"./../../../constants/math/float64-ln-two.js";import s from"./ln.js";var a=r,n=o,f=t,i=m,p=s,j=1<<28;function l(r){var o;return a(r)||r<1?NaN:1===r?0:r>=j?p(r)+i:r>2?p(2*r-1/(r+f(r*r-1))):n((o=r-1)+f(2*o+o*o))}var e=l;export default e;
//# sourceMappingURL=acosh.js.map