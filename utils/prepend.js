// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-array.js";import e from"./../assert/is-collection.js";import t from"./../assert/is-typed-array-like.js";import n from"./../assert/is-integer.js";import o from"./../array/buffer.js";import a from"./../math/base/special/ceil2.js";function i(r,e){var t;for(t=e.length-1;t>=0;t--)r.unshift(e[t]);return r}function f(r,e){var t,n,o;for(t=r.length,n=e.length,o=t-1;o>=0;o--)r[o+n]=r[o];for(o=0;o<n;o++)r[o]=e[o];return r.length=t+n,r}var s=o,u=a;function l(r,e){var t,n,o,a,i,f,l,m;if(a=r.length,n=(f=e.length)*r.BYTES_PER_ELEMENT,(o=r.byteOffset)<n)for(t=a*r.BYTES_PER_ELEMENT,o=(i=new s(u(t+n+o+1))).byteLength-t-n,l=new r.constructor(i,o,a+f),m=0;m<a;m++)l[m+f]=r[m];else o-=n,l=new r.constructor(r.buffer,o,a+f);for(m=0;m<f;m++)l[m]=e[m];return l}var m=r,c=e,g=t,h=n,y=i,p=f,E=l;function b(r,e){if(!c(e))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+e+"`.");if(m(r))return y(r,e);if(g(r))return E(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&h(r.length)&&r.length>=0)return p(r,e);throw new TypeError("invalid argument. First argument must be either an Array, Typed Array, or an array-like Object. Value: `"+r+"`.")}var j=b;export default j;
//# sourceMappingURL=prepend.js.map