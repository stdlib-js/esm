// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../utils/define-property.js";import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../../utils/define-nonenumerable-read-only-accessor.js";import i from"./../../../../assert/is-positive-number.js";import o from"./kurtosis.js";import n from"./mean.js";import s from"./mode.js";import u from"./skewness.js";import p from"./stdev.js";import a from"./variance.js";import f from"./cdf.js";import m from"./logcdf.js";import h from"./logpdf.js";import l from"./pdf.js";import b from"./quantile.js";var c=t,d=r,v=e,y=i.isPrimitive,j=o,g=n,w=s,k=u,E=p,T=a,V=f,q=m,M=h,x=l,F=b;function P(t){return V(t,this.a,this.b)}function S(t){return q(t,this.a,this.b)}function z(t){return M(t,this.a,this.b)}function A(t){return x(t,this.a,this.b)}function B(t){return F(t,this.a,this.b)}function C(){var t,r;if(!(this instanceof C))return 0===arguments.length?new C:new C(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!y(t=arguments[0]))throw new TypeError("invalid argument. First shape parameter `a` must be a positive number. Value: `"+t+"`");if(!y(r))throw new TypeError("invalid argument. Second shape parameter `b` must be a positive number. Value: `"+r+"`")}else t=1,r=1;return c(this,"a",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!y(r))throw new TypeError("invalid value. Must be a positive number. Value: `"+r+"`");t=r}}),c(this,"b",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!y(t))throw new TypeError("invalid value. Must be a positive number. Value: `"+t+"`");r=t}}),this}v(C.prototype,"kurtosis",(function(){return j(this.a,this.b)})),v(C.prototype,"mean",(function(){return g(this.a,this.b)})),v(C.prototype,"mode",(function(){return w(this.a,this.b)})),v(C.prototype,"skewness",(function(){return k(this.a,this.b)})),v(C.prototype,"stdev",(function(){return E(this.a,this.b)})),v(C.prototype,"variance",(function(){return T(this.a,this.b)})),d(C.prototype,"cdf",P),d(C.prototype,"logcdf",S),d(C.prototype,"logpdf",z),d(C.prototype,"pdf",A),d(C.prototype,"quantile",B);var D=C;export default D;
//# sourceMappingURL=ctor.js.map