// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/special/digamma.js";import r from"./../../../../math/base/special/betaln.js";var t=a,e=r;function m(a,r){var m;return a<=0||r<=0?NaN:(m=e(a,r),m-=(a-1)*t(a),m-=(r-1)*t(r),m+=(a+r-2)*t(a+r))}var i=m;export default i;
//# sourceMappingURL=entropy.js.map