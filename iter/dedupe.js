// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../assert/is-function.js";import t from"./../assert/is-positive-integer.js";import n from"./../assert/is-iterator-like.js";import o from"./../assert/has-own-property.js";import i from"./../symbol/iterator.js";var a=e,u=r,l=t.isPrimitive,s=n,v=o,f=i;function m(e,r){var t,n,o,i,p;if(!s(e))throw new TypeError("invalid argument. First argument must an iterator protocol-compliant object. Value: `"+e+"`.");if(arguments.length>1){if(!l(r))throw new TypeError("invalid argument. Second argument must be a positive integer. Value: `"+r+"`.");p=r}else p=1;return o=NaN,t=0,a(n={},"next",d),a(n,"return",c),f&&u(e[f])&&a(n,f,g),n;function d(){var r,n;if(i)return{done:!0};if((n=e.next()).done)return i=!0,r={},v(n,"value")&&n.value!==o&&(r.value=n.value),r.done=!0,r;if(n.value===o){if((t+=1)>p){for(;n.value===o;)if((n=e.next()).done)return i=!0,r={},v(n,"value")&&n.value!==o&&(r.value=n.value),r.done=!0,r;o=n.value,t=1}}else o=n.value,t=1;return{value:o,done:!1}}function c(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){return m(e[f](),p)}}var p=m;export default p;
//# sourceMappingURL=dedupe.js.map