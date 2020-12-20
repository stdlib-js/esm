// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../assert/is-iterator-like.js";import n from"./../../assert/is-function.js";import t from"./../../assert/has-own-property.js";import o from"./../../symbol/iterator.js";import i from"./../incr/midrange.js";var a=r,u=e,s=n,f=t,m=o,l=i;function p(r){var e,n,t;if(!u(r))throw new TypeError("invalid argument. Must provide an iterator. Value: `"+r+"`.");return t=l(),a(e={},"next",(function(){var e,o;if(n)return{done:!0};e={},"number"==typeof(o=r.next()).value?e.value=t(o.value):f(o,"value")&&(e.value=t(NaN));o.done?(n=!0,e.done=!0):e.done=!1;return e})),a(e,"return",(function(r){if(n=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),m&&s(r[m])&&a(e,m,(function(){return p(r[m]())})),e}var d=p;export default d;
//# sourceMappingURL=cumidrange.js.map