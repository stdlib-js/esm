// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./property-symbols.js";import o from"./property-names.js";import t from"./get-prototype-of.js";import e from"./../assert/has-own-property.js";import p from"./../assert/is-nonenumerable-property.js";var s=r,m=o,n=t,f=e,a=p;function i(r){var o,t,e,p,i,l;if(null==r)return[];e=Object(r),o={},t=[];do{for(p=m(e),l=0;l<p.length;l++)i=p[l],!1===f(o,i)&&a(e,i)&&t.push(i),o[i]=!0;for(p=s(e),l=0;l<p.length;l++)i=p[l],!1===f(o,i)&&a(e,i)&&t.push(i),o[i]=!0;e=n(e)}while(e);return t}var l=i;export default l;
//# sourceMappingURL=nonenumerable-properties-in.js.map