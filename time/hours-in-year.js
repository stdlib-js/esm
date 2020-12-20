// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../assert/is-date-object.js";import r from"./../assert/is-integer.js";import t from"./../assert/is-leap-year.js";var i=e,a=r.isPrimitive,s=t,o=8760,l=8784;function n(e){var r;if(arguments.length)if(i(e))r=e.getFullYear();else{if(!a(e))throw new TypeError("invalid argument. Must provide either an integer or a `Date` object. Value: `"+e+"`.");r=e}else r=(new Date).getFullYear();return s(r)?l:o}var f=n;export default f;
//# sourceMappingURL=hours-in-year.js.map