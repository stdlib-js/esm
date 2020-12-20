// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nonnegative-integer.js";import o from"./../assert/is-nan.js";import t from"./gamma-delta-ratio.js";import a from"./floor.js";import m from"./abs.js";import s from"./../../../constants/math/float64-max.js";import i from"./../../../constants/math/float64-pinf.js";import f from"./rising-factorial.js";var n,e=r,p=o,j=t,l=a,c=m,g=s,v=i,u=170;function d(r,o){var t,a,m,s,i;return n||(n=f),p(r)||!e(o)?NaN:0===r?0:r<0?(1&o?-1:1)*n(-r,o):0===o?1:r<.5?o>u-2?(s=r*d(r-1,u-2),i=d(r-u+1,o-u+1),g/c(s)<c(i)?v:s*i):r*d(r-1,o-1):r<=o-1?(m=c(l(a=r+1)))===a?0:(t=j(a,-m),t*=r-=m,(m+=1)<o&&(t*=d(r-1,o-m)),t):j(r+1,-o)}var h=d;export default h;
//# sourceMappingURL=falling-factorial.js.map