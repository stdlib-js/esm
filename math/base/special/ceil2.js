// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import o from"./../assert/is-nan.js";import t from"./../assert/is-infinite.js";import r from"./pow.js";import m from"./floor.js";import s from"./ceil.js";import a from"./log2.js";import n from"./../../../constants/math/float64-max-base2-exponent.js";import i from"./../../../constants/math/float64-min-base2-exponent-subnormal.js";import f from"./../../../constants/math/float64-pinf.js";var p=o,e=t,j=r,l=m,c=s,u=a,x=n,b=i,h=f;function v(o){var t,r;return p(o)||e(o)||0===o?o:(o<0?(o=-o,t=-1):t=1,(r=u(o))===b?o:(r=-1===t?l(r):c(r))>x?h:t*j(2,r))}var d=v;export default d;
//# sourceMappingURL=ceil2.js.map