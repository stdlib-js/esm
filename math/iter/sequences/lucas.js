// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../symbol/iterator.js";import t from"./../../../assert/is-plain-object.js";import n from"./../../../assert/has-own-property.js";import i from"./../../../assert/is-nonnegative-integer.js";var o=t,a=n,u=i.isPrimitive;function s(r,e){if(!o(e))return new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(a(e,"iter")){if(r.iter=e.iter,!u(e.iter))return new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`.");if(e.iter>77)return new RangeError("invalid option. `iter` option must be less than or equal to `77`. Option: `"+e.iter+"`.")}return null}var p=r,l=e,m=s,f=2,v=1;function d(r){var e,t,n,i,o,a,u,s;if(e={iter:77},arguments.length&&(i=m(e,r)))throw i;return o=f,a=v,u=0,s=0,p(t={},"next",g),p(t,"return",b),l&&p(t,l,c),t;function g(){return s+=1,n||s>e.iter?{done:!0}:(1===s?u=f:2===s?u=v:(u=o+a,o=a,a=u),{value:u,done:!1})}function b(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return d(e)}}var g=d;export default g;
//# sourceMappingURL=lucas.js.map