// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./property-symbols.js";import o from"./get-prototype-of.js";import t from"./../assert/is-enumerable-property.js";import e from"./../assert/has-own-property.js";var p=r,s=o,m=t,f=e;function a(r){var o,t,e,a,i,n;if(null==r)return[];e=Object(r),o=[],t={};do{for(a=p(e),n=0;n<a.length;n++)i=a[n],!1===f(t,i)&&m(e,i)&&o.push(i),t[i]=!0;e=s(e)}while(e);return o}var i=a;export default i;
//# sourceMappingURL=enumerable-property-symbols-in.js.map