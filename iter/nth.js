// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-iterator-like.js";import e from"./../assert/is-positive-integer.js";import t from"./../assert/has-own-property.js";var i=r,a=e.isPrimitive,o=t;function n(r,e){var t,n;if(!i(r))throw new TypeError("invalid argument. First argument must be an iterator. Value: `"+r+"`.");if(!a(e))throw new TypeError("invalid argument. Second argument must be a positive integer. Value: `"+e+"`.");for(t=0;;){if(t+=1,(n=r.next()).done)return t===e&&o(n,"value")?n.value:void 0;if(t===e)return n.value}}var s=n;export default s;
//# sourceMappingURL=nth.js.map