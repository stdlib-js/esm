// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import t from"./../assert/is-negative-zero.js";var a=r,e=t;function s(r,t,s){return a(r)||a(t)||a(s)?NaN:r<t?t:r>s?s:0===t&&e(r)?t:0===r&&e(s)?s:r}var o=s;export default o;
//# sourceMappingURL=clamp.js.map