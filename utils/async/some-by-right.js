// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import i from"./../define-nonenumerable-read-only-property.js";import e from"./../../assert/is-function.js";import t from"./../../assert/is-positive-integer.js";import r from"./../../assert/is-collection.js";import n from"./../../constants/math/float64-pinf.js";import o from"./../../assert/is-plain-object.js";import s from"./../../assert/has-own-property.js";import l from"./../../assert/is-boolean.js";import a from"./../../vendor/debug.js";var m=o,u=s,c=l.isPrimitive,f=t.isPrimitive;function p(i,e){return m(e)?(u(e,"thisArg")&&(i.thisArg=e.thisArg),u(e,"series")&&(i.series=e.series,!c(i.series))?new TypeError("invalid option. `series` option must be a boolean primitive. Option: `"+i.series+"`."):u(e,"limit")&&(i.limit=e.limit,!f(i.limit))?new TypeError("invalid option. `limit` option must be a positive integer. Option: `"+i.limit+"`."):null):new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}var g=a,d=g("some-by-right-async:limit");function h(i,e,t,r,n){var o,s,l,a,m,u,c;if(a=i.length,d("Collection length: %d",a),0===a)return d("Finished processing a collection."),n(null,!1);for(l=a<t.limit?a:t.limit,d("Concurrency limit: %d",l),d("Number of arguments: %d",r.length),o=0,m=a,u=0,c=0;c<l;c++)m>0&&f();function f(){d("Collection element %d: %s.",m-=1,JSON.stringify(i[m])),2===r.length?r.call(t.thisArg,i[m],p):3===r.length?r.call(t.thisArg,i[m],m,p):r.call(t.thisArg,i[m],m,i,p)}function p(i,t){if(!s)return i?(s=!0,d("Encountered an error: %s",i.message),n(i)):(d("Processed %d of %d collection elements.",o+=1,a),d("Test result: %s",!!t),t&&!s&&(u+=1)===e?(s=!0,d("Finished processing a collection."),n(null,!0)):m>0?f():o===a?(d("Finished processing a collection."),n(null,!1)):void 0)}}var v=e,b=t.isPrimitive,y=r,w=n,j=p,E=h;function T(i,e){var t,r,n;if(t={},arguments.length>1){if(r=j(t,i))throw r;n=e}else n=i;if(!v(n))throw new TypeError("invalid argument. Last argument must be a function. Value: `"+n+"`.");return t.series?t.limit=1:t.limit||(t.limit=w),o;function o(i,e,r){if(!y(i))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+i+".`");if(!b(e))throw new TypeError("invalid argument. Second argument must be a positive integer. Value: `"+e+"`.");if(!v(r))throw new TypeError("invalid argument. Last argument must be a function. Value: `"+r+"`.");return E(i,e,t,n,(function(i,e){if(i)return r(i,!1);r(null,e)}))}}var A=T;function V(i,e,t,r,n){if(arguments.length<5)return A(t)(i,e,r);A(t,r)(i,e,n)}var F=i,O=V,P=T;F(O,"factory",P);export default O;
//# sourceMappingURL=some-by-right.js.map