// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-string.js";import i from"./../regexp/dirname.js";var e=r.isPrimitive,t=i;function a(r){if(!e(r))throw new TypeError("invalid argument. Path must be a primitive string. Value: `"+r+"`.");return t.exec(r)[1]}var m=a;export default m;
//# sourceMappingURL=dirname.js.map