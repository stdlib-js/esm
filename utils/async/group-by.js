// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import i from"./../define-nonenumerable-read-only-property.js";import r from"./../../assert/is-function.js";import e from"./../../assert/is-collection.js";import t from"./../../constants/math/float64-pinf.js";import n from"./../../assert/is-plain-object.js";import o from"./../../assert/has-own-property.js";import s from"./../../assert/is-boolean.js";import l from"./../../assert/is-positive-integer.js";import u from"./../index-of.js";import a from"./../../vendor/debug.js";var m=n,f=o,p=s.isPrimitive,c=l.isPrimitive,g=u,d=["values","indices","*"];function h(i,r){return m(r)?(f(r,"thisArg")&&(i.thisArg=r.thisArg),f(r,"series")&&(i.series=r.series,!p(i.series))?new TypeError("invalid option. `series` option must be a boolean primitive. Option: `"+i.series+"`."):f(r,"limit")&&(i.limit=r.limit,!c(i.limit))?new TypeError("invalid option. `limit` option must be a positive integer. Option: `"+i.limit+"`."):f(r,"returns")&&(i.returns=r.returns,-1===g(d,i.returns))?new TypeError('invalid option. `returns` option must be one of the following: "'+d.join('", "')+'". Option: `'+i.returns+"`."):null):new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.")}var v=a,b=o,y=v("group-by-async:limit");function j(i,r,e,t){var n,o,s,l,u,a,m,f;if(u=i.length,y("Collection length: %d",u),m={},0===u)return y("Finished processing a collection."),t(null,m);for(l=u<r.limit?u:r.limit,y("Concurrency limit: %d",l),y("Number of arguments: %d",e.length),n=u-1,o=0,a=-1,f=0;f<l;f++)a<n&&p();function p(){var t,n;function o(i,e){if(!s){if(i)return s=!0,c(i);y("Collection element %d group: %s.",n,e),"indices"===r.returns?b(m,e)?m[e].push(n):m[e]=[n]:"*"===r.returns?b(m,e)?m[e].push([n,t]):m[e]=[[n,t]]:b(m,e)?m[e].push(t):m[e]=[t],c()}}t=i[n=a+=1],y("Collection element %d: %s.",n,JSON.stringify(t)),2===e.length?e.call(r.thisArg,t,o):3===e.length?e.call(r.thisArg,t,n,o):e.call(r.thisArg,t,n,i,o)}function c(i){return i?(y("Encountered an error: %s",i.message),t(i)):(y("Processed %d of %d collection elements.",o+=1,u),a<n?p():o===u?(y("Finished processing a collection."),t(null,m)):void 0)}}var w=r,E=e,T=t,A=h,O=j;function C(i,r){var e,t,n;if(e={},arguments.length>1){if(t=A(e,i))throw t;n=r}else n=i;if(!w(n))throw new TypeError("invalid argument. Last argument must be a function. Value: `"+n+"`.");return e.series?e.limit=1:e.limit||(e.limit=T),o;function o(i,r){if(!E(i))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+i+".`");if(!w(r))throw new TypeError("invalid argument. Last argument must be a function. Value: `"+r+"`.");return O(i,e,n,(function(i,e){if(i)return r(i);r(null,e)}))}}var V=C;function F(i,r,e,t){if(arguments.length<4)return V(r)(i,e);V(r,e)(i,t)}var P=i,x=F,L=C;P(x,"factory",L);export default x;
//# sourceMappingURL=group-by.js.map