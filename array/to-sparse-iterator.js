// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../utils/define-nonenumerable-read-only-property.js";import e from"./../assert/is-function.js";import n from"./../assert/is-array-like-object.js";import t from"./../symbol/iterator.js";var o=r,i=e,a=n,u=t;function f(r){var e,n,t,l,d;if(!a(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(arguments.length>1){if(!i(l=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+l+"`.");e=arguments[2]}return d=-1,o(n={},"next",l?m:s),o(n,"return",v),u&&o(n,u,c),n;function m(){var n;if(t)return{done:!0};for(n=r.length,d+=1;d<n&&void 0===r[d];)d+=1;return d>=n?(t=!0,{done:!0}):{value:l.call(e,r[d],d,r),done:!1}}function s(){var e;if(t)return{done:!0};for(e=r.length,d+=1;d<e&&void 0===r[d];)d+=1;return d>=e?(t=!0,{done:!0}):{value:r[d],done:!1}}function v(r){return t=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return l?f(r,l,e):f(r)}}var l=f;export default l;
//# sourceMappingURL=to-sparse-iterator.js.map