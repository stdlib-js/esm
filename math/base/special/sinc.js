// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./sinpi.js";import t from"./../assert/is-nan.js";import i from"./../assert/is-infinite.js";import s from"./../../../constants/math/float64-pi.js";var o=r,a=t,n=i,m=s;function f(r){return a(r)?NaN:n(r)?0:0===r?1:o(r)/(m*r)}var p=f;export default p;
//# sourceMappingURL=sinc.js.map