// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../assert/is-function.js";import r from"./ctor.js";import t from"./../process/node-version.js";import n from"./../assert/is-arraybuffer.js";import a from"./../assert/is-nonnegative-integer.js";import i from"./../array/uint8.js";import o from"./from-array.js";var u=t,m=t?parseInt(t.split(".")[0],10):-1,f=e,g=r,s=m,h=f(g.from)&&s>=5,l=n,y=a.isPrimitive,w=r,b=m;function v(e,r,t){var n,a;if(!l(e))throw new TypeError("invalid argument. First argument must be an ArrayBuffer. Value: `"+e+"`");if(arguments.length>1){if(!y(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(r>e.byteLength)throw new RangeError("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `"+r+"`.");if(n=r,arguments.length>2){if(!y(t))throw new TypeError("invalid argument. Last argument must be a nonnegative integer. Value: `"+t+"`.");if(t>e.byteLength)throw new RangeError("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `"+t+"`.");a=t}else a=e.byteLength-n}else n=0,a=e.byteLength;return 0===a&&b<6?w.from([]):w.from(e,n,a)}var p=n,d=a.isPrimitive,c=r,L=i,E=o,V=m;function j(e,r,t){var n;if(!p(e))throw new TypeError("invalid argument. First argument must be an ArrayBuffer. Value: `"+e+"`");if(arguments.length>1){if(!d(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(r>e.byteLength)throw new RangeError("invalid argument. Second argument must not exceed the number of bytes in the input ArrayBuffer. Value: `"+r+"`.");if(arguments.length>2){if(!d(t))throw new TypeError("invalid argument. Last argument must be a nonnegative integer. Value: `"+t+"`.");if(t>e.byteLength)throw new RangeError("invalid argument. Last argument must not exceed the number of bytes in the input ArrayBuffer. Value: `"+t+"`.");n=t}else n=e.byteLength-r;return E(new L(e,r,n))}return V<3?E(new L(e)):0===e.byteLength?new c([]):new c(e)}var A,B=h,T=v,x=j,R=A=B?T:x;export default R;
//# sourceMappingURL=from-arraybuffer.js.map