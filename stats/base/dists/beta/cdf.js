// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/special/betainc.js";import n from"./../../../../math/base/assert/is-nan.js";import e from"./../../../../utils/constant-function.js";var a=t,o=n;function i(r,t,n){return o(r)||o(t)||o(n)||t<=0||n<=0?NaN:r<=0?0:r>=1?1:a(r,t,n)}var f=e,u=t,s=n;function m(r,t){return s(r)||s(t)||r<=0||t<=0?f(NaN):function(n){if(s(n))return NaN;if(n<=0)return 0;if(n>=1)return 1;return u(n,r,t)}}var c=r,p=i,l=m;c(p,"factory",l);export default p;
//# sourceMappingURL=cdf.js.map