// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../symbol/iterator.js";import t from"./../../base/assert/is-composite.js";import n from"./../../../assert/is-plain-object.js";import i from"./../../../assert/has-own-property.js";import o from"./../../../assert/is-nonnegative-integer.js";var a=n,s=i,u=o.isPrimitive;function m(r,e){return a(e)?s(e,"iter")&&(r.iter=e.iter,!u(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}var p=r,f=e,l=t,v=m,d=1e308;function c(r){var e,t,n,i,o,a;if(e={iter:d},arguments.length&&(i=v(e,r)))throw i;return a=0,o=3,p(t={},"next",s),p(t,"return",u),f&&p(t,f,m),t;function s(){if(a+=1,n||a>e.iter)return{done:!0};for(o+=1;!1===l(o);)o+=1;return{value:o,done:!1}}function u(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function m(){return c(e)}}var g=c;export default g;
//# sourceMappingURL=composites.js.map