// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../math/base/special/sqrt.js";import r from"./../../../../constants/math/float64-sqrt-two.js";var a=t,o=r;function s(t,r){var s;return t<=0||r<=4?NaN:(s=o*(r/(r-2)),s*=a((t+r-2)/(t*(r-4))))}var m=s;export default m;
//# sourceMappingURL=stdev.js.map