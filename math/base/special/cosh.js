// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import t from"./exp.js";var o=r,a=t;function e(r){return o(r)?r:(r<0&&(r=-r),r>21?a(r)/2:(a(r)+a(-r))/2)}var n=e;export default n;
//# sourceMappingURL=cosh.js.map