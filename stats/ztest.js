// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import t from"./../assert/is-positive-number.js";import i from"./../assert/is-number-array.js";import e from"./../assert/is-typed-array-like.js";import r from"./../utils/define-read-only-property.js";import a from"./base/dists/normal/cdf.js";import s from"./base/dists/normal/quantile.js";import n from"./../math/base/special/sqrt.js";import o from"./../math/base/special/abs.js";import m from"./base/mean.js";import l from"./../constants/math/float64-ninf.js";import p from"./../constants/math/float64-pinf.js";import u from"./../assert/is-number.js";import h from"./../assert/is-plain-object.js";import f from"./../assert/is-string.js";import v from"./../assert/is-nan.js";import d from"./../assert/has-own-property.js";import c from"./../assert/is-positive-integer.js";import b from"./../assert/is-boolean.js";import g from"./../math/base/special/roundn.js";var w=u.isPrimitive,j=h,y=f.isPrimitive,E=v,V=d;function T(t,i){return j(i)?V(i,"alpha")&&(t.alpha=i.alpha,!w(t.alpha)||E(t.alpha))?new TypeError("invalid option. `alpha` option must be a number primitive. Option: `"+t.alpha+"`."):V(i,"alternative")&&(t.alternative=i.alternative,!y(t.alternative))?new TypeError("invalid option. `alternative` option must be a string primitive. Option: `"+t.alternative+"`."):V(i,"mu")&&(t.mu=i.mu,!w(t.mu)||E(t.mu))?new TypeError("invalid option. `mu` option must be a number primitive. Option: `"+t.mu+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.")}var O=c,k=h,F=b.isPrimitive,P=d,q=g;function x(t){var i,e,r;if(e=4,i=!0,arguments.length>0){if(!k(t))throw new TypeError("invalid argument. First argument must be an options object. Value: `"+t+"`.");if(P(t,"digits")){if(!O(t.digits))throw new TypeError("invalid option. `digits` option must be a positive integer. Option: `"+t.digits+"`.");e=t.digits}if(P(t,"decision")){if(!F(t.decision))throw new TypeError("invalid option. `decision` option must be a boolean primitive. Option: `"+t.decision+"`.");i=t.decision}}switch(r="",r+=this.method,r+="\n\n",r+="Alternative hypothesis: ",r+="True mean is ",this.alternative){case"two-sided":default:r+="not equal to ";break;case"less":r+="less than ";break;case"greater":r+="greater than "}return r+=this.nullValue,r+="\n\n",r+="    pValue: "+q(this.pValue,-e)+"\n",r+="    statistic: "+q(this.statistic,-e)+"\n",r+="    "+100*(1-this.alpha)+"% confidence interval: ["+q(this.ci[0],-e)+","+q(this.ci[1],-e)+"]",r+="\n\n",i&&(r+="Test Decision: ",this.rejected?r+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":r+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",r+="\n"),r}var R=t.isPrimitive,z=i.primitives,A=e,D=r,I=a.factory,S=s.factory,B=n,C=o,G=m,H=l,J=p,K=T,L=x,M=I(0,1),N=S(0,1);function Q(t,i,e){var r,a,s,n,o,m,l,p,u,h,f;if(!A(t)&&!z(t))throw new TypeError("invalid argument. First argument `x` must be a numeric array. Value: `"+t+"`.");if(!R(i))throw new TypeError("invalid argument. Second argument `sigma` must be a positive number. Value: `"+i+"`.");if(h=t.length,o={},e&&(p=K(o,e)))throw p;if(f=o.mu||0,(a=void 0===o.alpha?.05:o.alpha)<0||a>1)throw new RangeError("invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `"+a+"`.");if(h<2)throw new Error("invalid argument. First argument `x` must contain at least two elements. Value: `"+t+"`");switch(r=B(i*i/h),m=(G(h,t,1)-f)/r,l=o.alternative||"two-sided"){case"two-sided":n=2*M(-C(m)),(s=[m-N(1-a/2),m+N(1-a/2)])[0]=f+s[0]*r,s[1]=f+s[1]*r;break;case"greater":n=1-M(m),(s=[m-N(1-a),J])[0]=f+s[0]*r;break;case"less":n=M(m),(s=[H,m+N(1-a)])[1]=f+s[1]*r;break;default:throw new Error("Invalid option. `alternative` must be either `two-sided`, `less` or `greater`. Value: `"+l+"`")}return D(u={},"rejected",n<=a),D(u,"alpha",a),D(u,"pValue",n),D(u,"statistic",m),D(u,"ci",s),D(u,"alternative",l),D(u,"nullValue",f),D(u,"sd",r),D(u,"method","One-sample z-test"),D(u,"print",L),u}var U=Q;export default U;
//# sourceMappingURL=ztest.js.map