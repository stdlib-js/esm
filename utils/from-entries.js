// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-array-array.js";var a=r;function e(r){var e,t;if(!a(r))throw new TypeError("invalid argument. Must provide an array of arrays. Value: `"+r+"`.");for(e={},t=0;t<r.length;t++)e[r[t][0]]=r[t][1];return e}var t=e;export default t;
//# sourceMappingURL=from-entries.js.map