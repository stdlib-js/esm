// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../../../utils/define-nonenumerable-read-only-property.js";import r from"./../../../symbol/iterator.js";import t from"./../../../constants/math/float64-max-safe-integer.js";import n from"./../../../assert/is-plain-object.js";import o from"./../../../assert/has-own-property.js";import i from"./../../../assert/is-nonnegative-integer.js";var a=n,s=o,u=i.isPrimitive;function m(e,r){return a(r)?s(r,"iter")&&(e.iter=r.iter,!u(r.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+r.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}var p=e,l=r,f=t,v=m,d=2*f;function g(e){var r,t,n,o,i,a,s;if(r={iter:d},arguments.length&&(o=v(r,e)))throw o;return i=-1,a=0,s=0,p(t={},"next",u),p(t,"return",m),l&&p(t,l,f),t;function u(){return a+=1,n||a>r.iter?{done:!0}:1===a?{value:0,done:!1}:(i<0&&(s+=1),{value:(i*=-1)*s,done:!1})}function m(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}}function f(){return g(r)}}var c=g;export default c;
//# sourceMappingURL=integers.js.map