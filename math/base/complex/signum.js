// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./abs.js";var t=r;function n(r,n,a){var e=t(n,a);return 0===e?(r[0]=n,r[1]=a,r):(r[0]=n/e,r[1]=a/e,r)}var a=n;function e(r,t,n){return 2===arguments.length?a([0,0],r,t):a(r,t,n)}var o=e;export default o;
//# sourceMappingURL=signum.js.map