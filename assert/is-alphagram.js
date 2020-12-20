// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-string.js";var t=r;function n(r){var n,e;if(!t(r))return!1;if(!(n=r.length))return!1;for(e=1;e<n;e++)if(r[e-1]>r[e])return!1;return!0}var e=n;export default e;
//# sourceMappingURL=is-alphagram.js.map