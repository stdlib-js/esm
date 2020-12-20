// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../../../../utils/define-property.js";import r from"./../../../../utils/define-nonenumerable-read-only-property.js";import e from"./../../../../utils/define-nonenumerable-read-only-accessor.js";import i from"./../../../../assert/is-positive-number.js";import o from"./../../../../assert/is-number.js";import s from"./../../../../math/base/assert/is-nan.js";import n from"./entropy.js";import a from"./kurtosis.js";import p from"./mean.js";import m from"./median.js";import u from"./mode.js";import h from"./skewness.js";import f from"./stdev.js";import l from"./variance.js";import c from"./cdf.js";import d from"./logcdf.js";import v from"./logpdf.js";import y from"./pdf.js";import b from"./quantile.js";var j=t,w=r,g=e,E=i.isPrimitive,T=o.isPrimitive,V=s,k=n,M=a,q=p,P=m,S=u,x=h,L=f,z=l,A=c,B=d,C=v,D=y,F=b;function G(t){return A(t,this.alpha,this.s,this.m)}function H(t){return B(t,this.alpha,this.s,this.m)}function I(t){return C(t,this.alpha,this.s,this.m)}function J(t){return D(t,this.alpha,this.s,this.m)}function K(t){return F(t,this.alpha,this.s,this.m)}function N(){var t,r,e;if(!(this instanceof N))return 0===arguments.length?new N:new N(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(r=arguments[1],e=arguments[2],!E(t=arguments[0]))throw new TypeError("invalid argument. Shape parameter `alpha` must be a positive number. Value: `"+t+"`");if(!E(r))throw new TypeError("invalid argument. Scale parameter `s` must be a number primitive. Value: `"+r+"`");if(!T(e)||V(e))throw new TypeError("invalid argument. Location parameter `m` must be a number primitive. Value: `"+e+"`")}else t=1,r=1,e=0;return j(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!E(r))throw new TypeError("invalid value. Must be a positive number. Value: `"+r+"`");t=r}}),j(this,"s",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!E(t))throw new TypeError("invalid value. Must be a positive number. Value: `"+t+"`");r=t}}),j(this,"m",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!T(t)||V(t))throw new TypeError("invalid value. Must be a number primitive. Value: `"+t+"`");e=t}}),this}g(N.prototype,"entropy",(function(){return k(this.alpha,this.s,this.m)})),g(N.prototype,"kurtosis",(function(){return M(this.alpha,this.s,this.m)})),g(N.prototype,"mean",(function(){return q(this.alpha,this.s,this.m)})),g(N.prototype,"median",(function(){return P(this.alpha,this.s,this.m)})),g(N.prototype,"mode",(function(){return S(this.alpha,this.s,this.m)})),g(N.prototype,"skewness",(function(){return x(this.alpha,this.s,this.m)})),g(N.prototype,"stdev",(function(){return L(this.alpha,this.s,this.m)})),g(N.prototype,"variance",(function(){return z(this.alpha,this.s,this.m)})),w(N.prototype,"cdf",G),w(N.prototype,"logcdf",H),w(N.prototype,"logpdf",I),w(N.prototype,"pdf",J),w(N.prototype,"quantile",K);var O=N;export default O;
//# sourceMappingURL=ctor.js.map