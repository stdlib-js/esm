// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-array.js";import o from"./copy.js";import t from"./../assert/has-own-property.js";import e from"./../assert/is-plain-object.js";import n from"./../assert/is-boolean.js";var i=!0,a={copy:i},p=e,s=t,m=n.isPrimitive;function l(r,o){return p(o)?s(o,"copy")&&(r.copy=o.copy,!m(r.copy))?new TypeError("invalid option. `copy` option must be a boolean primitive. Option: `"+r.copy+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+o+"`.")}var u=r,y=o,c=t,f=a,v=l;function b(r,o,t){var e,n,i,a,p;if(!u(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");if(e=y(f),arguments.length>2&&(i=v(e,t)))throw i;for(n=e.copy?new Array(r.length):r,p=0;p<r.length;p++)null!=(a=r[p])&&c(a,o)&&(n[p]=a[o]);return n}var g=b;export default g;
//# sourceMappingURL=pluck.js.map