// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../assert/is-number.js";import t from"./../math/base/assert/is-nan.js";import i from"./../assert/is-nonnegative-integer.js";import n from"./../assert/is-positive-number.js";import o from"./../assert/is-plain-object.js";import a from"./../assert/has-own-property.js";import s from"./../symbol/iterator.js";import m from"./../math/base/special/pow.js";var u=e,p=r.isPrimitive,b=t,l=i.isPrimitive,f=n.isPrimitive,v=o,d=a,g=s,h=m,w=10,j=100;function y(e,r,t,i){var n,o,a,s,m,c,T;if(!p(e)||b(e))throw new TypeError("invalid argument. First argument must be a number. Value: `"+e+"`.");if(!p(r)||b(r))throw new TypeError("invalid argument. Second argument must be a number. Value: `"+r+"`.");if(3===arguments.length)if(l(t))m=t,s=w;else{if(!v(t))throw new TypeError("invalid argument. Third argument must be either a nonnegative integer or an object. Value: `"+t+"`.");if(m=j,d(t,"base")){if(!f(t.base))throw new TypeError("invalid option. `base` option must be a positive number. Option: `"+t.base+"`.");s=t.base}else s=w}else if(arguments.length>=4){if(!l(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(m=t,!v(i))throw new TypeError("invalid argument. Fourth argument must be an object. Value: `"+i+"`.");if(d(i,"base")){if(!f(i.base))throw new TypeError("invalid option. `base` option must be a positive number. Option: `"+i.base+"`.");s=i.base}else s=w}else m=j,s=w;return n=(r-e)/(c=m-1),T=-1,u(o={},"next",E),u(o,"return",V),g&&u(o,g,P),o;function E(){return T+=1,a||T>=m?{done:!0}:0===T?{value:h(s,e),done:!1}:T===c?{value:h(s,r),done:!1}:{value:h(s,T*n+e),done:!1}}function V(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function P(){return y(e,r,m,{base:s})}}var c=y;export default c;
//# sourceMappingURL=logspace.js.map