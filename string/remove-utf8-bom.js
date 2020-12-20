// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-string.js";var i=r.isPrimitive,t=65279;function e(r){if(!i(r))throw new TypeError("invalid argument. Must provide a string primitive. Value: `"+r+"`.");return r.charCodeAt(0)===t?r.slice(1):r}var a=e;export default a;
//# sourceMappingURL=remove-utf8-bom.js.map