// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import t from"./gcd.js";var a=r,o=t;function n(r,t){var n;return 0===r||0===t?0:(r<0&&(r=-r),t<0&&(t=-t),n=o(r,t),a(n)?n:r/n*t)}var s=n;export default s;
//# sourceMappingURL=lcm.js.map