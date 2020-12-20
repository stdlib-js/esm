// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-function.js";import e from"./../assert/is-nonnegative-integer.js";var n=r,t=e.isPrimitive;function i(r,e,i){var a,o;if(!n(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(!t(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");for(a=[],o=0;o<e;o++)a.push(r.call(i,o));return a}var a=i;export default a;
//# sourceMappingURL=map-function.js.map