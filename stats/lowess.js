// This file is a part of stdlib. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
import r from"./../assert/is-number-array.js";import e from"./../assert/is-typed-array-like.js";import t from"./base/range.js";import o from"./../math/base/special/floor.js";import i from"./../math/base/special/abs.js";import n from"./../math/base/special/max.js";import s from"./../math/base/special/min.js";import a from"./../math/base/special/pow.js";import m from"./../math/base/special/sqrt.js";import f from"./../assert/has-own-property.js";import p from"./../assert/is-plain-object.js";import u from"./../assert/is-positive-number.js";import l from"./../assert/is-nonnegative-integer.js";import d from"./../assert/is-nonnegative-number.js";import v from"./../assert/is-boolean.js";var b=m,y=i,w=n,g=a;function h(r,e,t,o,i,n,s,a,m){var f,p,u,l,d,v,h,c,j,E,A,T;for(d=r[o],f=r[t-1]-r[0],l=.999*(h=w(d-r[i],r[n]-d)),u=.001*h,c=0,T=i;T<t;T++)if(s[T]=0,(A=y(r[T]-d))<=l)s[T]=A>u?g(1-g(A/h,3),3):1,a&&(s[T]*=m[T]),c+=s[T];else if(r[T]>d)break;if(p=T-1,c<=0)return e[o];for(T=i;T<=p;T++)s[T]/=c;if(h>0){for(c=0,T=i;T<=p;T++)c+=s[T]*r[T];for(j=d-c,E=0,T=i;T<=p;T++)E+=s[T]*g(r[T]-c,2);if(b(E)>.001*f)for(j/=E,T=i;T<=p;T++)s[T]*=1+j*(r[T]-c)}for(v=0,T=i;T<=p;T++)v+=s[T]*e[T];return v}var c=o,j=i,E=n,A=s,T=a,x=h;function O(r,e){return r-e}function k(r,e,t,o,i,n){var s,a,m,f,p,u,l,d,v,b,y,w,g,h,k,P,V,q,F;if(t<2)return e;for(P=new Array(t),v=new Array(t),k=new Array(t),w=E(A(c(o*t),t),2),u=1;u<=i+1;u++){m=0,s=w-1,l=-1,V=0;do{for(;s<t-1&&!(r[V]-r[m]<=r[s+1]-r[V]);)m+=1,s+=1;if(P[V]=x(r,e,t,V,m,s,v,u>1,k),l<V-1)for(a=r[V]-r[l],q=l+1;q<V;q++)f=(r[q]-r[l])/a,P[q]=f*P[V]+(1-f)*P[l];for(d=r[l=V]+n,V=l+1;V<t&&!(r[V]>d);V++)r[V]===r[l]&&(P[V]=P[l],l=V);V=E(l+1,V-1)}while(l<t-1);for(V=0;V<t;V++)v[V]=e[V]-P[V];if(u>i)break;for(V=0;V<t;V++)k[V]=j(v[V]);for(k.sort(O),y=t-(b=c(t/2))-1,h=.999*(p=3*(k[b]+k[y])),g=.001*p,V=0;V<t;V++)F=j(v[V]),k[V]=F<=g?1:F>h?0:T(1-T(F/p,2),2)}return{x:r,y:P}}var P=f,V=p,q=u,F=l.isPrimitive,S=d.isPrimitive,z=v.isPrimitive;function B(r,e){return V(e)?P(e,"f")&&(r.f=e.f,!q(r.f))?new TypeError("invalid option. `f` option must be a positive number. Option: `"+r.f+"`."):P(e,"nsteps")&&(r.nsteps=e.nsteps,!F(r.nsteps))?new TypeError("invalid option. `nsteps` option must be a nonnegative integer. Option: `"+r.nsteps+"`."):P(e,"delta")&&(r.delta=e.delta,!S(r.delta))?new TypeError("invalid option. `delta` option must be a nonnegative number. Option: `"+r.delta+"`."):P(e,"sorted")&&(r.sorted=e.sorted,!z(r.sorted))?new TypeError("invalid option. `sorted` option must be a boolean primitive. Option: `"+r.sorted+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}var C=r.primitives,D=e,G=t,H=k,I=B;function J(r,e){return r[0]-e[0]}function K(r,e,t){var o,i,n,s,a,m,f,p;if(!D(r)&&!C(r))throw new TypeError("invalid argument. First argument `x` must be a numeric array. Value: `"+r+"`.");if(!D(e)&&!C(e))throw new TypeError("invalid argument. Second argument `y` must be a numeric array. Value: `"+e+"`.");if(p=r.length,e.length!==p)throw new Error("invalid arguments. Arguments `x` and `y` must have the same length.");if(n={},arguments.length>2&&(s=I(n,t)))throw s;if(!0!==n.sorted){for(a=new Array(p),f=0;f<p;f++)a[f]=[r[f],e[f]];for(a.sort(J),r=new Array(p),e=new Array(p),f=0;f<p;f++)r[f]=a[f][0],e[f]=a[f][1]}return o=void 0===n.nsteps?3:n.nsteps,m=void 0===n.f?2/3:n.f,i=void 0===n.delta?.01*G(p,r,1):n.delta,H(r,e,p,m,o,i)}var L=K;export default L;
//# sourceMappingURL=lowess.js.map