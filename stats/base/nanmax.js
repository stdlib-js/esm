// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../math/base/assert/is-nan.js";import a from"./../../math/base/assert/is-positive-zero.js";var t=e,n=a;function o(r,e,a){var o,f,i,s;if(r<=0)return NaN;if(1===r||0===a)return e[0];for(f=a<0?(1-r)*a:0,s=0;s<r&&(i=e[f])!=i;s++)f+=a;if(s===r)return NaN;for(o=i,s+=1;s<r;s++)i=e[f+=a],t(i)||(i>o||i===o&&n(i))&&(o=i);return o}var f=e,i=a;function s(r,e,a,t){var n,o,s,u;if(r<=0)return NaN;if(1===r||0===a)return e[t];for(o=t,u=0;u<r&&(s=e[o])!=s;u++)o+=a;if(u===r)return NaN;for(n=s,u+=1;u<r;u++)s=e[o+=a],f(s)||(s>n||s===n&&i(s))&&(n=s);return n}var u=r,m=o,N=s;u(m,"ndarray",N);var p=m;export default p;
//# sourceMappingURL=nanmax.js.map