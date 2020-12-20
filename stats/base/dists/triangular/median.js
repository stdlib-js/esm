// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/sqrt.js";var t=a,s=r;function e(a,r,e){return t(a)||t(r)||t(e)||!(a<=e&&e<=r)?NaN:e>=(a+r)/2?a+s(.5*(r-a)*(e-a)):r-s(.5*(r-a)*(r-e))}var m=e;export default m;
//# sourceMappingURL=median.js.map