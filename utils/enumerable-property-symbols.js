// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./property-symbols.js";import e from"./../assert/is-enumerable-property.js";var t=r,o=e;function n(r){var e,n,l;if(null==r)return[];for(e=t(Object(r)),l=0,n=0;n<e.length;n++)o(r,e[n])&&(e[l]=e[n],l+=1);return e.length=l,e}var l=n;export default l;
//# sourceMappingURL=enumerable-property-symbols.js.map