// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../symbol/iterator.js";import t from"./../../../assert/is-plain-object.js";import n from"./../../../assert/has-own-property.js";import i from"./../../../assert/is-nonnegative-integer.js";var o=t,a=n,u=i.isPrimitive;function s(r,e){return o(e)?a(e,"iter")&&(r.iter=e.iter,!u(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}var m=r,p=e,l=s,f=1552;function v(r){var e,t,n,i,o;if(e={iter:f},arguments.length&&(i=l(e,r)))throw i;return o=-1,m(t={},"next",a),m(t,"return",u),p&&m(t,p,s),t;function a(){var r;return o+=1,n||o>=e.iter?{done:!0}:{value:(r=o*o)*r*o,done:!1}}function u(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function s(){return v(e)}}var d=v;export default d;
//# sourceMappingURL=fifth-powers.js.map