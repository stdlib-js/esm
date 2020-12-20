// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../utils/define-property.js";import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import o from"./../../../../utils/define-nonenumerable-read-only-accessor.js";import e from"./../../../../assert/is-positive-number.js";import n from"./entropy.js";import i from"./kurtosis.js";import s from"./mean.js";import p from"./median.js";import u from"./mode.js";import f from"./skewness.js";import m from"./stdev.js";import a from"./variance.js";import v from"./cdf.js";import c from"./logcdf.js";import l from"./logpdf.js";import d from"./pdf.js";import y from"./quantile.js";var h=t,j=r,b=o,g=e.isPrimitive,w=n,k=i,q=s,E=p,T=u,V=f,x=m,M=a,P=v,R=c,z=l,A=d,B=y;function C(t){return P(t,this.v)}function D(t){return R(t,this.v)}function F(t){return z(t,this.v)}function G(t){return A(t,this.v)}function H(t){return B(t,this.v)}function I(){var t;if(!(this instanceof I))return 0===arguments.length?new I:new I(arguments[0]);if(arguments.length){if(!g(t=arguments[0]))throw new TypeError("invalid argument. Rate parameter `v` must be a positive number. Value: `"+t+"`")}else t=1;return h(this,"v",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!g(r))throw new TypeError("invalid value. Must be a positive number. Value: `"+r+"`");t=r}}),this}b(I.prototype,"entropy",(function(){return w(this.v)})),b(I.prototype,"kurtosis",(function(){return k(this.v)})),b(I.prototype,"mean",(function(){return q(this.v)})),b(I.prototype,"median",(function(){return E(this.v)})),b(I.prototype,"mode",(function(){return T(this.v)})),b(I.prototype,"skewness",(function(){return V(this.v)})),b(I.prototype,"stdev",(function(){return x(this.v)})),b(I.prototype,"variance",(function(){return M(this.v)})),j(I.prototype,"cdf",C),j(I.prototype,"logcdf",D),j(I.prototype,"logpdf",F),j(I.prototype,"pdf",G),j(I.prototype,"quantile",H);var J=I;export default J;
//# sourceMappingURL=ctor.js.map