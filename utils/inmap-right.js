// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-collection.js";import t from"./../assert/is-function.js";var e=r,n=t;function o(r,t,o){var a,i,l;if(!e(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(!n(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");for(l=(a=r.length)-1;l>=0;l--)i=t.call(o,r[l],l,r),a!==r.length&&(l+=r.length-a,a=r.length),l>=0&&l<a&&(r[l]=i);return r}var a=o;export default a;
//# sourceMappingURL=inmap-right.js.map