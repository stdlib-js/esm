// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/erfcinv.js";import a from"./../../../../utils/constant-function.js";var e=t,o=n;function i(r,t,n){var a;return e(t)||e(n)||e(r)||n<=0||r<0||r>1?NaN:t+n/(2*(a=o(r))*a)}var f=a,s=t,u=n;function m(r,t){return s(r)||s(t)||t<=0?f(NaN):function(n){var a;if(s(n)||n<0||n>1)return NaN;return a=u(n),r+t/(2*a*a)}}var c=r,p=i,l=m;c(p,"factory",l);export default p;
//# sourceMappingURL=quantile.js.map