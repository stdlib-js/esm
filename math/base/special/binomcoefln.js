// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-integer.js";import t from"./../assert/is-nan.js";import o from"./betaln.js";import s from"./abs.js";import a from"./ln.js";import m from"./../../../constants/math/float64-ninf.js";var n=r,i=t,f=o,e=s,p=a,j=m;function l(r,t){return i(r)||i(t)?NaN:n(r)&&n(t)?r<0?l(-r+t-1,t):t<0?j:0===t?0:1===t?p(e(r)):r<t?j:r-t<2?l(r,r-t):-p(r+1)-f(r-t+1,t+1):NaN}var N=l;export default N;
//# sourceMappingURL=binomcoefln.js.map