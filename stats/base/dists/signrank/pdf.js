// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-positive-integer.js";import o from"./../../../../math/base/assert/is-finite.js";import a from"./../../../../math/base/assert/is-nan.js";import e from"./../../../../math/base/special/exp.js";import s from"./../../../../math/base/special/ln.js";import i from"./../../../../constants/math/float64-ln-two.js";import n from"./../../../../utils/memoize.js";import m from"./../../../../utils/constant-function.js";var f,p=n;function u(r,t){var o;return 0===t?0===r?1:0:(o=t*(t+1)/2,r<0||r>o?0:(r>o/2&&(r=o-r),f(r-t,t-1)+f(r,t-1)))}var l=f=p(u),c=t,j=o,v=a,b=e,h=s,N=i,d=f;function y(r,t){return!v(r)&&c(t)&&j(t)?r<0||r>t*(t+1)/2?0:b(h(d(r,t))-t*N):NaN}var x=t,g=m,w=o,z=a,k=e,q=s,A=i,B=f;function C(r){var t;return x(r)&&w(r)?(t=r*(r+1)/2,function(o){if(z(o))return NaN;if(o<0||o>t)return 0;return k(q(B(o,r))-r*A)}):g(NaN)}var D=r,E=y,F=C;D(E,"factory",F);export default E;
//# sourceMappingURL=pdf.js.map