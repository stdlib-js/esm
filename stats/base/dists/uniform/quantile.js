// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import n from"./../../../../math/base/assert/is-nan.js";import t from"./../../../../utils/constant-function.js";var o=n;function a(r,n,t){return o(n)||o(t)||n>=t||o(r)||r<0||r>1?NaN:n+r*(t-n)}var e=t,i=n;function u(r,n){return i(r)||i(n)||r>=n?e(NaN):function(t){if(i(t)||t<0||t>1)return NaN;return r+t*(n-r)}}var f=r,s=a,m=u;f(s,"factory",m);export default s;
//# sourceMappingURL=quantile.js.map