// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import t from"./powm1.js";import o from"./riemann-zeta.js";import a from"./../../../constants/math/float64-ln-two.js";var m=r,n=t,s=o,f=a;function i(r){return m(r)?NaN:1===r?f:-n(2,1-r)*s(r)}var e=i;export default e;
//# sourceMappingURL=dirichlet-eta.js.map