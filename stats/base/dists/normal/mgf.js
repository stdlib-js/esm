// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/exp.js";import n from"./../../../../math/base/special/pow.js";import o from"./../../../../utils/constant-function.js";var e=t,i=a,s=n;function m(r,t,a){return e(r)||e(t)||e(a)||a<=0?NaN:i(t*r+.5*s(a*r,2))}var f=o,p=t,u=a,c=n;function l(r,t){return p(r)||p(t)||t<=0?f(NaN):function(a){if(p(a))return NaN;return u(r*a+.5*c(t*a,2))}}var N=r,j=m,b=l;N(j,"factory",b);export default j;
//# sourceMappingURL=mgf.js.map