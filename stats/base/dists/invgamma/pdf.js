// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import a from"./../../../../math/base/special/gammaln.js";import t from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/exp.js";import e from"./../../../../math/base/special/ln.js";import o from"./../../../../utils/constant-function.js";var i=a,m=t,s=n,f=e;function p(r,a,t){var n;return m(r)||m(a)||m(t)||a<=0||t<=0?NaN:r<=0?0:(n=a*f(t)-i(a),n-=(a+1)*f(r),s(n-=t/r))}var u=o,l=a,c=t,j=n,v=e;function N(r,a){var t;return c(r)||c(a)||r<=0||a<=0?u(NaN):(t=r*v(a)-l(r),function(n){var e;if(c(n))return NaN;if(n<=0)return 0;return e=t-(r+1)*v(n)-a/n,j(e)})}var b=r,h=p,d=N;b(h,"factory",d);export default h;
//# sourceMappingURL=pdf.js.map