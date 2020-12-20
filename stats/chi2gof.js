// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import i from"./../assert/is-nonnegative-integer.js";import t from"./../assert/is-array-like-object.js";import e from"./../assert/is-ndarray-like.js";import r from"./../assert/is-number.js";import o from"./../assert/is-string.js";import n from"./../math/base/utils/absolute-difference.js";import a from"./../constants/math/float64-sqrt-eps.js";import s from"./../constants/math/float64-pinf.js";import m from"./base/dists/chisquare/cdf.js";import p from"./../assert/is-nan.js";import l from"./../blas/base/daxpy.js";import u from"./../blas/base/dscal.js";import f from"./../blas/ext/base/dsumpw.js";import d from"./../array/float64.js";import h from"./../assert/is-positive-integer.js";import c from"./../assert/is-boolean.js";import b from"./../assert/is-plain-object.js";import v from"./../assert/has-own-property.js";import g from"./base/dists/bernoulli/pmf.js";import j from"./base/dists/binomial/pmf.js";import y from"./base/dists/discrete-uniform/pmf.js";import w from"./base/dists/geometric/pmf.js";import E from"./base/dists/hypergeometric/pmf.js";import V from"./base/dists/negative-binomial/pmf.js";import _ from"./base/dists/poisson/pmf.js";import T from"./../math/utils/incrspace.js";import P from"./../random/sample.js";import x from"./../blas/ext/base/dfill.js";import O from"./../math/base/special/roundn.js";import F from"./../utils/define-nonenumerable-read-only-property.js";import k from"./../utils/define-nonenumerable-read-only-accessor.js";var q=.05,S=0,z=!1,I=500,M={alpha:q,ddof:S,simulate:z,iterations:I},N=M;function R(){return{alpha:N.alpha,ddof:N.ddof,simulate:N.simulate,iterations:N.iterations}}var A=i.isPrimitive,C=h.isPrimitive,D=c.isPrimitive,J=r.isPrimitive,U=b,B=p,G=v;function H(i,t){if(!U(t))return new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(G(t,"alpha")){if(i.alpha=t.alpha,!J(i.alpha)||B(i.alpha))return new TypeError("invalid option. `alpha` option must be a number primitive. Option: `"+i.alpha+"`.");if(i.alpha<0||i.alpha>1)return new RangeError("invalid option. `alpha` option must be a number on the interval `[0,1]`. Value: `"+i.alpha+"`.")}return G(t,"ddof")&&(i.ddof=t.ddof,!A(i.ddof))?new TypeError("invalid option. `ddof` option must be a nonnegative integer. Option: `"+i.ddof+"`."):G(t,"iterations")&&(i.iterations=t.iterations,!C(i.iterations))?new TypeError("invalid option. `iterations` option must be a positive integer. Option: `"+i.iterations+"`."):G(t,"simulate")&&(i.simulate=t.simulate,!D(i.simulate))?new TypeError("invalid option. `simulate` option must be a boolean primitive. Option: `"+i.simulate+"`."):null}var K=g,L=j,Q=y,W=w,X=E,Y=V,Z=_,$={bernoulli:K,binomial:L,"discrete-uniform":Q,geometric:W,hypergeometric:X,"negative-binomial":Y,poisson:Z},ii=v,ti=$;function ei(i){return ii(ti,i)?ti[i]:new Error("invalid argument. Unsupported/unrecognized distribution name. Value: `"+i+"`.")}var ri=s;function oi(i,t,e,r,o){var n,a,s,m,p;for(n=0,p=0;p<i;p++){if(a=t[p*e],0===(s=r[p*o])){if(0===a)continue;return ri}n+=(m=a-s)*m/s}return n}function ni(i,t,e,r,o){var n;for(n=0;n<i;n++)r[t[n*e]*o]+=1;return r}var ai=T,si=P,mi=d,pi=x,li=ni,ui=oi;function fi(i,t,e,r,o,n){var a,s,m,p,l,u;for(a=ai(0,i,1),s={size:o,probs:e},m=new mi(i),p=1,u=0;u<n;u++)l=si(a,s),m=li(i,l,1,m,1),ui(i,m,1,t,1)>=r&&(p+=1),u<n-1&&pi(i,0,m,1);return p/(n+1)}var di=h,hi=b,ci=c.isPrimitive,bi=v,vi=O,gi=F,ji=k;function yi(i,t,e,r){return this instanceof yi?(this._pValue=i,this._alpha=t,this._statistic=e,this._df=r,this):new yi(i,t,e,r)}ji(yi.prototype,"alpha",(function(){return this._alpha})),ji(yi.prototype,"df",(function(){return this._df})),gi(yi.prototype,"method","Chi-square goodness-of-fit test"),ji(yi.prototype,"pValue",(function(){return this._pValue})),ji(yi.prototype,"rejected",(function(){return this._pValue<=this._alpha})),ji(yi.prototype,"statistic",(function(){return this._statistic})),gi(yi.prototype,"toString",(function(i){var t,e,r;if(e=4,t=!0,arguments.length>0){if(!hi(i))throw new TypeError("invalid argument. Must provide an object. Value: `"+i+"`.");if(bi(i,"digits")){if(!di(i.digits))throw new TypeError("invalid option. `digits` option must be a positive integer. Option: `"+i.digits+"`.");e=i.digits}if(bi(i,"decision")){if(!ci(i.decision))throw new TypeError("invalid option. `decision` option must be a boolean primitive. Option: `"+i.decision+"`.");t=i.decision}}return r=[this.method,"","","Null hypothesis: population probabilities are equal to those in p","","","    pValue: "+vi(this._pValue,-e),"    statistic: "+vi(this._statistic,-e),"    degrees of freedom: "+this._df,""],t&&(r.push("Test Decision: "+(this.rejected?"Reject":"Fail to reject")+" null in favor of alternative at "+100*this._alpha+"% significance level"),r.push("")),r.join("\n")})),gi(yi.prototype,"toJSON",(function(){return{rejected:this.rejected,alpha:this._alpha,pValue:this._pValue,df:this._df,statistic:this._statistic,method:this.method}}));var wi=i.isPrimitive,Ei=t,Vi=e,_i=r.isPrimitive,Ti=o.isPrimitive,Pi=n,xi=a,Oi=s,Fi=m,ki=p,qi=l,Si=u,zi=f,Ii=d,Mi=R,Ni=H,Ri=ei,Ai=oi,Ci=fi,Di=yi;function Ji(i,t){var e,r,o,n,a,s,m,p,l,u,f,d,h,c,b,v,g,j,y;if(Vi(i)&&1===i.ndims&&1===i.strides.length)h=i.data,c=i.strides[0],b=i.offset;else{if(!Ei(i))throw new TypeError("invalid argument. First argument must be either an array-like object or a 1-dimensional ndarray. Value: `"+i+"`.");h=i,c=1,b=0}for(d=i.length,m=new Ii(d+1),v=0,y=0;y<d;y++){if(j=h[b+c*y],!wi(j))throw new TypeError("invalid argument. First argument must contain nonnegative integers. Index: `"+y+"`. Value: `"+j+"`.");m[y]=j,v+=j}if(0===v)throw new Error("invalid argument. First argument must contain at least one element greater than zero (i.e., the total number number of observations must be greater than zero).");if(r=0,Ti(t)){if((l=Ri(t))instanceof Error)throw l;for(r+=l.length-1,o=[0],y=0;y<r;y++){if(!_i(j=arguments[y+2])||ki(j))throw new TypeError("invalid argument. Probability mass function (PMF) arguments must be number primitives. Argument: `"+(y+2)+"`. Value: `"+j+"`.");o.push(j)}for(e=new Ii(d+1),u=0,y=0;y<d;y++)o[0]=y,"discrete-uniform"===t&&(o[0]+=o[1]),u+=j=l.apply(null,o),e[y]=j*v;u<1&&(e[d]=(1-u)*v,d+=1)}else{if(Vi(t)&&1===t.ndims&&1===t.strides.length)h=t.data,c=t.strides[0],b=t.offset;else{if(!Ei(t))throw new TypeError("invalid argument. Second argument must be either an array-like object (or 1-dimensional ndarray) of probabilities summing to one, an array-like object (or 1-dimensional ndarray) of expected frequencies, or a discrete probability distribution name. Value: `"+t+"`.");h=t,c=1,b=0}if(t.length!==d)throw new Error("invalid arguments. First and second arguments must have the same length.");for(e=new Ii(d),u=0,y=0;y<d;y++){if(j=h[b+c*y],!_i(j))throw new TypeError("invalid argument. Second argument must only contain numbers. Index: `"+y+"`. Value: `"+j+"`.");if(j<0)throw new TypeError("invalid argument. Second argument must only contain nonnegative numbers. Index: `"+y+"`. Value: `"+j+"`.");u+=j>1?Oi:j,e[y]=j}Pi(u,1)<=xi&&(g=t,e=Si(d,v,e,1))}if(n=Mi(),arguments.length>2+r&&(p=Ni(n,arguments[2+r])))throw p;return s=Ai(d,m,1,e,1),n.simulate?(void 0===g&&(j=zi(d,e,1),g=qi(d,1/j,e,1,new Ii(d),1)),a=Ci(d,e,g,s,v,n.iterations)):(f=d-1-n.ddof,a=1-Fi(s,f)),new Di(a,n.alpha,s,void 0===f?null:f)}var Ui=Ji;export default Ui;
//# sourceMappingURL=chi2gof.js.map