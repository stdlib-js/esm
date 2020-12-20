// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-negative-zero.js";import t from"./../assert/is-positive-zero.js";import n from"./../assert/is-nan.js";import a from"./../../../constants/math/float64-ninf.js";import e from"./../../../constants/math/float64-pinf.js";var o=r,f=t,i=n,s=a,m=e;function u(r,t,n){var a,e,u,p,l;if(2===(a=arguments.length))return r[0]=t,r[1]=t,r;if(3===a)return i(t)||i(n)?(r[0]=NaN,r[1]=NaN,r):t===n&&0===t?o(t)?(r[0]=t,r[1]=n,r):(r[0]=n,r[1]=t,r):t<n?(r[0]=t,r[1]=n,r):(r[0]=n,r[1]=t,r);for(e=m,u=s,l=0;l<a;l++){if(i(p=arguments[l]))return r[0]=NaN,r[1]=NaN,r;(p<e||0===p&&p===e&&o(p))&&(e=p),(p>u||0===p&&p===u&&f(p))&&(u=p)}return r[0]=e,r[1]=u,r}var p=u;function l(r,t,n){var a,e,o,f,i;if(1===(o=arguments.length))return p(new Array(2),r);if(a="number"==typeof arguments[0],2===o)return a?p(new Array(2),r,t):p(r,t);if(3===o)return a?p(new Array(2),r,t,n):p(r,t,n);for(a?((e=new Array(o+1))[0]=new Array(2),f=0):((e=new Array(o))[0]=arguments[0],f=1),i=1;f<o;f++)e[i]=arguments[f],i+=1;return p.apply(null,e)}var y=l;export default y;
//# sourceMappingURL=minmax.js.map