// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nonnegative-integer.js";import n from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/ln.js";import o from"./../../../../constants/math/float64-ninf.js";import e from"./../../../../utils/constant-function.js";var i=t,s=n,f=a,m=o;function u(r,t){var n;return s(r)||s(t)||t<0||t>1?NaN:i(r)?(n=1-t,f(t)+r*f(n)):m}var p=e,c=t,l=n,j=a,v=o;function N(r){return l(r)||r<0||r>1?p(NaN):function(t){var n;if(l(t))return NaN;if(c(t))return n=1-r,j(r)+t*j(n);return v}}var b=r,h=u,d=N;b(h,"factory",d);export default h;
//# sourceMappingURL=logpmf.js.map