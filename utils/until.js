// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-function.js";var n=r;function t(r,t,a){var e;if(!n(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(!n(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");for(e=0;!r(e);)t.call(a,e),e+=1}var a=t;export default a;
//# sourceMappingURL=until.js.map