// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-number.js";import e from"./pcorr.js";var i=r.isPrimitive,t=e;function n(r,e){var n;if(arguments.length){if(!i(r))throw new TypeError("invalid argument. First argument must be a number primitive. Value: `"+r+"`.");if(!i(e))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+e+"`.");n=t(r,e)}else n=t();return u;function u(r,e){var i;return 0===arguments.length?null===(i=n())?i:1-i:1-n(r,e)}}var u=n;export default u;
//# sourceMappingURL=pcorrdist.js.map