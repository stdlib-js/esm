// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../utils/define-nonenumerable-read-only-property.js";import e from"./../../assert/is-iterator-like.js";import t from"./../../assert/is-function.js";import n from"./../../assert/has-own-property.js";import o from"./../../symbol/iterator.js";import a from"./../incr/sumabs2.js";var i=r,u=e,s=t,f=n,m=o,l=a;function p(r){var e,t,n;if(!u(r))throw new TypeError("invalid argument. Must provide an iterator. Value: `"+r+"`.");return n=l(),i(e={},"next",(function(){var e,o;if(t)return{done:!0};e={},"number"==typeof(o=r.next()).value?e.value=n(o.value):f(o,"value")&&(e.value=n(NaN));o.done?(t=!0,e.done=!0):e.done=!1;return e})),i(e,"return",(function(r){if(t=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),m&&s(r[m])&&i(e,m,(function(){return p(r[m]())})),e}var v=p;export default v;
//# sourceMappingURL=cusumabs2.js.map