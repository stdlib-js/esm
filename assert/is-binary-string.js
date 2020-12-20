// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-string.js";var t=r.isPrimitive;function i(r){var i,e;if(!t(r))return!1;if(0===r.length)return!1;for(e=0;e<r.length;e++)if("1"!==(i=r[e])&&"0"!==i)return!1;return!0}var e=i;export default e;
//# sourceMappingURL=is-binary-string.js.map