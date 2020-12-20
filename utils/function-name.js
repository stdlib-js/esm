// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-function.js";import t from"./../assert/has-function-name-support.js";import n from"./../regexp/function-name.js";var e=r,o=t,i=n,a=o();function s(r){if(!1===e(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return a?r.name:i.exec(r.toString())[1]}var u=s;export default u;
//# sourceMappingURL=function-name.js.map