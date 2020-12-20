// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./floor.js";import o from"./ldexp.js";import r from"./../assert/is-nan.js";import n from"./../../../constants/math/float64-max-base10-exponent.js";import a from"./../../../constants/math/float64-min-base10-exponent.js";import m from"./../../../constants/math/float64-pinf.js";function s(t){return 0===t?2394.2374120738828:2394.2374120738828+t*(406.7172899368727+t*(11.745273255434405+.040996251979858706*t))}function f(t){return 0===t?2079.608192860019:2079.608192860019+t*(1272.0927117834513+t*(85.09361608493066+1*t))}var e=t,i=o,p=r,u=n,c=a,j=m,l=s,x=f,h=3.321928094887362,v=.301025390625,b=4605038981195214e-21;function d(t){var o,r,n;return p(t)?t:t>u?j:t<c?0:(n=o=e(h*t+.5),t-=o*v,t=(o=(t-=o*b)*l(r=t*t))/(x(r)-o),t=1+i(t,1),i(t,n))}var g=d;export default g;
//# sourceMappingURL=exp10.js.map