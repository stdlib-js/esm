// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../assert/is-nan.js";import o from"./../../../constants/math/float64-pinf.js";import n from"./../../../constants/math/float64-half-pi.js";import r from"./../../../constants/math/float64-fourth-pi.js";import a from"./../../../constants/math/float64-ninf.js";function f(t){return 0===t?-64.85021904942025:t*(t*(t*(-.8750608600031904*t-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}function s(t){return 0===t?194.5506571482614:194.5506571482614+t*(485.3903996359137+t*(432.88106049129027+t*(165.02700983169885+t*(24.858464901423062+1*t))))}var m=t,i=o,p=n,u=r,c=a,e=f,h=s,l=6123233995736766e-32,j=2.414213562373095;function v(t){var o,n,r,a;return m(t)||0===t?t:t===i?p:t===c?-p:(t<0&&(n=!0,t=-t),o=0,t>j?(r=p,o=1,t=-1/t):t<=.66?r=0:(r=u,o=2,t=(t-1)/(t+1)),a=t*(a=(a=t*t)*e(a)/h(a))+t,2===o?a+=.5*l:1===o&&(a+=l),r+=a,n?-r:r)}var d=v;export default d;
//# sourceMappingURL=atan.js.map