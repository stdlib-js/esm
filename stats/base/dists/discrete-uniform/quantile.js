// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-integer.js";import a from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/floor.js";import o from"./../../../../utils/constant-function.js";var e=t,s=a,i=n;function f(r,t,a){return s(r)||s(t)||s(a)||!e(t)||!e(a)||t>a||r<0||r>1?NaN:t+i(r*(a-t+1))}var m=o,u=t,p=a,c=n;function l(r,t){var a;return p(r)||p(t)||!u(r)||!u(t)||r>t?m(NaN):(a=t-r+1,function(t){if(p(t)||t<0||t>1)return NaN;return r+c(t*a)})}var N=r,j=f,b=l;N(j,"factory",b);export default j;
//# sourceMappingURL=quantile.js.map