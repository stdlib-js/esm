// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/ln.js";import o from"./../../../../constants/math/float64-ninf.js";import a from"./../../../../utils/constant-function.js";var e=t,i=n,f=o;function s(r,t,n){return e(r)||e(t)||e(n)||t>=n?NaN:r<t||r>n?f:-i(n-t)}var m=a,u=t,p=n,c=o;function l(r,t){return u(r)||u(t)||r>=t?m(NaN):function(n){if(u(n))return NaN;if(n<r||n>t)return c;return-p(t-r)}}var N=r,j=s,b=l;N(j,"factory",b);export default j;
//# sourceMappingURL=logpdf.js.map