// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-positive-integer.js";import s from"./../../../../math/base/assert/is-nan.js";import m from"./../../../../math/base/special/digamma.js";import r from"./../../../../math/base/special/gamma.js";import t from"./../../../../math/base/special/ln.js";var e=a,i=s,o=m,p=r,f=t;function n(a,s){return!e(a)||i(s)||s<=0?NaN:(1-a)*o(a)+f(p(a)/s)+a}var b=n;export default b;
//# sourceMappingURL=entropy.js.map