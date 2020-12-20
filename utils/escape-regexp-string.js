// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-string.js";var e=r.isPrimitive,i=/[-\/\\^$*+?.()|[\]{}]/g;function t(r){var t,s;if(!e(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(s=r.length-1;s>=0&&"/"!==r[s];s--);return void 0===s||s<=0?r.replace(i,"\\$&"):(t=(t=r.substring(1,s)).replace(i,"\\$&"),r=r[0]+t+r.substring(s))}var s=t;export default s;
//# sourceMappingURL=escape-regexp-string.js.map