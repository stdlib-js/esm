// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../assert/is-nan.js";var a=t;function n(t,n){return a(t)?NaN:t>0?1:0===t?"half-maximum"===n?.5:"left-continuous"===n?0:"right-continuous"===n?1:NaN:0}var r=n;export default r;
//# sourceMappingURL=heaviside.js.map