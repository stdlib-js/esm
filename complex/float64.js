// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import e from"./../assert/is-number.js";import r from"./../utils/define-property.js";import t from"./../utils/define-nonenumerable-read-only-property.js";function i(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"}function n(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}var o=e.isPrimitive,a=r,m=t,u=i,p=n;function s(e,r){if(!(this instanceof s))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!o(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!o(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return a(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),a(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}m(s,"BYTES_PER_ELEMENT",8),m(s.prototype,"BYTES_PER_ELEMENT",8),m(s.prototype,"byteLength",16),m(s.prototype,"toString",u),m(s.prototype,"toJSON",p);var l=s;export default l;
//# sourceMappingURL=float64.js.map