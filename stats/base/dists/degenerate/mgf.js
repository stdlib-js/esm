// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../../../../math/base/assert/is-nan.js";import n from"./../../../../math/base/special/exp.js";import a from"./../../../../utils/constant-function.js";var e=t,o=n;function i(r,t){return e(r)||e(t)?NaN:o(t*r)}var s=a,f=t,u=n;function m(r){return f(r)?s(NaN):function(t){if(f(t))return NaN;return u(r*t)}}var p=r,c=i,l=m;p(c,"factory",l);export default c;
//# sourceMappingURL=mgf.js.map