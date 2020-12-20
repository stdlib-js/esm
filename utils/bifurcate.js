// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-collection.js";import e from"./../assert/is-plain-object.js";import n from"./../assert/has-own-property.js";import t from"./index-of.js";var o=e,u=n,s=t,i=["values","indices","*"];function a(r,e){return o(e)?u(e,"returns")&&(r.returns=e.returns,-1===s(i,r.returns))?new TypeError('invalid option. `returns` option must be one of the following: "'+i.join('", "')+'". Option: `'+r.returns+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}function l(r,e){var n,t,o;if(0===(t=r.length))return[];for(n=[[],[]],o=0;o<t;o++)e[o]?n[0].push(r[o]):n[1].push(r[o]);return n}function f(r,e){var n,t,o;if(0===(t=r.length))return[];for(n=[[],[]],o=0;o<t;o++)e[o]?n[0].push(o):n[1].push(o);return n}function p(r,e){var n,t,o;if(0===(t=r.length))return[];for(n=[[],[]],o=0;o<t;o++)e[o]?n[0].push([o,r[o]]):n[1].push([o,r[o]]);return n}var m=r,h=a,g=l,c=f,v=p;function w(r,e,n){var t,o,u;if(!m(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(t={returns:"values"},2===arguments.length)u=e;else{if(o=h(t,e))throw o;u=n}if(!m(u))throw new TypeError("invalid argument. Last argument must be a collection. Value: `"+u+"`.");if(r.length!==u.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return"values"===t.returns?g(r,u):"indices"===t.returns?c(r,u):v(r,u)}var d=w;export default d;
//# sourceMappingURL=bifurcate.js.map