// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import t from"./../gamma/cdf.js";import e from"./../../../../math/base/assert/is-nan.js";import a from"./../degenerate/cdf.js";var n=t,o=e;function f(r,t){return o(r)||o(t)||t<0?NaN:0===t?r<0?0:1:r<=0?0:n(r*r,t/2,.5)}var i=a.factory,m=t.factory,u=e;function s(r){var t;return 0===r?i(0):(t=m(r/2,.5),function(r){if(u(r))return NaN;if(r<0)return 0;return t(r*r)})}var c=r,p=f,d=s;c(p,"factory",d);export default p;
//# sourceMappingURL=cdf.js.map