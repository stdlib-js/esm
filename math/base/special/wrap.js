// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import t from"./trunc.js";var a=r,n=t;function o(r,t,o){var s;return a(r)||a(t)||a(o)||o<=t?NaN:(0===r&&(r=0),0===t&&(t=0),0===o&&(o=0),t<=r&&r<o?r:(s=o-t,r<t&&(r+=s*(n((t-r)/s)+1)),t+(r-t)%s))}var s=o;export default s;
//# sourceMappingURL=wrap.js.map