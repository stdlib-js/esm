// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-string.js";import e from"./../regexp/extname.js";var i=r.isPrimitive,t=e;function a(r){if(!i(r))throw new TypeError("invalid argument. Filename must be a primitive string. Value: `"+r+"`.");return t.exec(r)[1]}var m=a;export default m;
//# sourceMappingURL=extname.js.map