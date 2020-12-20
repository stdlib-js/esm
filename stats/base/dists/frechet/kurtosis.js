// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import t from"./../../../../math/base/special/gamma.js";import r from"./../../../../math/base/special/pow.js";import m from"./../../../../constants/math/float64-pinf.js";var s=a,o=t,e=r,i=m;function p(a,t,r){var m,p,f,n;return s(a)||s(t)||s(r)||a<=0||t<=0?NaN:a<=4?i:(p=o(1-1/a),f=o(1-2/a),n=o(1-3/a),m=(o(1-4/a)-4*n*p+3*f*f)/e(f-p*p,2),m-=6)}var f=p;export default f;
//# sourceMappingURL=kurtosis.js.map