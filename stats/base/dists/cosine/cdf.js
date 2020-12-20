// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/sinpi.js";import a from"./../../../../constants/math/float64-pi.js";import o from"./../../../../utils/constant-function.js";import e from"./../degenerate/cdf.js";var i=t,f=n,s=a;function m(r,t,n){var a;return i(r)||i(t)||i(n)||n<0?NaN:0===n?r<t?0:1:r<t-n?0:r>t+n?1:(1+(a=(r-t)/n)+f(a)/s)/2}var u=o,p=e.factory,c=t,l=n,j=a;function N(r,t){return c(r)||c(t)||t<0?u(NaN):0===t?p(r):function(n){var a;if(c(n))return NaN;if(n<r-t)return 0;if(n>r+t)return 1;return(1+(a=(n-r)/t)+l(a)/j)/2}}var d=r,v=m,y=N;d(v,"factory",y);export default v;
//# sourceMappingURL=cdf.js.map