// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/exp.js";var t=a,e=r;function s(a,r){var s,m;return t(a)||t(r)||r<=0?NaN:(s=e(4*(m=r*r)),s+=2*e(3*m),s+=3*e(2*m),s-=6)}var m=s;export default m;
//# sourceMappingURL=kurtosis.js.map