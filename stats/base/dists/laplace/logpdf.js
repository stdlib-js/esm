// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/abs.js";import n from"./../../../../math/base/special/ln.js";import o from"./../../../../utils/constant-function.js";var e=t,s=a,i=n;function m(r,t,a){return e(r)||e(t)||e(a)||a<=0?NaN:-(s((r-t)/a)+i(2*a))}var f=o,u=t,p=a,c=n;function l(r,t){return u(r)||u(t)||t<=0?f(NaN):function(a){if(u(a))return NaN;return-(p((a-r)/t)+c(2*t))}}var N=r,b=m,j=l;N(b,"factory",j);export default b;
//# sourceMappingURL=logpdf.js.map