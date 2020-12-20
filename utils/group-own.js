// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-object-like.js";import t from"./../assert/is-function.js";import n from"./../assert/is-plain-object.js";import e from"./../assert/has-own-property.js";import s from"./index-of.js";var i=n,o=e,u=s,a=["values","keys","*"];function l(r,t){return i(t)?(o(t,"thisArg")&&(r.thisArg=t.thisArg),o(t,"returns")&&(r.returns=t.returns,-1===u(a,r.returns))?new TypeError('invalid option. `returns` option must be one of the following: "'+a.join('", "')+'". Option: `'+r.returns+"`."):null):new TypeError("invalid argument. Options must be an object. Value: `"+t+"`.")}var f=e;function p(r,t,n){var e,s,i,o,u;for(i in e=t.thisArg,s={},r)f(r,i)&&(o=r[i],u=n.call(e,o,i),f(s,u)?s[u].push(o):s[u]=[o]);return s}var m=e;function v(r,t,n){var e,s,i,o;for(i in e=t.thisArg,s={},r)m(r,i)&&(o=n.call(e,r[i],i),m(s,o)?s[o].push(i):s[o]=[i]);return s}var h=e;function c(r,t,n){var e,s,i,o,u;for(i in e=t.thisArg,s={},r)h(r,i)&&(o=r[i],u=n.call(e,o,i),h(s,u)?s[u].push([i,o]):s[u]=[[i,o]]);return s}var g=r,j=t,w=l,b=p,y=v,d=c;function A(r,t,n){var e,s,i;if(!g(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(e={returns:"values"},2===arguments.length)i=t;else{if(s=w(e,t))throw s;i=n}if(!j(i))throw new TypeError("invalid argument. Last argument must be a function. Value: `"+i+"`.");return"values"===e.returns?b(r,e,i):"keys"===e.returns?y(r,e,i):d(r,e,i)}var E=A;export default E;
//# sourceMappingURL=group-own.js.map