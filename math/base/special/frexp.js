// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import o from"./../assert/is-infinite.js";import t from"./../../../number/float64/base/normalize.js";import e from"./../../../number/float64/base/exponent.js";import m from"./../../../number/float64/base/to-words.js";import n from"./../../../number/float64/base/from-words.js";var s=r,a=o,f=t,i=e,u=m,b=n,p=2148532223,l=1071644672,j=[0,0],v=[0,0];function d(r,o){var t,e;return 0===o||s(o)||a(o)?(r[0]=o,r[1]=0,r):(f(j,o),e=i(j[0])+j[1]+1,u(v,j[0]),t=v[0],t&=p,o=b(t|=l,v[1]),r[0]=o,r[1]=e,r)}var c=d;function w(r,o){return 1===arguments.length?c([0,0],r):c(r,o)}var x=w;export default x;
//# sourceMappingURL=frexp.js.map