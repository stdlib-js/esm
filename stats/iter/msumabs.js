// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../assert/is-iterator-like.js";import t from"./../../assert/is-positive-integer.js";import n from"./../../assert/is-function.js";import o from"./../../assert/has-own-property.js";import i from"./../../symbol/iterator.js";import a from"./../incr/msumabs.js";var u=r,s=e,m=t.isPrimitive,f=n,l=o,p=i,v=a;function d(r,e){var t,n,o;if(!s(r))throw new TypeError("invalid argument. First argument must be an iterator. Value: `"+r+"`.");if(!m(e))throw new TypeError("invalid argument. Second argument must be a positive integer. Value: `"+e+"`.");return o=v(e),u(t={},"next",(function(){var e,t;if(n)return{done:!0};e={},"number"==typeof(t=r.next()).value?e.value=o(t.value):l(t,"value")&&(e.value=o(NaN));t.done?(n=!0,e.done=!0):e.done=!1;return e})),u(t,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),p&&f(r[p])&&u(t,p,(function(){return d(r[p](),e)})),t}var c=d;export default c;
//# sourceMappingURL=msumabs.js.map