// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../constants/math/float64-max-safe-integer.js";import e from"./../assert/is-positive-integer.js";import t from"./../assert/is-enumerable-property.js";import o from"./property-symbols.js";import s from"./get-prototype-of.js";import i from"./../assert/has-own-property.js";var m=r,a=e.isPrimitive,n=t,p=o,f=s,l=i;function u(r,e){var t,o,s,i,u,g,v,h;if(arguments.length>1){if(!a(e))throw new TypeError("invalid argument. Second argument must be a positive integer. Value: `"+e+"`.");u=e}else u=m;if(null==r)return[];for(s=f(r),t={},o=[],g=1;s&&g<=u;){for(i=p(s),h=0;h<i.length;h++)v=i[h],!1===l(t,v)&&n(s,v)&&o.push(v),t[v]=!0;s=f(s),g+=1}return o}var g=u;export default g;
//# sourceMappingURL=inherited-enumerable-property-symbols.js.map