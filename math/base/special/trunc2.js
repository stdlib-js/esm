// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import o from"./../assert/is-infinite.js";import t from"./pow.js";import i from"./floor.js";import s from"./log2.js";var m=r,f=o,a=t,n=i,p=s;function e(r){var o;return m(r)||f(r)||0===r?r:(r<0?(r=-r,o=-1):o=1,o*a(2,n(p(r))))}var j=e;export default j;
//# sourceMappingURL=trunc2.js.map