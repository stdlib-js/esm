// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../../assert/is-positive-integer.js";import e from"./../../math/base/assert/is-nan.js";import i from"./../../math/base/assert/is-positive-zero.js";import t from"./../../constants/math/float64-ninf.js";var s=r.isPrimitive,a=e,f=i,o=t;function n(r){var e,i,t,n;if(!s(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=new Array(r),i=o,n=-1,t=0,function(s){var o,m;if(0===arguments.length)return 0===t?null:i;if(n=(n+1)%r,t<r)t+=1,(a(s)||s>i||s===i&&f(s))&&(i=s);else if(a(s)||s>i)i=s;else if(e[n]===i&&s<i||a(e[n])){for(i=s,m=0;m<r;m++)if(m!==n){if(o=e[m],a(o)){i=o;break}(o>i||o===i&&f(o))&&(i=o)}}else if(e[n]===i&&s===i&&0===s)if(f(s))i=s;else if(f(e[n]))for(i=s,m=0;m<r;m++)if(m!==n&&f(e[m])){i=e[m];break}return e[n]=s,i}}var m=n;export default m;
//# sourceMappingURL=mmax.js.map