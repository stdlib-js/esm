// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";import r from"./../../../../math/base/special/gamma.js";import m from"./../../../../math/base/special/pow.js";var s=a,t=r,e=m;function o(a,r){var m,o,i,p,f;return s(a)||s(r)||a<=0||r<=0?NaN:(f=t(1+1/a),p=t(1+2/a),i=t(1+3/a),o=t(1+4/a),m=-6*e(f,4)+12*f*f*p-3*p*p-4*f*i+o,m/=e(p-f*f,2))}var i=o;export default i;
//# sourceMappingURL=kurtosis.js.map