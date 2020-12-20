// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import i from"./../define-nonenumerable-read-only-property.js";import e from"./../../assert/is-function.js";import t from"./../../assert/is-collection.js";import r from"./../../constants/math/float64-pinf.js";import n from"./../../assert/is-plain-object.js";import o from"./../../assert/has-own-property.js";import s from"./../../assert/is-boolean.js";import l from"./../../assert/is-positive-integer.js";import a from"./../../vendor/debug.js";var m=n,u=o,c=s.isPrimitive,f=l.isPrimitive;function p(i,e){return m(e)?(u(e,"thisArg")&&(i.thisArg=e.thisArg),u(e,"series")&&(i.series=e.series,!c(i.series))?new TypeError("invalid option. `series` option must be a boolean primitive. Option: `"+i.series+"`."):u(e,"limit")&&(i.limit=e.limit,!f(i.limit))?new TypeError("invalid option. `limit` option must be a positive integer. Option: `"+i.limit+"`."):null):new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}var g=a,d=g("every-by-right-async:limit");function h(i,e,t,r){var n,o,s,l,a,m;if(l=i.length,d("Collection length: %d",l),0===l)return d("Finished processing a collection."),r(null,!0);for(s=l<e.limit?l:e.limit,d("Concurrency limit: %d",s),d("Number of arguments: %d",t.length),n=0,a=l,m=0;m<s;m++)a>0&&u();function u(){d("Collection element %d: %s.",a-=1,JSON.stringify(i[a])),2===t.length?t.call(e.thisArg,i[a],c):3===t.length?t.call(e.thisArg,i[a],a,c):t.call(e.thisArg,i[a],a,i,c)}function c(i,e){if(!o)return i?(o=!0,d("Encountered an error: %s",i.message),r(i)):(d("Processed %d of %d collection elements.",n+=1,l),d("Test result: %s",!!e),e||o?a>0?u():n===l?(d("Finished processing a collection."),r(null,!0)):void 0:(o=!0,d("Finished processing a collection."),r(null,!1)))}}var v=e,y=t,b=r,j=p,w=h;function E(i,e){var t,r,n;if(t={},arguments.length>1){if(r=j(t,i))throw r;n=e}else n=i;if(!v(n))throw new TypeError("invalid argument. Last argument must be a function. Value: `"+n+"`.");return t.series?t.limit=1:t.limit||(t.limit=b),o;function o(i,e){if(!y(i))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+i+".`");if(!v(e))throw new TypeError("invalid argument. Last argument must be a function. Value: `"+e+"`.");return w(i,t,n,(function(i,t){if(i)return e(i,!1);e(null,t)}))}}var T=E;function A(i,e,t,r){if(arguments.length<4)return T(e)(i,t);T(e,t)(i,r)}var F=i,O=A,V=E;F(O,"factory",V);export default O;
//# sourceMappingURL=every-by-right.js.map