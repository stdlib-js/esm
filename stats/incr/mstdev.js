// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-positive-integer.js";import e from"./../../assert/is-number.js";import i from"./../../math/base/assert/is-nan.js";import t from"./../../math/base/special/sqrt.js";var n=r.isPrimitive,a=e.isPrimitive,s=i,f=t;function u(r,e){var i,t,u,o,l,m,v,p;if(!n(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");if(t=new Array(r),v=r-1,o=0,p=-1,m=0,arguments.length>1){if(!a(e))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+e+"`.");return l=e,g}return l=0,N;function N(e){var n,a;if(0===arguments.length)return 0===m?null:1===m?s(o)?NaN:0:f(m<r?o/(m-1):o/v);if(p=(p+1)%r,s(e))m=r,o=NaN;else{if(m<r)return t[p]=e,o+=(i=e-l)*(e-(l+=i/(m+=1))),1===m?0:f(o/(m-1));if(1===m)return o=0;if(s(t[p])){for(m=1,l=e,o=0,n=0;n<r;n++)if(n!==p){if(a=t[n],s(a)){m=r,o=NaN;break}o+=(i=a-l)*(a-(l+=i/(m+=1)))}}else!1===s(o)&&(u=t[p],o+=(i=e-u)*(u-l+(e-(l+=i/r))))}return t[p]=e,f(o/v)}function g(e){var n;if(0===arguments.length)return 0===m?null:f(m<r?o/m:o/r);if(p=(p+1)%r,s(e))m=r,o=NaN;else{if(m<r)return t[p]=e,f((o+=(i=e-l)*i)/(m+=1));if(s(t[p])){for(o=0,n=0;n<r;n++)if(n!==p){if(s(t[n])){m=r,o=NaN;break}i=t[n]-l,o+=i*i}}else!1===s(o)&&(u=t[p],o+=(e-u)*(e-l+u-l))}return t[p]=e,f(o/r)}}var o=u;export default o;
//# sourceMappingURL=mstdev.js.map