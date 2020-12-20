// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/special/betaln.js";import a from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/log1p.js";import o from"./../../../../math/base/special/exp.js";import e from"./../../../../math/base/special/ln.js";import i from"./../../../../constants/math/float64-pinf.js";import s from"./../../../../utils/constant-function.js";var m=t,f=a,p=n,u=o,l=e,c=i;function j(r,t,a){var n;return f(r)||f(t)||f(a)||t<=0||a<=0?NaN:r<0||r>1?0:0===r?t<1?c:t>1?0:a:1===r?a<1?c:a>1?0:t:(n=(t-1)*l(r),n+=(a-1)*p(-r),n-=m(t,a),u(n))}var b=s,h=t,v=a,N=n,d=o,y=e,x=i;function g(r,t){var a;return v(r)||v(t)||r<=0||t<=0?b(NaN):(a=h(r,t),function(n){var o;if(v(n))return NaN;if(n<0||n>1)return 0;if(0===n)return r<1?x:r>1?0:t;if(1===n)return t<1?x:t>1?0:r;return o=-a,o+=(r-1)*y(n),o+=(t-1)*N(-n),d(o)})}var k=r,q=j,w=g;k(q,"factory",w);export default q;
//# sourceMappingURL=pdf.js.map