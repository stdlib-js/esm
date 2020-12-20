// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import n from"./../../math/base/assert/is-nan.js";var e=n;function a(r,n,a){var t,f,i,u,o;if(r<=0)return NaN;if(1===r||0===a)return e(n[0])?NaN:0;for(t=f=n[i=a<0?(1-r)*a:0],o=1;o<r;o++){if(u=n[i+=a],e(u))return u;u<f?f=u:u>t&&(t=u)}return t-f}var t=n;function f(r,n,e,a){var f,i,u,o,N;if(r<=0)return NaN;if(1===r||0===e)return t(n[a])?NaN:0;for(f=i=n[u=a],N=1;N<r;N++){if(o=n[u+=e],t(o))return o;o<i?i=o:o>f&&(f=o)}return f-i}var i=r,u=a,o=f;i(u,"ndarray",o);export default u;
//# sourceMappingURL=drange.js.map