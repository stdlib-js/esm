// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./keys.js";var t=r,e=/^[0-9]+$/;function n(r){var n,o,a,f,l;for(a=o=(n=t(r)).length,l=0,f=0;f<o;f++)e.test(n[f])?a-=1:(n[l]=n[f],l+=1);return n.length=a,n}var o=n;export default o;
//# sourceMappingURL=nonindex-keys.js.map