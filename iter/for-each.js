// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/define-nonenumerable-read-only-property.js";import e from"./../assert/is-function.js";import t from"./../assert/is-iterator-like.js";import n from"./../assert/has-own-property.js";import o from"./../symbol/iterator.js";var a=r,u=e,i=t,l=n,m=o;function s(r,e,t){var n,o,f;if(!i(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!u(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");return f=-1,a(n={},"next",(function(){var n,a;if(f+=1,o)return{done:!0};if((a=r.next()).done)return o=!0,n={},l(a,"value")&&(a=a.value,e.call(t,a,f),n.value=a),n.done=!0,n;return a=a.value,e.call(t,a,f),{value:a,done:!1}})),a(n,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),m&&u(r[m])&&a(n,m,(function(){return s(r[m](),e,t)})),n}var f=s;export default f;
//# sourceMappingURL=for-each.js.map