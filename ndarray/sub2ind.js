// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nonnegative-integer-array.js";import e from"./../assert/is-integer.js";import o from"./base/shape2strides.js";import i from"./base/sub2ind.js";import t from"./../assert/is-plain-object.js";import n from"./../assert/has-own-property.js";import s from"./../assert/is-array.js";import a from"./base/assert/is-order.js";import m from"./base/assert/is-index-mode.js";var d=["throw"],p="row-major",u={mode:d,order:p},f=t,l=n,b=s,g=a,v=m;function w(r,e){var o;if(!f(e))return new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.");if(l(e,"mode")){if(r.mode=e.mode,b(r.mode)){if(0===r.mode.length)return new TypeError("invalid option. `mode` option cannot be an empty array.")}else r.mode=[r.mode];for(o=0;o<r.mode.length;o++)if(!v(r.mode[o]))return new TypeError("invalid option. `mode` option must be a supported/recognized mode. Option: `"+r.mode[o]+"`.")}return l(e,"order")&&(r.order=e.order,!g(r.order))?new TypeError("invalid option. `order` option must be a supported/recognized order. Option: `"+r.order+"`."):null}var c=r.primitives,y=e.isPrimitive,h=o,j=i,E=u,T=w;function O(){var r,e,o,i,t,n,s,a;if(!c(r=arguments[0]))throw new TypeError("invalid argument. First argument must be an array-like object containing nonnegative integers. Value: `"+r+"`.");if(n=arguments.length,e=r.length,(i={}).mode=E.mode.slice(),i.order=E.order,n>e+1){if(t=T(i,arguments[a=n-1]))throw t}else a=n;if(a-(s=1)!==e)throw new RangeError("invalid argument. Number of provided subscripts must match the number of dimensions. ndims: "+e+". Number of subscripts: "+(a-s)+".");for((o=new Array(e+4))[0]=r,o[1]=h(r,i.order),o[2]=0;s<a;s++){if(!y(arguments[s]))throw new TypeError("invalid argument. Subscripts must be integer valued. Argument: "+s+". Value: `"+arguments[s]+"`.");o[s+2]=arguments[s]}return o[s+2]=i.mode,j.apply(null,o)}var V=O;export default V;
//# sourceMappingURL=sub2ind.js.map