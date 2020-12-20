// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../utils/define-nonenumerable-read-only-property.js";import r from"./../../../../math/base/assert/is-nonnegative-integer.js";import n from"./../../../../math/base/special/factorialln.js";import o from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/ln.js";import e from"./../../../../constants/math/float64-ninf.js";import s from"./../../../../constants/math/float64-pinf.js";import i from"./../../../../utils/constant-function.js";import m from"./../degenerate/logpmf.js";var f=r,p=n,l=o,u=a,c=e,j=s;function h(t,r){return l(t)||l(r)||r<0?NaN:0===r?0===t?0:c:f(t)&&t!==j?t*u(r)-r-p(t):c}var N=r,b=i,d=n,g=m.factory,v=o,y=a,x=e,k=s;function q(t){return v(t)||t<0?b(NaN):0===t?g(0):function(r){if(v(r))return NaN;if(N(r)&&r!==k)return r*y(t)-t-d(r);return x}}var w=t,z=h,A=q;w(z,"factory",A);export default z;
//# sourceMappingURL=logpmf.js.map