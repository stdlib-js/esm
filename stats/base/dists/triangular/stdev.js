// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/sqrt.js";var t=a,s=r;function e(a,r,e){return t(a)||t(r)||t(e)||!(a<=e&&e<=r)?NaN:s((a*a+r*r+e*e-a*r-a*e-r*e)/18)}var m=e;export default m;
//# sourceMappingURL=stdev.js.map