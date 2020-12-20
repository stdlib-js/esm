// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../math/base/assert/is-nan.js";import a from"./../../../../constants/math/float64-pinf.js";var r=t,n=a;function o(t){return r(t)||t<=1?NaN:t<=2?n:t/(t-2)}var s=o;export default s;
//# sourceMappingURL=variance.js.map