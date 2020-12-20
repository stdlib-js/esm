// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./is-string.js";var t=r.isPrimitive,i=127;function e(r){var e,n;if(!t(r))return!1;if(!(e=r.length))return!1;for(n=0;n<e;n++)if(r.charCodeAt(n)>i)return!1;return!0}var n=e;export default n;
//# sourceMappingURL=is-ascii.js.map