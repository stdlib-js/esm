// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/digamma.js";import s from"./../../../../math/base/special/sqrt.js";import m from"./../../../../math/base/special/beta.js";import t from"./../../../../math/base/special/ln.js";var e=a,i=r,o=s,p=m,f=t;function b(a){var r,s;return e(a)||a<=0?NaN:(s=a/2,r=(a+1)/2,r*=i((1+a)/2)-i(s),r+=f(o(a)*p(s,.5)))}var l=b;export default l;
//# sourceMappingURL=entropy.js.map