// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../math/base/assert/is-positive-zero.js";import t from"./../../math/base/assert/is-negative-zero.js";import a from"./../../math/base/assert/is-nan.js";var n=e,i=t,o=a;function s(r,e,t){var a,s,f,u,m;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(a=s=e[f=t<0?(1-r)*t:0],m=1;m<r;m++){if(u=e[f+=t],o(u))return u;u<s||u===s&&i(u)?s=u:(u>a||u===a&&n(u))&&(a=u)}return(a+s)/2}var f=e,u=t,m=a;function p(r,e,t,a){var n,i,o,s,p;if(r<=0)return NaN;if(1===r||0===t)return e[a];for(n=i=e[o=a],p=1;p<r;p++){if(s=e[o+=t],m(s))return s;s<i||s===i&&u(s)?i=s:(s>n||s===n&&f(s))&&(n=s)}return(n+i)/2}var v=r,b=s,d=p;v(b,"ndarray",d);export default b;
//# sourceMappingURL=dmidrange.js.map