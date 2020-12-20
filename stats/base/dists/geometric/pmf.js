// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nonnegative-integer.js";import n from"./../../../../math/base/assert/is-nan.js";import e from"./../../../../math/base/special/pow.js";import a from"./../../../../utils/constant-function.js";var o=t,i=n,s=e;function f(r,t){return i(r)||i(t)||t<0||t>1?NaN:o(r)?t*s(1-t,r):0}var m=t,u=a,p=n,c=e;function l(r){return p(r)||r<0||r>1?u(NaN):function(t){if(p(t))return NaN;if(m(t))return r*c(1-r,t);return 0}}var N=r,j=f,b=l;N(j,"factory",b);export default j;
//# sourceMappingURL=pmf.js.map