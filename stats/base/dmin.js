// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../math/base/assert/is-nan.js";import t from"./../../math/base/assert/is-negative-zero.js";var n=e,a=t;function i(r,e,t){var i,f,o,u;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(i=e[f=t<0?(1-r)*t:0],u=1;u<r;u++){if(o=e[f+=t],n(o))return o;(o<i||o===i&&a(o))&&(i=o)}return i}var f=e,o=t;function u(r,e,t,n){var a,i,u,s;if(r<=0)return NaN;if(1===r||0===t)return e[n];for(a=e[i=n],s=1;s<r;s++){if(u=e[i+=t],f(u))return u;(u<a||u===a&&o(u))&&(a=u)}return a}var s=r,m=i,p=u;s(m,"ndarray",p);export default m;
//# sourceMappingURL=dmin.js.map