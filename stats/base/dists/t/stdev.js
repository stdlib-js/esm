// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../math/base/special/sqrt.js";import r from"./../../../../constants/math/float64-pinf.js";var s=t,o=a,m=r;function n(t){return s(t)||t<=1?NaN:t<=2?m:o(t/(t-2))}var e=n;export default e;
//# sourceMappingURL=stdev.js.map