// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./is-uint16array.js";import r from"./../constants/math/uint16-max.js";var n="function"==typeof Uint16Array?Uint16Array:null,a=t,i=r,o=n;function f(){var t,r;if("function"!=typeof o)return!1;try{r=new o(r=[1,3.14,-3.14,i+1,i+2]),t=a(r)&&1===r[0]&&3===r[1]&&r[2]===i-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}var u=f;export default u;
//# sourceMappingURL=has-uint16array-support.js.map