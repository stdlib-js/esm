// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../math/base/assert/is-nanf.js";import t from"./../../math/base/assert/is-positive-zerof.js";var n=e,a=t;function f(r,e,t){var f,i,o,s;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(f=e[i=t<0?(1-r)*t:0],s=1;s<r;s++){if(o=e[i+=t],n(o))return o;(o>f||o===f&&a(o))&&(f=o)}return f}var i=e,o=t;function s(r,e,t,n){var a,f,s,u;if(r<=0)return NaN;if(1===r||0===t)return e[n];for(a=e[f=n],u=1;u<r;u++){if(s=e[f+=t],i(s))return s;(s>a||s===a&&o(s))&&(a=s)}return a}var u=r,m=f,p=s;u(m,"ndarray",p);export default m;
//# sourceMappingURL=smax.js.map