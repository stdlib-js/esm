// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-boolean.js";import e from"./../assert/is-plain-object.js";import a from"./../assert/is-array.js";import t from"./../assert/has-own-property.js";var o=r.isPrimitive,n=e,i=a,s=t;function l(){var r,e,a,t,l,u,p,f,y,m,h,w;for(t={},a=null,r=(e=Array.prototype.slice.call(arguments)).length,h=0;h<r-1;h++)if(!i(e[h]))throw new TypeError("invalid argument. Must provide array arguments. Value: `"+e[h]+"`.");if(l=e[r-1],!(u=n(l))&&!i(l))throw new TypeError("invalid argument. Last argument must be either an array or an options object. Value: `"+l+"`.");if(u&&(t=e.pop()),0===(r=e.length))throw new Error("insufficient input arguments. Must provide at least one array.");if(s(t,"trunc")){if(!o(t.trunc))throw new TypeError("invalid option. `trunc` option must be a boolean.  Value: `"+t.trunc+"`.")}else t.trunc=!0;if(s(t,"fill")&&(a=t.fill),s(t,"arrays")){if(!o(t.arrays))throw new TypeError("invalid option. `arrays` option must be a boolean. Value: `"+t.arrays+"`.")}else t.arrays=!1;if(1===r&&t.arrays&&(r=(e=e[0]).length),p=e[0].length,t.trunc)for(h=0;h<r;h++)(m=e[h].length)<p&&(p=m);else for(h=0;h<r;h++)(m=e[h].length)>p&&(p=m);for(y=new Array(p),w=0;w<p;w++){for(f=new Array(r),h=0;h<r;h++)(l=e[h]).length<=w?f[h]=a:f[h]=l[w];y[w]=f}return y}var u=l;export default u;
//# sourceMappingURL=zip.js.map