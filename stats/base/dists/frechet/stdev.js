// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import t from"./../../../../math/base/special/gamma.js";import r from"./../../../../math/base/special/sqrt.js";import s from"./../../../../constants/math/float64-pinf.js";var m=a,o=t,e=r,i=s;function f(a,t,r){var s,f;return m(a)||m(t)||m(r)||a<=0||t<=0?NaN:a<=2?i:(s=o(1-1/a),f=o(1-2/a),t*e(f-s*s))}var n=f;export default n;
//# sourceMappingURL=stdev.js.map