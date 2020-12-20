// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../constants/math/float64-max-safe-integer.js";import e from"./../assert/is-positive-integer.js";import t from"./../assert/is-nonenumerable-property.js";import o from"./property-names.js";import i from"./get-prototype-of.js";import s from"./../assert/has-own-property.js";var n=r,a=e.isPrimitive,m=t,p=o,f=i,u=s;function l(r,e){var t,o,i,s,l,g,v,h;if(arguments.length>1){if(!a(e))throw new TypeError("invalid argument. Second argument must be a positive integer. Value: `"+e+"`.");l=e}else l=n;if(null==r)return[];for(i=f(r),t=[],o={},g=1;i&&g<=l;){for(s=p(i),h=0;h<s.length;h++)v=s[h],!1===u(o,v)&&m(i,v)&&t.push(v),o[v]=!0;i=f(i),g+=1}return t}var g=l;export default g;
//# sourceMappingURL=inherited-nonenumerable-property-names.js.map