// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/sqrt.js";import o from"./../../../../constants/math/float64-pi.js";import a from"./../../../../utils/constant-function.js";var e=t,i=n,s=o;function f(r,t,n){return e(r)||e(t)||e(n)||t>=n?NaN:r<t||r>n?0:1/(s*i((r-t)*(n-r)))}var m=a,u=t,p=n,c=o;function l(r,t){return u(r)||u(t)||r>=t?m(NaN):function(n){if(u(n))return NaN;if(n<r||n>t)return 0;return 1/(c*p((n-r)*(t-n)))}}var N=r,j=f,b=l;N(j,"factory",b);export default j;
//# sourceMappingURL=pdf.js.map