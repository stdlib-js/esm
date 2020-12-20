// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../utils/define-nonenumerable-read-only-property.js";import r from"./../assert/is-function.js";import o from"./../assert/is-iterator-like.js";import t from"./../assert/has-own-property.js";import n from"./../symbol/iterator.js";import a from"./../utils/noop.js";var u=e,i=r,l=o,s=t,m=n,f=a;function p(e,r,o){var t,n,a,v;if(!l(e))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+e+"`.");if(arguments.length>1){if(!i(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");a=r}else a=f;return v=0,u(t={},"next",d),u(t,"return",c),m&&i(e[m])&&u(t,m,j),t;function d(){var r,t;return n?{done:!0}:(t=e.next(),0===v?(v+=1,t.done?(n=!0,s(t,"value")&&a.call(o,t.value),{done:!0}):(a.call(o,t.value),d())):t.done?(n=!0,r={},s(t,"value")&&(r.value=t.value),r.done=!0,r):{value:t.value,done:!1})}function c(e){return n=!0,arguments.length?{value:e,done:!0}:{done:!0}}function j(){return p(e[m](),a,o)}}var v=p;export default v;
//# sourceMappingURL=shift.js.map