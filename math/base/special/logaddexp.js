// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import o from"./exp.js";import t from"./log1p.js";import a from"./../../../constants/math/float64-ln-two.js";var m=r,s=o,n=t,f=a;function p(r,o){var t;return m(r)||m(o)?NaN:r===o?r+f:(t=r-o)>0?r+n(s(-t)):o+n(s(t))}var i=p;export default i;
//# sourceMappingURL=logaddexp.js.map