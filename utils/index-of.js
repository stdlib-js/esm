// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-nan.js";import e from"./../assert/is-collection.js";import i from"./../assert/is-string.js";import t from"./../assert/is-integer.js";var n=r,s=e,a=i.isPrimitive,o=t.isPrimitive;function f(r,e,i){var t,f;if(!s(r)&&!a(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(t=r.length))return-1;if(3===arguments.length){if(!o(i))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+i+"`.");if(i>=0){if(i>=t)return-1;f=i}else(f=t+i)<0&&(f=0)}else f=0;if(n(e)){for(;f<t;f++)if(n(r[f]))return f}else for(;f<t;f++)if(r[f]===e)return f;return-1}var m=f;export default m;
//# sourceMappingURL=index-of.js.map