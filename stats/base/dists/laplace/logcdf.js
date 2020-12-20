// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/expm1.js";import n from"./../../../../math/base/special/log1p.js";import o from"./../../../../constants/math/float64-ln-half.js";import e from"./../../../../utils/constant-function.js";var s=t,i=a,m=n,f=o;function p(r,t,a){var n;return s(r)||s(t)||s(a)||a<=0?NaN:(n=(r-t)/a,r<t?f+n:f+m(-i(-n)))}var u=e,l=t,c=a,j=n,N=o;function h(r,t){return l(r)||l(t)||t<=0?u(NaN):function(a){var n;if(l(a))return NaN;if(n=(a-r)/t,a<r)return N+n;return N+j(-c(-n))}}var v=r,b=p,d=h;v(b,"factory",d);export default b;
//# sourceMappingURL=logcdf.js.map