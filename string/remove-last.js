// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-string.js";var i=r.isPrimitive;function t(r){if(!i(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");return""===r?"":r.substring(0,r.length-1)}var e=t;export default e;
//# sourceMappingURL=remove-last.js.map