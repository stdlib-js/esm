// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-number.js";import e from"./../utils/define-property.js";import t from"./../utils/define-nonenumerable-read-only-property.js";import i from"./../array/float32.js";function n(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"}function o(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}var m=r.isPrimitive,a=e,u=t,p=i,s=n,f=o;function l(r,e){var t;if(!(this instanceof l))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!m(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!m(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return a(this,"re",{configurable:!1,enumerable:!0,get:function(){return t[0]}}),a(this,"im",{configurable:!1,enumerable:!0,get:function(){return t[1]}}),(t=new p(2))[0]=r,t[1]=e,this}u(l,"BYTES_PER_ELEMENT",4),u(l.prototype,"BYTES_PER_ELEMENT",4),u(l.prototype,"byteLength",8),u(l.prototype,"toString",s),u(l.prototype,"toJSON",f);var h=l;export default h;
//# sourceMappingURL=float32.js.map