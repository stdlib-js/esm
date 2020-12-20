// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-array.js";import e from"./../assert/is-collection.js";import t from"./../assert/is-typed-array-like.js";import n from"./../assert/is-integer.js";import a from"./../array/buffer.js";import o from"./../math/base/special/ceil2.js";function f(r,e){var t;for(t=0;t<e.length;t++)r.push(e[t]);return r}function i(r,e){var t,n;for(t=r.length,n=0;n<e.length;n++)r[t+n]=e[n];return r.length=t+e.length,r}var s=a,u=o;function l(r,e){var t,n,a,o,f,i;if(n=r.length,o=e.length,t=n*r.BYTES_PER_ELEMENT+o*r.BYTES_PER_ELEMENT+r.byteOffset,r.buffer.byteLength<t)for(a=new s(u(t+1)),f=new r.constructor(a,0,n+o),i=0;i<n;i++)f[i]=r[i];else f=new r.constructor(r.buffer,r.byteOffset,n+o);for(i=0;i<o;i++)f[n+i]=e[i];return f}var m=r,c=e,g=t,h=n,y=f,p=i,b=l;function E(r,e){if(!c(e))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+e+"`.");if(m(r))return y(r,e);if(g(r))return b(r,e);if(null!==r&&"object"==typeof r&&"number"==typeof r.length&&h(r.length)&&r.length>=0)return p(r,e);throw new TypeError("invalid argument. First argument must be either an Array, Typed Array, or an array-like Object. Value: `"+r+"`.")}var j=E;export default j;
//# sourceMappingURL=append.js.map