// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../math/base/assert/is-nanf.js";import a from"./../../math/base/special/abs.js";var n=e,t=a;function f(r,e,a){var f,i,o,u;if(r<=0)return NaN;if(1===r||0===a)return t(e[0]);for(f=t(e[i=a<0?(1-r)*a:0]),u=1;u<r;u++){if(o=t(e[i+=a]),n(o))return o;o>f&&(f=o)}return f}var i=e,o=a;function u(r,e,a,n){var t,f,u,s;if(r<=0)return NaN;if(1===r||0===a)return o(e[n]);for(t=o(e[f=n]),s=1;s<r;s++){if(u=o(e[f+=a]),i(u))return u;u>t&&(t=u)}return t}var s=r,m=f,p=u;s(m,"ndarray",p);export default m;
//# sourceMappingURL=smaxabs.js.map