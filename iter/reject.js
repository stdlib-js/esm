// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/define-nonenumerable-read-only-property.js";import e from"./../assert/is-function.js";import t from"./../assert/is-iterator-like.js";import n from"./../assert/has-own-property.js";import o from"./../symbol/iterator.js";var a=r,u=e,i=t,l=n,f=o;function m(r,e,t){var n,o,s;if(!i(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!u(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");return s=-1,a(n={},"next",(function(){var n,a;if(o)return{done:!0};for(;;){if(a=r.next(),s+=1,a.done)return o=!0,n={},l(a,"value")&&!e.call(t,a.value,s)&&(n.value=a.value),n.done=!0,n;if(!e.call(t,a.value,s))return{value:a.value,done:!1}}})),a(n,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),f&&u(r[f])&&a(n,f,(function(){return m(r[f](),e,t)})),n}var s=m;export default s;
//# sourceMappingURL=reject.js.map