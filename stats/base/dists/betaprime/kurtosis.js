// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import a from"./../../../../math/base/assert/is-nan.js";var r=a;function t(a,t){var e,n,s;return r(a)||a<=0||r(t)||t<=4?NaN:(s=a*(e=a+t-1)*(5*t-11)+(n=t-1)*n*(n-1),s*=6,s/=a*e*(t-3)*(t-4))}var e=t;export default e;
//# sourceMappingURL=kurtosis.js.map