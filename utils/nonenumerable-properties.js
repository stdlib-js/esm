// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./property-names.js";import o from"./property-symbols.js";import e from"./../assert/is-nonenumerable-property.js";var t=r,p=o,n=e;function s(r){var o,e,s,m;for(o=t(r),s=0,m=0;m<o.length;m++)n(r,o[m])&&(o[s]=o[m],s+=1);for(o.length=s,e=p(r),m=0;m<e.length;m++)n(r,e[m])&&o.push(e[m]);return o}var m=s;export default m;
//# sourceMappingURL=nonenumerable-properties.js.map